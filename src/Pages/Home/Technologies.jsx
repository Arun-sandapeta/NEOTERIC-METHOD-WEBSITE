import React from 'react'

import frontend from "../../assets/Home/frontend.svg";
import backend from "../../assets/Home/backend.svg";
import process from "../../assets/Home/process.svg";
import tools from "../../assets/Home/tools.svg";
import tba from "../../assets/Home/tba.svg";




function Technologies() {
    return (
        <div className='Method__HomeTech-main'>
            <div className='Method__HomeTech-top'>
                <div className='Method__HomeTech-title'>Java Fullstack</div>
                <div className='Method__HomeTech-courses'>
                    <div className='Method__HomeTech-frontbackend'>
                        <div><img src={frontend} alt="frontend" /></div>
                        <div><img src={backend} alt="backend" /></div>
                    </div>
                    <div className='Method__HomeTech-frontbackend'>
                        <div><img src={process} alt="process" /></div>
                        <div><img src={tools} alt="tools" /></div>
                    </div>
                    <div className='Method__HomeTech-frontbackend'>
                        <div><img src={tba} alt="team" /></div>
                        
                    </div>
                </div>
                <div className='Method__HomeTech-EnrollAndMore'>
                    <div className='Method__HomeTech-EnrollAndMore-left'></div>
                    <div className='Method__HomeTech-EnrollAndMore-right'>
                        <div className='Method__HomeTech-Enroll'>Enroll now</div>
                        <div className='Method__HomeTech-More'>More...</div>
                    </div>
                </div>
            </div>
            <div className='Method__HomeTech-bottom'>
                <div className='Method__HomeTech-weStrive'>
                    <div className='Method__HomeTech-weStrive-title'>We Strive For Your Success</div>
                    <div className='Method__HomeTech-weStrive-desc'>At neoteric METHOD, we are dedicated to fostering your success in the dynamic realm of IT. Our innovative approach goes beyond traditional methods, providing users with cutting-edge tools and experiential learning opportunities. Through personalized guidance, Hands-on experiences, and a commitment to staying ahead of industry trends, We empower individuals to excel in their IT careers.</div>
                    <div className='Method__HomeTech-weStrive-desc'>Whether you`re a seasoned professional or just starting, neoteric METHOD is your partner in unlocking new heights of achievement, supporting your journey to unparalleled success in the ever-evolving field of information technology.</div>
                </div>
            </div>

        </div>
    )
}

export default Technologies