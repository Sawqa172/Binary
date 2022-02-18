import React, { useState, useRef, useEffect } from "react";

//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

//styles
import {
  ModalWrapper,
  PaginationWrapper,
  SwiperSlideContainer,
  SwiperSlideTitle,
  SwiperSlideButton,
  SwiperSlideLeft,
  SwiperSlideRight,
  SwiperSlideButtonText,
  SwiperCloseButton,
  SwiperSliderRightCircle,
} from "./style";

//icons
import { ArrowRight } from "assets/svg/ArrowRight";
import { Cross } from "assets/svg/Cross";

//images
import slider2 from "assets/images/slider2.png";
import slider1 from "assets/images/logo.png";
import { Image } from "assets/images/Image";

export const ModalSwiper = ({ ...props }) => {
  let [activeModal, setActiveModal] = useState<boolean>(true);
  let swiperRef = useRef<any>();

  useEffect(() => {
    return () => {
      swiperRef.current.destroy();
    };
  }, []);

  return (
    <ModalWrapper active={activeModal}>
      <SwiperCloseButton onClick={() => setActiveModal(false)}>
        <Cross />
      </SwiperCloseButton>
      <Swiper
        direction={"vertical"}
        pagination={{
          el: ".pagination_custom",
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class=${className}></span>`;
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
        onSwiper={(swiper) => (swiperRef.current = swiper)}>
        <SwiperSlide>
          <SwiperSlideContainer>
            <SwiperSlideLeft>
              <SwiperSlideTitle>
                Используй сигналы <br />
                Что бы не прогореть
              </SwiperSlideTitle>
              <SwiperSlideButton>
                <SwiperSlideButtonText>Регистрация</SwiperSlideButtonText>
                <ArrowRight />
              </SwiperSlideButton>
            </SwiperSlideLeft>
            <SwiperSlideRight>
              <Image src={slider2} alt={"slider image"} />
              <SwiperSliderRightCircle />
            </SwiperSlideRight>
          </SwiperSlideContainer>
        </SwiperSlide>
        <SwiperSlide>
          <SwiperSlideContainer>
            <SwiperSlideContainer>
              <SwiperSlideLeft>
                <SwiperSlideTitle>
                  Начни торговать уже <br />
                  Прямо сейчас !
                </SwiperSlideTitle>
                <SwiperSlideButton>
                  <SwiperSlideButtonText>Регистрация</SwiperSlideButtonText>
                  <ArrowRight />
                </SwiperSlideButton>
              </SwiperSlideLeft>
              <SwiperSlideRight>
                <Image src={slider1} alt={"slider image"} />
                <SwiperSliderRightCircle />
              </SwiperSlideRight>
            </SwiperSlideContainer>
          </SwiperSlideContainer>
        </SwiperSlide>
        <SwiperSlide>
          <SwiperSlideContainer>3</SwiperSlideContainer>
        </SwiperSlide>
      </Swiper>
      <PaginationWrapper className={"pagination_custom"} />
    </ModalWrapper>
  );
};
