import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-gray-900 to-blue-900 text-center">
      <h1 className="text-5xl md:text-7xl font-bold animate-fade-in">
        Unleash Creativity with <span className="text-purple-400">AI</span>
      </h1>
      <p className="mt-4 text-xl md:text-2xl max-w-2xl">
        Transform ideas into stunning content with our AI-powered tools.
      </p>
      <Link to="/contact">
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="mt-8 px-6 py-3 bg-purple-600 rounded-full text-lg hover:bg-purple-700 transition"
        >
          Try It Now
        </motion.button>
      </Link>
    </section>
  );
}

<motion.h1
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  className="text-5xl md:text-7xl font-bold"
>
  Unleash Creativity with <span className="text-purple-400">AI</span>
</motion.h1>;
export default Hero;
