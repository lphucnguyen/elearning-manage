import React from 'react'
import { Fragment, useEffect } from 'react';

import Loading from '../../common/Loading/Loading';
import Header from '../../common/Header/Header';
import CourseDetailInfo from '../../Components/layouts/CourseDetailInfo/CourseDetailInfo'
import CourseDesc from '../../Components/layouts/CourseDesc/CourseDesc'
import Footer from '../../common/Footer/Footer';
import CourseIntroduce from '../../Components/layouts/CourseIntroduce/CourseIntroduce';

function Details(props) {
    const maKH = props.match.params.maKH;
    console.log(maKH)

    return (
        <Fragment >
            <Header />
            <CourseDetailInfo maKH={maKH} />
            <CourseDesc />
            <CourseIntroduce />
            <Footer />
        </Fragment>
    )
}

export default Details;