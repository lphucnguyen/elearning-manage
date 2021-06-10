import React from 'react'
import './CourseDetailInfo.scss'

function CourseDetailInfo() {
    return (
        <div className="course-info">
            <div className="course-bg">
                <img src="/images/images.jfif" />
            </div>
            <div className="container text-center">
                <div className="rate">
                    <label class="active" title="text"><i class="fa fa-star"></i></label>
                    <label class="active" title="text"><i class="fa fa-star"></i></label>
                    <label class="active" title="text"><i class="fa fa-star"></i></label>
                    <label title="text"><i class="fa fa-star"></i></label>
                    <label title="text"><i class="fa fa-star"></i></label>
                </div>
                <h1 className="course-title">Modern Javascript For The Beginer</h1>
                <p className="course-subtitle">Learn and build project with pure Javascript</p>
                <div className="author">
                    <div className="author-img">
                        <img src="/images/user.jpg" />
                    </div>
                    <div className="author-name">Eric Naul</div>
                </div> 
                <div className="course-price">$234</div>  
                <div className="course-buy">Buy Now</div>             
            </div>
        </div>
    )
}


export default CourseDetailInfo;
