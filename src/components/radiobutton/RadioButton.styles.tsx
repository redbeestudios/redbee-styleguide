import styled, { css } from 'styled-components';
import theme from '../../assets/styles/theme';

interface RadioButtonStylesProps {
    align?:'right'|'left',
    border?:boolean,
    disabled?:boolean,
    status?:'normal'|'error'
}

export const RadioButton = styled.div<RadioButtonStylesProps>`
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  border-radius: ${theme.spacing['spacing-2']};

  ${({ align }) =>
    align === 'left'
        ? css`
          justify-content: flex-start;
        `
        : css`
          justify-content: flex-end;
        `}

  ${({ border }) =>
    border === true &&
    css`
      height: 40px;
    `}
`;

export const RadioBorder = styled.label<RadioButtonStylesProps>`
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  margin: 0;
  cursor: pointer;
  border-radius: ${theme.spacing['spacing-2']};
`;

export const Mark = styled.label<RadioButtonStylesProps>`
  position: relative;
  border: 1px solid ${theme.colors.neutral.border.regular};
  width: 14px;
  height: 14px;
  left: 0px;
  border-radius: ${theme.borderRadius['border-radius-5']};
  ${({ align }) =>
    align === 'left'
        ? css`
          margin-right: ${theme.spacing['spacing-3']};
        `
        : css`
          margin-left: ${theme.spacing['spacing-3']};
        `}
  ${({ border, align }) =>
    border === true && align === 'right'
        ? css`
          margin-left: ${theme.spacing['spacing-3']};
          margin-right: ${theme.spacing['spacing-5']};
        `
        : border === true &&
        align === 'left' &&
        css`
          margin-left: ${theme.spacing['spacing-5']};
          margin-right: ${theme.spacing['spacing-3']};
        `}
  ${({ disabled, status }) =>
    disabled === true && status !== 'error'
        ? css`
          background-color: ${theme.colors.neutral.bg.strong};
          border-color: ${theme.colors.neutral.border.regular};
        `
        : status === 'error' &&
        css`
          border-color: ${theme.colors.danger.border.regular};
        `}

  margin-bottom: 0px;
  vertical-align: middle;
  &::after {
    content: '';
    display: block;
    width: 14px;
    height: 14px;
    border-radius: ${theme.borderRadius['border-radius-5']};
    background-color: ${theme.colors['secondary-1'].bg.regular};
    opacity: ${theme.opacities['opacity-4']};
    left: 50%;
    top: 50%;
    position: absolute;
    margin: 0;
    padding: 0;
  }
`;

export const InputRadioTag = styled.input<RadioButtonStylesProps>`
  position: absolute;
  visibility: hidden;
  display: none;
  + ${Mark} + label,
  + label + ${Mark}, + label {
    z-index: 1;
  }

  ${({ disabled }) =>
    disabled === false
        ? css`
          &:checked + ${Mark}, &:checked + label + ${Mark} {
            border-color: ${theme.colors['secondary-1'].border.regular};
            &::after {
              width: 8px;
              height: 8px;
              opacity: ${theme.opacities['opacity-1']};
              left: 3px;
              top: 3px;
              margin: 0;
              padding: 0;
            }
          }
          &:hover {
            + ${Mark}, + label + ${Mark} {
              background-color: ${theme.colors.neutral.bg.strong};
            }
            &:checked + ${Mark}, &:checked + label + ${Mark} {
              background-color: ${theme.colors.neutral.bg.weak};
              border-color: ${theme.colors['secondary-1'].border.strong};
              &::after {
                background-color: ${theme.colors['secondary-1'].bg.strong};
              }
            }
          }
        `
        : css`
          &:checked + ${Mark}, &:checked + label + ${Mark} {
            z-index: 1;
            border-color: ${theme.colors.neutral.border.regular};
            &::after {
              background-color: ${theme.colors.neutral.bg.stronger};
              width: 8px;
              height: 8px;
              opacity: ${theme.opacities['opacity-1']};
              left: 2px;
              top: 2px;
              margin: 0;
              padding: 0;
            }
          }
        `}
  ${({ border, disabled, status }) =>
    border === true && disabled === false
        ? css`
          &:checked
            + ${Mark}
            + label
            + ${RadioBorder},
            &:checked
            + label
            + ${Mark}
            + ${RadioBorder} {
            box-shadow: inset 0 0 0 1px
              ${theme.colors['secondary-1'].border.regular};
          }
          &:hover {
            + ${Mark}
              + label
              + ${RadioBorder},
              + label
              + ${Mark}
              + ${RadioBorder} {
              background-color: ${theme.colors.neutral.bg.regular};
              box-shadow: inset 0 0 0 1px
                ${theme.colors[status === 'error' ? 'danger' : 'neutral'].border
            .regular};
            }
            &:checked
              + ${Mark}
              + label
              + ${RadioBorder},
              &:checked
              + label
              + ${Mark}
              + ${RadioBorder} {
              background-color: ${theme.colors.neutral.bg.regular};
              box-shadow: inset 0 0 0 1px
                ${theme.colors['secondary-1'].border.strong};
            }
          }
        `
        : border === true &&
        disabled === true &&
        css`
          &:checked
            + ${Mark}
            + label
            + ${RadioBorder},
            &:checked
            + label
            + ${Mark}
            + ${RadioBorder} {
            box-shadow: inset 0 0 0 1px ${theme.colors.neutral.border.weak};
          }
          + ${Mark}
            + label
            + ${RadioBorder},
            + label
            + ${Mark}
            + ${RadioBorder} {
            box-shadow: none;
          }
        `}
    ${({ border, status }) =>
    border === true &&
    status === 'error' &&
    css`
      + ${Mark} + label + ${RadioBorder}, + label + ${Mark} + ${RadioBorder} {
        box-shadow: inset 0 0 0 1px ${theme.colors['danger'].border.regular};
      }
      &:hover {
        + ${Mark} + label + ${RadioBorder}, + label + ${Mark} + ${RadioBorder} {
          background-color: ${theme.colors.neutral.bg.regular};
        }
      }
    `}
`;
