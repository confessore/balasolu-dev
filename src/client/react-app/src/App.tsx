import React from 'react';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Echo from './components/Echo';
import Login from './components/Login';
import Footer from './components/Footer';
import Header from './components/Header';
import TopBar from './components/TopBar';
import Services from './components/Services';
import Service from './components/Service';
import GlobeAmericasIcon from '@heroicons/react/24/outline/GlobeAmericasIcon';
import CodeBracketIcon from '@heroicons/react/24/outline/CodeBracketIcon';
import CakeIcon from '@heroicons/react/24/outline/CakeIcon';
import CloudIcon from '@heroicons/react/24/outline/CloudIcon';

function App() {
  return (
    <div className="text-center text-black dark:text-white bg-zinc-900 min-h-screen">
      <TopBar />
      <div className="flex flex-col justify-center items-center">
        <Header />
        <div className="flex flex-wrap justify-center items-center">
          <About />
          <Services />
          <Service icon={<GlobeAmericasIcon />} title="no more wordpress" highlight="we build our solutions from the ground up" description="when customer service and reliability mean everything, only the industry's best tools will do" />
          <Service icon={<CodeBracketIcon />} title="we write the code" highlight="your dreams become reality" description="because no not like that this is an example of text taking up space so just get used to a bunch of babbling nonsense taking up prime real estate" />
          <Service icon={<CakeIcon />} title="products that really take the cake" highlight="smashing our way through the competition" description="we're making things that no one else is making because we love doing what no one else does" />
          <Service icon={<CloudIcon />} title="your partner in the clouds" highlight="keeping your data available and reliable" description="with datacenters in every region, replication ensures that latency stays low while redudancy remains high" />
        </div>
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
