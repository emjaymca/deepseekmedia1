import { motion } from 'framer-motion';

function Features() {

  const features = [
    {
      title: 'Email AI Agents',
      description: 'Build AI agents to effectivly manage emails from customers',
    },
    {
      title: 'Instagram Reels Creation',
      description: 'Craft scroll-stopping Reels with AI-driven animations and trends.',
      image:'/images/screen1.jpg'
    },
    {
      title: 'YouTube Video Generation',
      description: 'Produce engaging videos with AI-enhanced editing and scripts.',
    },
  ];

  return (
    <section className="py-16 bg-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-purple-400 mb-12">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="bg-gray-700 p-6 rounded-lg shadow-lg"
            >
              {/* Feature Card */}
              <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>

              {/* Animated Mockups for Reels and YouTube */}
              {feature.title === 'Instagram Reels Creation' && (
                <motion.div
                  className="mt-6 relative w-32 h-56 mx-auto bg-gray-900 rounded-lg overflow-hidden"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-600 to-transparent opacity-50"></div>
                  <div className="absolute top-2 left-2 right-2 h-40 bg-gray-800 rounded-md"></div>
                  <p className="absolute bottom-2 text-center w-full text-xs text-white">Reels</p>
                  <img src="/images/screen1.jpg" alt="Reels" className="absolute top-2 left-2 right-2 h-40 object-cover rounded-md" />
                </motion.div>
              )}
              {feature.title === 'YouTube Video Generation' && (
                <motion.div
                  className="mt-6 relative w-48 h-28 mx-auto bg-gray-900 rounded-lg overflow-hidden"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-transparent opacity-50"></div>
                  <div className="absolute top-2 left-2 right-2 bottom-2 bg-gray-800 rounded-md"></div>
                  <p className="absolute bottom-1 text-center w-full text-xs text-white">YouTube</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;