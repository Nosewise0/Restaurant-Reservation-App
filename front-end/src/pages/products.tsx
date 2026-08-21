import ScrollReveal from "../components/ScrollReveal"

export default function Products() {
    const menus = [
        {
            title: "Delivery Menu",
            image: "",
            offsetClass: "mt-12 lg:mt-16",
        },
        {
            title: "Dining Menu",
            image: "",
            offsetClass: "mt-0",
        },
        {
            title: "Drink Menu",
            image: "",
            offsetClass: "mt-20 lg:mt-32",
        },
        {
            title: "Dessert Menu",
            image: "",
            offsetClass: "mt-8 lg:mt-12",
        },
    ]

    return (
        <section id="menus" className="bg-[#AC2B2B] text-white w-full min-h-screen py-24 px-4 sm:px-8 lg:px-12 relative overflow-hidden flex flex-col justify-center items-center">
            <ScrollReveal
                animation="pop"
                delay={100}
                duration={900}
                className="absolute top-2 sm:top-6 md:top-5 left-1/2 -translate-x-1/2 w-full text-center select-none pointer-events-none z-0"
            >
                <h2 className="font-inspiration text-9xl sm:text-9xl md:text-[320px] lg:text-[300px] xl:text-[370px] text-white leading-none tracking-wide whitespace-nowrap drop-shadow-sm opacity-95">
                    View our foods
                </h2>
            </ScrollReveal>

            <div className="container mx-auto max-w-7xl relative z-10 pt-16 sm:pt-24 md:pt-32">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-start">
                    {menus.map((item, index) => (
                        <ScrollReveal
                            key={index}
                            animation="pop"
                            delay={index * 150 + 100}
                            duration={800}
                            className={`flex flex-col ${item.offsetClass} transition-transform duration-500 hover:-translate-y-2 group cursor-pointer`}
                        >
                            <div className="bg-[#D6D6D6] h-[380px] sm:h-[430px] md:h-[480px] lg:h-[500px] rounded-xs shadow-2xl flex flex-col justify-between overflow-hidden relative">
                                <div className="w-full flex-1 overflow-hidden relative">
                                    {item.image ? (
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-[#D6D6D6]" />
                                    )}
                                </div>

                                <div className="p-4 sm:p-5 bg-[#D6D6D6] text-center">
                                    <span className="font-inspiration text-2xl sm:text-3xl md:text-4xl text-[#1E1E24] tracking-wide block">
                                        {item.title}
                                    </span>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    )
}