import styled, { css } from "styled-components";
import theme from "../../assets/styles/theme";

export const DropdownWrapper = styled.div`
  position: relative;
  width: max-content;
`;

export const Elements = styled.ul`
  border-radius: ${theme.borderRadius["border-radius-3"]};
  box-shadow: ${theme.elevations["elevation-1"]};
  margin-top: ${theme.spacing["spacing-2"]};
  position: absolute;
  width: 100%;
  z-index: 9999;
`;

export const Element = styled.li`
  background-color: ${theme.colors.neutral.bg.weak};
  list-style-type: none;

  &:first-of-type {
    border-top-left-radius: ${theme.borderRadius["border-radius-3"]};
    border-top-right-radius: ${theme.borderRadius["border-radius-3"]};
  }

  &:last-of-type {
    border-bottom-left-radius: ${theme.borderRadius["border-radius-3"]};
    border-bottom-right-radius: ${theme.borderRadius["border-radius-3"]};
  }

  &:hover,
  &:focus {
    background-color: ${theme.colors.neutral.bg.regular};
    cursor: pointer;
  }
`;

export const ElementButton = styled.button`
  background-color: inherit;
  border-radius: inherit;
  border: none;
  padding: ${theme.spacing["spacing-3"]} ${theme.spacing["spacing-5"]};
  text-align: left;
  width: 100%;

  ${({ disabled }) => {
    if (disabled) {
      return css`
        cursor: not-allowed;
      `;
    } else {
      return css`
        cursor: pointer;
      `;
    }
  }}
`;
