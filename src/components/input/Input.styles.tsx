import styled, { css } from "styled-components";
import theme from "../../assets/styles/theme";

export interface InputProps {
  id?: string;
  name?: string;
  value?: string;
  label?: string;
  type?: "text" | "number" | "password" | "check" | "email";
  size?: "sm" | "md" | "lg";
  status?: "normal" | "error";
  readOnly?: boolean;
  placeholder?: string;
  onChange?: (e) => any;
  onBlur?: (e) => any;
  hasFocus?: boolean;
  onKeydown?: () => any;
  placeHolder?: string;
  message?: string;
  disabled?: boolean;
  maxLength?: number;
  autocomplete?: string;
  onlyNumbers?: boolean;
  showPasswordButton?: boolean;
  onClick?: () => any;
  inputRef?: any;
  maxLengthHelpText?: boolean;
  pattern?: string;
  icons?: {
    iconLeft?: any;
    iconRight?: any;
  };
}

export const Input = styled.div`
  width: 100%;
  position: relative;

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-transition: "color 9999s ease-out, background-color 9999s ease-out";
    -webkit-transition-delay: 9999s;
  }
`;

export const LabelWrapper = styled.div`
  padding: ${theme.spacing["spacing-1"]} ${theme.spacing["spacing-1"]}
    ${theme.spacing["spacing-1"]} ${theme.spacing["spacing-3"]};
  display: flex;
`;

export const BaseInput = styled.div<InputProps>`
  background-color: ${theme.colors.neutral.bg.regular};
  border-radius: ${theme.borderRadius["border-radius-3"]};
  padding: ${theme.spacing["spacing-2"]} ${theme.spacing["spacing-2"]}
    ${theme.spacing["spacing-2"]} ${theme.spacing["spacing-3"]};
  display: flex;
  align-items: center;
  width: 100%;
  ${theme.textStyles["text-preset-9"]};

  &:focus,
  &:focus-visible {
    outline: none;
  }

  outline: none;

  &::-moz-focus-inner {
    border: 0;
  }

  ${({ size }) => getSize(size)}
  ${({ hasFocus }) =>
    css`
      box-shadow: inset 0 0 0 1px
        ${theme.colors[`${hasFocus ? "secondary-1" : "neutral"}`].border
          .regular};
      input {
        caret-color: ${theme.colors["secondary-1"].border.regular};
      }
    `}
  ${({ status }) =>
    status === "error" &&
    css`
      box-shadow: inset 0 0 0 1px ${theme.colors["danger"].border.regular};
      input {
        caret-color: ${theme.colors["danger"].border.regular};
      }
    `}
  ${({ disabled }) =>
    disabled === true &&
    css`
      input {
        color: ${theme.colors["neutral"].text.regular};
        background-color: ${theme.colors["neutral"].bg.regular};
      }
      box-shadow: inset 0 0 0 1px ${theme.colors["neutral"].border.regular};
      background-color: ${theme.colors["neutral"].bg.regular};
      &:hover,
      &:focus {
        box-shadow: inset 0 0 0 1px ${theme.colors["neutral"].border.regular};
      }
    `}
  ${({ readOnly }) =>
    readOnly === true &&
    css`
      box-shadow: inset 0 0 0 1px ${theme.colors["neutral"].border.weak};
      input {
        color: ${theme.colors["neutral"].text.regular};
      }
      &:hover,
      &:focus {
        box-shadow: inset 0 0 0 1px ${theme.colors["neutral"].border.weak};
      }
    `}
  ${({ onlyNumbers }) =>
    onlyNumbers === true &&
    css`
      input::-webkit-outer-spin-button,
      input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }

      input[type="number"] {
        -moz-appearance: textfield;
      }
    `}
`;

export const InputTag = styled.input`
  min-height: 24px;
  width: 100%;
  border: none;
  background-color: ${theme.colors.neutral.bg.regular};
  color: ${theme.colors.neutral.text.strong};
  &:focus,
  &:focus-visible {
    outline: none;
  }

  outline: none;

  &::-moz-focus-inner {
    border: 0;
  }

  * + & {
    margin-left: ${theme.spacing["spacing-0"]};
  }

  & + * {
    margin-left: ${theme.spacing["spacing-0"]};
  }
`;

export const HelpText = styled.div<InputProps>`
  padding: ${theme.spacing["spacing-1"]} ${theme.spacing["spacing-1"]}
    ${theme.spacing["spacing-1"]} ${theme.spacing["spacing-3"]};
  display: flex;
  align-items: flex-start;
  position: absolute;
  ${({ status }) =>
    status === "error" &&
    css`
      > * {
        &:first-of-type {
          margin-right: ${theme.spacing["spacing-1"]};
        }
      }
    `}
`;

export const SiblingInputTag = styled.div`
  height: 24px;
  display: flex;
  align-items: center;
`;

const getSize = (size) => {
  switch (size) {
    case "sm":
      return css`
        width: 215px;
      `;
    case "md":
      return css`
        width: 325px;
      `;
    case "lg":
      return css`
        width: 560px;
      `;
  }
};
