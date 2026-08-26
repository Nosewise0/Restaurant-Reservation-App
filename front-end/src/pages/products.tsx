import ScrollReveal from "../components/ScrollReveal"
import { Link } from "react-router-dom"

export default function Products() {
    const menus = [
        {
            title: "Delivery Menu",
            image: "https://images.unsplash.com/photo-1760888549280-4aef010720bd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRlbGl2ZXJ5JTIwTWVudXxlbnwwfHwwfHx8MA%3D%3D",
            offsetClass: "lg:mt-16",
            path: "/menus/delivery",
        },
        {
            title: "Dining Menu",
            image: "https://images.unsplash.com/photo-1710732652617-264d6f860546?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8RGluaW5nJTIwTWVudXxlbnwwfHwwfHx8MA%3D%3D",
            offsetClass: "",
            path: "/menus/dining",
        },
        {
            title: "Drink Menu",
            image: "https://images.unsplash.com/photo-1758384077164-c00b53cf718f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fERyaW5rcyUyME1lbnV8ZW58MHx8MHx8fDA%3D",
            offsetClass: "lg:mt-32",
        },
        {
            title: "Dessert Menu",
            image: "https://images.unsplash.com/photo-1564759298141-cef86f51d4d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RGVzc2VydCUyME1lbnV8ZW58MHx8MHx8fDA%3D",
            offsetClass: "lg:mt-12",
        },
    ]

    return (
        <section id="menus" className="bg-[#AC2B2B] text-white w-full min-h-screen py-16 sm:py-20 md:py-24 px-4 sm:px-8 lg:px-12 relative overflow-hidden flex flex-col justify-center items-center">
            <ScrollReveal
                animation="pop"
                delay={100}
                duration={900}
                className="absolute top-4 sm:top-6 md:top-5 left-1/2 -translate-x-1/2 w-[140%] sm:w-full text-center select-none pointer-events-none z-0"
            >
                <h2 className="font-inspiration text-[clamp(3.5rem,18vw,23rem)] text-white leading-none tracking-wide whitespace-nowrap drop-shadow-sm opacity-95">
                    View our foods
                </h2>
            </ScrollReveal>

            <div className="container mx-auto max-w-7xl relative z-10 pt-20 sm:pt-24 md:pt-32 w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-start">
                    {menus.map((item, index) => (
                        <ScrollReveal
                            key={index}
                            animation="pop"
                            delay={index * 150 + 100}
                            duration={800}
                            className={`flex flex-col w-full max-w-sm mx-auto sm:max-w-none ${item.offsetClass} transition-transform duration-500 hover:-translate-y-2 group cursor-pointer`}
                        >
                            <Link to={item.path || "#"}
                                className="block transition-transform duration-500 hover:-translate-y-2 group cursor-pointer"
                            >
                            <div className="bg-[#D6D6D6] h-[300px] sm:h-[400px] md:h-[460px] lg:h-[500px] rounded-xs shadow-2xl flex flex-col justify-between overflow-hidden relative">
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
                            </Link>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    )
}