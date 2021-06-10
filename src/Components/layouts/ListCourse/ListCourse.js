import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { layDanhSachKhoaHocAction } from '../../../redux/actions/CourseAction';
import CourseItem from '../CourseItem/CourseItem';
import "./ListCourse.scss"

function ListCourse() {

    // const getCourses = 

    const arrCourse = useSelector(state => state.CourseReducer.arrCourse);

    const dispatch =  useDispatch();

    useEffect(() => {
        dispatch(layDanhSachKhoaHocAction("bootcamp react 0112", "GP01"));
        
    }, []);

    const renderCourses = (evt) => {
        (evt) ? console.log("run", evt): console.log("All");
        // return arrCourse.map((item, index) => {
        //     return <div className="col-lg-3 col-md-4 col-sm-6 pb-4" key={index}>
        //             <CourseItem name={item.tenKhoaHoc} views={item.luotXem} img={item.hinhAnh}/>
        //         </div>
        // })
    };

    return (
        <div className="main-list-course">
            <div className="container">
                <h1 className="title">Our Courses</h1>
                <div className="search my-shadow mx-auto">
                    <input type="text" name="search" id="search" placeholder="Search Course" />
                    <button className="btn btn-search">Search</button>
                </div>
                <div className="list-type-course mx-auto">
                    <div className="row">
                        <div className="col-md-4 pr-5">
                            <div className="select-group mb-3 mb-md-0">
                                <select name="sortCourses" id="sortCourses">
                                    <option value={0} checked>Course ID</option>
                                    <option value={1}>Title: A-to-Z</option>
                                    <option value={2}>Title: Z-to-A</option>
                                </select>
                                <div className="custom-arrow" />
                            </div>
                        </div>
                        <div className="col-md-4 pr-5">
                            <div className="select-group mb-3 mb-md-0">
                                <select name="courses" id="courses" onChange={(e) => renderCourses(e)}>
                                    <option value = "All" checked>All Topic</option>
                                    <option value = "BackEnd">Lập trình Backend</option>
                                    <option value = "Design">Thiết kế Web</option>
                                    <option value = "DiDong">Lập trình di động</option>
                                    <option value = "FrontEnd">Lập trình Front end</option>
                                    <option value = "FullStack">Lập trình Full Stack</option>
                                    <option value = "TuDuy">Tư duy lập trình</option>
                                </select>
                                <div className="custom-arrow" />
                            </div>
                        </div>
                        <div className="col-md-4 pr-5">
                            <div className="select-group mb-3 mb-md-0">
                                <select name="groupCourses" id="groupCourses">
                                    <option value={0}>Group 01</option>
                                    <option value={1}>Group 02</option>
                                    <option value={2}>Group 03</option>
                                    <option value={3}>Group 04</option>
                                    <option value={4}>Group 05</option>
                                    <option value={5}>Group 06</option>
                                    <option value={6}>Group 07</option>
                                    <option value={7}>Group 08</option>
                                </select>
                                <div className="custom-arrow" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="list-course mt-5">
                    <div className="row">
                        {renderCourses()}
                    </div>
                </div>
                <div className="list-pagination d-flex justify-content-center mt-5">
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