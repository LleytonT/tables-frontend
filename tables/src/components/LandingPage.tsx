import React from "react";

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
  return (
    <>
    <NavBar />
    <div className="flex flex-col justify-center items-center h-screen" >
      <h1 className="text-8xl font-bold">Welcome to Table </h1>
      <p className="text-lg mt-4">Put it all on the table and let them find you.</p>
      <button className="w-40 h-10 border-solid border-2 border-black rounded shadow-sm text-black bg-white ">
        Get Started
      </button>
    </div>
    </>
  );
};

export default LandingPage;