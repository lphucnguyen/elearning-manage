import React from 'react'
import './MyListCourses.scss'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { thongTinTaiKhoanAction, huyGhiDanhKhoaHocAction } from '../../../redux/actions/UserAction'
import Loading from '../../../common/Loading/Loading';

export default function MyListCourses() {

    const dispatch = useDispatch()
    const arrCourse = useSelector(state => state.UserReducer.arrListCourse)

    useEffect(() => {
        let user = localStorage.getItem("taiKhoan")
        dispatch(thongTinTaiKhoanAction(user, ""))
    }, [])

    useEffect(() => {
        console.log(arrCourse)
    }, [arrCourse])

    const unenroll = (maKH) => {
        let user = localStorage.getItem("taiKhoan")
        dispatch(huyGhiDanhKhoaHocAction(maKH, user))
    }

    const renderCourse = () => {
        return arrCourse.map((course, index) => {
            return <div className="d-flex justify-content-center align-items-center">
                <span className="icon-user"><i class="fa fa-folder"></i></span>
                <span className="content">{course.tenKhoaHoc}</span>
                <span title="Ban" className="icon-delete" onClick={() => unenroll(course.maKhoaHoc)} ><i class="fa fa-ban"></i></span>
            </div>
        })
    }

    return (
        <div className="my-courses">
            <div className="list-courses-of-user my-shadow">
                <div className="logo-title">
                    <h1 className="title-my-courses">My Courses</h1>
                </div>
                <div className="count-user d-flex justify-content-center align-items-center mb-2">
                    <span className="icon-avatar"><i className="fa fa-user-circle" /></span>
                    <span className="content">{arrCourse.length} courses was found!!</span>
                    <span className="icon-check"><i className="fa fa-check" /></span>
                </div>
                <div className="list-box">
                    <ul className="list-item">
                        <li className="list-details--item">
                            <Loading />
                            {renderCourse()}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
