import React from 'react'

import './Home.scss'
import Introduction from './Introduction'
import Technologies from './Technologies'
import DataCard from '../../utilities/CommonComponents/DataCard/DataCard'
import internship from "../../assets/Home/internship.svg"
import placements from "../../assets/Home/placements.svg"
import LearnerExperience from './LearnerExperience'
// import Video from './Videobar'

const Home = () => {

  const neotericDataCard = [
    
    {
    type:"INTERNSHIP",
    heading : "Internship",
    content : "Step into Neoteric Methods, where excellence meets Java development. Immerse yourself in top-quality, hands-on experiences in Java, and seize the opportunity to participate in our paid internship program—a perfect avenue for those eager to gain invaluable practical knowledge.",
    buttonLabel : "Join Internship",
    imageSource : internship,
    onclick: true
    },
    {
      type:"PLACEMENTS",
      heading : "Placements",
      content : "Step into Neoteric Methods, where excellence meets Java development. Immerse yourself in top-quality, hands-on experiences in Java, and seize the opportunity to participate in our paid internship program—a perfect avenue for those eager to gain invaluable practical knowledge.",
      imageSource : placements,
      cardType : "imageRight",
      onclick: false
    },

  ]


  return (
    <div>
      <Introduction/>
      <Technologies/>
      <DataCard cardData = {neotericDataCard}/>
      <LearnerExperience/>
      {/* <Video/> */}
      
    </div>
  )
}

export default Home







