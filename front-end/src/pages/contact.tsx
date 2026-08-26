export default function Contact() {
    return (
        <section
            id="contact"
            className="bg-[#231F20] text-white w-full min-h-[90vh] flex items-center py-20 sm:py-28 px-4 sm:px-6 lg:px-16 overflow-hidden relative"
        >
            {/* subtle watermark */}
            <h2 className="font-inspiration absolute -top-4 sm:top-0 left-1/2 -translate-x-1/2 w-[160%] text-center text-[clamp(3rem,14vw,16rem)] leading-none text-white/[0.04] whitespace-nowrap select-none pointer-events-none z-0">
                Get In Touch
            </h2>

            <div className="container mx-auto max-w-7xl relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
                    {/* Left column */}
                    <div className="lg:col-span-5">
                        <span className="font-inika text-[#AC2B2B] text-xs tracking-[0.35em] uppercase">
                            Contact Us
                        </span>
                        <h2 className="font-inspiration text-4xl sm:text-5xl md:text-6xl mt-4 mb-6 leading-tight">
                            Get In Touch
                        </h2>
                        <p className="font-inika text-lg text-white/60 mb-14 max-w-md leading-relaxed">
                            We'd love to hear from you! Whether you have a question about our
                            menu, want to make a reservation, or just want to say hello, feel
                            free to reach out.
                        </p>

                        <div className="space-y-8 font-inika">
                            <div className="flex items-start gap-5 group">
                                <span className="text-[#AC2B2B] text-xl pt-1 transition-transform duration-300 group-hover:scale-110">
                                    ✆
                                </span>
                                <div className="border-b border-white/10 pb-4 flex-1">
                                    <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Phone</p>
                                    <p className="text-lg">(555) 123-4567</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-5 group">
                                <span className="text-[#AC2B2B] text-xl pt-1 transition-transform duration-300 group-hover:scale-110">
                                    ✉
                                </span>
                                <div className="border-b border-white/10 pb-4 flex-1">
                                    <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Email</p>
                                    <p className="text-lg">hello@oliverandsarah.com</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-5 group">
                                <span className="text-[#AC2B2B] text-xl pt-1 transition-transform duration-300 group-hover:scale-110">
                                    ⚑
                                </span>
                                <div className="pb-4 flex-1">
                                    <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Address</p>
                                    <p className="text-lg">123 Main Street, Your City</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right column — form */}
                    <div className="lg:col-span-7">
                        <form className="space-y-10">
                            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-10">
                                <div className="relative">
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        placeholder=" "
                                        className="peer w-full bg-transparent text-white border-0 border-b border-white/20 px-0 py-3 focus:outline-none focus:border-[#AC2B2B] transition-colors duration-300"
                                    />
                                    <label
                                        htmlFor="name"
                                        className="absolute left-0 top-3 font-inika text-white/40 text-base transition-all duration-300 pointer-events-none peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#AC2B2B] peer-focus:tracking-widest peer-focus:uppercase peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:tracking-widest peer-[:not(:placeholder-shown)]:uppercase"
                                    >
                                        Your Name
                                    </label>
                                </div>

                                <div className="relative">
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        placeholder=" "
                                        className="peer w-full bg-transparent text-white border-0 border-b border-white/20 px-0 py-3 focus:outline-none focus:border-[#AC2B2B] transition-colors duration-300"
                                    />
                                    <label
                                        htmlFor="email"
                                        className="absolute left-0 top-3 font-inika text-white/40 text-base transition-all duration-300 pointer-events-none peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#AC2B2B] peer-focus:tracking-widest peer-focus:uppercase peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:tracking-widest peer-[:not(:placeholder-shown)]:uppercase"
                                    >
                                        Your Email
                                    </label>
                                </div>
                            </div>

                            <div className="relative">
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    placeholder=" "
                                    className="peer w-full bg-transparent text-white border-0 border-b border-white/20 px-0 py-3 focus:outline-none focus:border-[#AC2B2B] transition-colors duration-300"
                                />
                                <label
                                    htmlFor="subject"
                                    className="absolute left-0 top-3 font-inika text-white/40 text-base transition-all duration-300 pointer-events-none peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#AC2B2B] peer-focus:tracking-widest peer-focus:uppercase peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:tracking-widest peer-[:not(:placeholder-shown)]:uppercase"
                                >
                                    Subject
                                </label>
                            </div>

                            <div className="relative">
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    required
                                    placeholder=" "
                                    className="peer w-full bg-transparent text-white border-0 border-b border-white/20 px-0 py-3 focus:outline-none focus:border-[#AC2B2B] transition-colors duration-300 resize-none"
                                ></textarea>
                                <label
                                    htmlFor="message"
                                    className="absolute left-0 top-3 font-inika text-white/40 text-base transition-all duration-300 pointer-events-none peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#AC2B2B] peer-focus:tracking-widest peer-focus:uppercase peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:tracking-widest peer-[:not(:placeholder-shown)]:uppercase"
                                >
                                    Your Message
                                </label>
                            </div>

                            <button
                                type="submit"
                                className="group relative inline-flex items-center gap-3 font-inika text-sm uppercase tracking-[0.25em] text-white pt-2 pb-1 cursor-pointer"
                            >
                                Send Message
                                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                                <span className="absolute bottom-0 left-0 h-px w-full bg-[#AC2B2B] scale-x-100 origin-left" />
                                <span className="absolute -bottom-px left-0 h-[2px] w-0 bg-[#AC2B2B] transition-all duration-500 group-hover:w-full" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}