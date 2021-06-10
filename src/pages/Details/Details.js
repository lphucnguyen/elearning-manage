import React from 'react'
import { Fragment } from 'react';
import Header from '../../common/Header/Header';
import CourseDetailInfo from '../../Components/layouts/CourseDetailInfo/CourseDetailInfo'
import CourseDesc from '../../Components/layouts/CourseDesc/CourseDesc'
import Footer from '../../common/Footer/Footer';
import CourseIntroduce from '../../Components/layouts/CourseIntroduce/CourseIntroduce';

function Details() {
    return (
        <Fragment >
            <Header />
            <CourseDetailInfo />
            <CourseDesc />
            <CourseIntroduce />
            <Footer />
        </Fragment>
    )
}

export default Details;