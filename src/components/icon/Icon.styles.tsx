import styled, { css } from "styled-components";
import theme from "../../assets/styles/theme";

export interface IconProps {
  cursor?: "not-allowed" | "pointer" | "default" | "none";
  modifier?: "regular" | "strong" | "weak" | "inverted";
  variant?:
    | "primary"
    | "secondary-1"
    | "secondary-2"
    | "secondary-3"
    | "neutral"
    | "danger"
    | "warning"
    | "info"
    | "success";
  disabled?: boolean;
}

export const Icon = styled.i<IconProps>`
  font-style: normal;
  display: flex;
  align-items: center;
  ${({ variant, modifier }) => setStyleSvgPath(variant, modifier)}
  ${({ cursor }) =>
    css`
      cursor: ${cursor};
    `}
`;

const setStyleSvgPath = (variant, modifier) => {
  return css`
    svg {
      path {
        fill: ${theme.colors[variant].ic[modifier]};
      }
    }
  `;
};
