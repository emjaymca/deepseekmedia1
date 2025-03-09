function Features() {
    const features = [
      { title: "AI Blog Writer", desc: "Generate SEO-optimized blogs in seconds." },
      { title: "Video Scripts", desc: "Craft engaging scripts with AI precision." },
      { title: "Social Media", desc: "Create viral posts effortlessly." },
    ];
  
    return (
      <section className="py-16 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-purple-500/50 transition">
              <h3 className="text-2xl font-semibold text-purple-400">{feature.title}</h3>
              <p className="mt-2">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default Features;  