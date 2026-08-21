import ScrollReveal from "../components/ScrollReveal"

export default function Home() {
    return (
        <section className="bg-[#AC2B2B] w-full min-h-[calc(100vh-100px)] text-white overflow-hidden flex flex-col justify-center relative py-16 pb-24 px-6 lg:px-16">
            <div className="container mx-auto max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">

                <div className="flex-1 max-w-2xl flex flex-col items-start space-y-4">
                    <ScrollReveal animation="pop" delay={100} duration={800}>
                        <h1 className="font-instrumental text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight leading-tight">
                            Good food. Great moments.
                        </h1>
                    </ScrollReveal>

                    <ScrollReveal animation="pop" delay={200} duration={800}>
                        <p className="font-inspiration text-3xl sm:text-4xl text-white/90 tracking-wide">
                            We serve fresh, delicious meals made with passion and the finest ingredients.
                        </p>
                    </ScrollReveal>

                    <ScrollReveal animation="pop-up" delay={300} duration={750} className="pt-3">
                        <button className="bg-[#1E1E24] hover:bg-[#121216] text-white px-9 py-2.5 rounded-md font-inspiration text-3xl transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg cursor-pointer">
                            Book
                        </button>
                    </ScrollReveal>
                </div>


                <div className="flex-1 flex justify-center lg:justify-end">
                    <div className="flex items-start gap-6 sm:gap-8">

                        <ScrollReveal
                            animation="pop"
                            delay={200}
                            duration={900}
                            className="w-56 sm:w-64 md:w-72 lg:w-80 h-[360px] sm:h-[420px] md:h-[480px] bg-[#D6D6D6] shadow-2xl mt-16 sm:mt-24 overflow-hidden transition-transform duration-500 hover:-translate-y-2 group"
                        >
                            <img
                                src=""
                                alt="Featured Dish"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                onError={(e) => (e.currentTarget.style.display = 'none')}
                            />
                        </ScrollReveal>


                        <ScrollReveal
                            animation="pop"
                            delay={400}
                            duration={900}
                            className="w-56 sm:w-64 md:w-72 lg:w-80 h-[360px] sm:h-[420px] md:h-[480px] bg-[#D6D6D6] shadow-2xl overflow-hidden transition-transform duration-500 hover:-translate-y-2 group"
                        >
                            <img
                                src=""
                                alt="Dining Experience"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                onError={(e) => (e.currentTarget.style.display = 'none')}
                            />
                        </ScrollReveal>
                    </div>
                </div>
            </div>

            {/* Scroll For More Indicator */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20">
                <ScrollReveal animation="fade-up" delay={500} duration={800}>
                    <a
                        href="#about"
                        className="flex flex-col items-center gap-2 text-white/80 hover:text-white transition-all duration-300 group cursor-pointer select-none"
                    >
                        <span className="font-instrumental text-sm sm:text-base tracking-[0.2em] uppercase font-light group-hover:tracking-[0.28em] transition-all duration-300">
                            Scroll for more
                        </span>
                        <svg
                            className="w-5 h-5 animate-bounce transition-transform duration-300 group-hover:translate-y-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </a>
                </ScrollReveal>
            </div>
        </section>
    )
}