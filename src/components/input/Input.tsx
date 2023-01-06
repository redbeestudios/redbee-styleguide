import React, { useState } from "react";
import * as S from "./Input.styles";
import Label from "../texts/label/Label";
import Icon from "../icon/Icon";
import Span from "../texts/span/Span";

const spanVariantByStatus = {
  normal: "neutral",
  error: "danger",
};
type InputProps = {
  id?: string;
  name?: string;
  value?: string;
  label?: string;
  type?: "text" | "number" | "password" | "check" | "email";
  size?: "sm" | "md" | "lg";
  inputStatus?: "normal" | "error";
  readOnly?: boolean;
  placeholder?: string;
  onChange?: (e) => any;
  onBlur?: (e) => any;
  onFocus?: (e) => any;
  onKeydown?: () => void;
  placeHolder?: string;
  message?: string;
  disabled?: boolean;
  maxLength?: number;
  autocomplete?: string;
  onlyNumbers?: boolean;
  showPasswordButton?: boolean;
  onClick?: () => any;
  inputRef?: any;
  maxLengthHelpText?: boolean;
  pattern?: string;
  icons?: {
    iconLeft?: any;
    iconRight?: any;
  };
};

const validateOnlyNumbers = (onlyNumbers, e, innerValue, setInnerValue) => {
  if (onlyNumbers) {
    const numberValue = e.target.validity.valid ? e.target.value : innerValue;
    setInnerValue(numberValue);
    e.target.value = numberValue;
  }
};

const Input = (props: InputProps) => {
  const [hasFocus, setFocus] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [characterCount, setCharacterCount] = useState(0);
  const [innerValue, setInnerValue] = useState(props.value);
  const [inputType, setInputType] = useState(
    props.onlyNumbers ? "text" : props.type
  );

  const handleShowPasswordClick = () => {
    setInputType(!showPassword ? "text" : "password");
    setShowPassword(!showPassword);
  };

  const proxyOnChange = (e) => {
    validateOnlyNumbers(props.onlyNumbers, e, innerValue, setInnerValue);
    setCharacterCount(e.target.value.length);
    props.onChange && props.onChange(e);
  };

  const proxyOnBlur = (e) => {
    validateOnlyNumbers(props.onlyNumbers, e, innerValue, setInnerValue);
    setFocus(false);
    props.onBlur && props.onBlur(e);
  };

  const proxyOnFocus = (e) => {
    validateOnlyNumbers(props.onlyNumbers, e, innerValue, setInnerValue);
    setFocus(true);
    props.onFocus && props.onFocus(e);
  };

  const renderIcon = (icon, align) => {
    const { name = icon, callback, cursor } = icon;
    return (
      <>
        {props.disabled ? (
          <Icon name={name} variant="neutral" cursor={"not-allowed"} />
        ) : (
          <Icon
            name={name}
            variant="neutral"
            cursor={callback ? "pointer" : "default"}
            modifier={align == "left" ? "weak" : "strong"}
            onClick={() => callback && callback()}
          />
        )}
      </>
    );
  };

  const renderShowPasswordButton = () => (
    <>
      {props.type === "password" && (
        <>
          {showPassword ? (
            <Icon
              onClick={handleShowPasswordClick}
              name="view_outline"
              variant="neutral"
              cursor={props.disabled ? "not-allowed" : "pointer"}
              modifier={props.disabled ? "regular" : "strong"}
            />
          ) : (
            <Icon
              onClick={handleShowPasswordClick}
              name="hide_outline"
              variant="neutral"
              cursor={props.disabled ? "not-allowed" : "pointer"}
              modifier={props.disabled ? "regular" : "strong"}
            />
          )}
        </>
      )}
    </>
  );

  const renderMaxLengthHelpText = () => (
    <S.SiblingInputTag>
      <Span
        font="primary"
        type="2"
        variant="neutral"
        weight="regular"
        modifier="regular"
      >
        {`${characterCount}/${props.maxLength}`}
      </Span>
    </S.SiblingInputTag>
  );

  return (
    <S.Input>
      {props.label && (
        <S.LabelWrapper>
          <Label type={"4"}>{props.label}</Label>
        </S.LabelWrapper>
      )}
      <S.BaseInput
        hasFocus={hasFocus}
        size={props.size}
        status={props.inputStatus}
        disabled={props.disabled}
        readOnly={props.readOnly}
        onlyNumbers={props.onlyNumbers}
      >
        {props.icons?.iconLeft && renderIcon(props.icons.iconLeft, "left")}
        <S.InputTag
          type={inputType}
          placeholder={props.placeHolder}
          onClick={props.onClick}
          onChange={proxyOnChange}
          onBlur={proxyOnBlur}
          onFocus={proxyOnFocus}
          onKeyDown={props.onKeydown}
          pattern={props.onlyNumbers ? "^[0-9]+$" : props.pattern}
          value={props.onlyNumbers ? innerValue : props.value}
          disabled={props.disabled}
          readOnly={props.readOnly}
          maxLength={props.maxLength}
          ref={props.inputRef}
          autoComplete={props.autocomplete}
        />
        {props.icons?.iconRight && renderIcon(props.icons.iconRight, "right")}
        {props.showPasswordButton && renderShowPasswordButton()}
        {props.maxLengthHelpText && renderMaxLengthHelpText()}
      </S.BaseInput>
      {props.message && (
        <S.HelpText status={props.inputStatus}>
          {props.inputStatus === "error" && (
            <Icon
              name="error_circle_outline"
              variant="danger"
              width={16}
              height={16}
            />
          )}
          <Span
            font="primary"
            modifier="regular"
            type="4"
            weight="regular"
            variant={spanVariantByStatus[props.inputStatus]}
          >
            {props.message}
          </Span>
        </S.HelpText>
      )}
    </S.Input>
  );
};

const RangeInput = ({ from, to, ...props }) => (
  <Input value={`${from}${to}`} {...props} />
);

const NumberInput = ({ ...props }) => <Input {...props} onlyNumbers />;

export { RangeInput, NumberInput };

export default Input;
