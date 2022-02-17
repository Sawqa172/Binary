import styled from "styled-components";
import { btnReset } from "../../style/ResetByClasses";
const MainContentWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  height: 100%;
  background-color: #1c1f2c;
  padding-top: 72px;
  padding-right: 15px;
`;

const MainContentInteractions = styled.div`
  position: absolute;
  top: 72px;
  left: -4px;
  display: flex;
  z-index: 4;
`;
const MainContentInteractionsItem = styled.div`
  display: flex;
  align-items: center;
  height: 55px;
  border-radius: 4px;
  background-color: #363a4b;
  padding: 0 10px;
`;
const DropdownCoinWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 15px;
`;
const MainContentInteractionsRates = styled.button`
  ${btnReset};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #363a4b;
  margin-left: 10px;
  padding: 0 10px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  min-width: 190px;
`;
const MainContentInteractionsRatesTitle = styled.span`
  font-family: "Poppins";
  font-weight: 900;
  font-size: 17px;
  color: #bfbfbf;
  margin-right: 15px;
  text-transform: uppercase;
`;

export {
  MainContentWrapper,
  MainContentInteractions,
  MainContentInteractionsItem,
  DropdownCoinWrapper,
  MainContentInteractionsRates,
  MainContentInteractionsRatesTitle,
};
