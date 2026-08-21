import { useState } from "react"
import ScrollReveal from "../components/ScrollReveal"

export default function About() {

    const images = [
        "",
        "",
        "",
    ]

    const [currentIndex, setCurrentIndex] = useState(0)

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
    }

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
    }

    return (
        <section id="about" className="bg-[#231F20] text-white w-full min-h-[90vh] flex items-center py-20 px-6 lg:px-16 overflow-hidden">
            <div className="container mx-auto max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">


                    <div className="lg:col-span-6 flex flex-col justify-between space-y-12">
                        <div className="space-y-3">
                            <ScrollReveal animation="fade-right" delay={100} duration={750}>
                                <h2 className="font-inspiration text-6xl sm:text-7xl lg:text-8xl tracking-wide leading-none select-none">
                                    Welcome to Our Table
                                </h2>
                            </ScrollReveal>
                            <ScrollReveal animation="fade-right" delay={200} duration={750}>
                                <p className="font-inspiration text-3xl sm:text-4xl text-white/90">
                                    Good food brings people together.
                                </p>
                            </ScrollReveal>
                        </div>

                        <ScrollReveal animation="pop" delay={300} duration={800} className="max-w-xl">
                            <p className="font-instrumental text-2xl sm:text-3xl md:text-4xl text-white/95 leading-snug font-normal">
                                Experience delicious flavors, warm hospitality, and memorable moments. We&apos;re here to make every meal something worth remembering.
                            </p>
                        </ScrollReveal>

                        <ScrollReveal animation="fade-up" delay={400} duration={700} className="pt-6">
                            <a
                                href="#menus"
                                className="font-instrumental text-2xl text-white/90 hover:text-white cursor-pointer relative py-1 inline-block transition-all duration-300 hover:-translate-y-0.5 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
                            >
                                Menus
                            </a>
                        </ScrollReveal>
                    </div>


                    <div className="lg:col-span-6 flex items-center justify-center lg:justify-end gap-3 sm:gap-6">
                        <ScrollReveal animation="fade-right" delay={250} duration={700}>
                            <button
                                onClick={prevSlide}
                                aria-label="Previous slide"
                                className="text-white text-3xl sm:text-4xl font-light hover:scale-125 transition-transform duration-200 cursor-pointer select-none p-2"
                            >
                                &lt;
                            </button>
                        </ScrollReveal>


                        <ScrollReveal
                            animation="pop"
                            delay={200}
                            duration={850}
                            className="relative w-72 sm:w-80 md:w-96 lg:w-[420px] h-[440px] sm:h-[500px] md:h-[560px] bg-[#D6D6D6] overflow-hidden shadow-2xl group"
                        >
                            {images.map((imgSrc, index) => (
                                <div
                                    key={index}
                                    className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                                        }`}
                                >
                                    {imgSrc ? (
                                        <img
                                            src={imgSrc}
                                            alt={`About slide ${index + 1}`}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-[#D6D6D6] flex items-center justify-center text-neutral-400 font-inika text-sm select-none">

                                        </div>
                                    )}
                                </div>
                            ))}


                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                                {images.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentIndex(index)}
                                        aria-label={`Go to slide ${index + 1}`}
                                        className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${index === currentIndex ? "w-6 bg-white" : "w-1.5 bg-white/40"
                                            }`}
                                    />
                                ))}
                            </div>
                        </ScrollReveal>


                        <ScrollReveal animation="fade-left" delay={250} duration={700}>
                            <button
                                onClick={nextSlide}
                                aria-label="Next slide"
                                className="text-white text-3xl sm:text-4xl font-light hover:scale-125 transition-transform duration-200 cursor-pointer select-none p-2"
                            >
                                &gt;
                            </button>
                        </ScrollReveal>
                    </div>

                </div>
            </div>
        </section>
    )
}