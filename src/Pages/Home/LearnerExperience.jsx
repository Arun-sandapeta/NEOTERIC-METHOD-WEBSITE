import React from 'react'

import Slider from "react-slick";
import VideoCard from '../../utilities/CommonComponents/VideoCard/VideoCard';

function LearnerExperience() {

    const videoData = [
        {
            videoSource: 'https://videos.pexels.com/video-files/3209828/3209828-uhd_3840_2160_25fps.mp4',
            videoDescription: 'Becoming confident at coding'
        },
        {
            videoSource: 'https://videos.pexels.com/video-files/3195394/3195394-uhd_3840_2160_25fps.mp4',
            videoDescription: 'Becoming confident at coding'
        },
        {
            videoSource: 'https://videos.pexels.com/video-files/4620565/4620565-uhd_4096_2160_25fps.mp4',
            videoDescription: 'Becoming confident at coding'
        },
        {
            videoSource: 'https://videos.pexels.com/video-files/5532768/5532768-uhd_4096_2160_25fps.mp4',
            videoDescription: 'Becoming confident at coding'
        }
    ]

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
    }

  return (
    <div className='Method__Exp-main'>
        <div className='Method__Exp-heading'>Neoteric method learner's experiences</div>
        <Slider {...settings}>
            {
                videoData.map((data,index) =><VideoCard videoSource={data.videoSource} videoDescription={data.videoDescription}/>)
            }
        </Slider>
    </div>
  )
}

export default LearnerExperience