import React from "react";
import * as S from "./Icon.styles";
import IconSource from "./iconSource.inner";

const defaultProps = {
  cursor: "default" as "not-allowed" | "pointer" | "default" | "none",
  height: 24 as number,
  modifier: "regular" as "regular" | "strong" | "weak" | "inverted",
  variant: "primary" as
    | "primary"
    | "secondary-1"
    | "secondary-2"
    | "secondary-3"
    | "neutral"
    | "danger"
    | "warning"
    | "info"
    | "success",
  width: 24 as number,
  disabled: false as boolean,
};

type IconProps = {
  name: string;
  onClick?: () => any;
} & typeof defaultProps;

const Icon = (props: IconProps) => {
  const { disabled, variant, cursor, modifier, width, height } = props;
  const CurrentIcon = IconSource[`${props.name}`] || false;
  return (
    CurrentIcon && (
      <S.Icon
        variant={disabled ? "neutral" : variant}
        cursor={disabled ? "none" : cursor}
        modifier={disabled ? "regular" : modifier}
        data-testid={`icon-${props.name}`}
        onClick={disabled ? undefined : props.onClick}
        disabled={disabled}
      >
        <CurrentIcon width={width} height={height} />
      </S.Icon>
    )
  );
};

Icon.defaultProps = defaultProps;

export default Icon;
