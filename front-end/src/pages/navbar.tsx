import { useState } from "react"
import ScrollReveal from "../components/ScrollReveal"


export default function Navbar() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const [modalOpen, setModalOpen] = useState(false)
    

    return (
        <>
            <nav className="bg-[#AC2B2B] text-white relative z-40">
                <div className="container mx-auto pt-5 sm:pt-8 pb-5 sm:pb-8 px-4 flex justify-between items-center gap-3">
                    <ScrollReveal animation="fade-down" delay={0} duration={700} repeat={false}>
                        <h1 className="font-inspiration text-4xl sm:text-5xl md:text-6xl cursor-pointer transition-transform duration-300 hover:scale-105 select-none leading-none">
                            Oliver&Sarah
                        </h1>
                    </ScrollReveal>

                    <div className="flex items-center gap-2 sm:gap-6 shrink-0">
                        <ul className="hidden sm:flex items-center text-lg md:text-xl font-inika">
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
                                onClick={() => setModalOpen(true)}
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
                        <h2 className="font-inspiration text-3xl sm:text-4xl cursor-pointer transition-transform duration-300 hover:scale-105">
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
                            <li
                                className={`cursor-pointer relative py-1 inline-block w-fit transition-all duration-300 hover:translate-x-2 hover:text-amber-100 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left ${
                                    isDrawerOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                                }`}
                            >
                                Home
                            </li>
                    </ul>
                    <ul className="mt-8 flex flex-col gap-6 font-inika text-2xl">
                            <li
                                className={`cursor-pointer relative py-1 inline-block w-fit transition-all duration-300 hover:translate-x-2 hover:text-amber-100 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left ${
                                    isDrawerOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                                }`}
                            >
                                Contact
                            </li>
                    </ul>
                    <ul className=" mt-8 flex flex-col gap-6 font-inika text-2xl">
                            <li
                                onClick={() => setModalOpen(true)}
                                className={`md:hidden cursor-pointer relative py-1 inline-block w-fit transition-all duration-300 hover:translate-x-2 hover:text-amber-100 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left ${
                                    isDrawerOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                                }`}
                            >
                                Reserve
                            </li>
                    </ul>
                    <ul className="mt-8 flex flex-col gap-6 font-inika text-2xl">
                            <li
                                className={`md:hidden cursor-pointer relative py-1 inline-block w-fit transition-all duration-300 hover:translate-x-2 hover:text-amber-100 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left ${
                                    isDrawerOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                                }`}
                            >
                                Takeout
                            </li>
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
            {modalOpen && (
    <div
        onClick={() => setModalOpen(false)}
        className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50 flex items-center justify-center p-4 animate-[fadeIn_0.2s_ease-out]"
    >
        <div
            onClick={(e) => e.stopPropagation()}
            className="bg-[#FBF4E9] text-[#3A1414] rounded-2xl shadow-2xl w-full max-w-md relative overflow-hidden animate-[scaleIn_0.25s_ease-out]"
        >
            {/* Header */}
            <div className="bg-[#AC2B2B] text-white px-8 pt-8 pb-6 relative">
                <button
                    onClick={() => setModalOpen(false)}
                    aria-label="Close reservation modal"
                    className="absolute top-4 right-4 w-10 h-10 rounded-full hover:bg-white/15 active:scale-90 transition-all duration-300 hover:rotate-90 hover:scale-110 flex items-center justify-center text-3xl leading-none cursor-pointer"
                >
                    &times;
                </button>
                <h2 className="font-inspiration text-4xl leading-none">Reserve a Table</h2>
                <p className="font-inika text-white/80 mt-2 text-sm">
                    We'd love to host you at Oliver&amp;Sarah.
                </p>
            </div>

            <form
                onSubmit={(e) => {
                    e.preventDefault()
                    const formData = new FormData(e.currentTarget)
                    const data = Object.fromEntries(formData.entries())
                    console.log("Reservation Data:", data)
                    setModalOpen(false)
                    
                }}
                className="px-8 py-7 flex flex-col gap-5 font-inika"
            >
                <div className="flex flex-col gap-1.5">
                    <label className="text-sm text-[#8B2020] font-medium">Full Name</label>
                    <input
                        type="text"
                        name="fullName"
                        required
                        placeholder="Jane Doe"
                        className="border border-[#AC2B2B]/25 rounded-lg px-4 py-2.5 bg-white focus:outline-none focus:ring-2 focus:ring-[#AC2B2B]/40 focus:border-[#AC2B2B] transition-all duration-200 placeholder:text-[#3A1414]/30"
                    />
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                        <label className="text-sm text-[#8B2020] font-medium">Date</label>
                        <input
                            type="date"
                            name="date"
                            required
                            className="border border-[#AC2B2B]/25 rounded-lg px-4 py-2.5 bg-white focus:outline-none focus:ring-2 focus:ring-[#AC2B2B]/40 focus:border-[#AC2B2B] transition-all duration-200"
                        />
                    </div>
                    <div className="flex flex-col gap-1.5">
                        <label className="text-sm text-[#8B2020] font-medium">Time</label>
                        <input
                            type="time"
                            name="time"
                            required
                            className="border border-[#AC2B2B]/25 rounded-lg px-4 py-2.5 bg-white focus:outline-none focus:ring-2 focus:ring-[#AC2B2B]/40 focus:border-[#AC2B2B] transition-all duration-200"
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-1.5">
                    <label className="text-sm text-[#8B2020] font-medium">Party Size</label>
                    <select
                        required
                        defaultValue=""
                        name="partySize"
                        className="border border-[#AC2B2B]/25 rounded-lg px-4 py-2.5 bg-white focus:outline-none focus:ring-2 focus:ring-[#AC2B2B]/40 focus:border-[#AC2B2B] transition-all duration-200"
                    >
                        <option value="" disabled>Select guests</option>
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                            <option key={n} value={n}>{n} {n === 1 ? "guest" : "guests"}</option>
                        ))}
                    </select>
                </div>

                <div className="flex flex-col gap-1.5">
                    <label className="text-sm text-[#8B2020] font-medium">Phone or Email</label>
                    <input
                        type="text"
                        required
                        placeholder="you@example.com"
                        name="phoneOrEmail"
                        className="border border-[#AC2B2B]/25 rounded-lg px-4 py-2.5 bg-white focus:outline-none focus:ring-2 focus:ring-[#AC2B2B]/40 focus:border-[#AC2B2B] transition-all duration-200 placeholder:text-[#3A1414]/30"
                    />
                </div>

                <div className="flex flex-col gap-1.5">
                    <label className="text-sm text-[#8B2020] font-medium">Special Requests</label>
                    <textarea
                        rows={2}
                        placeholder="Allergies, celebrations, seating preference..."
                        name="specialRequests"
                        className="border border-[#AC2B2B]/25 rounded-lg px-4 py-2.5 bg-white focus:outline-none focus:ring-2 focus:ring-[#AC2B2B]/40 focus:border-[#AC2B2B] transition-all duration-200 resize-none placeholder:text-[#3A1414]/30"
                    />
                </div>

                <button
                    type="submit"
                    className="mt-2 bg-[#AC2B2B] hover:bg-[#8B2020] text-white font-inika text-lg py-3 rounded-lg transition-all duration-300 active:scale-[0.98] cursor-pointer shadow-md hover:shadow-lg"
                >
                    Confirm Reservation
                </button>
            </form>
        </div>
    </div>
)}
                    
        </>
    )
}
