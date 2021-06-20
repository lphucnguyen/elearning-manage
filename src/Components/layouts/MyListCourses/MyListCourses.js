import React from 'react'
import './MyListCourses.scss'

export default function MyListCourses() {
    return (
        <div className="my-courses">
            <div className="list-courses-of-user my-shadow">
                <div className="logo-title">
                    <h1 className="title-my-courses">My Courses</h1>
                </div>
                <div className="count-user d-flex justify-content-center align-items-center mb-2">
                    <span className="icon-avatar"><i className="fa fa-user-circle" /></span>
                    <span className="content">18 courses was found!!</span>
                    <span className="icon-check"><i className="fa fa-check" /></span>
                </div>
                <div className="list-box">
                    <ul className="list-item">
                        <li className="list-details--item">
                            <div className="d-flex justify-content-center align-items-center">
                                <span className="icon-user"><i class="fa fa-folder"></i></span>
                                <span className="content">hi hi hi</span>
                                <span title="Ban" className="icon-delete"><i class="fa fa-ban"></i></span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
