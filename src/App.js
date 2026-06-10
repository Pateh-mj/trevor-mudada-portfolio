import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Research from './components/Research';
import ParallaxBanner from './components/ParallaxBanner';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Training from './components/Training';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Research />
        <ParallaxBanner />
        <Skills />
        <Projects />
        <Training />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
