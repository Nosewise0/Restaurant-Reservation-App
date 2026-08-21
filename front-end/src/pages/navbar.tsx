import { useState } from "react"
import ScrollReveal from "../components/ScrollReveal"

const drawerLinks = ["Home", "Menu", "Takeout", "Reserve", "Our Story", "Contact"]

export default function Navbar() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

    return (
        <>
            <nav className="bg-[#AC2B2B] text-white relative z-40">
                <div className="container mx-auto pt-8 pb-8 px-4 flex justify-between items-center">
                    <ScrollReveal animation="fade-down" delay={0} duration={700} repeat={false}>
                        <h1 className="font-inspiration text-6xl cursor-pointer transition-transform duration-300 hover:scale-105 select-none">
                            Oliver&Sarah
                        </h1>
                    </ScrollReveal>

                    <div className="flex items-center gap-6">
                        <ul className="flex items-center text-xl font-inika">
                            <ScrollReveal
                                as="li"
                                animation="fade-left"
                                delay={100}
                                duration={650}
                                repeat={false}
                                className="mx-3 cursor-pointer relative py-1 transition-all duration-300 hover:text-amber-100 hover:-translate-y-0.5 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-center"
                            >
                                Takeout
                            </ScrollReveal>
                            <ScrollReveal
                                as="li"
                                animation="fade-left"
                                delay={150}
                                duration={650}
                                repeat={false}
                                className="h-6 text-4xl mb-5 select-none"
                                aria-hidden="true"
                            >
                                |
                            </ScrollReveal>
                            <ScrollReveal
                                as="li"
                                animation="fade-left"
                                delay={200}
                                duration={650}
                                repeat={false}
                                className="mx-3 cursor-pointer relative py-1 transition-all duration-300 hover:text-amber-100 hover:-translate-y-0.5 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-center"
                            >
                                Reserve
                            </ScrollReveal>
                        </ul>

                        <ScrollReveal animation="fade-left" delay={300} duration={650} repeat={false}>
                            <button
                                onClick={() => setIsDrawerOpen(true)}
                                aria-label="Open menu drawer"
                                className="p-2.5 rounded-lg active:scale-90 transition-all duration-300 hover:scale-110 cursor-pointer flex flex-col justify-center items-center gap-1.5 group"
                            >
                                <span className="w-6 h-0.5 bg-white transition-all duration-300 group-hover:w-7"></span>
                                <span className="w-6 h-0.5 bg-white transition-all duration-300 group-hover:w-5"></span>
                                <span className="w-6 h-0.5 bg-white transition-all duration-300 group-hover:w-7"></span>
                            </button>
                        </ScrollReveal>
                    </div>
                </div>
            </nav>

            <div
                onClick={() => setIsDrawerOpen(false)}
                className={`fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300 z-50 ${
                    isDrawerOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                }`}
            />

            <div
                className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-[#8B2020] text-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col justify-between p-8 ${
                    isDrawerOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <div>
                    <div
                        className={`flex justify-between items-center pb-6 border-b border-white/20 transition-all duration-300 ${
                            isDrawerOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
                        }`}
                        style={{ transitionDelay: isDrawerOpen ? "150ms" : "0ms" }}
                    >
                        <h2 className="font-inspiration text-4xl cursor-pointer transition-transform duration-300 hover:scale-105">
                            Oliver&Sarah
                        </h2>
                        <button
                            onClick={() => setIsDrawerOpen(false)}
                            aria-label="Close menu drawer"
                            className="w-10 h-10 rounded-full hover:bg-white/15 active:scale-90 transition-all duration-300 hover:rotate-90 hover:scale-110 flex items-center justify-center text-3xl leading-none cursor-pointer"
                        >
                            &times;
                        </button>
                    </div>
                    <ul className="mt-8 flex flex-col gap-6 font-inika text-2xl">
                        {drawerLinks.map((item, index) => (
                            <li
                                key={item}
                                onClick={() => setIsDrawerOpen(false)}
                                className={`cursor-pointer relative py-1 inline-block w-fit transition-all duration-300 hover:translate-x-2 hover:text-amber-100 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left ${
                                    isDrawerOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                                }`}
                                style={{
                                    transitionDelay: isDrawerOpen ? `${200 + index * 75}ms` : "0ms",
                                }}
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
                <div
                    className={`text-sm text-white/70 border-t border-white/20 pt-6 transition-all duration-300 ${
                        isDrawerOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                    style={{ transitionDelay: isDrawerOpen ? "550ms" : "0ms" }}
                >
                    <p className="font-inika text-base text-white">Opening Hours</p>
                    <p className="mt-1">Mon - Sun: 11:00 AM - 10:00 PM</p>
                    <p className="mt-4 font-inika text-xs text-white/50">&copy; Oliver & Sarah Restaurant</p>
                </div>
            </div>
        </>
    )
}
