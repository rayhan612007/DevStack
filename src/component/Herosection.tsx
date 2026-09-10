import heroimg from '../assets/banner-stack.png';

export default function Herosection() {
  return (
    <div className="container flex justify-between mx-auto items-center">
        <div className="flex flex-col gap-10">
            <h1 className="text-6xl font-bold">
                Build Your Ideal <br/> <span className="text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-orange-500 via-pink-600 to-purple-600 bg-clip-text text-transparent">Development Stack</span>
            </h1>
            <p className="text-xl text-gray-600 lg:w-150">Explore frontend, backend, database, and tooling options,<br/> compare them side by side, and put together the stack that fits your
                next project.
            </p>
            <div className="flex gap-2">
                <button className="p-4 btn btn-lg font-semibold text-white bg-gradient-to-r from-orange-500 to-pink-500 rounded-2xl     shadow-lg transition-transform duration-250 hover:scale-105 active:scale-95">
                      Explore Technologies
                </button>
                <button className="btn btn-sm sm:btn-xs md:btn-md lg:btn-lg xl:btn-lg">Learn More</button>
            </div>
        </div>
        <img src={heroimg} alt="heroimg" />
    </div>
  )
}
