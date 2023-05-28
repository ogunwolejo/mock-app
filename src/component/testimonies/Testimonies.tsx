import {FC} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/swiper.css"
import "swiper/css/effect-coverflow";
import {ImageWrapper} from "./ImageWrapper";
import SwiperCore, {EffectCoverflow}  from "swiper"

export const Testimonies:FC = () => {
    return (
        <div className={`w-100 bg-red-300 my-4 mx-3`}>
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow]}
                className="mySwiper bg-grey-400 mt-3"
            >
                <SwiperSlide>
                    <ImageWrapper/>
                </SwiperSlide>
                <SwiperSlide>
                    <ImageWrapper/>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}