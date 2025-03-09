import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const [submitted, setSubmitted] = useState(false);

const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('https://formspree.io/f/mrbpzwdn', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    setFormData({ name: '', email: '', message: '' });
    setSubmitted(true);
  setTimeout(() => setSubmitted(false), 3000); // Hide after 3s
  };

  return (
    <section className="min-h-screen bg-gray-900 py-16 flex items-center justify-center">
      <div className="max-w-lg w-full mx-auto p-6 bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-purple-400 text-center mb-6">Get in Touch</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 w-full p-3 bg-gray-700 text-white rounded-md focus:ring-2 focus:ring-purple-600 focus:outline-none"
              placeholder="Your Name"
              required
            />
          </div>
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 w-full p-3 bg-gray-700 text-white rounded-md focus:ring-2 focus:ring-purple-600 focus:outline-none"
              placeholder="your.email@example.com"
              required
            />
          </div>
          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="mt-1 w-full p-3 bg-gray-700 text-white rounded-md focus:ring-2 focus:ring-purple-600 focus:outline-none"
              rows="4"
              placeholder="How can we help you?"
              required
            />
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-purple-600 rounded-md text-white font-semibold hover:bg-purple-700 transition"
          >
            Send Message
          </button>
        </form>
        {submitted && (
  <p className="text-green-400 text-center mt-4">Message sent successfully!</p>
)}
      </div>
    </section>
  );
}

export default Contact;