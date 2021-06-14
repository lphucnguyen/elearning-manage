import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import Loading from '../../../common/Loading/Loading';
import { layDanhSachKhoaHocAction, xoaDanhSachKhoaHocAction, layKhoaHocTheoDanhMucAction } from '../../../redux/actions/CourseAction';
import CourseItem from '../CourseItem/CourseItem';
import "./ListCourse.scss"

function ListCourse() {

    let [data, setData] = useState({

        typeCourse: "",
        typeGroup: "",
        page: "",
        pageSize: "",
        search: ""
    })

    let arrCourse = useSelector(state => state.CourseReducer.arrCourse);

    const dispatch =  useDispatch();

    useEffect(() => {
        dispatch(layDanhSachKhoaHocAction(data.search));
        dispatch(xoaDanhSachKhoaHocAction());
        
    }, [])

    const changeType = () => {
        dispatch(layKhoaHocTheoDanhMucAction(data.typeCourse ,data.typeGroup));
        dispatch(xoaDanhSachKhoaHocAction());
    }

    const searchCourse = (e) => {
        const keyWorkd = e.target.value

        setData({
            ...data,
            search: keyWorkd
        })

        document.getElementById("courses-select").getElementsByTagName('option')[0].selected = 'selected';

        dispatch(layDanhSachKhoaHocAction(data.search));
        dispatch(xoaDanhSachKhoaHocAction());
    }


    const renderCourses = () => {
        return arrCourse.map((item, index) => {
            return <div className="col-lg-3 col-md-4 col-sm-6 pb-4" key={index}>
                    <CourseItem maKhoaHoc={item.maKhoaHoc} name={item.tenKhoaHoc} views={item.luotXem} img={item.hinhAnh}/>
                </div>
        })
    };

    const getTypeCourses = (evt) => {
        let {value} = evt.target;
        
        if(value == "All"){
            dispatch(layDanhSachKhoaHocAction(""));
            dispatch(xoaDanhSachKhoaHocAction());
        }

        if(evt) {
            setData({
                ...data,
                typeCourse: value
            })
        }else {
            setData({
                ...data,
                typeCourse: value
            })
        }
        changeType();
    }

    const getTypeGroup = (evt) => {
        let {value} = evt.target;
        if(evt) {
            setData({
                ...data,
                typeGroup: value
            })
        }else {
            setData({
                ...data,
                typeGroup: value
            })
        }
        changeType();
    }

    return (
        <div className="main-list-course">
            <div className="container">
                <h1 className="title">Our Courses</h1>
                <div className="search my-shadow mx-auto">
                    <input type="text" name="search" id="search" placeholder="Search Course" onKeyUp={searchCourse} />
                </div>
                <div className="list-type-course mx-auto">
                    <div className="row">
                        <div className="col-md-4 pr-5">
                            <div className="select-group mb-3 mb-md-0">
                                <select name="sortCourses" id="sortCourses">
                                    <option checked>Course ID</option>
                                    <option>Title: A-to-Z</option>
                                    <option>Title: Z-to-A</option>
                                </select>
                                <div className="custom-arrow" />
                            </div>
                        </div>
                        <div className="col-md-4 pr-5">
                            <div className="select-group mb-3 mb-md-0">
                                <select name="courses" id="courses-select" onChange={(e) => getTypeCourses(e)}>
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
                                <select name="groupCourses" id="groupCourses" onChange={(e) => getTypeGroup(e)}>
                                    <option value = "GP01">Group 01</option>
                                    <option value = "GP02">Group 02</option>
                                    <option value = "GP03">Group 03</option>
                                    <option value = "GP04">Group 04</option>
                                    <option value = "GP05">Group 05</option>
                                    <option value = "GP06">Group 06</option>
                                    <option value = "GP07">Group 07</option>
                                    <option value = "GP08">Group 08</option>
                                </select>
                                <div className="custom-arrow" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="list-course mt-5">
                    <div className="row">
                        <Loading />
                        {renderCourses()}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListCourse;