import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { content } from './data/content';

function App() {
  const [lang, setLang] = useState('en');

  return (
    <div className="app">
      <Navbar lang={lang} setLang={setLang} content={content} />
      <Hero lang={lang} content={content} />
      <About lang={lang} content={content} />
      <Skills lang={lang} content={content} />
      <Projects lang={lang} content={content} />
      <Education lang={lang} content={content} />
      <Contact lang={lang} content={content} />
      <Footer lang={lang} content={content} />
    </div>
  );
}

export default App;
