import { FaTwitter, FaInstagram, FaYoutube, FaLinkedin, FaFacebook } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="bg-gray-900 border-t border-gray-800 pt-12 pb-6">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <h3 className="text-xl font-bold text-white mb-4">
                            <span className="text-blue-400">Deepseek</span>Media
                        </h3>
                        <p className="text-gray-400 mb-4">
                            Transforming ideas into stunning media content with the power of AI.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-blue-400 transition">
                                <FaTwitter size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-blue-400 transition">
                                <FaInstagram size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-blue-400 transition">
                                <FaYoutube size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-blue-400 transition">
                                <FaLinkedin size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-blue-400 transition">
                                <FaFacebook size={20} />
                            </a>
                        </div>
                    </div>
                    
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><a href="#home" className="text-gray-400 hover:text-blue-400 transition">Home</a></li>
                            <li><a href="#features" className="text-gray-400 hover:text-blue-400 transition">Features</a></li>
                            <li><a href="#about" className="text-gray-400 hover:text-blue-400 transition">About</a></li>
                            <li><a href="#contact" className="text-gray-400 hover:text-blue-400 transition">Contact</a></li>
                        </ul>
                    </div>
                    
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">AI Content Creation</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">Image Enhancement</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">Video Generation</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">Social Media Content</a></li>
                        </ul>
                    </div>
                    
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
                        <ul className="space-y-2">
                            <li className="text-gray-400">San Francisco, CA</li>
                            <li><a href="mailto:info@deepseekmedia.com" className="text-gray-400 hover:text-blue-400 transition">info@deepseekmedia.com</a></li>
                            <li><a href="tel:+1234567890" className="text-gray-400 hover:text-blue-400 transition">+1 (234) 567-890</a></li>
                        </ul>
                    </div>
                </div>
                
                <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-500 text-sm">© 2024 DeepseekMedia. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="text-gray-500 hover:text-blue-400 text-sm">Privacy Policy</a>
                        <a href="#" className="text-gray-500 hover:text-blue-400 text-sm">Terms of Service</a>
                        <a href="#" className="text-gray-500 hover:text-blue-400 text-sm">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;