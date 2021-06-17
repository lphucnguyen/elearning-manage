import React, { useEffect, useRef, useState } from 'react'
import Loading from '../../../../common/Loading/Loading';
import { useDispatch, useSelector } from 'react-redux'
import { layDanhSachKhoaHocAction, xoaKhoaHoc } from '../../../../redux/actions/CourseAction'
import { layChiTietKhoaHoc } from '../../../../redux/actions/CourseAction';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useToasts } from 'react-toast-notifications'
import './MainCourseManage.scss'

function MainCourseManage(props) {

    const dispatch = useDispatch()

    const modalBox = useRef()

    const { addToast } = useToasts()

    let [dataControl, setDataControl] = useState({
        tenKH: "",
        maNhom: "GP01"
    })

    const courseList = useSelector(state => state.CourseReducer.arrCourse);
    const courseDetail = useSelector(state => state.CourseReducer.courseDetail)

    let [disable, setDisabled] = useState("disabled");
    let [user, setUser] = useState({})
    let [addUser, setAddUser] = useState({})
    let [updateUser, setUpdateUser] = useState({})

    let [startDate, setStartDate] = useState(new Date());

    const handleChange = () => {
        console.log("hello")
    }

    const renderPages = () => {
        console.log("Render")
    }

    const searchCourse = () => {
        dispatch(layDanhSachKhoaHocAction(dataControl.tenKH, dataControl.maNhom))
    }

    const viewCourse = (maKH) => {
        console.log(maKH)
        layChiTietKhoaHoc(maKH)
        .then((res) => {
            dispatch({
                    type: 'LAY_CHI_TIET_KHOA_HOC',
                    data: res.data
                })
        })
        .catch((err) => {
            addToast("Loi load du lieu", {
                appearance: 'error',
                autoDismiss: true,
              })
        });

        modalBox.current.classList.add("active")
    }

    const editCourse = (maKH) => {
        console.log(maKH)
        layChiTietKhoaHoc(maKH)
        .then((res) => {
            dispatch({
                    type: 'LAY_CHI_TIET_KHOA_HOC',
                    data: res.data
                })
        })
        .catch((err) => {
            addToast("Loi load du lieu", {
                appearance: 'error',
                autoDismiss: true,
              })
        });

        modalBox.current.classList.add("active")
    }

    const deleteCourse = (maKH) => {
        xoaKhoaHoc(maKH)
        .then((res) => {
            dispatch({
                    type: 'XOA_KHOA_HOC',
                    data: maKH
                })
            addToast("Xoa khoa hoc thanh cong", {
                appearance: 'success',
                autoDismiss: true,
            })
        })
        .catch((err) => {
            console.log("errors:", err);
            addToast("Xoa khoa hoc that bai", {
                appearance: 'error',
                autoDismiss: true,
            })
        });
    }

    const renderCourses = () => {
        return courseList.map((course, index) => {
            return (
                <div class="product-item-admin mb-3 my-box-shadow">
                    <div class="item-body" onClick={() => viewCourse(course.maKhoaHoc)}>
                        <img src={course.hinhAnh} alt="" />
                        <div class="title">{course.tenKhoaHoc}</div>
                    </div>
                    <div class="item-footer">
                        <span onClick={() => deleteCourse(course.maKhoaHoc)}><i class="fa fa-trash"></i></span>
                        <span onClick={() => editCourse(course.maKhoaHoc)}><i class="fa fa-edit"></i></span>
                    </div>
                </div>
            )
        })
    }

    const changeGroup = (e) => {
        let group = e.target.value

        setDataControl({
            ...dataControl,
            maNhom: group
        })
    }

    const changeKeywork = (e) => {
        let keyword = e.target.value

        setDataControl({
            ...dataControl,
            tenKH: keyword
        })
    }

    useEffect(() => {
        searchCourse()
    }, [dataControl])

    useEffect(() => {
        document.querySelector(".list-users .content").innerHTML = `${courseList.length} courses found`;
    }, [courseList])

    useEffect(() => {
        console.log(courseDetail.moTa)

        if(courseDetail.nguoiTao?.maLoaiNguoiDung == "HV"){
            document.getElementById("maLoaiNguoiDungDetail").getElementsByTagName("option")[0].selected  = true;
        }else{
            document.getElementById("maLoaiNguoiDungDetail").getElementsByTagName("option")[1].selected  = true;
        }

        if(courseDetail?.ngayTao != null && courseDetail?.ngayTao != "null"){
            let dateParts = courseDetail.ngayTao.split("/");
            setStartDate(new Date(dateParts[2], dateParts[1] - 1, dateParts[0]))
            console.log(dateParts)
        }
    }, [courseDetail])

    return (
        <main className="main-container">
            <div className="row">
                <div className="col-md-5 pl-0">
                    <div className="list-users">
                        <div className="group-select-info d-flex justify-content-between  align-items-center p-3">
                            <button className="btn-add shadow"><i className="fa fa-plus" /></button>
                            <div className="count-user d-flex justify-content-center align-items-center">
                                <span className="icon-avatar"><i className="fa fa-user-circle" /></span>
                                <span className="content">179 users was found!!</span>
                                <span className="icon-check"><i className="fa fa-check" /></span>
                            </div>
                            <div className="select-group" onChange={changeGroup}>
                                <select>
                                    <option value="GP01">Group 01</option>
                                    <option value="GP02">Group 02</option>
                                    <option value="GP03">Group 03</option>
                                    <option value="GP04">Group 04</option>
                                    <option value="GP05">Group 05</option>
                                    <option value="GP06">Group 06</option>
                                    <option value="GP07">Group 07</option>
                                    <option value="GP08">Group 08</option>
                                </select>
                                <div className="custom-arrow" />
                            </div>
                        </div>
                        <div className="search-user">
                            <div className="search-user--input d-flex p-3">
                                <input type="text" placeholder="Search User..." onKeyUp={changeKeywork} />
                            </div>
                        </div>
                        <div className="list-user--item">
                            <div className="user d-flex align-items-center flex-wrap px-3 py-2" data-toggle="modal" data-target="#exampleModal">
                                <Loading />
                                {renderCourses()}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-7">
                    <div className="modal-user pb-3" ref={modalBox} id="modalFormDetails">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="modal-user--course">
                                    <div className="modal-user--course__avatar d-flex flex-column justify-content-center align-items-center">
                                        <div className="avatar-course">
                                            <img className="w-100 h-100" src={courseDetail.hinhAnh} alt />
                                        </div>
                                    </div>
                                    <div className="modal-user--course__pending d-flex justify-content-center align-items-center flex-column">
                                        <div className="content d-flex justify-content-between align-items-center">
                                            <p className="content-title">Pending Courses</p>
                                            <p className="note">Need approved to allow the user accessing</p>
                                            <div className="custom-arrow-content">
                                                <span className="arrow-down"><i className="fa fa-angle-down" /></span>
                                            </div>
                                        </div>
                                        <div className="details">
                                            <div className="list-details">
                                                <ul>
                                                    <li className="list-details--item">
                                                        <div className="d-flex justify-content-center align-items-center">
                                                            <span className="icon-user"><i className="fa fa-id-card-alt" /></span>
                                                            <span className="content">Best Java Practice Project From Basic to Advance</span>
                                                            <span className="icon-delete"><i className="fa fa-circle-notch" /></span>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal-user--course__approved d-flex justify-content-center align-items-center flex-column">
                                        <div className="content d-flex justify-content-between align-items-center">
                                            <p className="content-title">Approved Courses</p>
                                            <p className="note">The courses have already accessed by user</p>
                                            <div className="custom-arrow-content">
                                                <span className="arrow-down"><i className="fa fa-angle-down" /></span>
                                            </div>
                                        </div>
                                        <div className="details" />
                                    </div>
                                    <div className="modal-user--course__available d-flex justify-content-center align-items-center flex-column">
                                        <div className="content d-flex justify-content-between align-items-center">
                                            <p className="content-title">Available Courses</p>
                                            <p className="note">Registing a course quickly for user</p>
                                            <div className="custom-arrow-content">
                                                <span className="arrow-down"><i className="fa fa-angle-down" /></span>
                                            </div>
                                        </div>
                                        <div className="details" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="modal-user--form">
                                    <form>
                                        <div className="form-group">
                                            <label htmlFor="username">Course ID</label>
                                            <input disabled className="form-control" type="text" id="username" value={courseDetail.maKhoaHoc} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="emailDetail">Course Name</label>
                                            <input disabled className="form-control" type="text" id="emailDetail" value={courseDetail.tenKhoaHoc} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="emailDetail">Creator</label>
                                            <input disabled className="form-control" type="text" id="emailDetail" value={courseDetail.nguoiTao?.hoTen} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="emailDetail">View</label>
                                            <input disabled className="form-control" type="text" id="emailDetail" value={courseDetail.luotXem} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="emailDetail">Date create</label>
                                            <DatePicker disabled selected={startDate} className="form-control" onChange={(date) => setStartDate(date)} />
                                        </div>
                                        <div className="form-group d-flex flex-column">
                                            <label>Accout type</label>
                                            <select id="maLoaiNguoiDungDetail">
                                                <option value="HV" >Sinh viên</option>
                                                <option value="GV" >Giảng viên</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="emailDetail">Description</label>
                                            <textarea disabled className="form-control" id="emailDetail" rows="10" value={courseDetail.moTa}>
                                                {courseDetail.moTa}
                                            </textarea>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default MainCourseManage;