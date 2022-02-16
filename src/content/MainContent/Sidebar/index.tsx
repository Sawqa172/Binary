import React from "react";
//style
import {
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
} from "./style";

//images
import { Question } from "assets/svg/Question";
import { Note } from "assets/svg/Note";

//toast
import { ToastContainer, toast } from "react-toastify";

export const Sidebar = () => {
  const notify = () => {
    toast.success("Сделка завершена", {
      position: "bottom-left",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: false,
    });
  };

  return (
    <SidebarWrapper>
      <SidebarItem>
        <SidebarTitle>EUR / USD</SidebarTitle>
        <SidebarBet>
          <SidebarBetText>Время сделки</SidebarBetText>
          <SidebarIconQuestion>
            <Question />
          </SidebarIconQuestion>
          <SidebarBetText>WBNB</SidebarBetText>
          <SidebarBetPrice>1000</SidebarBetPrice>
        </SidebarBet>
        <SidebarBet>
          <SidebarBetText>Сумма</SidebarBetText>
          <SidebarIconQuestion>
            <Question />
          </SidebarIconQuestion>
          <SidebarBetText>P</SidebarBetText>
          <SidebarBetPrice>2900</SidebarBetPrice>
        </SidebarBet>
        <SidebarButton up onClick={notify}>
          Выше
        </SidebarButton>
        <SidebarIncome>Доход: 2900p</SidebarIncome>
        <SidebarButton>Ниже</SidebarButton>
      </SidebarItem>
      <SidebarItem>
        <SidebarTitle>Список сделок</SidebarTitle>
        <SidebarSkeleton>
          <Note />
          <SidebarSkeletonText>Сделок еще не было</SidebarSkeletonText>
        </SidebarSkeleton>
      </SidebarItem>
      <ToastContainer />
    </SidebarWrapper>
  );
};
