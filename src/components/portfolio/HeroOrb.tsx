// @ts-nocheck -- index-heavy canvas math; arrays are fixed-size and generated locally.
import { useEffect, useRef } from "react";

// Lightweight canvas wireframe (icosphere + orbiting particles) with mouse parallax.
export function HeroOrb() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const styles = getComputedStyle(document.documentElement);
    const primary = styles.getPropertyValue("--primary").trim() || "cyan";
    const glow = styles.getPropertyValue("--primary-glow").trim() || "blue";

    // Icosahedron subdivided once
    const t = (1 + Math.sqrt(5)) / 2;
    let verts: number[][] = [
      [-1, t, 0], [1, t, 0], [-1, -t, 0], [1, -t, 0], [0, -1, t], [0, 1, t],
      [0, -1, -t], [0, 1, -t], [t, 0, -1], [t, 0, 1], [-t, 0, -1], [-t, 0, 1],
    ].map(norm);
    let faces = [
      [0, 11, 5], [0, 5, 1], [0, 1, 7], [0, 7, 10], [0, 10, 11], [1, 5, 9], [5, 11, 4], [11, 10, 2], [10, 7, 6], [7, 1, 8],
      [3, 9, 4], [3, 4, 2], [3, 2, 6], [3, 6, 8], [3, 8, 9], [4, 9, 5], [2, 4, 11], [6, 2, 10], [8, 6, 7], [9, 8, 1],
    ];
    const cache = new Map<string, number>();
    const mid = (a: number, b: number) => {
      const k = a < b ? `${a}-${b}` : `${b}-${a}`;
      if (cache.has(k)) return cache.get(k)!;
      const v = norm(verts[a].map((c, i) => (c + verts[b][i]) / 2));
      verts.push(v);
      cache.set(k, verts.length - 1);
      return verts.length - 1;
    };
    faces = faces.flatMap(([a, b, c]) => {
      const ab = mid(a, b), bc = mid(b, c), ca = mid(c, a);
      return [[a, ab, ca], [b, bc, ab], [c, ca, bc], [ab, bc, ca]];
    });
    const edges = new Set<string>();
    faces.forEach(([a, b, c]) => [[a, b], [b, c], [c, a]].forEach(([p, q]) => edges.add(p < q ? `${p}-${q}` : `${q}-${p}`)));
    const edgeList = [...edges].map((e) => e.split("-").map(Number));
    const particles = Array.from({ length: 70 }, () => ({ r: 1.35 + Math.random() * 0.7, a: Math.random() * 6.28, y: (Math.random() - 0.5) * 1.6, s: 0.2 + Math.random() * 0.5 }));

    let mx = 0, my = 0, tx = 0, ty = 0, raf = 0, w = 0, h = 0;
    const resize = () => {
      const dpr = Math.min(2, devicePixelRatio);
      w = canvas.clientWidth; h = canvas.clientHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    const onMove = (e: MouseEvent) => {
      tx = (e.clientX / innerWidth - 0.5) * 2;
      ty = (e.clientY / innerHeight - 0.5) * 2;
    };
    resize();
    addEventListener("resize", resize);
    addEventListener("mousemove", onMove);

    const draw = (time: number) => {
      mx += (tx - mx) * 0.05; my += (ty - my) * 0.05;
      const rotY = (reduce ? 0 : time * 0.00015) + mx * 0.6;
      const rotX = 0.35 + my * 0.4;
      const R = Math.min(w, h) * 0.32;
      const cx = w / 2 + mx * 18, cy = h / 2 + my * 18;
      const project = (v: number[]): [number, number, number] => {
        let x = v[0]!, y = v[1]!, z = v[2]!;
        const cyw = Math.cos(rotY), syw = Math.sin(rotY);
        [x, z] = [x * cyw - z * syw, x * syw + z * cyw];
        const cxw = Math.cos(rotX), sxw = Math.sin(rotX);
        [y, z] = [y * cxw - z * sxw, y * sxw + z * cxw];
        const p = 3 / (3 + z);
        return [cx + x * R * p, cy + y * R * p, z];
      };
      ctx.clearRect(0, 0, w, h);
      const pts = verts.map(project);
      ctx.lineWidth = 0.8;
      for (const [a, b] of edgeList) {
        const z = (pts[a][2] + pts[b][2]) / 2;
        ctx.strokeStyle = z < 0 ? primary : glow;
        ctx.globalAlpha = z < 0 ? 0.55 : 0.12;
        ctx.beginPath(); ctx.moveTo(pts[a][0], pts[a][1]); ctx.lineTo(pts[b][0], pts[b][1]); ctx.stroke();
      }
      ctx.fillStyle = primary;
      for (const p of pts) { if (p[2] < 0) { ctx.globalAlpha = 0.9; ctx.fillRect(p[0] - 1, p[1] - 1, 2, 2); } }
      for (const p of particles) {
        const a = p.a + (reduce ? 0 : time * 0.0002 * p.s);
        const q = project([Math.cos(a) * p.r, p.y, Math.sin(a) * p.r]);
        ctx.globalAlpha = q[2] < 0 ? 0.8 : 0.25;
        ctx.fillStyle = q[2] < 0 ? primary : glow;
        ctx.beginPath(); ctx.arc(q[0], q[1], 1.2, 0, 6.28); ctx.fill();
      }
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(raf);
      removeEventListener("resize", resize);
      removeEventListener("mousemove", onMove);
    };
  }, []);

  return <canvas ref={ref} aria-hidden className="h-full w-full" />;
}

function norm(v: number[]) {
  const l = Math.hypot(...v);
  return v.map((c) => c / l);
}
