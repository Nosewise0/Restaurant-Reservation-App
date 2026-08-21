export default function Home() {
    return (
        <section className="bg-[#AC2B2B] w-full min-h-[calc(100vh-100px)] text-white overflow-hidden flex items-center py-16 px-6 lg:px-16">
            <div className="container mx-auto max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">

                <div className="flex-1 max-w-2xl flex flex-col items-start space-y-4">
                    <h1 className="font-inika text-5xl sm:text-6xl md:text-7xl font-normal tracking-tight leading-tight">
                        Good food. Great moments.
                    </h1>

                    <p className="font-inspiration text-3xl sm:text-4xl text-white/90 tracking-wide">
                        We serve fresh, delicious meals made with passion and the finest ingredients.
                    </p>

                    <div className="pt-3">
                        <button className="bg-[#1E1E24] hover:bg-[#121216] text-white px-9 py-2.5 rounded-md font-inspiration text-3xl transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg cursor-pointer">
                            Book
                        </button>
                    </div>
                </div>


                <div className="flex-1 flex justify-center lg:justify-end">
                    <div className="flex items-start gap-6 sm:gap-8">

                        <div className="w-56 sm:w-64 md:w-72 lg:w-80 h-[360px] sm:h-[420px] md:h-[480px] bg-[#D6D6D6] shadow-2xl mt-16 sm:mt-24 overflow-hidden transition-transform duration-500 hover:-translate-y-2 group">

                            <img
                                src=""
                                alt="Featured Dish"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                onError={(e) => (e.currentTarget.style.display = 'none')}
                            />
                        </div>


                        <div className="w-56 sm:w-64 md:w-72 lg:w-80 h-[360px] sm:h-[420px] md:h-[480px] bg-[#D6D6D6] shadow-2xl overflow-hidden transition-transform duration-500 hover:-translate-y-2 group">

                            <img
                                src=""
                                alt="Dining Experience"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                onError={(e) => (e.currentTarget.style.display = 'none')}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}