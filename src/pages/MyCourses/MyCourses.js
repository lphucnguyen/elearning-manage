import React, { Fragment } from 'react'
import Footer from '../../common/Footer/Footer';
import Header from '../../common/Header/Header';
import MyListCourses from '../../Components/layouts/MyListCourses/MyListCourses';

export default function MyCourses() {
    return (
        <Fragment>
            <Header/>
            <MyListCourses/>
            <Footer/>
        </Fragment>
    )
}
