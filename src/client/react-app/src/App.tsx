import React from 'react';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Echo from './components/Echo';
import Footer from './components/Footer';
import Header from './components/Header';
import TopBar from './components/TopBar';
import Services from './components/Services';

function App() {
  return (
    <div className="text-center text-black dark:text-white bg-zinc-900 min-h-screen">
      <TopBar />
      <div className="flex flex-col justify-center items-center">
        <Header />
        <div className="flex flex-wrap justify-center items-center">
          <About />
          <Echo />
          <Services />
        </div>
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
