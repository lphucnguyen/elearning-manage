import React from 'react'
import './CourseIntroduce.scss'
import CourseItem from '../CourseItem/CourseItem'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.scss'
import SwiperCore, {
    Navigation
} from 'swiper/core';
import { NavLink } from 'react-router-dom'

SwiperCore.use([Navigation]);

function CourseIntroduce() {



    return (
        <div className="course-introduce">
            <div className="container">
                <h4 className="course-introduce-subtitle">REMOTELY</h4>
                <h1 className="course-introduce-title">Our Courses</h1>
                <div className="course-introduce-all">
                    <NavLink to="/courses">View all</NavLink>
                </div>
                <div className="course-contain mt-5">
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={4}
                        navigation={{
                            nextEl: ".course-slide-control .course-slide-next",
                            prevEl: ".course-slide-control .course-slide-prev"
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
                        <SwiperSlide>
                            <CourseItem />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CourseItem />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CourseItem />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CourseItem />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CourseItem />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CourseItem />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CourseItem />
                        </SwiperSlide>
                    </Swiper>

                    <div className="course-slide-control mt-5">
                        <div className="course-slide-prev"><i class="fa fa-arrow-left"></i></div>
                        <div className="course-slide-next ml-3"><i class="fa fa-arrow-right"></i></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseIntroduce;
