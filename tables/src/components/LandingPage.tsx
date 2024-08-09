import React, { useEffect, useState } from "react";
import "./pageclip.css";
import Typewriter from "typewriter-effect";
import Navbar from "./Navbar";

const LandingPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s.pageclip.co/v1/pageclip.js";
    script.charset = "utf-8";
    document.body.appendChild(script);

    return () => {
      // Cleanup the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  const searchTerm = [
    "Anyone here making flying cars?",
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

  const joinWaitlist = () => {
    return (
      <>
        <h2 className="text-4xl text-center font-bold text-gray-900 py-4 mt-24">
          Join Our Waitlist
        </h2>

        <p className="text-lg mt-4">Drop your email.</p>
        <p className="text-lg mt-2">We'll let you know when we're ready!</p>

        <form
          action="https://send.pageclip.co/FzLh5buxmmEsLZ1slQfz7xaoiNd8MW0a/waitlist"
          className="pageclip-form"
          method="post"
        >
          <div className="flex flex-col justify-center">
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-80 h-10 border-solid border-2 border-black rounded shadow-sm text-black bg-white mt-2"
              placeholder=" Name"
              required
            />
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-80 h-10 border-solid border-2 border-black rounded shadow-sm text-black bg-white mt-2"
              placeholder=" Email"
              required
            />
            <button
              type="submit"
              className="w-80 h-10 bg-black text-white rounded mt-2 pageclip-form__submit"
            >
              <span>Submit</span>
            </button>
          </div>
        </form>
      </>
    );
  };

  const Modal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
    isOpen,
    onClose,
  }) => {
    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white p-8 rounded shadow-lg relative z-60">
          <button
            className="absolute top-2 right-2 text-gray-600"
            onClick={onClose}
          >
            &times;
          </button>
          {joinWaitlist()}
        </div>
      </div>
    );
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center items-center mt-32">
        <h1 className="text-6xl font-bold mb-4 text-center">
          The Community For{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500">
            Creators
          </span>
        </h1>

        <p className="text-center mb-4 flex justify-center items-center">
          Backed by
          <span className="inline-block align-middle ml-2">
            <img
              src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31"
              alt="Logo"
              className="h-6 inline-block align-middle"
            />
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
                      typewriter
                        .changeDelay(50)
                        .typeString(search)
                        .pauseFor(2000)
                        .changeDeleteSpeed(25)
                        .deleteAll()
                        .start();
                    });
                  }}
                />
              </div>

              {/* Waitlist Button */}
              <button
                onClick={() => setIsModalOpen(true)}
                className="fixed bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg z-10"
              >
                Join Waitlist
              </button>

              {/* Modal */}
              <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
              />

              {/* Static text for mobile */}
              <div className="block md:hidden">
                <p className="text-center">Search anything</p>
              </div>
            </div>
          </div>
          <p className="text-lg text-center">
            Say goodbye to endless searching and hello to finding the perfect
            match. Tables has an AI-powered search engine to connect you to the
            community and projects that matter to you.
          </p>
        </div>

        <section className="py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-14 text-center">
              <h2 className="text-4xl text-center font-bold text-gray-900 py-5">
                Features
              </h2>
              <p className="text-lg font-normal text-gray-500 max-w-md md:max-w-2xl mx-auto">
                You focus on what you do best, we'll handle the rest.
              </p>
            </div>
            <div className="flex justify-center items-center gap-x-5 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
              <div className="relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/4">
                <div className="bg-pink-50 rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 group-hover:bg-pink-600">
                  <svg
                    className="stroke-pink-600 transition-all duration-500 group-hover:stroke-white"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 2H14L20 8V22C20 22.5523 19.5523 23 19 23H5C4.44772 23 4 22.5523 4 22V4C4 2.89543 4.89543 2 6 2Z"
                      stroke=""
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M14 2V8H20"
                      stroke=""
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M16 13H8"
                      stroke=""
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M16 17H8"
                      stroke=""
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M10 9H8"
                      stroke=""
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </div>
                <h4 className="text-lg font-medium text-gray-900 mb-3 capitalize">
                  Portfolios
                </h4>
                <p className="text-sm font-normal text-gray-500">
                  Auto-generated custom portfolios
                </p>
              </div>
              <div className="relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/4">
                <div className="bg-orange-50 rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 group-hover:bg-orange-600">
                  <svg
                    className="stroke-orange-600 transition-all duration-500 group-hover:stroke-white"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.5 7.5C2.5 4.73858 4.73858 2.5 7.5 2.5C10.2614 2.5 12.5 4.73858 12.5 7.5C12.5 10.2614 10.2614 12.5 7.5 12.5C4.73858 12.5 2.5 10.2614 2.5 7.5Z"
                      stroke=""
                      stroke-width="2"
                    ></path>
                    <path
                      d="M2.5 22.5C2.5 20.143 2.5 18.9645 3.23223 18.2322C3.96447 17.5 5.14298 17.5 7.5 17.5C9.85702 17.5 11.0355 17.5 11.7678 18.2322C12.5 18.9645 12.5 20.143 12.5 22.5C12.5 24.857 12.5 26.0355 11.7678 26.7678C11.0355 27.5 9.85702 27.5 7.5 27.5C5.14298 27.5 3.96447 27.5 3.23223 26.7678C2.5 26.0355 2.5 24.857 2.5 22.5Z"
                      stroke=""
                      stroke-width="2"
                    ></path>
                    <path
                      d="M17.5 7.5C17.5 5.14298 17.5 3.96447 18.2322 3.23223C18.9645 2.5 20.143 2.5 22.5 2.5C24.857 2.5 26.0355 2.5 26.7678 3.23223C27.5 3.96447 27.5 5.14298 27.5 7.5C27.5 9.85702 27.5 11.0355 26.7678 11.7678C26.0355 12.5 24.857 12.5 22.5 12.5C20.143 12.5 18.9645 12.5 18.2322 11.7678C17.5 11.0355 17.5 9.85702 17.5 7.5Z"
                      stroke=""
                      stroke-width="2"
                    ></path>
                    <path
                      d="M17.5 22.5C17.5 19.7386 19.7386 17.5 22.5 17.5C25.2614 17.5 27.5 19.7386 27.5 22.5C27.5 25.2614 25.2614 27.5 22.5 27.5C19.7386 27.5 17.5 25.2614 17.5 22.5Z"
                      stroke=""
                      stroke-width="2"
                    ></path>
                  </svg>
                </div>
                <h4 className="text-lg font-medium text-gray-900 mb-3 capitalize">
                  App Integrations
                </h4>
                <p className="text-sm font-normal text-gray-500">
                  We work with your existing apps. Just connect and share
                </p>
              </div>
              <div className="relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/4">
                <div className="bg-teal-50 rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 group-hover:bg-teal-600">
                  <svg
                    className="stroke-teal-600 transition-all duration-500 group-hover:stroke-white"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="12"
                      cy="7"
                      r="4"
                      stroke=""
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></circle>
                    <path
                      d="M6 21V19C6 16.7909 7.79086 15 10 15H14C16.2091 15 18 16.7909 18 19V21"
                      stroke=""
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </div>
                <h4 className="text-lg font-medium text-gray-900 mb-3 capitalize">
                  Community
                </h4>
                <p className="text-sm font-normal text-gray-500">
                  Find others working on projects that resonate with you.
                </p>
              </div>
              <div className="relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/4">
                <div className="bg-indigo-50 rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 group-hover:bg-indigo-600">
                  <svg
                    className="stroke-indigo-600 transition-all duration-500 group-hover:stroke-white"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 7H20C21.1046 7 22 7.89543 22 9V19C22 20.1046 21.1046 21 20 21H4C2.89543 21 2 20.1046 2 19V9C2 7.89543 2.89543 7 4 7Z"
                      stroke=""
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M16 3H8C6.89543 3 6 3.89543 6 5V7H18V5C18 3.89543 17.1046 3 16 3Z"
                      stroke=""
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M2 13H22"
                      stroke=""
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </div>
                <h4 className="text-lg font-medium text-gray-900 mb-3 capitalize">
                  Jobs
                </h4>
                <p className="text-sm font-normal text-gray-500">
                  Find talent. Be Found.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="mb-16"></div>
      </div>
    </>
  );
};

export default LandingPage;
