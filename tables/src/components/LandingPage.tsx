import React, {useEffect, useState} from "react";
import "./pageclip.css";
import Typewriter from 'typewriter-effect';

const NavBar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center h-16 text-black relative shadow-sm font-mono" role="navigation">
      <div className="pl-8">Tables</div>
      <button className="login mr-2"
      onClick={(e) => {
        console.log("Login button clicked")
      }}>
        Login</button>
    </nav>
  );
}


const LandingPage: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");

  const taglines = [
    "For what you want not who you want",
    "Build cool stuff with cool people",
    "Be interesting and find interesting people",
    "Find your crew, make it happen",
  ]

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

  const addStyles = (string : String) => {
    return `<span style="font-size: 18px; font-weight:bold">${string}</span>`
  }

  return (
    <>
    <NavBar />
    <div className="flex flex-col justify-center items-center h-screen" >
      <h1 className="text-8xl font-bold">Welcome to Tables </h1>

      <Typewriter
       onInit={(typewriter) => {
        typewriter
          .changeDelay(50)
          .typeString(addStyles("For what you want not who you want"))
          .pauseFor(2500)
          .deleteAll()
          .changeDeleteSpeed(25)
          .typeString(addStyles("Build cool stuff with cool people"))
          .pauseFor(2500)
          .deleteAll()
          .changeDelay(50)
          .changeDeleteSpeed(25)
          .typeString(addStyles("Be interesting and find interesting people"))
          .pauseFor(2500)
          .deleteAll()
          .changeDelay(50)
          .changeDeleteSpeed(25)
          .typeString(addStyles("Find your crew, make it happen"))
          .pauseFor(2500)
          .deleteAll()
          .changeDelay(50)
          .changeDeleteSpeed(25)
          .start();
       }}
        /* options={{
          strings: taglines,
          autoStart: true,
          loop: true,
          delay: 50,
          deleteSpeed: 25,
        }} */
      />
      <p className="text-lg mt-4">Drop your email.</p>
      <p className="text-lg mt-2">We'll let you know when we're ready!</p>
      <form action="https://send.pageclip.co/FzLh5buxmmEsLZ1slQfz7xaoiNd8MW0a/waitlist" className="pageclip-form" method="post">
        <div className="flex flex-col justify-center" >
            <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} className="w-80 h-10 border-solid border-2 border-black rounded shadow-sm text-black bg-white mt-2" placeholder=" Name"/>
            <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-80 h-10 border-solid border-2 border-black rounded shadow-sm text-black bg-white mt-2" placeholder=" Email"/>
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