import React from 'react';
import * as S from './Card.styles';
type SpacingType =
  | '0'
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | '11';

type CardProps = {
  spacing?:
    | SpacingType
    | {
        top?: SpacingType;
        left?: SpacingType;
        right?: SpacingType;
        bottom?: SpacingType;
      };
  hasHover?: boolean;
  border?: boolean;
  disabled?: boolean;
  pressed?: boolean;
  borderRadius?:
    | boolean
    | {
        topLeft?: boolean;
        topRight?: boolean;
        bottomLeft?: boolean;
        bottomRight?: boolean;
      };
  onClick?: () => void;
  variant: 'neutral';
  modifier: 'regular' | 'weak';
  children?: any;
};

const defaultProps = {
  spacing: '0',
  hasHover: false,
  border: false,
  disabled: false,
  pressed: false,
  borderRadius: true,
  variant: 'neutral',
  modifier: 'weak',
};
const Card = (props: CardProps) => {
  const {
    spacing,
    hasHover,
    border,
    disabled,
    pressed,
    borderRadius,
    variant,
    modifier,
  } = props;
  return (
    <S.Card
      borderRadius={borderRadius}
      spacing={spacing}
      hasHover={hasHover}
      border={border}
      disabled={disabled}
      onClick={props.onClick}
      pressed={pressed}
      hasCursorPointer={props.onClick && true}
      variant={variant}
      modifier={modifier}
    >
      {props.children}
    </S.Card>
  );
};

Card.defaultProps = defaultProps;
export default Card;
