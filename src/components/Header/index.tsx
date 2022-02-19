import React from "react";

//style
import {
  HeaderWrapper,
  HeaderContent,
  HeaderLeft,
  HeaderRight,
  HeaderRightInteractions,
  HeaderRightUser,
  HeaderRightUserInfo,
  HeaderRightInteractionLink,
  HeaderRightUserInfoName,
  HeaderRightUserBalance,
  HeaderRightUserAvatar,
  HeaderLogo,
} from "./style";
//images
import { Image } from "assets/images/Image";
import logo from "assets/images/logo.png";
import avatar from "assets/images/avatar.png";

import { HeaderDropdown } from "./HeaderDropdown";

//data
import { data } from "./data";
import { ModalPhone } from "./ModalPhone";

let auth = false;

export const Header = ({ ...props }) => {
  return (
    <HeaderWrapper>
      {auth && (
        <HeaderContent>
          <HeaderLeft>
            <HeaderLogo>
              <Image src={logo} alt={"Logo image"} />
            </HeaderLogo>
          </HeaderLeft>
          <HeaderRight>
            <HeaderRightInteractions>
              <HeaderRightInteractionLink active>
                Пополнить
              </HeaderRightInteractionLink>
              <HeaderRightInteractionLink>Вывести</HeaderRightInteractionLink>
              <HeaderDropdown list={data} title="Демо счет" />
            </HeaderRightInteractions>
            <HeaderRightUser to="#">
              <HeaderRightUserInfo>
                <HeaderRightUserInfoName>UserName</HeaderRightUserInfoName>
                <HeaderRightUserBalance>Баланс 29000р</HeaderRightUserBalance>
              </HeaderRightUserInfo>
              <HeaderRightUserAvatar>
                <Image src={avatar} alt="Avatar image" />
              </HeaderRightUserAvatar>
            </HeaderRightUser>
          </HeaderRight>
        </HeaderContent>
      )}
      {!auth && (
        <HeaderContent>
          <HeaderLeft>
            <HeaderLogo>
              <Image src={logo} alt={"Logo image"} />
            </HeaderLogo>
          </HeaderLeft>
          <HeaderRight>
            <HeaderRightInteractions>
              <ModalPhone />
              <HeaderRightInteractionLink active>
                Регистрация
              </HeaderRightInteractionLink>
              <HeaderRightInteractionLink>Войти</HeaderRightInteractionLink>
              <HeaderDropdown list={data} title="Демо торговля" />
            </HeaderRightInteractions>
          </HeaderRight>
        </HeaderContent>
      )}
    </HeaderWrapper>
  );
};
