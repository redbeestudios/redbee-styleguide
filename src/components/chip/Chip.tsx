import React from "react";
import PropTypes from "prop-types";
import * as S from "./Chip.styles";
import Span from "../texts/span/Span";
import Icon from "../icon/Icon";
const defaultProps = {
  active: false,
  disabled: false,
};

export type ChipProps = {
  text: string;
  value?: string;
  iconLeft?: string;
  closeButton?: boolean;
  disabled?: boolean;
  active?: boolean;
  onClickClose?: () => void;
  onClick?: (value) => void;
};

const Chip = (props: ChipProps) => {
  const {
    text,
    value = text,
    iconLeft,
    closeButton,
    onClickClose,
    disabled,
    active,
    onClick,
  } = props;

  let state = disabled ? "disabled" : active ? "active" : "default";

  const renderIconLeft = () => {
    const states = {
      disabled: {
        variant: "neutral",
        modifier: "regular",
      },
      active: {
        variant: "secondary-1",
        modifier: "strong",
      },
      default: {
        variant: "neutral",
        modifier: "strong",
      },
    };
    return (
      <S.IconLeft>
        <Icon
          name={iconLeft}
          variant={states[state].variant}
          modifier={states[state].modifier}
          cursor="default"
          width={24}
          height={24}
        />
      </S.IconLeft>
    );
  };

  const renderIconClose = () => {
    let states = {
      disabled: {
        variant: "neutral",
        modifier: "regular",
        cursor: "not-allowed",
      },
      active: {
        variant: "secondary-1",
        modifier: "strong",
        cursor: "pointer",
      },
      default: {
        variant: "neutral",
        modifier: "strong",
        cursor: "pointer",
      },
    };
    return (
      <S.IconRight>
        <Icon
          variant={states[state].variant}
          name="cancel_outline"
          modifier={states[state].modifier}
          width={24}
          height={24}
          cursor={states[state].cursor}
          onClick={disabled ? null : onClickClose}
        />
      </S.IconRight>
    );
  };

  const renderText = () => {
    const states = {
      disabled: {
        variant: "neutral",
        modifier: "regular",
      },
      active: {
        variant: "secondary-1",
        modifier: "strong",
      },
      default: {
        variant: "neutral",
        modifier: "strong",
      },
    };
    return (
      <S.TextWrapper>
        <Span
          type="2"
          variant={states[state].variant}
          modifier={states[state].modifier}
        >
          {text}
        </Span>
      </S.TextWrapper>
    );
  };

  return (
    <S.Chip
      active={active}
      disabled={disabled}
      iconExit={closeButton}
      onClick={() => (disabled ? undefined : onClick(value))}
      key={value}
    >
      {iconLeft && renderIconLeft()}
      {text && renderText()}
      {closeButton && renderIconClose()}
    </S.Chip>
  );
};

Chip.defaultProps = defaultProps;

export default Chip;
