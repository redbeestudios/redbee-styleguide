import styled, { css } from 'styled-components';
import theme from '../../assets/styles/theme';

interface TextAreaStylesProps {
    hasFocus?:boolean,
    status?:'normal'|'error',
    disabled?:boolean,
    readOnly?:boolean,
    resize?:boolean

}

export const TextArea = styled.div`
  width: 100%;
  position: relative;

  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  textarea:-webkit-autofill:active {
    -webkit-transition: 'color 9999s ease-out, background-color 9999s ease-out';
    -webkit-transition-delay: 9999s;
  }
`;

export const LabelWrapper = styled.div`
  padding: ${theme.spacing['spacing-2']} ${theme.spacing['spacing-2']}
    ${theme.spacing['spacing-2']} ${theme.spacing['spacing-5']};
  display: flex;
`;

export const IconBaseTextArea = styled.div`
  align-self: flex-start;
`;

export const BaseTextArea = styled.div.attrs({
    'data-testid': 'base-text-area',
})<TextAreaStylesProps>`
  background-color: ${theme.colors.neutral.bg.weak};
  border-radius: ${theme.borderRadius['border-radius-3']};
  padding: ${theme.spacing['spacing-3']} ${theme.spacing['spacing-3']}
    ${theme.spacing['spacing-3']} ${theme.spacing['spacing-5']};
  display: flex;
  align-items: center;
  width: 100%;
  ${theme.textStyles['text-preset-9']};

  &:focus,
  &:focus-visible {
    outline: none;
  }

  outline: none;

  &::-moz-focus-inner {
    border: 0;
  }

  ${({ hasFocus }) =>
    css`
      box-shadow: inset 0 0 0 1px
        ${theme.colors[`${hasFocus ? 'secondary-1' : 'neutral'}`].border
        .regular};
      textarea {
        caret-color: ${theme.colors['secondary-1'].border.regular};
      }
    `}
  ${({ status }) =>
    status === 'error' &&
    css`
      box-shadow: inset 0 0 0 1px ${theme.colors['danger'].border.regular};
      textarea {
        caret-color: ${theme.colors['danger'].border.regular};
      }
    `}
  ${({ disabled }) =>
    disabled === true &&
    css`
      textarea {
        color: ${theme.colors['neutral'].text.regular};
        background-color: ${theme.colors['neutral'].bg.regular};
      }
      box-shadow: inset 0 0 0 1px ${theme.colors['neutral'].border.regular};
      background-color: ${theme.colors['neutral'].bg.regular};
      &:hover,
      &:focus {
        box-shadow: inset 0 0 0 1px ${theme.colors['neutral'].border.regular};
      }
    `}
  ${({ readOnly }) =>
    readOnly === true &&
    css`
      box-shadow: inset 0 0 0 1px ${theme.colors['neutral'].border.weak};
      textarea {
        color: ${theme.colors['neutral'].text.regular};
      }
      &:hover,
      &:focus {
        box-shadow: inset 0 0 0 1px ${theme.colors['neutral'].border.weak};
      }
    `}
`;

export const TextAreaTag = styled.textarea<TextAreaStylesProps>`
  min-height: 24px;
  width: 100%;
  height: 80px;
  border: none;
  background-color: ${theme.colors.neutral.bg.weak};
  ${theme.textStyles['text-preset-9']};
  color: ${theme.colors.neutral.text.strong};
  &:focus,
  &:focus-visible {
    outline: none;
  }

  outline: none;

  &::-moz-focus-inner {
    border: 0;
  }
  ${(prop) =>
    prop.resize === false &&
    css`
      resize: none;
    `}
`;

export const HelpText = styled.div<TextAreaStylesProps>`
  padding: ${theme.spacing['spacing-2']} ${theme.spacing['spacing-2']}
    ${theme.spacing['spacing-2']} ${theme.spacing['spacing-5']};
  display: flex;
  align-items: center;
  position: absolute;
  ${({ status }) =>
    status === 'error' &&
    css`
      > * {
        &:first-child {
          margin-right: ${theme.spacing['spacing-2']};
        }
      }
    `}
`;

export const SiblingTextArea = styled.div`
  padding: ${theme.spacing['spacing-2']} ${theme.spacing['spacing-5']}
    ${theme.spacing['spacing-2']} ${theme.spacing['spacing-2']};
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
