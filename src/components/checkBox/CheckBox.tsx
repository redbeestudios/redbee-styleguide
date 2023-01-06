import React, { useEffect, useState } from "react";
import * as S from "./CheckBox.styles";
import Icon from "../icon/Icon";
import Label from "../texts/label/Label";

const defaultProps = {
  isSelectAllCheck: false as boolean,
  checked: false as boolean,
  disabled: false as boolean,
  size: "sm" as "sm" | "md" | "lg",
  className: "" as string,
};

type CheckBoxProps = {
  id?: string;
  onChange?: (e) => void;
  children?: any;
  isSelectAllCheck?: boolean;
  checked?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
  disabled?: boolean;
};

const Checkbox = (props: CheckBoxProps) => {
  const { checked, onChange, disabled, children, id, size, isSelectAllCheck } =
    props;
  const [isChecked, setChecked] = useState(checked);

  useEffect(() => {
    setChecked(checked);
  }, [checked]);

  const handleChange = ({ target: { checked } }) => {
    setChecked(checked);
    onChange && onChange(checked);
  };

  const renderText = () => (
    <S.TextWrapper>
      <Label
        type="2"
        variant="neutral"
        modifier={disabled ? "regular" : "strong"}
        id={`checkbox-${id}`}
      >
        {children}
      </Label>
    </S.TextWrapper>
  );

  const iconsSizes = {
    sm: 12,
    md: 14,
    lg: 16,
  };

  return (
    <S.Checkbox size={size}>
      <S.CheckboxInput size={size}>
        <input
          data-testid={`${props["data-testid"]}--checkbox`}
          id={`checkbox-${id}`}
          type="checkbox"
          checked={isChecked}
          disabled={disabled}
          onChange={handleChange}
        />
        <S.CheckboxChecked
          variant="neutral"
          modifier={disabled ? "weak" : "inverted"}
          size={size}
        >
          <Icon
            name={isSelectAllCheck ? "parcial_outline" : "done_outline"}
            width={iconsSizes[size]}
            height={iconsSizes[size]}
          />
        </S.CheckboxChecked>
      </S.CheckboxInput>
      {children && renderText()}
    </S.Checkbox>
  );
};

Checkbox.defaultProps = defaultProps;

export default Checkbox;
