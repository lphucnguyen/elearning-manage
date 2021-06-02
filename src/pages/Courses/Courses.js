import React from 'react'
import { Fragment } from 'react';
import Footer from '../../common/Footer/Footer';
import Header from '../../common/Header/Header';
import ListCourse from '../../Components/layouts/ListCourse/ListCourse';

function Courses() {
    return (
        <Fragment>
            <Header/>
            <ListCourse/>
            <Footer/>
        </Fragment>
    )
}

export default  Courses;