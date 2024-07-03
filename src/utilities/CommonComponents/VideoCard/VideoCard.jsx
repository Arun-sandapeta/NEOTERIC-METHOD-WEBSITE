import React from 'react'

import "./VideoCard.scss"

function VideoCard({videoSource,videoDescription}) {
  return (
    <div className='method__VideoCard-main'>
        {/* <video controls>
            <source src={videoSource} type="video/mp4"/>
        </video>
        <div className='method__VideoCard-description'>{videoDescription}</div> */}
        <div key={videoSource}>
          <video width="100%" controls autoPlay muted loop>
            <source src={videoSource} type="video/mp4" />
          </video>
        </div>
        <div>{videoDescription}</div>
    </div>
  )
}

export default VideoCard