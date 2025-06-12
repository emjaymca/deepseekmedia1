import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function About({ id }) {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const stats = [
        { value: '10K+', label: 'Media Assets Created' },
        { value: '95%', label: 'Customer Satisfaction' },
        { value: '24/7', label: 'AI Support' },
    ];

    return (
        <motion.section
            id={id}
            ref={ref}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="py-20 bg-gradient-to-b from-gray-900 to-gray-800"
        >
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-block px-4 py-1 bg-blue-900/50 text-blue-400 rounded-full text-sm font-medium mb-4"
                    >
                        ABOUT US
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-4xl font-bold text-white mb-6"
                    >
                        Transforming Ideas into <span className="text-blue-400">Visual Reality</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <div className="relative h-80 md:h-96 bg-gray-800 rounded-xl overflow-hidden shadow-2xl">
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 to-transparent"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-xl text-white font-medium">Our Story</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="space-y-6"
                    >
                        <h3 className="text-2xl font-semibold text-white">Our Mission</h3>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            At DeepseekMedia, we're revolutionizing content creation with artificial intelligence. Our mission is to empower creators, businesses, and dreamers by providing cutting-edge AI tools that turn ideas into captivating media—faster, smarter, and better than ever before.
                        </p>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            We envision a world where everyone has access to limitless creative potential. By harnessing the power of AI, we aim to break down barriers, spark innovation, and redefine digital storytelling for the modern age.
                        </p>
                    </motion.div>
                </div>

                {/* Stats Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
                >
                    {stats.map((stat, idx) => (
                        <div key={idx} className="bg-gray-800 border border-gray-700 p-8 rounded-xl text-center">
                            <div className="text-4xl font-bold text-blue-400 mb-2">{stat.value}</div>
                            <div className="text-gray-300">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>

                {/* Team Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <h3 className="text-2xl font-semibold text-white text-center mb-12">Our Team</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { name: "Jane Doe", role: "AI Lead" },
                            { name: "John Smith", role: "Content Strategist" },
                            { name: "Alex Lee", role: "Developer" },
                        ].map((member, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ duration: 0.5, delay: 0.7 + idx * 0.1 }}
                                className="bg-gray-800 border border-gray-700 p-6 rounded-xl text-center"
                            >
                                <div className="w-24 h-24 bg-gray-700 rounded-full mx-auto mb-4"></div>
                                <h4 className="text-xl font-semibold text-blue-400">{member.name}</h4>
                                <p className="text-gray-300">{member.role}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
}

export default About;