import React from 'react'
import CourseItem from '../CourseItem/CourseItem';
import "./ListCourse.scss"

function ListCourse() {

    return (
        <div className="container">
            <div className="main-list-course d-flex">
                <h1 className="title">Our Courses</h1>
                <div className="search shadow">
                    <input type="text" name="search" id="search" placeholder="Search Course"/>
                    <button className="btn btn-search">Search</button>
                </div>
                <div className="list-type-course">
                    <div className="row">
                        <div className="col-md-4 pr-5">
                            <div className="select-group mb-3 mb-md-0">
                                <select name="sortCourses" id="sortCourses">
                                    <option value="0" checked>Course ID</option>
                                    <option value="1">Title: A-to-Z</option>
                                    <option value="2">Title: Z-to-A</option>
                                </select>
                                <div className="custom-arrow"></div>
                            </div>
                        </div>
                        <div className="col-md-4 pr-5">
                            <div className="select-group mb-3 mb-md-0">
                                <select name="courses" id="courses">
                                    <option value="0" checked>All Topic</option>
                                    <option value="1">Lập trình Backend</option>
                                    <option value="2">Thiết kế Web</option>
                                    <option value="3">Lập trình di động</option>
                                    <option value="4">Lập trình Front end</option>
                                    <option value="5">Lập trình Full Stack</option>
                                    <option value="6">Tư duy lập trình</option>
                                </select>
                                <div className="custom-arrow"></div>
                            </div>
                        </div>
                        <div className="col-md-4 pr-5">
                            <div className="select-group mb-3 mb-md-0">
                                <select name="groupCourses" id="groupCourses">
                                    <option value="0">Group 01</option>
                                    <option value="1">Group 02</option>
                                    <option value="2">Group 03</option>
                                    <option value="3">Group 04</option>
                                    <option value="4">Group 05</option>
                                    <option value="5">Group 06</option>
                                    <option value="6">Group 07</option>
                                    <option value="7">Group 08</option>
                                </select>
                                <div className="custom-arrow"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="list-course mt-5">
                    <div className="row">
                        <div className="col-lg-3 col-md-4 col-sm-6 pb-4">
                            <CourseItem/>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 pb-4">
                            <CourseItem/>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 pb-4">
                            <CourseItem/>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 pb-4">
                            <CourseItem/>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 pb-4">
                            <CourseItem/>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 pb-4">
                            <CourseItem/>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 pb-4">
                            <CourseItem/>
                        </div>
                    </div>
                </div>
                <div className="list-pagination d-flex justify-content-center my-5">
                    <nav aria-label="Page navigation example">
                        <ul className="pagination">
                            <li className="page-item"><a className="page-link p-3" href="#">Previous</a></li>
                            <li className="page-item"><a className="page-link p-3" href="#">1</a></li>
                            <li className="page-item"><a className="page-link p-3" href="#">2</a></li>
                            <li className="page-item"><a className="page-link p-3" href="#">3</a></li>
                            <li className="page-item"><a className="page-link p-3" href="#">Next</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default ListCourse;