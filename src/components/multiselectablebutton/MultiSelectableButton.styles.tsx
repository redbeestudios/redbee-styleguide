import styled from 'styled-components';
import theme from '../../assets/styles/theme';
import { Span as SpanStyled } from '../texts/span/Span.styles';
import Checkbox from '../checkBox/CheckBox';
import { Label as LabelStyled } from '../texts/label/Label.styles';

const SelectButton = styled.ul`
  font-family: Roboto, serif;
  font-size: 14px;
  list-style-type: none;
  flex-wrap: wrap;
  display: flex;
  text-align: center;
  justify-content: flex-start;
`;

const Option = styled.li`
  text-align: center;
  padding: 5px;
`;

const Input = styled.input`
  position: absolute;
  opacity: 0;
  &:checked {
    + {
      label {
        color: ${theme.oldColors['palette-background-cards-white']};
        background-color: ${theme.oldColors['palette-primary-p-1-p-1']};
        border-color: ${theme.oldColors['palette-primary-p-1-p-1']};
      }
    }
  }
`;

const OptionLabel = styled(LabelStyled)`
  width: 100%;
  padding: 1px 10px;
  border: solid 2px ${theme.oldColors['palette-primary-p-1-p-1']};
  border-radius: 20px;
  cursor: pointer;
  &:hover {
    background: ${theme.oldColors['border-row-table']};
  }
`;

const SelectAll = styled(Checkbox)`
  margin-bottom: 5px;
`;

const SelectAllContent = styled(SpanStyled)`
  display: inline-block;
  margin-left: 5px;
`;

export {
    SelectButton,
    Option,
    Input,
    OptionLabel,
    SelectAll,
    SelectAllContent,
};
