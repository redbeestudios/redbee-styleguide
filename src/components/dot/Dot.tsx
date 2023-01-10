import React from 'react';
import * as S from './Dot.styles';

const defaultProps = {
  variant: 'neutral',
  modifier: 'regular',
};

export type DotProps = {
  modifier?: 'regular' | 'strong' | 'weak' | 'inverted';
  variant?: 'danger' | 'info' | 'warning' | 'success' | 'neutral';
};

const Dot = (props: DotProps) => {
  const { variant, modifier } = props;
  return <S.Dot variant={variant} modifier={modifier} />;
};

Dot.defaultProps = defaultProps;

export default Dot;
