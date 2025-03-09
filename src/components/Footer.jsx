import { FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-800 py-6 text-center text-white">
      <div className="max-w-6xl mx-auto">
        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://x.com/deepseekmedia"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400 hover:text-purple-600 transition"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://www.youtube.com/channel/UCtBQN9gsecFFB2Xzhkl2yQQ"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400 hover:text-purple-600 transition"
          >
            <FaYoutube size={24} />
          </a>
          <a
            href="https://www.instagram.com/deepseekmedia/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400 hover:text-purple-600 transition"
          >
            <FaInstagram size={24} />
          </a>
        </div>
        {/* Copyright */}
        <p>© 2025 Deepseek Media. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
