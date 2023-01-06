import styled, { css } from "styled-components";
import theme from "../../assets/styles/theme";

interface LinkProps {
  size: "xs" | "sm" | "md";
  variant: "primary" | "inverted";
  icons: any;
}

export const Link = styled.a<LinkProps>`
  cursor: pointer;

  text-decoration: none;

  ${({ size }) => getSize(size)}

  ${({ variant }) => getVariant(variant)}

  ${({ icons }) => css`
    i {
      margin-right: ${icons?.iconLeft ? theme.spacing["spacing-2"] : 0};
      margin-left: ${icons?.iconRight ? theme.spacing["spacing-2"] : 0};

      ${icons?.iconLeft &&
      icons?.iconRight &&
      `&:first-of-type {margin-right: ${theme.spacing["spacing-2"]}; margin-left: 0;}
       &:last-child {margin-right: 0; margin-left: ${theme.spacing["spacing-2"]};}`}
    }
  `};
`;

export const HyperlinkContent = styled.div`
  display: inline-flex;
  align-items: center;
`;

const getVariant = (variant) => {
  switch (variant) {
    case "primary":
      return css`
        color: ${theme.colors.primary.text.weak};

        &:hover {
          color: ${theme.colors.primary.text.strong};
          text-decoration: underline;

          svg path {
            fill: ${theme.colors.primary.ic.strong};
          }
        }
        &:not([href]) {
          color: ${theme.colors.primary.text.weak};
          &:hover {
            color: ${theme.colors.primary.text.strong};
          }
        }
        &:focus,
        &:active {
          color: ${theme.colors["secondary-1"].text.strong};

          svg path {
            fill: ${theme.colors["secondary-1"].ic.strong};
          }
        }
      `;
    case "inverted":
      return css`
        color: ${theme.colors.neutral.text.inverted};
        &:not([href]) {
          color: ${theme.colors.neutral.text.inverted};
        }
        &:hover {
          text-decoration: underline;
        }
      `;
  }
};

const getSize = (size) => {
  switch (size) {
    case "xs":
      return css`
        ${theme.textStyles["text-preset-10"]};
      `;
    case "sm":
      return css`
        ${theme.textStyles["text-preset-9"]};
      `;

    case "md":
      return css`
        ${theme.textStyles["text-preset-8"]};
      `;
  }
};
