import React from "react";
import Button from "../button/Button";
import MultiSelectOption, { OptionProps } from "./MultiSelectOption.Inner";
import * as S from "./MultiSelect.styles";

type MultiSelectMenuInnerProps = {
  handleApply: () => void;
  handleCancel: () => void;
  handleOnChange: (item) => void;
  isApplyButtonDisabled: boolean;
  value: Array<OptionProps>;
  options: Array<OptionProps>;
};

const MultiSelectMenu = (props: MultiSelectMenuInnerProps) => {
  const {
    handleApply,
    handleCancel,
    handleOnChange,
    isApplyButtonDisabled,
    value,
    options,
  } = props;
  const newOptions = options.map((option) => {
    let valuesSelected = value.find(({ value }) => value === option.value);
    return { ...option, isSelected: !!valuesSelected };
  });

  const handleOnClick = (selectedOption) => {
    const localOptions = newOptions.map((option) =>
      option.value === selectedOption.value
        ? { ...option, isSelected: !option.isSelected }
        : option
    );
    const localOptionsSelected = localOptions.filter(
      (option) => option.isSelected
    );
    handleOnChange(localOptionsSelected);
  };

  return (
    <S.MultiSelectMenu>
      <S.MultiSelectOptions>
        <MultiSelectOption onClick={handleOnClick} options={newOptions} />
      </S.MultiSelectOptions>
      <S.MultiSelectButtonGroup>
        <Button variant="secondary" size="sm" onClick={handleCancel}>
          Cancelar
        </Button>
        <Button
          size="sm"
          variant="primary"
          onClick={handleApply}
          disabled={isApplyButtonDisabled}
        >
          Aplicar
        </Button>
      </S.MultiSelectButtonGroup>
    </S.MultiSelectMenu>
  );
};

export default MultiSelectMenu;
