import styled, { css } from "styled-components";
import theme from "../../assets/styles/theme";

interface SelectableChipsStylesProps {
  direction: "column" | "column-reverse" | "row" | "row-reverse";
}

export const ChipsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing["spacing-2"]};
`;

export const SelectableChips = styled.div<SelectableChipsStylesProps>`
  display: flex;
  ${({ direction }) =>
    css`
      flex-direction: ${direction};
    `}
  flex-wrap: wrap;
`;

export const ChipWrapper = styled.div`
  padding: ${theme.spacing["spacing-0"]} ${theme.spacing["spacing-4"]}
    ${theme.spacing["spacing-4"]} ${theme.spacing["spacing-0"]};
`;
