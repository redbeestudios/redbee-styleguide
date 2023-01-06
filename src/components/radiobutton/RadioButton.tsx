import React from "react";
import Label from "../texts/label/Label";
import * as S from "./RadioButton.styles";

type RadioButtonProps = {
  id?: string;
  name?: string;
  value?: string;
  label?: string;
  onChange?: () => void;
  checked?: boolean;
  border?: boolean;
  disabled?: boolean;
  align?: "right" | "left";
  status?: "normal" | "error";
};

const RadioButton = (props: RadioButtonProps) => {
  const {
    id,
    name,
    value,
    label,
    onChange,
    checked,
    border,
    disabled,
    align,
    status,
  } = props;
  const renderMark = (
    <S.Mark
      htmlFor={id}
      align={align}
      border={border}
      disabled={disabled}
      status={status}
    />
  );
  return (
    <>
      <S.RadioButton border={border} disabled={disabled} align={align}>
        <S.InputRadioTag
          type="radio"
          id={id}
          name={name}
          value={value}
          checked={checked}
          disabled={disabled}
          onChange={onChange}
          border={border}
          status={status}
        />
        {align === "left" && renderMark}
        <Label
          id={id}
          type="2"
          variant="neutral"
          modifier={disabled ? "regular" : "strong"}
        >
          {label}
        </Label>
        {align === "right" && renderMark}
        <S.RadioBorder
          htmlFor={id}
          border={border}
          data-testid="radio-border-data-test-id"
          disabled={disabled}
          status={status}
        />
      </S.RadioButton>
    </>
  );
};

RadioButton.defaultProps = {
  align: "left",
  status: "normal",
  border: false,
  disabled: false,
};

export default RadioButton;
