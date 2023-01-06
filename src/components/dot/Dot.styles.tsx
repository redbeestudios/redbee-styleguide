import styled, { css } from "styled-components";
import theme from "../../assets/styles/theme";

export interface DotStylesProps {
  variant: "regular" | "strong" | "weak" | "inverted";
  modifier: "danger" | "info" | "warning" | "success" | "neutral";
}

export const Dot = styled.div<DotStylesProps>`
  width: 8px;
  height: 8px;
  border-radius: ${theme.borderRadius["border-radius-5"]};
  margin: ${theme.spacing["spacing-1"]} ${theme.spacing["spacing-1"]}
    ${theme.spacing["spacing-1"]} 0;
  ${({ variant, modifier }) => getVariant(variant, modifier)}
`;

const getVariant = (variant, modifier) => {
  return css`
    background-color: ${theme.colors[variant].bg[modifier]};
  `;
};
