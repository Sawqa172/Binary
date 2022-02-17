import styled from "styled-components";
import { btnReset } from "style/ResetByClasses";

import { ToastContainer } from "react-toastify";

interface ISidebarButton {
  up?: boolean;
}

const SidebarWrapper = styled.div`
  margin-left: auto;
  width: 185px;
`;
const SidebarItem = styled.div`
  position: relative;
  padding: 10px 5px;
  width: 100%;
  background: #363a4b;
  box-shadow: 0 4px 50px 20px rgba(0, 0, 0, 0.13);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  min-height: 280px;
  height: auto;
`;
const SidebarTitle = styled.span`
  text-align: end;
  font-family: "Roboto";
  font-weight: 600;
  font-size: 12px;
  color: #fff;
  margin-bottom: 15px;
`;

const SidebarBet = styled.div`
  padding: 6px 12px;
  width: 100%;
  border: 1px solid #55647d;
  border-radius: 4px;
  display: flex;
  align-items: center;
  margin-bottom: 25px;
`;

const SidebarBetText = styled.span`
  font-family: "Roboto";
  font-weight: 700;
  font-size: 9px;
  color: rgba(255, 249, 249, 0.5);
  margin-right: 5px;
  margin-top: 3px;
`;

const SidebarIconQuestion = styled.div`
  margin-right: auto;
`;

const SidebarBetPrice = styled.span`
  font-family: "Roboto Mono";
  font-weight: 700;
  font-size: 12px;
  color: #fff;
`;

const SidebarButton = styled.button<ISidebarButton>`
  padding: 5px 12px;
  ${btnReset};
  background: ${(p) => (p.up ? "#38B781" : "#FF545E")};
  color: #fff;
  font-size: 14px;
  font-family: "Nunito";
  font-weight: 700;
  line-height: 32px;
  border-radius: 4px;
  text-align: left;
`;

const SidebarIncome = styled.span`
  font-family: "Roboto";
  font-weight: 600;
  font-size: 15px;
  line-height: 32px;
  color: #ececec;
  text-align: center;
  margin: 20px 0;
`;

const SidebarSkeleton = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  min-height: 150px;
`;
const SidebarSkeletonText = styled.span`
  margin-top: 10px;
  font-family: "Roboto";
  color: rgba(153, 166, 175, 0.8);
  font-size: 14px;
  line-height: 32px;
`;

export {
  SidebarWrapper,
  SidebarItem,
  SidebarTitle,
  SidebarBet,
  SidebarBetText,
  SidebarBetPrice,
  SidebarButton,
  SidebarIncome,
  SidebarIconQuestion,
  SidebarSkeleton,
  SidebarSkeletonText,
};
