import React, {useEffect, useState} from "react";
import "./pageclip.css";
import Typewriter from 'typewriter-effect';
import { Box, Card, CardMedia, Typography, CardContent } from "@mui/material";

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
// Project type
type Project = {
  title: string;
  description: string;
  image: string;
};

const projects: Project[] = [
  {
    title: "Charity App Design",
    description: "A cool app for charity I am making",
    image:
      "https://cdn.dribbble.com/userupload/15562546/file/original-d9d90a895950bdbceeb267f7b4959f09.png?resize=2048x1536",
  },
  {
    title: "Max Keller",
    description:
      "Take a look at new the design concept for the finance service. Thanks for your likes and comments!",
    image:
      "https://cdn.dribbble.com/userupload/5004767/file/original-27b957bc7c9afd213aa9aae9c7d94552.jpg?resize=2048x1536",
  },
  {
    title: "Online Banking App Design",
    description: "A bank that is always online.",
    image:
      "https://cdn.dribbble.com/userupload/3161675/file/original-1180ca7e5f0fad9505c763ece4d27de6.png?resize=2048x1536",
  },
  {
    title: "Harmony App",
    description: "sample app",
    image:
      "https://cdn.dribbble.com/userupload/15490398/file/original-b2c4ca3db2f9f22dce94ad8b9300a5a2.png?resize=2400x1800",
  },
  {
    title: "Harmony App",
    description: "sample app",
    image:
      "https://cdn.dribbble.com/userupload/11743954/file/original-9095ba50c038e3a143ebbdcf41cc6ead.png?resize=2048x1536",
  }
  // Add more projects here
];

const ProjectComponent: React.FC<{ project: Project }> = ({ project }) => {
  const isVideo = (url: string) => {
    return /\.(mp4|webm)$/i.test(url);
  };

  return (
      <Card style={{ width: 300, height: 300 }}>
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
          <div style={{ width: '100%', height: '100%' }}>
          <CardMedia
            sx={{ height: '100%' }}
            image={project.image}
            title={project.title}
          />
          </div>
          <CardContent style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            backgroundColor: 'black',
            color: 'white',
          }}>
            <Typography gutterBottom variant="h5" component="div" style={{ color: 'white' }}>
              {project.title}
            </Typography>
            <Typography variant="body2" style={{ color: 'white' }}>
              {project.description}
            </Typography>
          </CardContent>
        </div>
      </Card>
    );
};


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

  const addStyles = (string : String) => {
    return `<span style="font-size: 18px; font-weight:bold">${string}</span>`
  }

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
    <div className="flex flex-col justify-center items-center h-screen" >
      <h1 className="text-6xl font-bold mb-4">The Community For Creators</h1>
      <div style={{width: "50%"}}>
      <Box component="section" sx={{ p: 2, border: '2px dashed blue', borderRadius: 8}}>
          <Typewriter
          options={{loop: true}}
       onInit={(typewriter) => {
        searchTerm.forEach((search) => {
          typewriter.changeDelay(50).typeString(search).pauseFor(2000).changeDeleteSpeed(25).deleteAll().start();
        });
       }}
      />
      </Box>
        <p className="text-lg mt-4 mb-8" style={{ textAlign: 'center' }}>
        Say goodbye to endless searching and hello to finding the perfect match. Tables has an AI-powered search engine to connect you to the community and projects that matter to you.
        </p>
      </div>
    
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