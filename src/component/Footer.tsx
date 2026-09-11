
import logo from '../assets/logo-text.png'

export default function Footer() {
  return (
    <div className='container mx-auto px-4'>
        <div className="divider"></div>
        <div className='flex flex-col md:flex-row gap-8 md:gap-10 my-8 md:my-15 justify-between items-center md:items-start text-center md:text-left'>
            <div className='flex flex-col items-center md:items-start gap-3'>
                <img src={logo} alt="logo" className='w-fit h-8' />
                <p className='max-w-sm lg:w-130 text-gray-500 text-sm md:text-base'>Curated tools, technologies, and resources for developers building
                modern software.</p>
                <div className="flex items-center space-x-3 sm:space-x-6 pt-2 text-sm sm:text-base">
                    <a href="#" className="text-slate-700 hover:text-slate-900 font-medium transition-colors">
                    GitHub
                    </a>
                    <span className="text-slate-400 md:hidden">•</span>
                    <a href="#" className="text-slate-700 hover:text-slate-900 font-medium transition-colors">
                    Twitter
                    </a>
                    <span className="text-slate-400 md:hidden">•</span>
                    <a href="#" className="text-slate-700 hover:text-slate-900 font-medium transition-colors">
                    LinkedIn
                    </a>
                </div>
            </div>
            
            <div className="hidden md:flex flex-col space-y-3">
                <h3 className="lg:text-lg font-semibold tracking-wider text-slate-900 uppercase">
                    Product
                </h3>
                <ul className="space-y-3 lg:text-md font-medium text-slate-500">
                    <li>
                    <a href="#" className="hover:text-slate-900 transition-colors">
                        Home
                    </a>
                    </li>
                    <li>
                    <a href="#" className="hover:text-slate-900 transition-colors">
                        Technologies
                    </a>
                    </li>
                    <li>
                    <a href="#" className="hover:text-slate-900 transition-colors">
                        Projects
                    </a>
                    </li>
                </ul>
            </div>
            <div className="hidden md:flex flex-col space-y-3">
                <h3 className="lg:text-lg font-semibold tracking-wider text-slate-900 uppercase">
                    Company
                </h3>
                <ul className="space-y-3 lg:text-md font-medium text-slate-500">
                    <li>
                    <a href="#" className="hover:text-slate-900 transition-colors">
                        About
                    </a>
                    </li>
                    <li>
                    <a href="#" className="hover:text-slate-900 transition-colors">
                        Contact
                    </a>
                    </li>
                    <li>
                    <a href="#" className="hover:text-slate-900 transition-colors">
                        Careers
                    </a>
                    </li>
                </ul>
            </div>
            <div className="hidden md:flex flex-col space-y-3">
                <h3 className="lg:text-lg font-semibold tracking-wider text-slate-900 uppercase">
                    Legal
                </h3>
                <ul className="space-y-3 lg:text-md font-medium text-slate-500">
                    <li>
                    <a href="#" className="hover:text-slate-900 transition-colors">
                        Privacy Policy
                    </a>
                    </li>
                    <li>
                    <a href="#" className="hover:text-slate-900 transition-colors">
                        Terms of Service
                    </a>
                    </li>
                </ul>
            </div>
        </div> 
        <div className="divider"></div>
        <div className="border-t border-gray-100 py-6">
            <div className="container mx-auto px-4 flex flex-row justify-between items-center text-slate-400 text-xs sm:text-sm">
                <p>© 2026 Dev Stack. All rights reserved.</p>
                <div className="flex items-center space-x-4 sm:space-x-6">
                <a href="#" className="hover:text-slate-600 transition-colors">Privacy</a>
                <a href="#" className="hover:text-slate-600 transition-colors">Terms</a>
                </div>
            </div>
        </div>
        
    </div>
  )
}