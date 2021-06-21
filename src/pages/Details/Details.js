import React from 'react'
import { Fragment, useEffect } from 'react';

import Loading from '../../common/Loading/Loading';
import Header from '../../common/Header/Header';
import CourseDetailInfo from '../../Components/layouts/CourseDetailInfo/CourseDetailInfo'
import CourseDesc from '../../Components/layouts/CourseDesc/CourseDesc'
import Footer from '../../common/Footer/Footer';
import CourseIntroduce from '../../Components/layouts/CourseIntroduce/CourseIntroduce'
import { ToastProvider } from 'react-toast-notifications'

function Details(props) {
    const maKH = props.match.params.maKH;
    console.log(maKH)

    return (
        <Fragment >
            <ToastProvider
                autoDismiss
                autoDismissTimeout={2000}
                placement="bottom-right"
            >
                <Header />
                <CourseDetailInfo maKH={maKH} />
                <CourseDesc />
                <CourseIntroduce />
                <Footer />
            </ToastProvider>
        </Fragment>
    )
}

export default Details;