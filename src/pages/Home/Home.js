import React, {useEffect}  from 'react'
import { Fragment } from 'react';
import Header from '../../common/Header/Header';
import BestTeacher from '../../Components/layouts/BestTeacher/BestTeacher';
import Carousel from '../../Components/layouts/Carousel/Carousel';
import CourseIntroduce from '../../Components/layouts/CourseIntroduce/CourseIntroduce';
import CourseDemo from '../../Components/layouts/CourseDemo/CourseDemo';
import CourseDemoItem from '../../Components/layouts/CourseDemoItem/CourseDemoItem';
import ServicesContent from '../../Components/layouts/ServicesContent/ServicesContent';
import OffersContent from '../../Components/layouts/OffersContent/OffersContent';
import Footer from '../../common/Footer/Footer';

function Home() {

    return (
        <Fragment>
            <Header />
            <Carousel />
            <BestTeacher />
            <CourseIntroduce />
            <CourseDemo />
            <ServicesContent />
            <OffersContent />
            <Footer />
        </Fragment>
    )
}

export default Home;