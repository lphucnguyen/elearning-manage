import React from 'react'
import "./Carousel.scss"
import { NavLink } from 'react-router-dom';

function Carousel() {
    return (
        <div className="carousel" id="carousel">
            <div className="container slider-contain">
                <div className="slider-item">
                    <div className="slider-head">
                        <h1 className="slider-head-title">Learn Digital Skills</h1>
                        <h4 className="slider-head-subtitle">Online Course from the world</h4>
                    </div>
                    <div className="slider-body">
                        <NavLink to="/courses" className="slider-body-btn">Get started <i class="fa fa-long-arrow-alt-right"></i></NavLink>
                        <div className="slider-body-video">
                            <div className="slider-body-watch-video" data-toggle="modal" data-target="#exampleModalLong"><i class="fa fa-play"></i></div>
                            <div className="slider-body-video-text">How it work</div>
                        </div>
                    </div>
                </div>                    
                <div className="slider-image">
                    <img src="/images/bg1.png" alt="Backgroud Image" />
                </div>
                {/* Modal */}
                <div className="modal fade" id="exampleModalLong" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content" style={{width: "600px", height: "300px"}}>
                            <div className="modal-body p-0">
                                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/5_1wSjK_5G4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>

            </div>  
        </div>
    )
}

export default Carousel;