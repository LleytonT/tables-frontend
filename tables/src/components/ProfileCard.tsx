import React from 'react';

const ProfileCard: React.FC<{ name: string, profile: string, type: string, image: string }> = ({ name, profile, type, image }) => {
  return (
    <div className="w-1/4 bg-gray-100 p-6 flex flex-col overflow-hidden rounded-lg outline mr-2 hover:scale-105 transition-transform duration-300">
      <div className="flex-1 flex flex-col overflow-hidden mb-4">
        <img src={image} alt="Profile Image" className="w-full h-auto mb-4" />
        <h2 className="text-2xl font-semibold mb-2">{name}</h2>
        <div className="flex-1 max-h-40 overflow-auto">
          <p className="text-gray-600">{profile}</p>
        </div>
      </div>
      <p className="text-gray-600">{type}</p>
    </div>
  );
}

export default ProfileCard;
