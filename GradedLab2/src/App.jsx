import React from 'react';
import ProfileCard from './components/ProfileCard';

function App() {

  const teamMembers = [
    {
      name: "Divin Mathem's",
      title: "Full Stack Developer",
      image: "/me.png",
      bio: "A Full Stack Developer passionate about solving real-world problems and building impactful software solutions.",
      email: "divindaniel58@gmail.com"
    },
    {
      name: "Josiane Malkia",
      title: "Business Manager",
      image: "/josh.jpg",
      bio: "A Business Management graduate with a strong interest in strategy, leadership, and innovation.",
      email: "josianemwenge634@gmail.com"
    }
  ];

  return (
    <div className="cards-container">
      {teamMembers.map((member, index) => (
        <ProfileCard
          key={index}
          name={member.name}
          title={member.title}
          image={member.image}
          bio={member.bio}
          email={member.email}
        />
      ))}
    </div>
  );
}

export default App;