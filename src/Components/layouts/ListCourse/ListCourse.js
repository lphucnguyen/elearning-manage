import React from 'react'
import "./ListCourse.scss"

function ListCourse() {
    return (
        <div className="container">
            <div className="main-list-course d-flex">
                <h1 className="title">Our Courses</h1>
                <div className="search">
                    <input type="text" name="" id="" />
                    <button className="btn btn-search">Search</button>
                </div>
                <div className="list-course">

                </div>
            </div>
        </div>
    )
}

export default ListCourse;