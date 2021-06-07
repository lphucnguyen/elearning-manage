import React from 'react'
import './CourseDemoItem.scss'

function CourseDemoItem() {
    return (
        <div className="course-demo-item my-shadow">
            <img src="/images/php.jpg" alt="Image of Course" />
            <div className="video-play-contain">
                <div className="video-play"><i class="fa fa-play"></i></div>
                <div className="video-text">Lern PHP</div>
            </div>
        </div>
    )
}

export default CourseDemoItem;