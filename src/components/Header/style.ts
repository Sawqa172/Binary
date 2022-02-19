import styled from "styled-components";
import { Link } from "react-router-dom";
import { aReset, btnReset } from "style/ResetByClasses";
import { variables } from "style/variables";
//types
interface IHeaderRightInteractionsLink {
  active?: boolean;
}

const HeaderWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: auto;
  min-height: 72px;
  width: 100%;
  padding-right: 15px;
  background: #1c1f2c;
  display: flex;
  align-items: center;
  z-index: 15;
`;

const HeaderContent = styled.div`
  width: 100%;
  display: flex;
  height: auto;
  align-items: center;
`;
const HeaderLeft = styled.div`
  margin-right: auto;
  display: flex;
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderRightInteractions = styled.div`
  position: relative;
  padding: 5px;
  display: flex;
  background: #2c303f;
  border-radius: 5px;
  margin-right: 10px;
`;

const HeaderRightUser = styled(Link)`
  display: flex;
  ${aReset};
`;
const HeaderRightInteractionLink = styled.button<IHeaderRightInteractionsLink>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  padding: 5px;
  color: ${(p) =>
    p.active ? "rgba(247, 247, 247, 0.9)" : "rgba(247, 247, 247, 0.6)"};
  font-family: "Roboto";
  font-size: 12px;
  ${btnReset};
  background: ${(p) => (p.active ? variables.green : "")};
`;
const HeaderRightUserInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 10px;
`;

const HeaderRightUserInfoName = styled.span`
  font-family: "Roboto";
  font-weight: 500;
  font-size: 14px;
  color: #fff;
  text-align: end;
`;
const HeaderRightUserBalance = styled.span`
  font-family: "Roboto";
  font-size: 11px;
  font-weight: 500;
  color: #fff;
`;

const HeaderRightUserAvatar = styled.div`
  border: 2px solid #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 40px;
  height: 40px;

  img {
    border-radius: inherit;
    object-position: center;
  }
`;

const HeaderLogo = styled.div`
  width: 245px;
  height: 45px;
`;

export {
  HeaderWrapper,
  HeaderContent,
  HeaderLeft,
  HeaderRight,
  HeaderRightInteractions,
  HeaderRightInteractionLink,
  HeaderRightUser,
  HeaderRightUserInfo,
  HeaderRightUserInfoName,
  HeaderRightUserBalance,
  HeaderRightUserAvatar,
  HeaderLogo,
};
