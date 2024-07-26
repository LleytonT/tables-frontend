import React, { useState } from "react";
import Navbar from "./Navbar";

const Register: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const questions = [
    "Describe yourself however you want to!",
    "What kind of things do you work on?",
    "What are you thinking about right now?",
  ];

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <h1 className="text-6xl font-bold my-4 text-center">
        make Tables yours.
      </h1>
      <div className="flex justify-center items-center flex-grow">
        <div className="flex flex-col w-2/3 p-4 bg-white rounded-lg shadow-md">
          <div className="flex justify-around mb-4">
            {questions.map((question, index) => (
              <button
                key={index}
                className={`p-2 rounded ${
                  activeTab === index ? "bg-black text-white" : "bg-gray-200"
                }`}
                onClick={() => setActiveTab(index)}
              >
                Step {index + 1}
              </button>
            ))}
          </div>
          <span className="text-xl font-semibold mb-2">
            {questions[activeTab]}
          </span>
          <textarea
            className="h-60 p-2 border-solid text-black rounded outline-none border-2 border-gray-300 w-full resize-none"
            wrap="soft"
          />
        </div>
      </div>
      <button className="button fixed bottom-4 right-4">Done</button>
    </div>
  );
};

export default Register;
