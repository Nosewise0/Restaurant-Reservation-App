import { useState } from "react"
import { Link } from "react-router-dom"

export default function DessertMenu() {
    const categories = [
        {
            name: "Cakes",
            items: [
                { name: "Dark Chocolate Torte", price: "8.50", desc: "Sea salt caramel, vanilla bean cream" },
                { name: "Classic Cheesecake", price: "7.50", desc: "Graham crust, berry compote" },
                { name: "Red Velvet Slice", price: "7.00", desc: "Cream cheese frosting, cocoa crumb" },
            ],
        },
        {
            name: "Custards & Puddings",
            items: [
                { name: "Crème Brûlée", price: "7.50", desc: "Classic vanilla custard, torched sugar" },
                { name: "Sticky Toffee Pudding", price: "8.00", desc: "Warm toffee sauce, vanilla ice cream" },
            ],
        },
        {
            name: "Frozen",
            items: [
                { name: "Gelato Trio", price: "6.50", desc: "Chef's rotating flavors, three scoops" },
                { name: "Affogato", price: "6.00", desc: "Vanilla gelato, hot espresso shot" },
            ],
        },
        {
            name: "Pastries",
            items: [
                { name: "Almond Croissant", price: "5.00", desc: "Toasted almond, powdered sugar" },
                { name: "Fruit Tart", price: "6.50", desc: "Pastry cream, seasonal fruit" },
            ],
        },
    ]

    const [active, setActive] = useState("All")
    const tabs = ["All", ...categories.map((c) => c.name)]

    const visible =
        active === "All" ? categories : categories.filter((c) => c.name === active)

    let counter = 0

    return (
        <section className="relative min-h-screen bg-[#1E1E24] text-white overflow-hidden px-6 sm:px-10 lg:px-16 py-20 sm:py-28">
            {/* Giant watermark text */}
            <h2 className="font-inspiration absolute -top-6 sm:top-0 left-1/2 -translate-x-1/2 w-[160%] text-center text-[clamp(3rem,16vw,20rem)] leading-none text-white/[0.06] whitespace-nowrap select-none pointer-events-none z-0">
                Dessert Menu
            </h2>

            <div className="relative z-10 max-w-4xl mx-auto">
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-white/60 hover:text-[#AC2B2B] transition-colors"
                >
                    ← Back
                </Link>

                <h1 className="font-inspiration text-6xl sm:text-7xl md:text-8xl mt-8 mb-3 tracking-wide">
                    Dessert
                </h1>
                <p className="text-sm sm:text-base text-white/50 mb-12 max-w-md">
                    Sweet finishes to every meal. Served all day, 11am – 10pm.
                </p>

                {/* Category tabs */}
                <div className="flex flex-wrap gap-2 mb-16">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActive(tab)}
                            className={`px-4 py-2 text-xs uppercase tracking-widest rounded-full border transition-all duration-300 ${
                                active === tab
                                    ? "bg-[#AC2B2B] text-white border-[#AC2B2B]"
                                    : "border-white/20 text-white/60 hover:border-[#AC2B2B] hover:text-white"
                            }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Menu list */}
                <div className="space-y-14">
                    {visible.map((category) => (
                        <div key={category.name}>
                            <h2 className="font-inspiration text-3xl sm:text-4xl text-white/90 mb-6">
                                {category.name}
                            </h2>

                            <div className="divide-y divide-white/10 border-t border-white/10">
                                {category.items.map((item) => {
                                    counter += 1
                                    const n = String(counter).padStart(2, "0")
                                    return (
                                        <div
                                            key={item.name}
                                            className="group relative flex items-center gap-4 sm:gap-8 py-6 cursor-pointer transition-all duration-300 hover:pl-3"
                                        >
                                            <span className="font-inspiration text-2xl sm:text-3xl text-[#AC2B2B]/50 group-hover:text-[#AC2B2B] transition-colors duration-300 w-10 shrink-0">
                                                {n}
                                            </span>

                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-baseline justify-between gap-4">
                                                    <span className="text-lg sm:text-xl tracking-wide group-hover:translate-x-1 transition-transform duration-300 inline-block">
                                                        {item.name}
                                                    </span>
                                                    <span className="font-mono text-sm sm:text-base text-white/60 shrink-0">
                                                        ${item.price}
                                                    </span>
                                                </div>
                                                <p className="text-xs sm:text-sm text-white/40 mt-1 max-w-sm opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-10 overflow-hidden transition-all duration-300">
                                                    {item.desc}
                                                </p>
                                            </div>

                                            {/* hover accent line */}
                                            <span className="absolute left-0 top-0 h-full w-[3px] bg-[#AC2B2B] scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-300" />
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}