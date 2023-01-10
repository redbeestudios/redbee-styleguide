import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import Input from './Input';
import { cleanup, fireEvent, render } from '@testing-library/react';
import theme from '../../assets/styles/theme';

afterEach(() => {
  cleanup();
  jest.clearAllMocks();
});

describe('Tests de input', () => {
  const mockValue = 'mockValue';
  const labelName = 'labelName';
  const inputId = 'inputId';
  const placeHolderValue = 'placeHolderValue';
  const mockMaxLengthValue = 33;
  const onChangeMockFunction = jest.fn();
  const onFocusMockFunction = jest.fn();
  const onBlurMockFunction = jest.fn();
  const onKeyDownMockFunction = jest.fn();

  it('Cuando le paso un value debe renderizar el input con el value', () => {
    const { getByRole } = render(
      <Input value={mockValue} onChange={onChangeMockFunction} />
    );
    const myInput = getByRole('textbox');
    // @ts-ignore
    expect(myInput.value).toBe(mockValue);
  });

  it('Cuando le paso un label quiero encontrar mi input por label', () => {
    const onChange = jest.fn();
    const { getByLabelText } = render(
      <Input
        value={mockValue}
        onChange={onChange}
        id={inputId}
        label={labelName}
      />
    );
    const myInput = getByLabelText(labelName);
    expect(myInput).not.toBeNull();
  });

  it('Cuando le paso un placeholder quiero encontrar mi input por placeHolder', () => {
    const { getByPlaceholderText } = render(
      <Input
        value={mockValue}
        onChange={onChangeMockFunction}
        id={inputId}
        label={labelName}
        placeHolder={placeHolderValue}
      />
    );
    const myInput = getByPlaceholderText(placeHolderValue);
    expect(myInput).not.toBeNull();
  });

  it('Cuando le paso disabled false, espero que el input esté disabled', () => {
    const { getByRole } = render(
      <Input
        value={mockValue}
        onChange={onChangeMockFunction}
        id={inputId}
        label={labelName}
        placeHolder={placeHolderValue}
        disabled={true}
      />
    );
    const myInput = getByRole('textbox');
    // @ts-ignore
    expect(myInput.disabled).toBeTruthy();
  });

  it('Cuando le paso disabled false, espero que el input esté enabled', () => {
    const { getByRole } = render(
      <Input
        value={mockValue}
        onChange={onChangeMockFunction}
        id={inputId}
        label={labelName}
        placeHolder={placeHolderValue}
        disabled={false}
      />
    );
    const myInput = getByRole('textbox');
    // @ts-ignore
    expect(myInput.disabled).toBeFalsy();
  });

  it('Cuando escribo el input debe llamar al onChangeMockFunction con el parametro escrito', () => {
    const { getByRole } = render(
      <Input
        onChange={onChangeMockFunction}
        id={inputId}
        label={labelName}
        placeHolder={placeHolderValue}
      />
    );
    const myInput = getByRole('textbox');
    fireEvent.change(myInput, { target: { value: mockValue } });
    // @ts-ignore
    expect(myInput.value).toBe(mockValue);
    expect(onChangeMockFunction).toHaveBeenCalledTimes(1);
  });

  it('Cuando es tipo password y clickeo el boton de mostrar contraseña debe cambiar a tipo text', () => {
    const { getByTestId, getByLabelText } = render(
      <Input
        id='inputId'
        label={labelName}
        placeHolder={placeHolderValue}
        type='password'
        showPasswordButton
      />
    );

    const myInputPassword = getByLabelText(labelName);
    // @ts-ignore
    expect(myInputPassword.type).toBe('password');
    const showPasswordIcon = getByTestId('icon-hide_outline');
    fireEvent.click(showPasswordIcon);
    // @ts-ignore
    expect(myInputPassword.type).toBe('text');
  });

  it('Cuando es tipo password y esta disabled', () => {
    const { getByTestId, getByLabelText } = render(
      <Input
        id='inputId'
        label={labelName}
        placeHolder={placeHolderValue}
        type='password'
        showPasswordButton={true}
        disabled={true}
      />
    );
    const myInputPassword = getByLabelText(labelName);
    const showPasswordIcon = getByTestId('icon-hide_outline');
    // @ts-ignore
    expect(myInputPassword.disabled).toBeTruthy();
    expect(showPasswordIcon).toHaveStyle(`
      cursor: not-allowed;
    `);
  });

  it('Cuando tiene funciones onBlur o onFocus o onKeyDown se deberia ejecutar', () => {
    const { getByRole } = render(
      <Input
        onFocus={onFocusMockFunction}
        onBlur={onBlurMockFunction}
        onKeydown={onKeyDownMockFunction}
        id={inputId}
        label={labelName}
        placeHolder={placeHolderValue}
      />
    );

    const myInput = getByRole('textbox');
    fireEvent.focus(myInput);
    expect(onFocusMockFunction).toHaveBeenCalledTimes(1);
    fireEvent.blur(myInput);
    expect(onBlurMockFunction).toHaveBeenCalledTimes(1);
    fireEvent.keyDown(myInput);
    expect(onKeyDownMockFunction).toHaveBeenCalledTimes(1);
  });

  it('Cuando tiene props maxlength = x y maxLengthHelpText = true el usuario visualiza help text 0/x', () => {
    const { getByText } = render(
      <Input maxLength={mockMaxLengthValue} maxLengthHelpText />
    );

    const helptext = getByText('0/33');
    expect(helptext).toBeInTheDocument();
  });

  it('Cuando le paso prop onlyNumbers debe aceptar solo caracteres numericos', () => {
    const { getByRole } = render(
      <Input
        onChange={onChangeMockFunction}
        id={inputId}
        label={labelName}
        placeHolder={placeHolderValue}
        onlyNumbers
      />
    );
    const myInput = getByRole('textbox');
    fireEvent.change(myInput, { target: { value: '8' } });
    // @ts-ignore
    expect(myInput.value).toBe('8');
    fireEvent.change(myInput, { target: { value: 'A' } });
    // @ts-ignore
    expect(myInput.value).toBe('8');
    expect(onChangeMockFunction).toHaveBeenCalledTimes(2);
  });

  it('Cuando le paso iconRight y una prop disabled, debe renderizar el input  y el icono con cursor not-allowed', () => {
    const { getByRole, getByTestId } = render(
      <Input
        onChange={onChangeMockFunction}
        id={inputId}
        label={labelName}
        placeHolder={placeHolderValue}
        icons={{
          iconRight: {
            name: 'help_outline',
          },
        }}
        disabled={true}
      />
    );
    const input = getByRole('textbox');
    expect(input).toBeDefined();
    // @ts-ignore
    expect(input.disabled).toBeTruthy();
    const icon = getByTestId('icon-help_outline');
    expect(icon).toHaveStyle(`
      cursor: not-allowed;
    `);
  });

  it('Cuando le paso iconLeft, debe renderizar el input y el icono', () => {
    const { getByRole, getByTestId } = render(
      <Input
        onChange={onChangeMockFunction}
        id={inputId}
        label={labelName}
        placeHolder={placeHolderValue}
        icons={{
          iconLeft: {
            name: 'help_outline',
          },
        }}
      />
    );
    const input = getByRole('textbox');
    expect(input).toBeDefined();
    const icon = getByTestId('icon-help_outline');
    expect(icon).toBeDefined();
  });

  it('Cuando le paso prop iconRight, debe renderizar el input y el icono', () => {
    const { getByRole, getByTestId } = render(
      <Input
        onChange={onChangeMockFunction}
        id={inputId}
        label={labelName}
        placeHolder={placeHolderValue}
        icons={{
          iconRight: 'help_outline',
        }}
      />
    );
    const input = getByRole('textbox');
    expect(input).toBeDefined();
    const icon = getByTestId('icon-help_outline');
    expect(icon).toBeDefined();
  });

  it('Cuando le paso prop iconRight y un callback, debe aparecer el icon en el input y realizar el callback', () => {
    const onClickIcon = jest.fn();
    const { getByRole, getByTestId } = render(
      <Input
        onChange={onChangeMockFunction}
        id={inputId}
        label={labelName}
        placeHolder={placeHolderValue}
        icons={{
          iconRight: {
            name: 'help_outline',
            callback: onClickIcon,
          },
        }}
      />
    );
    const input = getByRole('textbox');
    expect(input).toBeDefined();
    const icon = getByTestId('icon-help_outline');
    fireEvent.click(icon);
    expect(onClickIcon).toBeCalledTimes(1);
  });

  it(`Cuando el input tiene un error, debe mostrar un icono con margin-right ${theme.spacing['spacing-2']} junto al mensaje`, () => {
    const { getByRole, getByTestId } = render(
      <Input
        onChange={onChangeMockFunction}
        id={inputId}
        label={labelName}
        placeHolder={placeHolderValue}
        inputStatus='error'
        message='hubo un error'
      />
    );
    const input = getByRole('textbox');
    expect(input).toBeDefined();
    const icon = getByTestId('icon-error_circle_outline');
    expect(icon).toHaveStyle(`
      margin-right: ${theme.spacing['spacing-1']};
    `);
  });

  it('Cuando le paso prop size=sm, debe renderizar el input con medida', () => {
    const { getByRole } = render(
      <Input
        onChange={onChangeMockFunction}
        id={inputId}
        label={labelName}
        placeHolder={placeHolderValue}
        size='sm'
      />
    );
    const input = getByRole('textbox');
    expect(input).toBeDefined();
    expect(input.parentElement).toHaveStyle(`
      width: 215px;
    `);
  });

  it('Cuando le paso prop size=md, debe renderizar el input con medida', () => {
    const { getByRole } = render(
      <Input
        onChange={onChangeMockFunction}
        id={inputId}
        label={labelName}
        placeHolder={placeHolderValue}
        size='md'
      />
    );
    const input = getByRole('textbox');
    expect(input).toBeDefined();
    expect(input.parentElement).toHaveStyle(`
      width: 325px;
    `);
  });

  it('Cuando le paso prop size=lg, debe renderizar el input con medida', () => {
    const { getByRole } = render(
      <Input
        onChange={onChangeMockFunction}
        id={inputId}
        label={labelName}
        placeHolder={placeHolderValue}
        size='lg'
      />
    );
    const input = getByRole('textbox');
    expect(input).toBeDefined();
    expect(input.parentElement).toHaveStyle(`
      width: 560px;
    `);
  });

  it('Cuando le paso prop readOnly, debe renderizar el input con el attributo', () => {
    const { getByRole } = render(
      <Input
        onChange={onChangeMockFunction}
        id={inputId}
        label={labelName}
        placeHolder={placeHolderValue}
        readOnly={true}
      />
    );
    const input = getByRole('textbox');
    expect(input.getAttribute('readonly')).not.toBe(null);
  });
});
