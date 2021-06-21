import React from 'react'
import './CourseDemoItem.scss'

function CourseDemoItem(props) {
    const {img, title} = props

    return (
        <div className="course-demo-item my-shadow">
            <img src={img} alt="Image of Course" />
            <div className="video-play-contain">
                <div className="video-play" data-toggle="modal" data-target="#exampleModalLong"><i class="fa fa-play"></i></div>
                <div className="video-text">{title}</div>
            </div>
        </div>
    )
}

export default CourseDemoItem;