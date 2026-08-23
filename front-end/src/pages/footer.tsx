import ScrollReveal from "../components/ScrollReveal"

const quickLinks = [
    { label: "Home", href: "#" },
    { label: "Menu", href: "#menus" },
    { label: "Takeout", href: "#menus" }, 
    { label: "Reserve", href: "#" },
    { label: "Our Story", href: "#about" },
    { label: "Contact", href: "#contact" },
]

const socialLinks = [
    {
        label: "Instagram",
        href: "#",
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
        ),
    },
    {
        label: "Facebook",
        href: "#",
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
        ),
    },
    {
        label: "Twitter",
        href: "#",
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
        ),
    },
]

export default function Footer() {
    return (
        <footer id="contact" className="bg-[#1E1E24] text-white w-full overflow-hidden">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-16 py-12 sm:py-16 lg:py-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 lg:gap-10">
                    <ScrollReveal animation="fade-up" delay={100} duration={750}>
                        <div className="space-y-4">
                            <h2 className="font-inspiration text-4xl sm:text-5xl md:text-6xl cursor-pointer transition-transform duration-300 hover:scale-105 select-none w-fit">
                                Oliver&Sarah
                            </h2>
                            <p className="font-instrumental text-lg text-white/80 leading-relaxed max-w-xs">
                                Fresh flavors, warm hospitality, and meals worth remembering — every day.
                            </p>
                            <div className="flex items-center gap-4 pt-2">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        aria-label={social.label}
                                        className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white/50 hover:bg-white/10 transition-all duration-300 hover:-translate-y-0.5"
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal animation="fade-up" delay={200} duration={750}>
                        <div>
                            <h3 className="font-inika text-xl mb-6 text-white/90">Quick Links</h3>
                            <ul className="flex flex-col gap-3 font-instrumental text-base">
                                {quickLinks.map((link) => (
                                    <li key={link.label}>
                                        <a
                                            href={link.href}
                                            className="text-white/70 hover:text-white transition-all duration-300 inline-block hover:translate-x-1 relative py-0.5 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal animation="fade-up" delay={300} duration={750}>
                        <div>
                            <h3 className="font-inika text-xl mb-6 text-white/90">Contact</h3>
                            <ul className="flex flex-col gap-4 font-instrumental text-base text-white/70">
                                <li className="flex items-start gap-3">
                                    <svg className="w-5 h-5 mt-0.5 shrink-0 text-[#AC2B2B]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <span>Poblacion San Remigio, Cebu 6011</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <svg className="w-5 h-5 shrink-0 text-[#AC2B2B]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    <a href="tel:+12125551234" className="hover:text-white transition-colors duration-300">
                                        09123456789011
                                    </a>
                                </li>
                                <li className="flex items-center gap-3">
                                    <svg className="w-5 h-5 shrink-0 text-[#AC2B2B]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <a href="mailto:hello@oliverandsarah.com" className="hover:text-white transition-colors duration-300 break-all">
                                        hello@oliverandsarah.com
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal animation="fade-up" delay={400} duration={750}>
                        <div>
                            <h3 className="font-inika text-xl mb-6 text-white/90">Opening Hours</h3>
                            <ul className="flex flex-col gap-3 font-instrumental text-base text-white/70">
                                <li className="flex flex-col sm:flex-row justify-between gap-1 sm:gap-4 border-b border-white/10 pb-3">
                                    <span>Mon – Fri</span>
                                    <span className="text-white whitespace-nowrap">11:00 AM – 10:00 PM</span>
                                </li>
                                <li className="flex flex-col sm:flex-row justify-between gap-1 sm:gap-4 border-b border-white/10 pb-3">
                                    <span>Saturday</span>
                                    <span className="text-white whitespace-nowrap">10:00 AM – 11:00 PM</span>
                                </li>
                                <li className="flex flex-col sm:flex-row justify-between gap-1 sm:gap-4">
                                    <span>Sunday</span>
                                    <span className="text-white whitespace-nowrap">10:00 AM – 9:00 PM</span>
                                </li>
                            </ul>
                        </div>
                    </ScrollReveal>
                </div>
            </div>

            <div className="border-t border-white/10">
                <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-16 py-6">
                    <ScrollReveal animation="fade-up" delay={500} duration={700}>
                        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left text-xs sm:text-sm text-white/50 font-inika">
                            <p>&copy; {new Date().getFullYear()} Oliver & Sarah Restaurant. All rights reserved.</p>
                            <div className="flex items-center gap-6">
                                <a href="#" className="hover:text-white/80 transition-colors duration-300">
                                    Privacy Policy
                                </a>
                                <a href="#" className="hover:text-white/80 transition-colors duration-300">
                                    Terms of Service
                                </a>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </footer>
    )
}
