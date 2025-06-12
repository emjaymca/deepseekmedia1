import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Hero({ id }) {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    return (
        <motion.section
            id={id}
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-center px-4 py-20"
        >
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="mb-6"
                >
                    <span className="inline-block px-4 py-1 bg-blue-900/50 text-blue-400 rounded-full text-sm font-medium mb-4">
                        AI-POWERED MEDIA CREATION
                    </span>
                </motion.div>
                
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-7xl font-bold mb-6"
                >
                    Create Amazing <span className="text-blue-400">Media Content</span> With AI
                </motion.h1>
                
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-4 text-xl md:text-2xl max-w-3xl mx-auto text-gray-300"
                >
                    Transform your ideas into stunning videos, images, and social media content with our powerful AI tools.
                </motion.p>
                
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
                >
                    <a href="#contact">
                        <button className="px-8 py-4 bg-blue-600 rounded-md text-lg font-medium hover:bg-blue-700 transition shadow-lg shadow-blue-500/20">
                            Get Started
                        </button>
                    </a>
                    <a href="#features">
                        <button className="px-8 py-4 bg-gray-800 border border-gray-700 rounded-md text-lg font-medium hover:bg-gray-700 transition">
                            Learn More
                        </button>
                    </a>
                </motion.div>
                
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="mt-16"
                >
                    <div className="relative mx-auto w-full max-w-4xl h-64 md:h-80 bg-gray-800 rounded-lg shadow-2xl overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-xl text-white font-medium">AI Media Creation Platform</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
}

export default Hero;
