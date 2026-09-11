
import heroimg from '../assets/banner-stack.png';

export default function Herosection() {
  return (
    <div className="container flex flex-col lg:flex-row justify-between mx-auto items-center px-4 py-8 lg:py-16 gap-8">
        <div className="flex flex-col gap-6 lg:gap-10 text-center lg:text-left items-center lg:items-start">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Build Your Ideal <br className="hidden sm:inline"/> <span className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight bg-linear-to-r from-orange-500 via-pink-600 to-purple-600 bg-clip-text text-transparent">Development Stack</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-xl lg:w-150">Explore frontend, backend, database, and tooling options,<br className="hidden sm:inline"/> compare them side by side, and put together the stack that fits your
                next project.
            </p>
            <div className="flex  gap-3 sm:gap-4 justify-center lg:justify-start w-full sm:w-auto">
                <button className="p-4 btn btn-md md:btn-md lg:btn-lg xl:btn-lg font-semibold text-white bg-linear-to-r from-orange-500 to-pink-500 rounded-2xl shadow-lg transition-transform duration-250 hover:scale-105 active:scale-95">
                    Explore Technologies
                </button>
                <button className="btn btn-md md:btn-md lg:btn-lg xl:btn-lg">Learn More</button>
            </div>
        </div>
        <img src={heroimg} alt="heroimg" className="w-full max-w-md lg:max-w-lg h-auto object-contain" />
    </div>
  )
}