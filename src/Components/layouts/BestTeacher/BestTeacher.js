import React from 'react'
import './BestTeacher.scss'

function BestTeacher() {
    return (
        <div className="teacher">
            <div className="container best-teacher-contain">
                <div className="best-teacher row">
                    <div className="best-teacher-info col-md-5 col-lg-6 d-flex align-items-center justify-content-center justify-content-md-start">
                        <div className="best-teacher-img">
                            <img src="/images/profile.jpeg" alt="" />
                        </div>
                        <div className="best-teacher-text ml-3">
                            <h5 className="best-teacher-feed">I like this app very much</h5>
                            <h5 className="best-teacher-school">Amelia Kimanu</h5>
                        </div>
                    </div>
                    <div className="best-teacher-info col-md-7 col-lg-6">
                        <ul className="best-teacher-info-sell h-100 d-flex align-items-center justify-content-center justify-content-md-start mt-2 mt-md-0">
                            <li>
                                <h1 className="best-teacher-info-title">5k</h1>
                                <h3 className="best-teacher-info-subtitle">Online Course</h3>
                            </li>
                            <li>
                                <h1 className="best-teacher-info-title">24k</h1>
                                <h3 className="best-teacher-info-subtitle">Students</h3>
                            </li>
                            <li>
                                <h1 className="best-teacher-info-title">10k</h1>
                                <h3 className="best-teacher-info-subtitle">Mentor</h3>
                            </li>                     
                        </ul>
                    </div>
                </div>
            </div>             
        </div>
    )
}

export default BestTeacher;