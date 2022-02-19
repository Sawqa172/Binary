import styled from "styled-components";
import { variables } from "style/variables";
import { IMaskInput } from "react-imask";
import { btnReset, inputReset } from "style/ResetByClasses";

interface IModalWrapper {
  active: boolean;
}
const ModalPhoneWrapper = styled.div<IModalWrapper>`
  position: absolute;
  top: 0;
  left: calc(-100% - 15px);
  transition: 0.3s linear;
  padding: 30px 10px 25px;
  opacity: ${(p) => (p.active ? 1 : 0)};
  visibility: ${(p) => (p.active ? "visible" : "hidden")};
  z-index: 11;
  background-color: #fff;
  width: 275px;
  border-radius: 18px;
`;

const ModalPhoneTitle = styled.h2`
  margin: 0 0 10px;
  width: 100%;
  color: #000;
  display: inline-block;
  font-size: 20px;
  word-break: break-word;
`;

const ModalPhoneSubTitle = styled.p`
  font-size: 13px;
  color: ${variables.grey};
  width: 100%;
  word-break: break-word;
  margin-bottom: 30px;
`;

const Form = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const FormItem = styled.div`
  width: 100%;
  position: relative;
  height: auto;
  padding-bottom: 15px;
  margin-bottom: 30px;
`;

const FormInput = styled(IMaskInput)`
  ${inputReset};
  width: 100%;
  height: 50px;
  font-size: 24px;
  font-family: "Roboto";
  padding-left: 25px;
  border-bottom: 3px solid ${variables.grey};
  transition: 0.3s linear;
  caret-color ${variables.green};
  color: ${variables.green};
  
  &:focus {
    border-bottom: 3px solid ${variables.green};
  }
`;

const ModalPhoneFormSubmit = styled.button`
  ${btnReset};
  width: 100%;
  height: 40px;
  padding-left: 20px;
  background-color: ${variables.green};
  color: #fff;
  font-weight: 700;
  font-family: "Nunito";
  font-size: 14px;
  line-height: 32px;
`;

const ModalPhoneLink = styled.button`
  width: 100%;
  text-align: center;
  font-family: "Roboto";
  font-size: 11px;
`;

const ModalPhoneCloseButton = styled.button`
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
    color: ${variables.green};
  }
`;

const ErrorMessage = styled.span`
  color: ${variables.red};
  position: absolute;
  bottom: -10px;
  left: 0;
  transition: 0.3s linear;
`;

export {
  ModalPhoneWrapper,
  ModalPhoneTitle,
  ModalPhoneSubTitle,
  Form,
  FormItem,
  FormInput,
  ModalPhoneFormSubmit,
  ModalPhoneLink,
  ModalPhoneCloseButton,
  ErrorMessage,
};
