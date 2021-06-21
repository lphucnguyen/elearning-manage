import React from 'react'
import './CourseDemo.scss'
import CourseDemoItem from '../CourseDemoItem/CourseDemoItem'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.scss'
import SwiperCore, {
    Navigation
} from 'swiper/core';
import { NavLink } from 'react-router-dom'

SwiperCore.use([Navigation]);

function CourseDemo() {

    const arrCourse = [
        {
            img: "/images/php.jpg",
            title: "Learn PHP"
        },
        {
            img: "/images/reactjs.png",
            title: "Learn React"
        },
        {
            img: "/images/laravel.jpg",
            title: "Learn Laravel"
        },
        {
            img: "/images/nodejs.jpg",
            title: "Learn Nodejs"
        },
        {
            img: "/images/php.jpg",
            title: "Learn PHP"
        },
        {
            img: "/images/reactjs.png",
            title: "Learn React"
        },
        {
            img: "/images/laravel.jpg",
            title: "Learn Laravel"
        },
    ]

    const renderCourses = () => {
        return arrCourse.map((course, index) => {
            return <SwiperSlide>
                <CourseDemoItem img={course.img} title={course.title} />
            </SwiperSlide>
        })
    }

    return (
        <div className="course-introduce course-demo" id="courseDemo">
            <div className="container">
                <h4 className="course-introduce-subtitle">DEMOS</h4>
                <h1 className="course-introduce-title">Our Demo Classes</h1>
                <div className="course-introduce-all">
                    <NavLink to="/courses">View all</NavLink>
                </div>
                <div className="course-contain mt-5">
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={4}
                        navigation={{
                            nextEl: ".course-slide-demo .course-slide-next",
                            prevEl: ".course-slide-demo .course-slide-prev"
                        }}
                        onInit={(swiper) =>
                            console.log(swiper)
                        }
                        breakpoints={{
                            300: {
                                slidesPerView: 1,
                                centeredSlides: false
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                                centeredSlides: false
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 20,
                                centeredSlides: false
                            }
                        }}
                    >
                        {renderCourses()}
                    </Swiper>

                    <div className="course-slide-demo mt-5">
                        <div className="course-slide-prev"><i class="fa fa-arrow-left"></i></div>
                        <div className="course-slide-next ml-3"><i class="fa fa-arrow-right"></i></div>
                    </div>
                </div>
                {/* Modal */}
                <div className="modal fade pr-0" id="exampleModalLong" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                    <div className="modal-dialog" role="document" style={{height:"100%"}}>
                        <div className="video__list" style={{
                                    position: "absolute",
                                    top: "50%",
                                    left: "50%",
                                    transform: "translate(-50%, -50%)",
                                    width: "100%"
                        }}>
                            <div className="video__item">
                                <video style={{width:"100%"}} loop autoPlay muted src="/images/intro.mp4" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseDemo;
