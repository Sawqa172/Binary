import styled from "styled-components";
import { btnReset } from "./ResetByClasses";

const DefaultButton = styled.button`
  ${btnReset};
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;

export { DefaultButton };
