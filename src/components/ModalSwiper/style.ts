import styled from "styled-components";
import { btnReset } from "../../style/ResetByClasses";

interface IModalWrapper {
  active: boolean;
}

const ModalWrapper = styled.div<IModalWrapper>`
  position: absolute;
  top: 72px;
  left: 30px;
  background-color: #363a4b;
  border-radius: 32px;
  height: 255px;
  width: 920px;
  transition: 0.3s linear;
  opacity: ${(p) => (p.active ? 1 : 0)};
  visibility: ${(p) => (p.active ? "visible" : "hidden")};
  z-index: 11;
`;

const PaginationWrapper = styled.div`
  &.swiper-pagination-vertical {
    width: 16px;
    position: absolute;
    right: -25px;
    z-index: 12;
    span {
      display: flex;
      width: 100%;
      min-width: 16px;
      height: 16px;
      border-radius: 50%;
      transition: 0.3s linear;
      background-color: #fff;
      margin-bottom: 10px;
      cursor: pointer;
      &.swiper-pagination-bullet {
        background: #fff;
        opacity: 1;
      }
      &.swiper-pagination-bullet-active {
        background: #38b781;
      }
      &:hover:not(.swiper-pagination-bullet-active) {
        transform: scale(1.05);
      }
    }
  }
`;

const SwiperSlideContainer = styled.div`
  padding: 15px 30px;
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
const SwiperSlideLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-right: 20px;
`;
const SwiperSlideRight = styled.div`
  position: relative;
  display: flex;
  width: 50%;
`;

const SwiperSlideTitle = styled.p`
  font-family: "Roboto";
  font-size: 40px;
  color: #fff;
  font-weight: 600;
  letter-spacing: 0.3px;
  line-height: 56px;
  margin-bottom: 25px;
`;

const SwiperSlideButton = styled.button`
  ${btnReset};
  display: flex;
  align-items: center;
  height: 53px;
  padding: 0 12px;
  border: 1px solid #fff;
  border-radius: 40px;
  max-width: 180px;

  svg {
    margin-top: 2px;
  }
  &:hover {
    svg {
      transform: translateX(4px);
    }
  }
`;

const SwiperSlideButtonText = styled.span`
  font-family: "Roboto";
  font-size: 20px;
  line-height: 24px;
  color: #fff;
  font-weight: 600;
  letter-spacing: 1px;
`;

const SwiperCloseButton = styled.button`
  ${btnReset};
  min-width: auto;
  position: absolute;
  top: 15px;
  right: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 12;
  &:hover svg {
    color: #38b781;
  }
`;

const SwiperSliderRightCircle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 404px;
  height: 404px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.05);

  &:after,
  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    mix-blend-mode: normal;
    border-radius: inherit;
  }
  &:after {
    width: 304px;
    height: 304px;
    border: 2px solid rgba(255, 255, 255, 0.3);
  }
  &:before {
    width: 354px;
    height: 354px;
    border: 2px solid rgba(255, 255, 255, 0.2);
  }
`;

const SwiperSlideRightText = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: rgba(247, 247, 247, 0.9);
  font-family: "Roboto";
  font-size: 16px;
  line-height: 32px;
  font-weight: 500;
`;

export {
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
  SwiperSlideRightText,
};
