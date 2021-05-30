import React from 'react'
import Footer from '../../common/Footer/Footer';
import Header from '../../common/Header/Header';
import ListCourse from '../../Components/layouts/ListCourse/ListCourse';

function CourseManage() {
    return (
        <div className="container-fluid page-manage-courses">
            <Header/>
            <ListCourse/>
            <Footer/>
        </div>
    )
}

export default  CourseManage;