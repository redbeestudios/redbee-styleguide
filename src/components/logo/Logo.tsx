import React from 'react';
import { capitalize } from '../../utils/Utils';
import LogoSource from './LogoSource.inner';
import * as S from './Logo.styles';

const defaultProps = {
  variant: 'full',
  size: 'medium',
  cursor: 'default',
  type: 'horizontal',
};

type LogoProps = {
  size?: 'medium' | 'small' | 'large';
  type?: 'horizontal' | 'vertical' | 'isotype';
  cursor?: 'not-allowed' | 'pinter' | 'default' | 'none';
  variant?: 'full' | 'inverted' | 'without';
  onClick?: () => void;
};

const Logo = (props: LogoProps) => {
  let { size, type, cursor, variant } = props;
  size =
    (type === 'horizontal' || type === 'vertical') && size === 'large'
      ? 'medium'
      : size;
  const CurrentIcon =
    LogoSource[`${type}${capitalize(size)}${capitalize(variant)}`] || false;
  return (
    CurrentIcon && (
      <S.Logo cursor={cursor} onClick={props.onClick}>
        <CurrentIcon />
      </S.Logo>
    )
  );
};

Logo.defaultProps = defaultProps;

export default Logo;
