import styled, { css } from 'styled-components';
import theme from '../../assets/styles/theme';

interface CheckBoxStylesProps {
  isSelectAllCheck?: boolean;
  children?: any;
  checked?: boolean;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  modifier?: any;
  variant?: any;
}

export const Checkbox = styled.div<CheckBoxStylesProps>`
  display: flex;
  position: relative;
  align-items: center;
  ${theme.textStyles['text-preset-9']};
`;

export const CheckboxInput = styled.div<CheckBoxStylesProps>`
  input {
    position: absolute;
    z-index: 10;
    opacity: 0;
    cursor: pointer;
    ${({ size }) => getSizeCheckbox(size)}
  }
`;

export const CheckboxChecked = styled.span<CheckBoxStylesProps>`
  display: flex;
  justify-content: center;
  height: 14px;
  width: 14px;
  ${({ size }) => getSizeCheckbox(size)}
  position: relative;
  border-radius: ${theme.borderRadius['border-radius-1']};
  ${({ modifier, variant }) => `
    svg {
      path, 
      rect {
        fill: ${theme.colors[variant].ic[modifier]};
      }
    }
  `}
  ${Checkbox} input:not(:checked) + & {
    background: ${theme.colors['neutral'].bg.weak};
    box-shadow: inset 0 0 0 1px ${theme.colors['neutral'].border.regular};
    i {
      visibility: hidden;
    }
  }
  ${Checkbox} input:checked + & {
    box-shadow: inset 0 0 0 1px ${theme.colors['secondary-1'].bg.regular};
    background: ${theme.colors['secondary-1'].bg.regular};
    i {
      visibility: visible;
    }
  }
  ${Checkbox} input:checked:hover:not(:disabled)  + & {
    background: ${theme.colors['secondary-1'].bg.strong};
    box-shadow: inset 0 0 0 1px ${theme.colors['secondary-1'].bg.strong};
  }
  ${Checkbox} input:disabled + & {
    background: ${theme.colors['neutral'].bg.strong};
    box-shadow: inset 0 0 0 1px ${theme.colors['neutral'].border.regular};
  }
  ${Checkbox} input:hover:not(:checked):not(:disabled)  + & {
    background: ${theme.colors['neutral'].bg.regular};
  }
`;

export const TextWrapper = styled.div`
  margin-left: ${theme.spacing['spacing-2']};
`;

const getSizeCheckbox = (size) => {
  const sizes = {
    sm: '14px',
    md: '20px',
    lg: '24px',
  };
  return css`
    height: ${sizes[size]};
    width: ${sizes[size]};
  `;
};
