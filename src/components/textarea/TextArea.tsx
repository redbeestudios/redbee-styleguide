import React, { useState } from 'react';
import Span from '../texts/span/Span';
import Label from '../texts/label/Label';
import Icon from '../icon/Icon';
import * as S from './TextArea.styles';

type IconProps = {
  name: string;
  onClick?: () => void;
};

type TextAreaProps = {
  id?: string;
  name?: string;
  value?: string;
  label?: string;
  maxLength?: number;
  status?: 'normal' | 'error';
  readOnly?: boolean;
  placeHolder?: string;
  message?: string;
  onChange?: (e) => void;
  onBlur?: (e) => void;
  onFocus?: (e) => void;
  disabled?: boolean;
  maxLengthHelpText?: boolean;
  resize?: boolean;
  children?: any;
  rows?: number;
  cols?: number;
  icon?: string | IconProps;
  required?: boolean;
};

const spanVariantByStatus = {
  normal: 'neutral',
  error: 'danger',
};

const TextArea = (props: TextAreaProps) => {
  const {
    id,
    name,
    value,
    label,
    maxLength,
    status,
    readOnly,
    placeHolder,
    message,
    onChange,
    onBlur,
    onFocus,
    disabled,
    maxLengthHelpText = false,
    resize = false,
    children,
    rows,
    cols,
    icon,
    required,
  } = props;
  const [hasFocus, setFocus] = useState(false);
  const [characterCount, setCharacterCount] = useState(0);

  const renderMaxLengthHelpText = () => (
    <S.SiblingTextArea>
      <Span type='4' variant='neutral' modifier='regular'>
        {characterCount}/{maxLength}
      </Span>
    </S.SiblingTextArea>
  );
  const renderIcon = (icon) => {
    const { name = icon, callback } = icon;
    return (
      <>
        {disabled ? (
          <Icon name={name} variant='primary' cursor={'not-allowed'} />
        ) : (
          <Icon
            name={name}
            variant='primary'
            cursor={callback ? 'pointer' : 'default'}
            modifier='regular'
            onClick={() => callback && callback()}
          />
        )}
      </>
    );
  };

  const proxyOnChange = (e) => {
    setCharacterCount(e.target.value.length);
    onChange && onChange(e);
  };

  const proxyOnBlur = (e) => {
    setFocus(false);
    onBlur && onBlur(e);
  };

  const proxyOnFocus = (e) => {
    setFocus(true);
    onFocus && onFocus(e);
  };

  return (
    <S.TextArea>
      {label && (
        <S.LabelWrapper>
          <Label id={id} type='4'>
            {label}
            {required && (
              <Span variant='danger' modifier='regular' type='4'>
                *
              </Span>
            )}
          </Label>
        </S.LabelWrapper>
      )}
      <S.BaseTextArea
        hasFocus={hasFocus}
        status={status}
        disabled={disabled}
        readOnly={readOnly}
      >
        <S.TextAreaTag
          id={id}
          name={name}
          rows={rows}
          cols={cols}
          disabled={disabled}
          placeholder={placeHolder}
          resize={resize}
          maxLength={maxLength}
          onChange={proxyOnChange}
          onBlur={proxyOnBlur}
          onFocus={proxyOnFocus}
          readOnly={readOnly}
          value={value}
        >
          {children}
        </S.TextAreaTag>
        <S.IconBaseTextArea>{icon && renderIcon(icon)}</S.IconBaseTextArea>
      </S.BaseTextArea>
      {message && (
        <S.HelpText status={status}>
          {status === 'error' && (
            <Icon
              name='error_circle_outline'
              variant='danger'
              width={16}
              height={16}
            />
          )}
          <Span id={id} type='4' variant={spanVariantByStatus[status]}>
            {message}
          </Span>
        </S.HelpText>
      )}
      {maxLengthHelpText && renderMaxLengthHelpText()}
    </S.TextArea>
  );
};

TextArea.defaultProps = {
  status: 'normal',
  readOnly: false,
  disabled: false,
  maxLengthHelpText: true,
  maxLength: '120',
};

export default TextArea;
