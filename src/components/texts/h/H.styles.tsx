import styled, { css } from 'styled-components';
import { getAlign, getFont, getType, getWeight, getVariant } from '../Utils';
import React from 'react';

export interface HProps {
  type: '1' | '2' | '3' | '4' | '5' | '6';
  variant:
    | 'primary'
    | 'secondary-1'
    | 'secondary-2'
    | 'secondary-3'
    | 'neutral'
    | 'neutral-1'
    | 'danger'
    | 'warning'
    | 'info'
    | 'success';
  weight: 'regular' | 'bold';
  align: 'center' | 'right' | 'left';
  modifier: 'regular' | 'strong' | 'weak' | 'inverted';
  font?: 'primary' | 'secondary';
  children?: any;
}

export const H = styled.h1<HProps>`
  ${({ type }) => getType('h', type)}

  ${({ variant, modifier }) => getVariant(variant, modifier)}

  ${({ weight }) => getWeight('h', weight)}

  ${({ font }) => getFont('h', font)}

  ${({ align }) => getAlign(align)}
`;
