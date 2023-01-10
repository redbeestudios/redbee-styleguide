import React from 'react';
import * as S from './Label.styles';

const defaultProps = {
  type: '5' as '1' | '2' | '3' | '4' | '5',
  variant: 'neutral' as 'neutral' | 'neutral-1' | 'danger',
  weight: 'regular' as 'regular' | 'bold',
  modifier: 'regular' as 'regular' | 'strong' | 'weak' | 'inverted',
};

type LabelProps = {
  id?: string;
  children: any;
} & typeof defaultProps;

const Label = (props: LabelProps) => {
  const { id, type, variant, weight, modifier, children } = props;
  return (
    <S.Label
      htmlFor={id}
      type={type}
      variant={variant}
      weight={weight}
      modifier={modifier}
    >
      {children}
    </S.Label>
  );
};

Label.defaultProps = defaultProps;

export default Label;
