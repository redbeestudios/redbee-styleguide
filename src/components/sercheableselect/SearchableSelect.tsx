import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import * as S from "./SearchableSelect.styles";
import Input from "../input/Input";
import Link from "../link/Link";
import OutsideAlerter from "../outsidealerter/OutsideAlerter";

const RESET_VALUE = "";

type SearchableSelectProps = {
  placeholder?: string;
  options?;
  minLength?: number;
  label?: string;
  onChange?: (e) => void;
  onlyNumbers?: boolean;
  onClick?: (e) => void;
  disabled?: boolean;
  inputStatus?: "normal" | "error";
  message?: string;
  pattern;
  onKeyDown?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
  name?: string;
  maxLength?: number;
  value?;
  showResetButton?: boolean;
};

const SearchableSelect = (props: SearchableSelectProps) => {
  const {
    placeholder,
    options,
    minLength,
    label,
    onChange,
    onlyNumbers,
    onClick,
    disabled,
    inputStatus,
    message,
    pattern,
    onKeyDown,
    onFocus,
    onBlur,
    name,
    maxLength,
  } = props;
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [showResetButton, setShowResetButton] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [isWrite, setIsWrite] = useState(false);
  const [value, setValue] = useState("");
  const [open, setOpen] = useState(false);
  const [showPlaceHolder, setShowPlaceHolder] = useState(!!placeholder);
  const inputRef = useRef(null);

  useEffect(() => {
    if (open || isWrite) inputRef.current.focus();
  }, [open, isWrite]);

  useEffect(() => {
    filteredOptions !== options && setFilteredOptions(options || []);
  }, [options]);

  useEffect(() => {
    const isOpen = !selectedOption && filteredOptions.length !== 0 && isWrite;
    minLength ? minLength <= value.length && setOpen(isOpen) : setOpen(isOpen);
  }, [filteredOptions, isWrite]);

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (props?.value) {
      setValue(props.value);
    }
  }, [props.value]);

  const handleOnChange = (event) => {
    const searchWord = event.target.value;
    const isValidValue = validateValue(searchWord);
    setIsWrite(true);
    setShowResetButton(false);
    setSelectedOption(RESET_VALUE);
    if (isValidValue) {
      setValue(searchWord);
      minLength
        ? minLength <= searchWord.length
          ? onChange(searchWord)
          : handleClose()
        : onChange(searchWord);
    }
  };

  const validateValue = (searchWord) => {
    if (onlyNumbers || pattern) {
      const regex = onlyNumbers ? /^[0-9]{0,}$/ : pattern;
      return regex.test(searchWord);
    } else return true;
  };

  const handleReset = () => {
    onChange && onChange("");
    setValue(RESET_VALUE);
    setSelectedOption(RESET_VALUE);
    setShowResetButton(false);
    setIsWrite(false);
    setShowPlaceHolder(true);
    handleClose();
  };

  const handleOnClick = (option) => {
    const { value = "" } = option;
    onClick && onClick(option);
    setIsWrite(false);
    setValue(value);
    setSelectedOption(value);
    setShowResetButton(true);
    handleClose();
  };

  const handleOnFocus = () => {
    onFocus && onFocus();
    setShowPlaceHolder(false);
  };
  const handleOnBlur = () => {
    onBlur && onBlur();
    setShowPlaceHolder(value.length == 0);
  };

  const renderFilteredOptions = () => (
    <S.DataResultWrapper>
      <S.DataResult>
        {filteredOptions.map((filteredOption, key) => (
          <S.DataItem key={key} onClick={() => handleOnClick(filteredOption)}>
            <S.DataItemText>{filteredOption.label}</S.DataItemText>
          </S.DataItem>
        ))}
      </S.DataResult>
    </S.DataResultWrapper>
  );

  const renderResetButton = () => (
    <S.EmptyButtonWrapper>
      <Link variant="primary" size="xs" onClick={handleReset}>
        Limpiar
      </Link>
    </S.EmptyButtonWrapper>
  );

  return (
    <OutsideAlerter handleOutSideClick={handleReset} active={open}>
      <S.SearchableSelectWrapper data-testid="searchable-select">
        <S.InputWrapper>
          <Input
            disabled={disabled}
            inputRef={inputRef}
            id="searchable-select"
            type="text"
            label={label}
            placeHolder={showPlaceHolder ? placeholder : ""}
            onChange={handleOnChange}
            value={value}
            autocomplete="off"
            icons={{
              iconLeft: "search_outline",
            }}
            inputStatus={inputStatus}
            message={!showResetButton ? message : ""}
            pattern={pattern}
            onKeydown={onKeyDown}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
            name={name}
            maxLength={maxLength}
          />
          {(props.showResetButton || showResetButton) && renderResetButton()}
        </S.InputWrapper>
        {open && renderFilteredOptions()}
      </S.SearchableSelectWrapper>
    </OutsideAlerter>
  );
};

SearchableSelect.defaultProps = {
  options: [],
  placeholder: "",
  label: "",
  disabled: false,
  inputStatus: "normal",
};

export default SearchableSelect;
