import React from "react";
import * as S from "./H.styles";

type HProps = {
  type: "1" | "2" | "3" | "4" | "5" | "6";
  variant:
    | "primary"
    | "secondary-1"
    | "secondary-2"
    | "secondary-3"
    | "neutral"
    | "neutral-1"
    | "danger"
    | "warning"
    | "info"
    | "success";
  weight: "regular" | "bold";
  align: "center" | "right" | "left";
  modifier: "regular" | "strong" | "weak" | "inverted";
  font?: "primary" | "secondary";
  children?: any;
};

const defaultProps = {
  type: "1",
  variant: "neutral",
  weight: "regular",
  align: "left",
  modifier: "regular",
  font: "primary",
};

const H = (props: HProps) => {
  const { type, variant, weight, align, modifier, font } = props;
  return (
    <S.H
      align={align}
      as={`h${type}`}
      font={font}
      type={type}
      variant={variant}
      weight={weight}
      modifier={modifier}
    >
      {props.children}
    </S.H>
  );
};
H.defaultProps = defaultProps;

export default H;
