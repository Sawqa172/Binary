import React, { useState } from "react";
//styles
import {
  DropdownWrapper,
  DropdownText,
  DropdownList,
  DropdownOption,
} from "./style";

//icon
import { DropdownArrowFilled } from "assets/svg/Dropdown Arrow Filled";

export const HeaderDropdown = ({ ...props }) => {
  let [isOpenDropdown, setIsOpenDropdown] = useState<boolean>(false);

  const toggleOpenDropdown = () => {
    setIsOpenDropdown(!isOpenDropdown);
  };
  return (
    <DropdownWrapper onClick={toggleOpenDropdown} active={isOpenDropdown}>
      <DropdownText>{props.title}</DropdownText>
      <DropdownArrowFilled />
      <DropdownList active={isOpenDropdown}>
        {props.list &&
          props.list.map((item, index) => (
            <DropdownOption key={index}>{item.name}</DropdownOption>
          ))}
      </DropdownList>
    </DropdownWrapper>
  );
};
