import React from 'react'
import './CourseDemo.scss'
import CourseDemoItem from '../CourseDemoItem/CourseDemoItem'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.scss'
import SwiperCore, {
    Navigation
} from 'swiper/core';

SwiperCore.use([Navigation]);

function CourseDemo() {
    return (
        <div className="course-introduce course-demo">
            <div className="container">
                <h4 className="course-introduce-subtitle">DEMOS</h4>
                <h1 className="course-introduce-title">Our Demo Classes</h1>
                <div className="course-introduce-all">
                    <a href="">View all</a>
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
                        <SwiperSlide>
                            <CourseDemoItem />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CourseDemoItem />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CourseDemoItem />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CourseDemoItem />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CourseDemoItem />
                        </SwiperSlide>
                    </Swiper>

                    <div className="course-slide-demo mt-5">
                        <div className="course-slide-prev"><i class="fa fa-arrow-left"></i></div>
                        <div className="course-slide-next ml-3"><i class="fa fa-arrow-right"></i></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseDemo;
