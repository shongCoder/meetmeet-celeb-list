import React from 'react';
import './CelebDetailComponent.css'
import Header from "../layout/Header.jsx";
import Footer from "../layout/footer.jsx";
import {Swiper, SwiperSlide} from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

function CelebDetailComponent({isOpen, onClose, info}) {
    if (!isOpen) return null;

    return (
        <>
            {isOpen && (
                <div id="detail-wrap">
                    <Header isOpen={isOpen} onClose={onClose} />
                    <div id="contents">
                        <div className="title">
                            <div className="celeb-info">
                                <span className="region">Korean</span>
                                <span className="dot">・</span>
                                <span className="age">{info.age}</span>
                            </div>

                            <div className="celeb-profile">
                                <div className="text">Celeb Profile</div>
                                <div className="nick-name">{info.nickname}</div>
                            </div>
                        </div>

                        <div className="carousel-wrapper">
                            <Swiper
                                slidesPerView="auto"
                                spaceBetween={12}
                                centeredSlides
                                initialSlide={1}
                            >
                                <SwiperSlide>
                                    <div className="img-box">
                                        <div className="overlay" />
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div
                                        className="img-box"
                                        style={{ backgroundImage: `url(${info.bgImage})` }}
                                    >
                                        <div className="overlay" />
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="img-box">
                                        <div className="overlay" />
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>

                    </div>
                    <Footer />
                </div>
            )}

        </>
    );
}

export default CelebDetailComponent;