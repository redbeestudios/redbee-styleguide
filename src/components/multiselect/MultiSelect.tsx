import React, { useEffect, useState, useRef } from 'react';
import OutsideAlerter from '../outsidealerter/OutsideAlerter';
import Link from '../link/Link';
import Input from '../input/Input';

import MultiSelectMenu from './MultiSelectMenu.inner';
import * as S from './MultiSelect.styles';
import { OptionProps } from './MultiSelectOption.Inner';

const OPTION_ALL = { label: 'Todas', value: 'TODAS' };

type MultiSelectProps = {
  defaultValue: Array<OptionProps>;
  options: Array<OptionProps>;
  value: Array<OptionProps>;
  disabled: boolean;
  onChange: (value) => void;
  label: string;
  status: 'normal' | 'error';
  message: string;
  placeHolder: string;
  showResetButton: boolean;
  noOptionsMessage: string;
};

const defaultProps = {
  options: [],
  placeHolder: '',
  noOptionsMessage: '',
  defaultValue: [],
  showResetButton: false,
  disabled: false,
  status: 'normal',
};
const MultiSelect = (props: MultiSelectProps) => {
  const {
    defaultValue,
    disabled,
    onChange,
    label,
    placeHolder,
    showResetButton,
    status,
    message,
  } = props;
  const initialValue = defaultValue || [];

  const [options, setOptions] = useState(props.options);
  const [value, setValue] = useState(initialValue);
  const [open, setOpen] = useState(false);
  const lastValueRef = useRef(initialValue);
  const inputEl = useRef(null);

  const optionAll = options?.find(
    (option) => option.value === OPTION_ALL.value
  );

  const optionAllIsSelected =
    value?.length && value?.find(({ value }) => value === optionAll?.value);

  const isApplyButtonDisabled = !value.length;

  useEffect(() => {
    if (JSON.stringify(options) !== JSON.stringify(props.options)) {
      validateAllOption(props.options);
    }
  }, [props.options]);

  useEffect(() => {
    if (JSON.stringify(value) !== JSON.stringify(props.value)) {
      setValue(props.value || initialValue);
      setLastValue(props.value || initialValue);
    }
  }, [props.value]);

  useEffect(() => {
    validateAllOption(options);
  }, [value]);

  const validateAllOption = (localOptions) => {
    setOptions(optionAll ? enableOptionAll(localOptions) : localOptions);

    optionAllIsSelected &&
      value.length > 1 &&
      setValue(value.filter((element) => element.value !== optionAll.value));
  };

  const enableOptionAll = (localOptions) =>
    localOptions
      .map((option) =>
        option.value === optionAll.value
          ? { ...option, isDisabled: value.length && !optionAllIsSelected }
          : option
      )
      .filter(removeDuplicateOptions);

  const removeDuplicateOptions = (option, index, array) =>
    array.findIndex((item) => item.value === option.value) === index;

  const setLastValue = (lastValue) => {
    lastValueRef.current = lastValue;
  };

  const handleApply = () => {
    handleClose();
    onChange && onChange(value);
    setLastValue(value);
  };

  const handleCancel = () => {
    setValue(lastValueRef.current);
    handleClose();
  };

  const handleOnChange = (optionsSelected) => setValue(optionsSelected);

  const handleReset = () => {
    onChange && onChange(null);
    setValue(initialValue);
    setLastValue(initialValue);
    handleClose();
  };

  const handleClose = () => setOpen(false);

  const multiValueText = (values) => {
    if (values.length) {
      return values.map(({ label }) => label).join(', ');
    } else return '';
  };

  const handleOpenMenu = () => {
    open ? handleCancel() : setOpen(!disabled);
  };

  return (
    <>
      <OutsideAlerter handleOutSideClick={handleCancel}>
        <S.MultiSelectContainer
          data-testid='multi-select-component'
          className='multi-select-component'
        >
          <S.MultiValueContainer disabled={disabled}>
            <Input
              label={label}
              value={multiValueText(value)}
              icons={{
                iconRight: {
                  name: !open ? 'chevron_down_outline' : 'chevron_up_outline',
                  callback: handleOpenMenu,
                },
              }}
              message={!showResetButton ? message : ''}
              placeHolder={placeHolder}
              disabled={disabled}
              inputStatus={status}
              onClick={handleOpenMenu}
            />
            {showResetButton && (
              <S.MultiSelectEmptyButton>
                <Link variant='primary' size='xs' onClick={handleReset}>
                  Limpiar
                </Link>
              </S.MultiSelectEmptyButton>
            )}
          </S.MultiValueContainer>
          {open && (
            <MultiSelectMenu
              handleApply={handleApply}
              handleCancel={handleCancel}
              handleOnChange={handleOnChange}
              isApplyButtonDisabled={isApplyButtonDisabled}
              options={options}
              value={value}
            />
          )}
        </S.MultiSelectContainer>
      </OutsideAlerter>
    </>
  );
};

MultiSelect.defaultProps = defaultProps;

MultiSelect.OPTION_ALL = OPTION_ALL;

export default MultiSelect;
