// src/components/Chat.tsx
import React, { useState } from 'react';
import ProfileCard from './ProfileCard';

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<{ text: string; isUserMessage: boolean }[]>([]);
  const [input, setInput] = useState<string>('');
  const [profiles, setProfiles] = useState<Profile[]>([]);

  type Profile = {
    name: string;
    profile: string;
    type: string,
    image: string;
  };


  const fetchResponse = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/query?query=${input}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.text();
      console.log(data);

      const jsonArrayRegex = /^\[.*?\]\s*/;

      // Extract JSON part from the text
      const jsonMatch = data.match(jsonArrayRegex);
      let jsonObject = null;
      let remainingText = data;

      if (jsonMatch) {
        const jsonString = jsonMatch[0];
        jsonObject = JSON.parse(jsonString);
        remainingText = data.slice(jsonString.length);        
      }
      console.log(jsonObject);
      setProfiles(jsonObject);
      console.log(profiles);
      setMessages(currentMessages => [...currentMessages, { text: remainingText, isUserMessage: false }]);

    } catch (error) {
      console.error("Failed to fetch: ", error);
    }
  };

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages(currentMessages => [...currentMessages, { text: input, isUserMessage: true }]);
      setInput('');
    }
    fetchResponse();
    console.log(messages);
  };

  return (
    <div className="w-3/4 h-screen bg-gray-100 p-6 flex flex-col">
      <div className="flex">
        <input
          type="text"
          className="flex-1 p-3 border border-gray-300 rounded-l mb-2"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Who can I talk to to learn more about the Peter Farrell Cup?"
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSendMessage();
            }
          }}
        />
      </div>
      <div className="flex-grow py-4 flex-nowrap">
        <div className="flex space-x-4 justify-center h-full">
          {profiles.map((profile, index) => (
            <ProfileCard key={index} name={profile.name} profile={profile.profile} type={profile.type} image={profile.image} />
          ))}
        </div>
      </div>
      <div className="flex-none overflow-auto mb-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-4 rounded shadow mb-2 ${
              msg.isUserMessage ? 'ml-12 bg-blue-100' : 'mr-12 bg-gray-100'
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      
    </div>
  );
}

export default Chat;