import { useState } from "react"
import ScrollReveal from "../components/ScrollReveal"

export default function Home() {
    const [modalOpen, setModalOpen] = useState(false)

    return (
        <section className="bg-[#AC2B2B] w-full min-h-[calc(100vh-80px)] sm:min-h-[calc(100vh-100px)] text-white overflow-hidden flex flex-col justify-center relative py-12 sm:py-16 pb-20 sm:pb-24 px-4 sm:px-6 lg:px-16">
            <div className="container mx-auto max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-8">

                <div className="flex-1 max-w-2xl flex flex-col items-start space-y-4 w-full">
                    <ScrollReveal animation="pop" delay={100} duration={800}>
                        <h1 className="font-instrumental text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight leading-tight">
                            Good food. Great moments.
                        </h1>
                    </ScrollReveal>

                    <ScrollReveal animation="pop" delay={200} duration={800}>
                        <p className="font-inspiration text-2xl sm:text-3xl md:text-4xl text-white/90 tracking-wide">
                            We serve fresh, delicious meals made with passion and the finest ingredients.
                        </p>
                    </ScrollReveal>

                    <ScrollReveal animation="pop-up" delay={300} duration={750} className="pt-3">
                        <button
                        onClick={() => setModalOpen(true)}
                        aria-label="Open reservation modal"
                         className="bg-[#1E1E24] hover:bg-[#121216] text-white px-7 sm:px-9 py-2 sm:py-2.5 rounded-md font-inspiration text-2xl sm:text-3xl transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg cursor-pointer">
                            Book
                        </button>
                    </ScrollReveal>
                </div>


                <div className="flex-1 flex justify-center lg:justify-end w-full">
                    <div className="flex items-start gap-3 sm:gap-6 md:gap-8 w-full max-w-xl lg:max-w-none justify-center">

                        <ScrollReveal
                            animation="pop"
                            delay={200}
                            duration={900}
                            className="w-[42%] sm:w-56 md:w-72 lg:w-80 h-[240px] sm:h-[360px] md:h-[480px] bg-[#D6D6D6] shadow-2xl mt-8 sm:mt-16 md:mt-24 overflow-hidden transition-transform duration-500 hover:-translate-y-2 group"
                        >
                            <img
                                src="https://plus.unsplash.com/premium_photo-1673590981774-d9f534e0c617?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Featured Dish"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                onError={(e) => (e.currentTarget.style.display = 'none')}
                            />
                        </ScrollReveal>


                        <ScrollReveal
                            animation="pop"
                            delay={400}
                            duration={900}
                            className="w-[42%] sm:w-56 md:w-72 lg:w-80 h-[240px] sm:h-[360px] md:h-[480px] bg-[#D6D6D6] shadow-2xl overflow-hidden transition-transform duration-500 hover:-translate-y-2 group"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1581954548122-4dff8989c0f7?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Dining Experience"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                onError={(e) => (e.currentTarget.style.display = 'none')}
                            />
                        </ScrollReveal>
                    </div>
                </div>
            </div>

            {/* Scroll For More Indicator */}
            <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-20">
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

           {modalOpen && (
    <div
        onClick={() => setModalOpen(false)}
        className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50 flex items-center justify-center p-4 animate-[fadeIn_0.2s_ease-out]"
    >
        <div
            onClick={(e) => e.stopPropagation()}
            className="bg-[#FBF4E9] text-[#3A1414] rounded-2xl shadow-2xl w-full max-w-md relative overflow-hidden animate-[scaleIn_0.25s_ease-out]"
        >
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
        </section>
    )
}