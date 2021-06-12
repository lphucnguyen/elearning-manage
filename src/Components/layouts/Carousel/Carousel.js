import React from 'react'
import "./Carousel.scss"

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
                        <a href="" className="slider-body-btn">Get started <i class="fa fa-long-arrow-alt-right"></i></a>
                        <div className="slider-body-video">
                            <div className="slider-body-watch-video"><i class="fa fa-play"></i></div>
                            <div className="slider-body-video-text">How it work</div>
                        </div>
                    </div>
                </div>                    
                <div className="slider-image">
                    <img src="/images/bg1.png" alt="Backgroud Image" />
                </div>
            </div>  
        </div>
    )
}

export default Carousel;