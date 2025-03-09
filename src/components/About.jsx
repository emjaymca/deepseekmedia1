import { motion } from 'framer-motion';

function About() {
  return (
    <section className="min-h-screen bg-gray-900 py-16 flex items-center justify-center">
      {/* Animation Wrapper */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="max-w-4xl mx-auto px-6 text-white"
      >
        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-bold text-purple-400 text-center mb-12">
          About Deepseek Media
        </h2>

        {/* Mission Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-300 mb-4">
            Our Mission
          </h3>
          <p className="text-lg leading-relaxed">
            At Deepseek Media, we’re revolutionizing creativity with artificial
            intelligence. Our mission is to empower creators, businesses, and
            dreamers by providing cutting-edge AI tools that turn ideas into
            captivating content—faster, smarter, and better than ever before.
          </p>
        </div>

        {/* Vision Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-300 mb-4">
            Our Vision
          </h3>
          <p className="text-lg leading-relaxed">
            We envision a world where everyone has access to limitless creative
            potential. By harnessing the power of AI, we aim to break down
            barriers, spark innovation, and redefine storytelling for the
            digital age.
          </p>
        </div>

        {/* Team Section (Who We Are + Team Grid) */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-300 mb-4">
            Who We Are
          </h3>
          <p className="text-lg leading-relaxed mb-8">
            We’re a team of AI enthusiasts, developers, and content creators
            passionate about blending technology with imagination. Based in the
            future (and a little bit in 2025), we’re here to help you create
            what’s next.
          </p>
          {/* Team Grid */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { name: 'KM', role: 'Developer', img: '/images/1.jpg' },
                { name: 'MJ', role: 'Developer', img: '/images/2.jpg' },
              ].map((member, idx) => (
                <div key={idx} className="text-center">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4"
                  />
                  <h4 className="text-xl font-semibold text-purple-400">
                    {member.name}
                  </h4>
                  <p className="text-gray-300">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
