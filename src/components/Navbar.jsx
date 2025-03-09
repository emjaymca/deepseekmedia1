import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="sticky top-0 bg-gray-800 p-4 shadow-lg">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-purple-400">
          Deepseek Media
        </Link>
        <div className="space-x-6">
          <Link to="/" className="hover:text-purple-400 transition">
            Home
          </Link>
          <Link to="/features" className="hover:text-purple-400 transition">
            Features
          </Link>
          <Link to="/about" className="hover:text-purple-400 transition">
            About
          </Link>
          <Link to="/contact" className="hover:text-purple-400 transition">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
