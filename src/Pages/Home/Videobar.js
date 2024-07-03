import React from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import videofile from "../../assets/Home/videosample.mp4";


const Videobar = () => {
    return (
      
      <div className='videobar-bg'>
     <h2 className='videobar-text'>Neoteric method learners' experiences</h2>
        <div className=" container my-5;">
        
            <div className="d-flex justify-content-between align-items-center">
                <a href="#" className="arrowmark">
                    <FaAngleLeft />
                </a>
                <div className="row justify-content-center">
                    <div className="col-md-4 mb-3">
                        <div className="card large-card">
                            <video className="card-img-top" controls width="100%" height="auto">
                                <source src={videofile} type="video/mp4" />
                            </video>
                            <div className="card-body">
                                <h5 className="card-title">Becoming confident at coding</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <div className="card large-card">
                            <video className="card-img-top" controls width="100%" height="auto">
                                <source src={videofile} type="video/mp4" />
                            </video>
                            <div className="card-body">
                                <h5 className="card-title">Becoming confident at coding</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <div className="card large-card">
                            <video className="card-img-top" controls width="100%" height="auto">
                                <source src={videofile} type="video/mp4" />
                            </video>
                            <div className="card-body">
                                <h5 className="card-title">Becoming confident at coding</h5>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <a href="#" className="arrowmark">
                    <FaAngleRight />
                </a>
            </div>
        </div>
        </div>
    );
};

export default Videobar;
