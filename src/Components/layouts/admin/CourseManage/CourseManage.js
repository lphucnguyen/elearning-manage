import React from 'react'
import HeaderAdmin from '../../../../common/Admin/HeaderAdmin/HeaderAdmin'
import SliderbarAdmin from '../../../../common/Admin/SliderbarAdmin/SliderbarAdmin'
import MainCourseManage from '../MainCourseManage/MainCourseManage'
import { ToastProvider } from 'react-toast-notifications'
import { useToasts } from 'react-toast-notifications'
import './CourseManage.scss'

function CourseManage() {

    return (
        <ToastProvider
            autoDismiss
            autoDismissTimeout={2000}
            placement="bottom-right"
        >
            <div className="wrapper collapse-slide">
                <HeaderAdmin />
                <SliderbarAdmin />
                <MainCourseManage/>
            </div>
        </ToastProvider>
    )
}

export default CourseManage;