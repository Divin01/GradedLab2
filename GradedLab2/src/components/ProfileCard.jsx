import React from 'react';
import '../styles/ProfileCard.css';

const ProfileCard = ({ name, title, image, bio, email }) => {
  return (
    <div className="profile-card">
      <div className="card-header">
        <img src={image} alt={`${name}'s profile`} className="profile-image" />
      </div>
      <div className="card-body">
        <h2>{name}</h2>
        <h4>{title}</h4>
        <p className="bio">{bio}</p>
        <p className="email">{email}</p>
      </div>
    </div>
  );
};

export default ProfileCard;