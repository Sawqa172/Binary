import React from "react";

interface IImage {
  src: string;
  alt: string;
}

export const Image = ({ ...props }: IImage) => {
  return <img src={props.src} alt={props.alt} />;
};
