import React from 'react'

import './Home.scss'
import whatsapp from "../../assets/Home/whatsapp.svg"

const Introduction = () => {
  return (
    <div className='Method__HomeIntro_main'>
        <div className='Method__HomeIntro_head'>
            <div className='Method__HomeIntro_left'>
                <div className='Method__HomeIntro_title'> Beyond the Basics, Towards Brilliance </div>
                <div className='Method__HomeIntro_desc'>Your gateway to excellence, offering expert-led courses to elevate your coding skills</div>
                <div className='Method__HomeIntro_reqButton'>Request a Callback</div>
            </div>
            <div className='Method__HomeIntro_right'>
                <div className='Method__HomeIntro_contact'>
                    <div className='Method__HomeIntro_contact-title'>Chat with us</div>
                    <img src={whatsapp} alt="whatsapp"/>
                </div>
            </div>
        </div>
        <div className='Method__HomeIntro_definition'>
            <div className='Method__HomeIntro_heading'>Neoteric Method</div>
            <div className='Method__HomeIntro_descrip'>"Step into Neoteric Methods, where excellence meets Java development. Immerse yourself in top-quality, hands-on experiences in Java, and seize the opportunity to participate in our paid internship program—a perfect avenue for those eager to gain invaluable practical knowledge."</div>
        </div>
    </div>
  )
}

export default Introduction