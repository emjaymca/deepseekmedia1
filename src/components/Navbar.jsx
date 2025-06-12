import { useState } from 'react';
import { motion } from 'framer-motion';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="sticky top-0 bg-gradient-to-r from-gray-900 to-gray-800 p-4 shadow-lg z-10">
            <div className="max-w-6xl mx-auto flex justify-between items-center">
                <a href="#home" className="text-2xl font-bold text-white">
                    <span className="text-blue-400">Deepseek</span>Media
                </a>
                
                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8">
                    <a href="#home" className="hover:text-blue-400 transition font-medium">Home</a>
                    <a href="#features" className="hover:text-blue-400 transition font-medium">Features</a>
                    <a href="#about" className="hover:text-blue-400 transition font-medium">About</a>
                    <a href="#contact" className="hover:text-blue-400 transition font-medium">Contact</a>
                </div>
                
                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-white focus:outline-none"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>
            
            {/* Mobile Menu */}
            {isMenuOpen && (
                <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="md:hidden mt-4"
                >
                    <div className="flex flex-col space-y-4 px-4 py-2">
                        <a href="#home" className="hover:text-blue-400 transition" onClick={() => setIsMenuOpen(false)}>Home</a>
                        <a href="#features" className="hover:text-blue-400 transition" onClick={() => setIsMenuOpen(false)}>Features</a>
                        <a href="#about" className="hover:text-blue-400 transition" onClick={() => setIsMenuOpen(false)}>About</a>
                        <a href="#contact" className="hover:text-blue-400 transition" onClick={() => setIsMenuOpen(false)}>Contact</a>
                    </div>
                </motion.div>
            )}
        </nav>
    );
}

export default Navbar;