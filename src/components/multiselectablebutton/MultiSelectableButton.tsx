import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  SelectButton,
  Option,
  Input,
  OptionLabel,
  SelectAll,
  SelectAllContent,
} from '../multiselectablebutton/MultiSelectableButton.styles';
import useMultiSelect from '../../hooks/UseMultiSelect';
import { isSameArray } from '../../utils/Utils';
import { OptionProps } from '../multiselect/MultiSelectOption.Inner';

const OPTION_ALL = { label: 'Todas', value: 'TODAS' };

type MultiSelectableButtonProps = {
  name: string;
  onChange: (value) => void;
  value: Array<OptionProps>;
  options: Array<OptionProps>;
};

const MultiSelectableButton = (props: MultiSelectableButtonProps) => {
  const { name, onChange, value = [], options } = props;
  const initialValue = value || [];

  const { values, checkOption, setValues } = useMultiSelect(
    options,
    initialValue,
    OPTION_ALL
  );

  const valuesSelected = values
    .filter(({ isSelected }) => isSelected)
    .map(({ value }) => value);
  const quantitySelected = valuesSelected.length;

  const handleOnChange = (selectedOption) => {
    checkOption(selectedOption);
  };

  useEffect(() => {
    if (!isSameArray(value, valuesSelected)) {
      onChange && onChange(valuesSelected);
    }
  }, [values]);

  useEffect(() => {
    if (!isSameArray(value, valuesSelected)) {
      setValues(value);
    }
  }, [value]);

  // @ts-ignore
  return (
    <>
      <SelectAll
        id='select-all'
        checked={quantitySelected > 0}
        onChange={() => handleOnChange(OPTION_ALL)}
        isSelectAllCheck
        size='sm'
      >
        <SelectAllContent
          type='2'
          font='primary'
          variant='primary'
          weight='regular'
          modifier='regular'
        >
          {quantitySelected === 0 && 'Seleccionar todos'}
          {quantitySelected > 0 && `${quantitySelected} Seleccionados`}
        </SelectAllContent>
      </SelectAll>
      <SelectButton>
        {values
          .filter(({ value }) => value != OPTION_ALL.value)
          .map((option: OptionProps) => (
            <Option key={`multiselect-option-${option.value}`}>
              <Input
                type='checkbox'
                id={`multiselect-option-${option.value}`}
                value={option.value}
                name={name}
                onChange={() => handleOnChange(option)}
                checked={option.isSelected}
              />
              <OptionLabel htmlFor={`multiselect-option-${option.value}`}>
                {option.label}
              </OptionLabel>
            </Option>
          ))}
      </SelectButton>
    </>
  );
};

MultiSelectableButton.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  onChange: PropTypes.func,
};

MultiSelectableButton.OPTION_ALL = OPTION_ALL;

export default MultiSelectableButton;
