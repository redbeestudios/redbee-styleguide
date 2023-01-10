import styled, { css } from 'styled-components';
import theme from '../../assets/styles/theme';

const SearchableSelectWrapper = styled.div`
  position: relative;
  display: grid;
`;

const DataItem = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  color: ${theme.colors.neutral.text.strong};
  padding: ${theme.spacing['spacing-3']} ${theme.spacing['spacing-5']}
    ${theme.spacing['spacing-3']} ${theme.spacing['spacing-5']};
  :hover {
    cursor: pointer;
    background-color: ${theme.colors.neutral.bg.regular};
  }
`;

const DataItemText = styled.p`
  margin-bottom: auto;
  margin-top: auto;
  ${theme.textStyles['text-preset-9']()}
`;

const DataResult = styled.div`
  position: absolute;
  width: 100%;
  max-height: 208px;
  height: auto;
  overflow: hidden;
  overflow-y: auto;
  z-index: 1;
  border-radius: ${theme.borderRadius['border-radius-3']};
  box-shadow: ${theme.elevations['elevation-1']};
  background-color: ${theme.colors.neutral.bg.weak};
  top: ${theme.spacing['spacing-2']};
  box-shadow: ${theme.elevations['elevation-1']};
  &::-webkit-scrollbar {
    width: 2px;
  }
  &::-webkit-scrollbar-track {
    background: ${theme.colors.neutral.bg.weak};
  }
  &::-webkit-scrollbar-thumb {
    background: ${theme.colors.neutral.border.weak};
  }
  &::-webkit-scrollbar-thumb:hover {
    background: ${theme.colors.neutral.border.regular};
  }
`;

const InputWrapper = styled.div`
  position: relative;
`;

const EmptyButtonWrapper = styled.div`
  position: absolute;
  left: 0;
  padding: ${theme.spacing['spacing-1']} ${theme.spacing['spacing-1']}
    ${theme.spacing['spacing-1']} ${theme.spacing['spacing-5']};
`;

const DataResultWrapper = styled.div`
  display: block;
  position: relative;
`;
export {
  DataItem,
  SearchableSelectWrapper,
  EmptyButtonWrapper,
  DataResult,
  DataItemText,
  InputWrapper,
  DataResultWrapper,
};
