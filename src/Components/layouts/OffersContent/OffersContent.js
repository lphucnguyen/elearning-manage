import React from 'react'
import OfferItem from '../OfferIten/OfferItem'
import './OffersContent.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.scss'
import SwiperCore, {
    Navigation
} from 'swiper/core';
import { NavLink } from 'react-router-dom'

export default function OffersContent() {
    return (
        <div className="offer-contain course-introduce">
            <div className="container">
                <h4 className="course-introduce-subtitle">SERVICES</h4>
                <h1 className="course-introduce-title">Amazing Services <br /> For You</h1>
                <div className="course-introduce-all">
                    <NavLink to="/courses">View all</NavLink>
                </div>
                <div className="offer-items">
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={3}
                        centeredSlides={true}
                        navigation={{
                            nextEl: ".offer-slide .course-slide-next",
                            prevEl: ".offer-slide .course-slide-prev"
                        }}
                        onInit={(swiper) =>
                            console.log(swiper)
                        }
                        breakpoints={{
                            300: {
                                slidesPerView: 1
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 20
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 20
                            }
                        }}
                    >
                        <SwiperSlide>
                            <OfferItem />
                        </SwiperSlide>
                        <SwiperSlide>
                            <OfferItem />
                        </SwiperSlide>
                        <SwiperSlide>
                            <OfferItem />
                        </SwiperSlide>
                        <SwiperSlide>
                            <OfferItem />
                        </SwiperSlide>
                        <SwiperSlide>
                            <OfferItem />
                        </SwiperSlide>
                    </Swiper>

                    <div className="offer-slide mt-5">
                        <div className="course-slide-prev"><i class="fa fa-arrow-left"></i></div>
                        <div className="course-slide-next ml-3"><i class="fa fa-arrow-right"></i></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
