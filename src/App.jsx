import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

function App() {
    return (
        <div className="bg-gray-900 text-white">
            <Navbar />
            <Hero id="home" />
            <Features id="features" />
            <About id="about" />
            <Contact id="contact" />
            <Footer />
        </div>
    );
}

export default App;