// import { motion } from 'framer-motion';

// function Features() {

//   const features = [
//     {
//       title: 'Email AI Agents',
//       description: 'Build AI agents to effectivly manage emails from customers',
//     },
//     {
//       title: 'Instagram Reels Creation',
//       description: 'Craft scroll-stopping Reels with AI-driven animations and trends.',
//       image:'/images/screen1.jpg'
//     },
//     {
//       title: 'YouTube Video Generation',
//       description: 'Produce engaging videos with AI-enhanced editing and scripts.',
//     },
//   ];

//   return (
//     <section className="py-16 bg-gray-800">
//       <div className="max-w-6xl mx-auto text-center">
//         <h2 className="text-4xl font-bold text-purple-400 mb-12">Features</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
//           {features.map((feature, idx) => (
//             <motion.div
//               key={idx}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: idx * 0.2 }}
//               className="bg-gray-700 p-6 rounded-lg shadow-lg"
//             >
//               {/* Feature Card */}
//               <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
//               <p className="text-gray-300">{feature.description}</p>

//               {/* Animated Mockups for Reels and YouTube */}
//               {feature.title === 'Instagram Reels Creation' && (
//                 <motion.div
//                   className="mt-6 relative w-32 h-56 mx-auto bg-gray-900 rounded-lg overflow-hidden"
//                   animate={{ y: [0, -10, 0] }}
//                   transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
//                   whileHover={{ scale: 1.1 }}
//                 >
//                   <div className="absolute inset-0 bg-gradient-to-t from-purple-600 to-transparent opacity-50"></div>
//                   <div className="absolute top-2 left-2 right-2 h-40 bg-gray-800 rounded-md"></div>
//                   <p className="absolute bottom-2 text-center w-full text-xs text-white">Reels</p>
//                   <img src="/images/screen1.jpg" alt="Reels" className="absolute top-2 left-2 right-2 h-40 object-cover rounded-md" />
//                 </motion.div>
//               )}
//               {feature.title === 'YouTube Video Generation' && (
//                 <motion.div
//                   className="mt-6 relative w-48 h-28 mx-auto bg-gray-900 rounded-lg overflow-hidden"
//                   animate={{ scale: [1, 1.05, 1] }}
//                   transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
//                   whileHover={{ scale: 1.1 }}
//                 >
//                   <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-transparent opacity-50"></div>
//                   <div className="absolute top-2 left-2 right-2 bottom-2 bg-gray-800 rounded-md"></div>
//                   <p className="absolute bottom-1 text-center w-full text-xs text-white">YouTube</p>
//                 </motion.div>
//               )}
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Features;

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaImage, FaVideo, FaInstagram, FaYoutube, FaTwitter, FaRobot } from 'react-icons/fa';

function Features({ id }) {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const features = [
        {
            icon: <FaRobot className="text-blue-400 text-4xl mb-4" />,
            title: 'AI Content Generation',
            description: 'Create high-quality content for all your media needs with our advanced AI tools.',
        },
        {
            icon: <FaImage className="text-blue-400 text-4xl mb-4" />,
            title: 'Image Enhancement',
            description: 'Transform ordinary photos into stunning visuals with our AI image processing.',
        },
        {
            icon: <FaVideo className="text-blue-400 text-4xl mb-4" />,
            title: 'Video Creation',
            description: 'Generate professional videos from text prompts or enhance your existing footage.',
        },
        {
            icon: <FaInstagram className="text-blue-400 text-4xl mb-4" />,
            title: 'Social Media Content',
            description: 'Create engaging posts and stories optimized for maximum engagement.',
        },
        {
            icon: <FaYoutube className="text-blue-400 text-4xl mb-4" />,
            title: 'YouTube Optimization',
            description: 'Generate thumbnails, descriptions, and tags that boost your video performance.',
        },
        {
            icon: <FaTwitter className="text-blue-400 text-4xl mb-4" />,
            title: 'Tweet Generation',
            description: 'Create viral-worthy tweets and thread content that drives engagement.',
        },
    ];

    return (
        <motion.section
            id={id}
            ref={ref}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="py-20 bg-gray-900"
        >
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-block px-4 py-1 bg-blue-900/50 text-blue-400 rounded-full text-sm font-medium mb-4"
                    >
                        POWERFUL FEATURES
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-4xl font-bold text-white mb-6"
                    >
                        Everything You Need for <span className="text-blue-400">AI Media Creation</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="max-w-3xl mx-auto text-gray-300 text-lg"
                    >
                        Our platform provides all the tools you need to create professional media content using the latest AI technology.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                            className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 hover:border-blue-500 transition-all duration-300"
                        >
                            <div className="text-center">
                                {feature.icon}
                                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                                <p className="text-gray-300">{feature.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
                
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="mt-16 text-center"
                >
                    <a href="#contact">
                        <button className="px-8 py-4 bg-blue-600 rounded-md text-lg font-medium hover:bg-blue-700 transition shadow-lg shadow-blue-500/20">
                            Start Creating Now
                        </button>
                    </a>
                </motion.div>
            </div>
        </motion.section>
    );
}

export default Features;