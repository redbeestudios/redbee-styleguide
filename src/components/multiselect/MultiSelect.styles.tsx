import styled from "styled-components";
import theme from "../../assets/styles/theme";

interface MultiSelectStylesProps {
  disabled: boolean;
}
const MultiSelectContainer = styled.div`
  position: relative;
`;

const MultiSelectMenuContainer = styled.div<MultiSelectStylesProps>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 40px;
  ${(props) => (props.disabled ? "cursor: default;" : "cursor: pointer;")}
  ${theme.textStyles["text-preset-9"]};
  color: ${theme.colors.neutral.text.strong};
`;

const MultiSelectMenuImageContainer = styled.div<MultiSelectStylesProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: inherit;
  margin-left: ${theme.spacing["spacing-3"]};
  margin-right: ${theme.spacing["spacing-3"]};
  img {
    max-height: 20px;
    width: 24px;
    &:disabled {
      opacity: 0.5;
    }
  }
  ${({ disabled }) =>
    disabled &&
    ` img {
        filter: grayscale(1);
        opacity: 0.5;
      }
    `}
`;

const MultiSelectCheckboxContainer = styled.div``;

const MultiSelectLabelContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0;
  cursor: inherit;
  label {
    cursor: inherit;
  }
  div:nth-child(1) + & {
    margin-left: ${theme.spacing["spacing-3"]};
  }
`;

const MultiSelectButtonGroup = styled.div`
  display: flex;
  flex: 1;
  justify-content: right;
  padding-top: ${theme.spacing["spacing-5"]};
  button {
    margin-left: ${theme.spacing["spacing-3"]};
  }
`;

const MultiSelectEmptyButton = styled.div`
  position: absolute;
  left: 0;
  padding: ${theme.spacing["spacing-0"]} ${theme.spacing["spacing-0"]}
    ${theme.spacing["spacing-0"]} ${theme.spacing["spacing-3"]};
`;

const MultiValueContainer = styled.div<MultiSelectStylesProps>`
  input {
    caret-color: transparent;
    &:not(:disabled) {
      cursor: pointer;
    }
    &:focus {
      cursor: pointer;
    }
  }
`;

const MultiSelectMenu = styled.div`
  position: absolute;
  width: 100%;
  top: ${theme.spacing["spacing-3"]};
  margin-top: ${theme.spacing["spacing-7"]};
  padding: ${theme.spacing["spacing-3"]};
  border-radius: ${theme.borderRadius["border-radius-3"]};
  box-shadow: ${theme.elevations["elevation-1"]};
  z-index: 1;
  background-color: ${theme.colors.neutral.bg.weak};
`;

const MultiSelectOptions = styled.div`
  max-height: 244px;
  overflow-y: scroll;
  scrollbar-width: thin;
  scrollbar-color: ${theme.colors.neutral.border.regular} white;
  &::-webkit-scrollbar {
    width: 8px;
    height: 10px;
  }
  &::-webkit-scrollbar-track {
    background: white;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${theme.colors.neutral.border.regular};
    border-radius: ${theme.borderRadius["border-radius-2"]};
    margin: ${theme.spacing["spacing-3"]} ${theme.spacing["spacing-0"]}
      ${theme.spacing["spacing-0"]};
  }
`;

export {
  MultiSelectButtonGroup,
  MultiSelectContainer,
  MultiSelectMenuContainer,
  MultiSelectMenuImageContainer,
  MultiSelectLabelContainer,
  MultiSelectCheckboxContainer,
  MultiSelectEmptyButton,
  MultiSelectMenu,
  MultiSelectOptions,
  MultiValueContainer,
};
