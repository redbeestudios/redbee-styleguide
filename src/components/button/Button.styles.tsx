import styled, { css } from "styled-components";
import theme from "../../assets/styles/theme";

interface ButtonProps {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  iconAlign?: "center" | "left" | "right" | "none";
  fullwidth?: boolean;
  disabled?: boolean;
  icon;
}

export const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  cursor: pointer;
  border: none;

  &:focus,
  &:focus-visible {
    outline: none;
  }

  outline: none;

  &::-moz-focus-inner {
    border: 0;
  }

  ${({ size }) => getSize(size)}

  ${({ size, iconAlign }) => getPadding(size, iconAlign)}

  ${({ fullwidth }) => fullwidth && getFullWidth()}
    
  ${({ disabled }) => disabled && getDisabled()}
    
  ${(props) => getVariant(props)}
`;

//@ts-ignore
const getVariant = (properties: ButtonProps) => {
  switch (properties.variant) {
    case "primary":
      return css`
        background-color: ${theme.colors["primary"].bg.regular};
        color: ${theme.colors["neutral"].text.inverted};

        &:hover {
          background-color: ${theme.colors["primary"].bg.strong};
        }

        &:active {
          background-color: ${theme.colors["secondary-1"].bg.regular};
        }

        ${(props) =>
          properties.disabled &&
          `
            background-color: ${theme.colors["neutral"].bg.stronger};
            color: ${theme.colors["neutral"].text.regular};
          `}
      `;

    case "secondary":
      return css`
        background-color: transparent;
        box-shadow: inset 0 0 0 2px ${theme.colors["primary"].border.regular};
        color: ${theme.colors["primary"].text.regular};

        &:hover {
          background-color: ${theme.colors["primary"].bg.weak};
          box-shadow: inset 0 0 0 2px ${theme.colors["primary"].border.strong};
        }

        &:active {
          background-color: ${theme.colors["secondary-1"].bg.weak};
          box-shadow: inset 0 0 0 2px
            ${theme.colors["secondary-1"].border.strong};
        }

        ${(props) =>
          properties.disabled &&
          css`
            box-shadow: inset 0 0 0 2px ${theme.colors["neutral"].border.strong};
            color: ${theme.colors["neutral"].text.regular};
          `}
      `;
  }
};

const getSize = (size) => {
  switch (size) {
    case "sm":
      return css`
        border-radius: ${theme.borderRadius["border-radius-3"]};
        ${theme.textStyles["text-preset-7"]};
      `;
    case "md":
      return css`
        border-radius: ${theme.borderRadius["border-radius-3"]};
        ${theme.textStyles["text-preset-6"]};
      `;
    case "lg":
      return css`
        border-radius: ${theme.borderRadius["border-radius-3"]};
        ${theme.textStyles["text-preset-5"]};
      `;
    case "md-full":
      return css`
        border-radius: ${theme.borderRadius["border-radius-3"]};
        ${theme.textStyles["text-preset-6"]};
        ${getFullWidth()}
      `;
  }
};

const getPadding = (size, iconAlign) => {
  const paddingsBySize = {
    sm: {
      none: `
        ${theme.spacing["spacing-0"]}
        ${theme.spacing["spacing-2"]}`,
      left: `
        ${theme.spacing["spacing-0"]}
        ${theme.spacing["spacing-2"]}`,
      right: `
        ${theme.spacing["spacing-0"]}
        ${theme.spacing["spacing-2"]}`,
      center: `${theme.spacing["spacing-0"]}`,
    },
    md: {
      none: `
        ${theme.spacing["spacing-1"]}
        ${theme.spacing["spacing-3"]}`,
      left: `
        ${theme.spacing["spacing-1"]}
        ${theme.spacing["spacing-3"]}`,
      right: `
        ${theme.spacing["spacing-1"]}
        ${theme.spacing["spacing-3"]}`,
      center: `${theme.spacing["spacing-1"]}`,
    },
    lg: {
      none: `
          ${theme.spacing["spacing-3"]}
          ${theme.spacing["spacing-4"]}`,
      left: `
          ${theme.spacing["spacing-3"]}
          ${theme.spacing["spacing-4"]}`,
      right: `
          ${theme.spacing["spacing-3"]}
          ${theme.spacing["spacing-4"]}`,
      center: `${theme.spacing["spacing-3"]}`,
    },
    "md-full": {
      none: `${theme.spacing["spacing-4"]}`,
      left: `${theme.spacing["spacing-4"]}`,
      right: `${theme.spacing["spacing-4"]}`,
      center: `${theme.spacing["spacing-4"]}`,
    },
  };

  return css`
    padding: ${paddingsBySize[size][iconAlign]};
    ${iconAlign === "center" &&
    size !== "md-full" &&
    `
          display: flex;
          justify-content: center;
          align-items: center; 
        `}

    i {
      margin-right: ${iconAlign === "left" ? theme.spacing["spacing-3"] : 0};
      margin-left: ${iconAlign === "right" ? theme.spacing["spacing-3"] : 0};
    }
  `;
};

const getFullWidth = () => css`
  width: 100%;
  justify-content: center;
`;

const getDisabled = () => css`
  cursor: not-allowed;
  pointer-events: none;
`;
