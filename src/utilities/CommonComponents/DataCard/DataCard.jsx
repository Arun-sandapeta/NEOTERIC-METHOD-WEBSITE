import React from 'react';

import './DataCard.scss';
import classroom from "../../../assets/Services/ClassroomTraining.svg"

const DataCard = ({cardData}) => {





  return (

    <div>
    {cardData.map((ele, index) => (
        
        <div className='Method__DataCard-main' id={ele.cardType} key={index}>
                <div className='Method__DataCard-image'>
                    <img src={ele.imageSource} alt={ele.heading} />
                </div>
                <div className='Method__DataCard-content'>
                    <div className='Method__DataCard-contentHeading'>{ele.heading}</div>
                    <div className='Method__DataCard-contentData'>{ele.content}</div>
                    {
                        ele.buttonLabel && <div className='Method__DataCard-contentButton' onClick={ele.onClick}>{ele.buttonLabel}</div>
                    }
                </div>
            </div>
        ))}
    </div>
  );
}

export default DataCard;