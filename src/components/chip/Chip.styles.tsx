import styled, { css } from "styled-components";
import theme from "../../assets/styles/theme";

export interface ChipStylesProps {
  active?: boolean;
  disabled?: boolean;
  iconExit?: boolean;
}

export const Chip = styled.div<ChipStylesProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: fit-content;
  cursor: pointer;
  padding: ${theme.spacing["spacing-1"]} ${theme.spacing["spacing-3"]};
  background-color: ${theme.colors.neutral.bg.weak};
  border-radius: ${theme.borderRadius["border-radius-5"]};
  box-shadow: inset 0 0 0 1px ${theme.colors.neutral.border.regular};
  &:hover {
    background-color: ${theme.colors.neutral.bg.strong};
  }
  ${({ active }) =>
    active === true &&
    css`
      background-color: ${theme.colors["secondary-1"].bg.weak};
      box-shadow: inset 0 0 0 1px ${theme.colors["secondary-1"].border.regular};
      &:hover {
        background-color: ${theme.colors["secondary-1"].bg.weak};
        box-shadow: inset 0 0 0 1px
          ${theme.colors["secondary-1"].border.regular};
      }
    `}
  ${({ disabled }) =>
    disabled === true &&
    css`
      background-color: ${theme.colors["neutral"].bg.regular};
      box-shadow: inset 0 0 0 1px ${theme.colors.neutral.border.weak};
      &:hover {
        color: ${theme.colors["neutral"].text.regular};
        background-color: ${theme.colors["neutral"].bg.regular};
        box-shadow: inset 0 0 0 1px ${theme.colors.neutral.border.weak};
        cursor: default;
      }
    `}
  ${({ iconExit }) =>
    iconExit === true &&
    css`
      padding: ${theme.spacing["spacing-1"]} ${theme.spacing["spacing-2"]}
        ${theme.spacing["spacing-1"]} ${theme.spacing["spacing-3"]};
    `}
`;

export const TextWrapper = styled.div``;

export const IconLeft = styled.div`
  margin-right: ${theme.spacing["spacing-2"]};
`;

export const IconRight = styled.div`
  margin-left: ${theme.spacing["spacing-2"]};
`;
