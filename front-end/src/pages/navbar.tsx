import { useState, type FormEvent } from "react"
import ScrollReveal from "../components/ScrollReveal"
import { Link } from "react-router-dom"
import { reservationFormSubmit } from "../api/reservationForm"


export default function Navbar() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const [modalOpen, setModalOpen] = useState(false)

    const [fullName, setFullName] = useState("")
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    const [partySize, setPartySize] = useState("")
    const [phoneOrEmail, setPhoneOrEmail] = useState("")
    const [specialRequests, setSpecialRequests] = useState("")
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
const [successMessage, setSuccessMessage] = useState<string | null>(null);
const [isSubmitting, setIsSubmitting] = useState(false);


    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);
    setIsSubmitting(true);

    try {
        await reservationFormSubmit({
            fullName,
            date,
            time,
            partySize: parseInt(partySize),
            phoneOrEmail,
            specialRequests,
        });
        setSuccessMessage("Your table has been reserved!");
        setFullName("");
        setDate("");
        setTime("");
        setPartySize("");
        setPhoneOrEmail("");
        setSpecialRequests("");
    } catch (err) {
        setErrorMessage(err instanceof Error ? err.message : "Something went wrong");
    } finally {
        setIsSubmitting(false);
    }
};

    return (
        <>
            <nav className="bg-[#AC2B2B] text-white relative z-40">
                <div className="container mx-auto pt-5 sm:pt-8 pb-5 sm:pb-8 px-4 flex justify-between items-center gap-3">
                    <ScrollReveal animation="fade-down" delay={0} duration={700} repeat={false}>
                        <Link to="/">
                            <h1
                                className="font-inspiration text-4xl sm:text-5xl md:text-6xl cursor-pointer transition-transform duration-300 hover:scale-105 select-none leading-none"
                            >
                                Oliver&Sarah
                            </h1>
                        </Link>
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
                        <Link to="/">
                            <li
                                
                                className={`cursor-pointer relative py-1 inline-block w-fit transition-all duration-300 hover:translate-x-2 hover:text-amber-100 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left ${
                                    isDrawerOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                                }`}
                            >
                                Home
                            </li>
                        </Link>
                    </ul>
                    <ul className="mt-8 flex flex-col gap-6 font-inika text-2xl">
                        <Link to="/contact">
                            <li
                                className={`cursor-pointer relative py-1 inline-block w-fit transition-all duration-300 hover:translate-x-2 hover:text-amber-100 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left ${
                                    isDrawerOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                                }`}
                            >
                                Contact
                            </li>
                        </Link>
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
                    className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-[fadeIn_0.2s_ease-out]"
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="bg-[#FBF4E9] text-[#3A1414] rounded-sm shadow-2xl w-full max-w-md relative overflow-hidden animate-[scaleIn_0.25s_ease-out]"
                    >
                        <button
                            onClick={() => setModalOpen(false)}
                            aria-label="Close reservation modal"
                            className="absolute top-5 right-5 w-9 h-9 rounded-full hover:bg-[#3A1414]/5 active:scale-90 transition-all duration-300 hover:rotate-90 flex items-center justify-center text-2xl leading-none cursor-pointer text-[#3A1414]/50 hover:text-[#AC2B2B] z-10"
                        >
                            &times;
                        </button>

                        <div className="px-8 sm:px-10 pt-12 pb-4 text-center">
                            <span className="font-inika text-[#AC2B2B] text-xs tracking-[0.35em] uppercase">
                                Oliver&amp;Sarah
                            </span>
                            <h2 className="font-inspiration text-4xl sm:text-5xl leading-tight mt-3">
                                Reserve a Table
                            </h2>
                            <div className="h-px w-12 bg-[#AC2B2B]/40 mx-auto mt-5" />
                        </div>

                        <form
    onSubmit={handleSubmit}
    className="px-8 sm:px-10 pt-8 pb-10 flex flex-col gap-8 font-inika"
>
    <div className="relative">
        <input
            type="text"
            name="fullName"
            id="fullName"
            required
            placeholder=" "
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="peer w-full bg-transparent border-0 border-b border-[#3A1414]/20 px-0 py-2 focus:outline-none focus:border-[#AC2B2B] transition-colors duration-300"
        />
        <label
            htmlFor="fullName"
            className="absolute left-0 top-2 text-[#3A1414]/40 text-base transition-all duration-300 pointer-events-none peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#AC2B2B] peer-focus:tracking-widest peer-focus:uppercase peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:tracking-widest peer-[:not(:placeholder-shown)]:uppercase"
        >
            Full Name
        </label>
    </div>

    <div className="grid grid-cols-2 gap-6">
        <div className="relative">
            <input
                type="date"
                name="date"
                id="date"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="peer w-full bg-transparent border-0 border-b border-[#3A1414]/20 px-0 py-2 focus:outline-none focus:border-[#AC2B2B] transition-colors duration-300 text-sm"
            />
            <label htmlFor="date" className="absolute left-0 -top-4 text-[#AC2B2B] text-xs tracking-widest uppercase pointer-events-none">
                Date
            </label>
        </div>
        <div className="relative">
            <input
                type="time"
                name="time"
                id="time"
                required
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="peer w-full bg-transparent border-0 border-b border-[#3A1414]/20 px-0 py-2 focus:outline-none focus:border-[#AC2B2B] transition-colors duration-300 text-sm"
            />
            <label htmlFor="time" className="absolute left-0 -top-4 text-[#AC2B2B] text-xs tracking-widest uppercase pointer-events-none">
                Time
            </label>
        </div>
    </div>

    <div className="relative">
        <select
            required
            name="partySize"
            id="partySize"
            value={partySize}
            onChange={(e) => setPartySize(e.target.value)}
            className="peer w-full bg-transparent border-0 border-b border-[#3A1414]/20 px-0 py-2 focus:outline-none focus:border-[#AC2B2B] transition-colors duration-300 appearance-none cursor-pointer"
        >
            <option value="" disabled>Select guests</option>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                <option key={n} value={n}>{n} {n === 1 ? "guest" : "guests"}</option>
            ))}
        </select>
        <label htmlFor="partySize" className="absolute left-0 -top-4 text-[#AC2B2B] text-xs tracking-widest uppercase pointer-events-none">
            Party Size
        </label>
        <span className="absolute right-0 top-2 text-[#3A1414]/40 pointer-events-none">▾</span>
    </div>

    <div className="relative">
        <input
            type="text"
            required
            placeholder=" "
            name="phoneOrEmail"
            id="phoneOrEmail"
            value={phoneOrEmail}
            onChange={(e) => setPhoneOrEmail(e.target.value)}
            className="peer w-full bg-transparent border-0 border-b border-[#3A1414]/20 px-0 py-2 focus:outline-none focus:border-[#AC2B2B] transition-colors duration-300"
        />
        <label
            htmlFor="phoneOrEmail"
            className="absolute left-0 top-2 text-[#3A1414]/40 text-base transition-all duration-300 pointer-events-none peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#AC2B2B] peer-focus:tracking-widest peer-focus:uppercase peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:tracking-widest peer-[:not(:placeholder-shown)]:uppercase"
        >
            Phone or Email
        </label>
    </div>

    <div className="relative">
        <textarea
            rows={2}
            placeholder=" "
            name="specialRequests"
            id="specialRequests"
            value={specialRequests}
            onChange={(e) => setSpecialRequests(e.target.value)}
            className="peer w-full bg-transparent border-0 border-b border-[#3A1414]/20 px-0 py-2 focus:outline-none focus:border-[#AC2B2B] transition-colors duration-300 resize-none"
        />
        <label
            htmlFor="specialRequests"
            className="absolute left-0 top-2 text-[#3A1414]/40 text-base transition-all duration-300 pointer-events-none peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#AC2B2B] peer-focus:tracking-widest peer-focus:uppercase peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:tracking-widest peer-[:not(:placeholder-shown)]:uppercase"
        >
            Special Requests
        </label>
    </div>

    {errorMessage && (
        <p className="text-sm text-[#AC2B2B] -mt-4">{errorMessage}</p>
    )}
    {successMessage && (
        <p className="text-sm text-green-700 -mt-4">{successMessage}</p>
    )}

    <button
        type="submit"
        disabled={isSubmitting}
        className="group relative inline-flex items-center justify-center gap-3 mt-2 font-inika text-sm uppercase tracking-[0.25em] text-white bg-[#AC2B2B] hover:bg-[#8B2020] py-4 transition-all duration-300 active:scale-[0.98] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
    >
        {isSubmitting ? "Confirming..." : "Confirm Reservation"}
        {!isSubmitting && (
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        )}
    </button>
</form>
                    </div>
                </div>
            )}
        </>
    )
}