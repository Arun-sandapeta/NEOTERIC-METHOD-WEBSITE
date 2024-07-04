import React from "react";
import "./Services.css";
import ClassroomTraining from "../../assets/Services/ClassroomTraining.svg";
import ProjectTraining from "../../assets/Services/ProjectTraining.svg";
import Javafullstack from "../../assets/Services/Javafullstack.svg";
import SpecialBatches from "../../assets/Services/SpecialBatches.svg";
import CorporateTraining from "../../assets/Services/CorporateTraining.svg";
import DataCard from '../../utilities/CommonComponents/DataCard/DataCard';

export const Services = ({ Mode }) => {
  const cardData = [
    {
      cardType: "imageLeft",
      imageSource: ClassroomTraining,
      heading: "Classroom Training",
      content: "Embark on an enriching journey with our Classroom Training program. Immerse yourself in a vibrant educational setting, guided by industry experts. Acquire practical insights and cultivate collaborative knowledge-sharing. Enhance your skills through hands-on training, gearing up for success in the constantly evolving professional landscape",
      buttonLabel: "Join internship"
    },
    {
      cardType: "imageRight",
      imageSource: ProjectTraining,
      heading: "Project Training",
      content: "Experience top-notch training with live projects, offering real-time exposure for unparalleled learning. Our Java project training goes beyond theory, focusing on practical application in Java-based projects. Participants gain hands-on experience, honing problem-solving, teamwork, and project management skills, equipping them for success in Java development and related professional challenges.",
    },
    {
      cardType: "imageLeft",
      imageSource: Javafullstack,
      heading: "Java Fullstack",
      content: "Embrace excellence in Java Fullstack development with Neoteric Methods, harmoniously integrating both frontend and backend technologies. Enhance user experiences, optimize performance, and deliver robust solutions tailored for a dynamic and modern development landscape.",
      buttonLabel: "Enroll"
    },
    {
      cardType: "imageRight",
      imageSource: SpecialBatches,
      heading: "Special Batches",
      content: "Embark on an innovative journey with Neoteric Method’s Exclusive Special Batches! Boost your expertise in Java Full Stack development with individualized coaching, practical projects, and a tailor-made curriculum. Become part of our professional community, unlock your full potential through our specialized approach, and stand out in the ever-evolving tech landscape. Enroll now to sculpt your future with Neoteric Method’s steadfast commitment to excellence and personalized learning experiences designed for corporate success.",
     
    },
    {
      cardType: "imageLeft",
      imageSource: CorporateTraining,
      heading: "Corporate Training",
      content: "Corporate training involves a methodical approach where organizations offer employees structured learning opportunities to augment their skills, knowledge, and competencies. Geared towards enhancing both individual and collective performance, corporate training is designed to align with organizational goals, promoting professional development and adaptability in the dynamic business environment to ensure sustained success.",
    
    }
  ];

  return (
    <>
    <div class="hero">
        <h1 className="header">Crafting your IT Success <br/>
        <span>Story</span> </h1>
        <p className="text-main">Experience our premium services at neoteric METHOD, where innovation meets expertise, sculpting personalized solutions to shape your journey towards unparalleled success in the dynamic world of information technology</p>
        <a href="#" class="callback-btn">Request a Callback</a>
    </div>

<div className="NM-neo">
    <div className="NM-method">
        <h2 className="story" >Neoteric Method</h2>
        <p className="text">Embark on a transformative educational journey in software at neoteric METHOD, where our emblem symbolizes forward-thinking learning. Immerse yourself in cutting-edge technologies, AI applications, and top-tier software solutions. Participate in hands-on training, receive expert guidance, and confidently shape the future of technology under our corporate mentorship.</p>
    </div>
    </div>
    {/* <a href="https://wa.me/1234567890" target="_blank">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" class="whatsapp-icon"/>
    </a> */}

      <DataCard cardData={cardData} />

    <div className="NM-container">
      <h1 style={{color:"#F4BF7D"}}>We provide two choices for sessions</h1>
      
      <div className="sessions-Box">
        <div className="session-1">
          <p>Join sessions at our dedicated venue, offering an alternative environment for an 
        optimal learning experience.</p>
        <div>
          <button type="button" class="btn btn-primary">Offline Sessions</button>
        </div>
        
        </div>
        <div className="session-2">
          <p>Convenient on-site sessions conducted at your office.</p>
        <div className="onsite-btn">
        <button type="button" class="btn btn-primary">On-site sessions</button>
        </div>
        </div>
        </div>
      
    </div>
    </>
  );
};

export default Services;
