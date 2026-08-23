export default function Contact() {
    return (
        <section
            id="contact"
            className="bg-[#231F20] text-white w-full min-h-[90vh] flex items-center py-14 sm:py-20 px-4 sm:px-6 lg:px-16 overflow-hidden"
        >
            <div className="container mx-auto max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    {/* Left column */}
                    <div className="lg:col-span-5">
                        <span className="font-inika text-[#AC2B2B] text-sm tracking-[0.3em] uppercase">
                            Contact Us
                        </span>
                        <h2 className="font-inspiration text-4xl sm:text-5xl md:text-6xl mt-3 mb-6 leading-tight">
                            Get In Touch
                        </h2>
                        <p className="font-inika text-lg text-white/70 mb-10 max-w-md">
                            We'd love to hear from you! Whether you have a question about our
                            menu, want to make a reservation, or just want to say hello, feel
                            free to reach out.
                        </p>

                        <div className="space-y-6 font-inika">
                            <div className="flex items-start gap-4">
                                <div className="w-11 h-11 shrink-0 rounded-full bg-[#AC2B2B]/15 flex items-center justify-center text-[#AC2B2B]">
                                    ✆
                                </div>
                                <div>
                                    <p className="text-white/50 text-sm">Phone</p>
                                    <p className="text-lg">(555) 123-4567</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-11 h-11 shrink-0 rounded-full bg-[#AC2B2B]/15 flex items-center justify-center text-[#AC2B2B]">
                                    ✉
                                </div>
                                <div>
                                    <p className="text-white/50 text-sm">Email</p>
                                    <p className="text-lg">hello@oliverandsarah.com</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-11 h-11 shrink-0 rounded-full bg-[#AC2B2B]/15 flex items-center justify-center text-[#AC2B2B]">
                                    ⚑
                                </div>
                                <div>
                                    <p className="text-white/50 text-sm">Address</p>
                                    <p className="text-lg">123 Main Street, Your City</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right column — form */}
                    <div className="lg:col-span-7">
                        <form className="bg-[#2C2829] rounded-2xl p-6 sm:p-10 space-y-5 shadow-xl">
                            <div className="grid sm:grid-cols-2 gap-5">
                                <div>
                                    <label htmlFor="name" className="block font-inika text-sm text-white/60 mb-2">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        placeholder="Your Name"
                                        className="w-full bg-[#3A3738] text-white placeholder:text-gray-500 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#AC2B2B] focus:border-transparent transition-all duration-300"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block font-inika text-sm text-white/60 mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        placeholder="Your Email"
                                        className="w-full bg-[#3A3738] text-white placeholder:text-gray-500 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#AC2B2B] focus:border-transparent transition-all duration-300"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="subject" className="block font-inika text-sm text-white/60 mb-2">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    placeholder="What's this about?"
                                    className="w-full bg-[#3A3738] text-white placeholder:text-gray-500 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#AC2B2B] focus:border-transparent transition-all duration-300"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block font-inika text-sm text-white/60 mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    required
                                    placeholder="Your Message"
                                    className="w-full bg-[#3A3738] text-white placeholder:text-gray-500 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#AC2B2B] focus:border-transparent transition-all duration-300 resize-none"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full sm:w-auto bg-[#AC2B2B] hover:bg-[#8B2020] text-white font-inika text-lg font-bold py-3 px-8 rounded-lg transition-all duration-300 active:scale-[0.98] cursor-pointer shadow-md hover:shadow-lg"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}