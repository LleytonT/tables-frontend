import React, {useEffect, useState} from "react";
import "./pageclip.css";
import Typewriter from 'typewriter-effect';
import { NavBar } from "./Navbar";

const LandingPage: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://s.pageclip.co/v1/pageclip.js";
    script.charset = "utf-8";
    document.body.appendChild(script);

    return () => {
      // Cleanup the script when the component unmounts
      document.body.removeChild(script);
    };
  }, [])

  const searchTerm = [
    "Anyone here making flying cars",
    "Inspiration for an awesome Cyber Security Project",
    "Anyone developing VR games using the MetaQuest",
    "Looking for a blockchain expert for a fintech project",
    "Security Engineers in Sydney",
    "Collaborators needed for a documentary film project",
    "Anyone experienced in sustainable product design?",
    "Looking for an app developer for my startup",
    "Anyone here working on a new social media platform",
    "Looking for a co-founder for my startup",
    "Who can help me improve the storytelling aspect of my pitch?",
  ];

  return (
    <>
    <NavBar />
    <div className="flex flex-col justify-center items-center mt-32" >
    <h1 className="text-6xl font-bold mb-4 text-center">
  The Community For <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500">Creators</span>
</h1>

      <p className="text-center mb-4 flex justify-center items-center">
        Backed by
        <span className="inline-block align-middle ml-2">
          <img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31" alt="Logo" className="h-6 inline-block align-middle" />
        </span>
      </p>

      <div className="w-1/2">
        <div className="p-2 border-2 border-dashed border-blue-500 rounded-lg">
          <div>
            {/* Typewriter effect for desktop */}
            <div className="hidden md:block">
              <Typewriter
                options={{ loop: true }}
                onInit={(typewriter) => {
                  searchTerm.forEach((search) => {
                    typewriter.changeDelay(50).typeString(search).pauseFor(2000).changeDeleteSpeed(25).deleteAll().start();
                  });
                }}
              />
            </div>
        
            {/* Static text for mobile */}
            <div className="block md:hidden">
              <p className="text-center">Search anything</p>
            </div>
          </div>
        </div>
        <p className="text-lg mt-4 mb-8" style={{ textAlign: 'center' }}>
        Say goodbye to endless searching and hello to finding the perfect match. Tables has an AI-powered search engine to connect you to the community and projects that matter to you.
        </p>
      </div>

      <p className="text-lg mt-4">Drop your email.</p>
      <p className="text-lg mt-2">We'll let you know when we're ready!</p>

      <form 
      action="https://send.pageclip.co/FzLh5buxmmEsLZ1slQfz7xaoiNd8MW0a/waitlist" 
      className="pageclip-form" 
      method="post">
        <div className="flex flex-col justify-center" >
            <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} className="w-80 h-10 border-solid border-2 border-black rounded shadow-sm text-black bg-white mt-2" placeholder=" Name" required />
            <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-80 h-10 border-solid border-2 border-black rounded shadow-sm text-black bg-white mt-2" placeholder=" Email" required />
            <button type="submit" className="w-80 h-10 bg-black text-white rounded mt-2 pageclip-form__submit">
              <span>Submit</span>
            </button>
        </div>
      </form>

    </div>
    </>
  );
};

export default LandingPage;