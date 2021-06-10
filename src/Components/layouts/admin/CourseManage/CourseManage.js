import React from 'react'
import HeaderAdmin from '../../../../common/Admin/HeaderAdmin/HeaderAdmin'
import SliderbarAdmin from '../../../../common/Admin/SliderbarAdmin/SliderbarAdmin'
import MainCourseManage from '../MainCourseManage/MainCourseManage'
import './CourseManage.scss'

function CourseManage() {
    return (
        <div className="wrapper">
            <HeaderAdmin/>
            <SliderbarAdmin/>
            <MainCourseManage/>
        </div>
    )
}

export default CourseManage;