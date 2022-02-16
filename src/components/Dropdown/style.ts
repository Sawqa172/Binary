import styled from "styled-components";
interface IDropdownList {
  active: boolean;
}
const DropdownWrapper = styled.div<IDropdownList>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
  svg {
    transform: ${(p) => (p.active ? "rotate(180deg)" : "rotate(0)")};
  }
`;

const DropdownText = styled.span`
  font-family: "Poppins";
  font-size: 16px;
  color: #fff;
  margin-right: 15px;
`;

const DropdownList = styled.div<IDropdownList>`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: #fff;
  border-radius: 5px;
  transition: 0.3s linear;
  opacity: ${(p) => (p.active ? 1 : 0)};
  visibility: ${(p) => (p.active ? "visible" : "hidden")};
  border: 1px solid #000;
`;

const DropdownOption = styled.p`
  font-size: 12px;
  margin: 10px 0;
  color: #000;
`;
export { DropdownWrapper, DropdownText, DropdownList, DropdownOption };
