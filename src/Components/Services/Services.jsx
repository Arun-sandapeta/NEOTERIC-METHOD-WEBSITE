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
      heading: "Classroom Training",
      content: "Embark on an enriching journey with our Classroom Training program. Immerse yourself in a vibrant educational setting, guided by industry experts. Acquire practical insights and cultivate collaborative knowledge-sharing. Enhance your skills through hands-on training, gearing up for success in the constantly evolving professional landscape",
    },
    {
      cardType: "imageLeft",
      imageSource: Javafullstack,
      heading: "Classroom Training",
      content: "Embark on an enriching journey with our Classroom Training program. Immerse yourself in a vibrant educational setting, guided by industry experts. Acquire practical insights and cultivate collaborative knowledge-sharing. Enhance your skills through hands-on training, gearing up for success in the constantly evolving professional landscape",
      buttonLabel: "Enroll"
    },
    {
      cardType: "imageRight",
      imageSource: SpecialBatches,
      heading: "Classroom Training",
      content: "Embark on an enriching journey with our Classroom Training program. Immerse yourself in a vibrant educational setting, guided by industry experts. Acquire practical insights and cultivate collaborative knowledge-sharing. Enhance your skills through hands-on training, gearing up for success in the constantly evolving professional landscape",
     
    },
    {
      cardType: "imageLeft",
      imageSource: CorporateTraining,
      heading: "Classroom Training",
      content: "Embark on an enriching journey with our Classroom Training program. Immerse yourself in a vibrant educational setting, guided by industry experts. Acquire practical insights and cultivate collaborative knowledge-sharing. Enhance your skills through hands-on training, gearing up for success in the constantly evolving professional landscape",
    
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

    <div>
      <h1 style={{color:"#F4BF7D"}}>We provide two choices for sessions</h1>
    </div>
    </>
  );
};

export default Services;
