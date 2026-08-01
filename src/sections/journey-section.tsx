import { journeySteps } from "../data/portfolio"

function Journey() {

    return (
        <section id="journey" className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 lg:px-24 max-w-7xl mx-auto scroll-mt-20">
            <div className="text-center mb-16">
                <h2 className="text-sm font-semibold tracking-wider text-violet-400 uppercase mb-3">Story</h2>
                <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white">How it started vs How it's going</h3>
                <div className="h-1 w-12 bg-violet-400 mx-auto mt-4 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                {journeySteps.map((step, idx) => (
                    <div 
                        key={idx} 
                        className="relative bg-zinc-900/40 border border-white/5 p-5 sm:p-6 rounded-2xl flex flex-col items-start transition-all duration-300 hover:border-violet-500/20 group hover:-translate-y-1.5"
                    >
                        {idx < 3 && (
                            <div className="hidden lg:block absolute top-[44px] left-[76px] w-[calc(100%-48px)] h-0.5 bg-gradient-to-r from-white/10 to-transparent z-[-1]"></div>
                        )}

                        <div className="flex items-center justify-between w-full mb-4 sm:mb-6">
                            <div className="p-2.5 sm:p-3 bg-white/5 rounded-xl text-white group-hover:bg-white/10 transition-colors">
                                {step.icon}
                            </div>
                            <span className="text-xs sm:text-sm font-bold bg-white/5 px-2.5 sm:px-3 py-1 rounded-full text-zinc-400 border border-white/5">
                                {step.year}
                            </span>
                        </div>

                        <h4 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-violet-400 transition-colors duration-300">
                            {step.title}
                        </h4>
                        <p className="text-zinc-400 text-sm leading-relaxed">
                            {step.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Journey
