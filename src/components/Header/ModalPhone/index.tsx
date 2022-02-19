import React, { useEffect, useRef, useState } from "react";

import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { IMaskInput } from "react-imask";
import { IModalPhone } from "./types";

//style
import {
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
} from "./style";

//images
import { Cross } from "assets/svg/Cross";

export const ModalPhone = ({ ...props }) => {
  let [activeModal, setActiveModal] = useState<boolean>(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setError,
  } = useForm<IModalPhone>({ mode: "onSubmit" });

  const PhoneMask = "+0(000)000-00-00";

  const submitHandler: SubmitHandler<IModalPhone> = (data: IModalPhone) => {
    console.log(data);
  };
  const phoneRef = useRef<IModalPhone>({ phone: "" });

  const testFunction = (value) => {
    console.log(value);
  };

  return (
    <ModalPhoneWrapper active={activeModal}>
      <ModalPhoneCloseButton onClick={() => setActiveModal(false)}>
        <Cross />
      </ModalPhoneCloseButton>
      <ModalPhoneTitle>Введите ваш номер телефона</ModalPhoneTitle>
      <ModalPhoneSubTitle>
        Номер телефона будет использован для подтверждения профиля
      </ModalPhoneSubTitle>
      <Form onSubmit={handleSubmit(submitHandler(phoneRef.current))}>
        <FormItem>
          <FormInput
            mask={PhoneMask}
            unmask={false}
            placeholder="+7(925)123-45-67"
            onAccept={(value) =>
              (phoneRef.current = { phone: value } as IModalPhone)
            }
          />
        </FormItem>
        <ModalPhoneFormSubmit type="submit">
          Отправить смс с кодом
        </ModalPhoneFormSubmit>
      </Form>
    </ModalPhoneWrapper>
  );
};
