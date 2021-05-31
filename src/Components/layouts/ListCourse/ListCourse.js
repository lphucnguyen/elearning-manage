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
                            <div className="select-group">
                                <select name="sortCourses" id="sortCourses">
                                    <option value="0" checked>Course ID</option>
                                    <option value="1">Title: A-to-Z</option>
                                    <option value="2">Title: Z-to-A</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-4 pr-5">
                            <div className="select-group">
                                <select name="courses" id="courses">
                                    <option value="0" checked>All Topic</option>
                                    <option value="1">Lập trình Backend</option>
                                    <option value="2">Thiết kế Web</option>
                                    <option value="3">Lập trình di động</option>
                                    <option value="4">Lập trình Front end</option>
                                    <option value="5">Lập trình Full Stack</option>
                                    <option value="6">Tư duy lập trình</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-4 pr-5">
                            <div className="select-group">
                                <select name="groupCourses" id="groupCourses">
                                    <option value="0" checked>Group 01</option>
                                    <option value="1" checked>Group 02</option>
                                    <option value="2" checked>Group 03</option>
                                    <option value="3" checked>Group 04</option>
                                    <option value="4" checked>Group 05</option>
                                    <option value="5" checked>Group 06</option>
                                    <option value="6" checked>Group 07</option>
                                    <option value="7" checked>Group 08</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="list-course mt-5">
                    <div className="row">
                        <div className="col-md-3 pb-4">
                            <CourseItem/>
                        </div>
                        <div className="col-md-3 pb-4">
                            <CourseItem/>
                        </div>
                        <div className="col-md-3 pb-4">
                            <CourseItem/>
                        </div>
                        <div className="col-md-3 pb-4">
                            <CourseItem/>
                        </div>
                        <div className="col-md-3 pb-4">
                            <CourseItem/>
                        </div>
                        <div className="col-md-3 pb-4">
                            <CourseItem/>
                        </div>
                        <div className="col-md-3 pb-4">
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