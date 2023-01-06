import styled, { css } from "styled-components";

export interface LogoProps {
  size?: "medium" | "small" | "large";
  type?: "horizontal" | "vertical" | "isotype";
  cursor?: "not-allowed" | "pinter" | "default" | "none";
  variant?: "full" | "inverted" | "without";
  onClick?: () => void;
}

export const Logo = styled.i<LogoProps>`
  font-style: normal;
  display: flex;
  align-items: center;
  ${({ cursor }) =>
    css`
      cursor: ${cursor};
    `}
`;
