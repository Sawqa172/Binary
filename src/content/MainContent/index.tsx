import React from "react";

//style
import {
  MainContentWrapper,
  MainContentInteractions,
  MainContentInteractionsItem,
  DropdownCoinWrapper,
  MainContentInteractionsRates,
  MainContentInteractionsRatesTitle,
} from "./style";

//images
import coin from "assets/images/coin.png";
import { Image } from "assets/images/Image";
import { CurvedArrow } from "assets/svg/CurvedArrow";

//components
import { Dropdown } from "components/Dropdown";
import { ModalSwiper } from "components/ModalSwiper";

//modules
import { Sidebar } from "./Sidebar";
import { Chart } from "./Chart";

export const MainContent = ({ ...props }) => {
  let auth = true;

  return (
    <MainContentWrapper>
      {auth && (
        <MainContentInteractions>
          <MainContentInteractionsItem>
            <DropdownCoinWrapper>
              <Image src={coin} alt={"Logo image"} />
              <Dropdown title="Litecoin" />
            </DropdownCoinWrapper>
            <Dropdown title="Процент доходности" />
          </MainContentInteractionsItem>
          <MainContentInteractionsRates>
            <MainContentInteractionsRatesTitle>
              eth/usd
            </MainContentInteractionsRatesTitle>
            <CurvedArrow />
          </MainContentInteractionsRates>
        </MainContentInteractions>
      )}
      <Chart />
      <Sidebar />
      {!auth && <ModalSwiper />}
    </MainContentWrapper>
  );
};
