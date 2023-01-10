import React from 'react';
import Button from './Button';
import theme from '../../assets/styles/theme';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import { getByTestId } from '@storybook/testing-library';

describe('Button', () => {
  const defaultIcon = 'search';

  it('debe renderizarse', () => {
    const { getByRole } = render(<Button>Botón</Button>);

    const button = getByRole('button', { name: 'Botón' });

    expect(button).toBeVisible();
  });

  it('al hacer click debe llamarse la funcion de onclick', () => {
    const onClickMock = jest.fn();

    const { getByText } = render(<Button onClick={onClickMock}>Botón</Button>);

    const button = getByText('Botón');

    fireEvent.click(button);
    expect(onClickMock).toBeCalled();
  });

  it('al hacer click y estar disabled no debe llamarse a la funcion de onclick', () => {
    const onClickMock = jest.fn();

    const { getByText } = render(
      <Button onClick={onClickMock} disabled>
        Botón
      </Button>
    );

    const button = getByText('Botón');

    fireEvent.click(button);
    expect(onClickMock).not.toBeCalled();
  });

  it('con variant primary tenga su color correspondiente', () => {
    const { getByText } = render(<Button variant='primary'>Botón</Button>);

    const button = getByText('Botón');

    expect(button).toHaveStyle(`
      background-color: ${theme.colors['primary'].bg.regular};
      color: ${theme.colors['neutral'].text.inverted};
    `);
  });

  it('con variant secondary tenga su color correspondiente', () => {
    const { getByText } = render(<Button variant='secondary'>Botón</Button>);

    const button = getByText('Botón');

    expect(button).toHaveStyle(`
        background-color: transparent;
        box-shadow: inset 0 0 0 2px ${theme.colors['primary'].border.regular};
        color: ${theme.colors['primary'].text.regular};
    `);
  });

  it('con disabled y variant primary tenga sus estilos correspondientes', () => {
    const { getByText } = render(
      <Button variant='primary' disabled>
        Botón
      </Button>
    );

    const button = getByText('Botón');

    expect(button).toHaveStyle(`
      background-color: ${theme.colors['neutral'].bg.stronger};
      color: ${theme.colors['neutral'].text.regular};
    `);
  });

  it('con disabled y variant secondary tenga sus estilos correspondientes', () => {
    const { getByText } = render(
      <Button variant='secondary' disabled>
        Botón
      </Button>
    );

    const button = getByText('Botón');

    expect(button).toHaveStyle(`
      background-color: transparent;
      box-shadow: inset 0 0 0 2px ${theme.colors['neutral'].border.strong};
      color: ${theme.colors['neutral'].text.regular};
    `);
  });

  it('con size correspondiente en sm', () => {
    const { getByText } = render(
      <Button size='sm' variant='secondary'>
        Botón
      </Button>
    );

    const button = getByText('Botón');

    expect(button).toHaveStyle(`
        border-radius: ${theme.borderRadius['border-radius-3']};
        ${theme.textStyles['text-preset-7']()};
        padding: 
          ${theme.spacing['spacing-0']} 
          ${theme.spacing['spacing-2']};
        
    `);
  });

  it('con size correspondiente en md', () => {
    const { getByText } = render(
      <Button size='md' variant='secondary'>
        Botón
      </Button>
    );

    const button = getByText('Botón');

    expect(button).toHaveStyle(`
        border-radius: ${theme.borderRadius['border-radius-3']};
        ${theme.textStyles['text-preset-6']()};
        padding: 
          ${theme.spacing['spacing-1']} 
          ${theme.spacing['spacing-3']};
    `);
  });

  it('con size correspondiente en lg', () => {
    const { getByText } = render(
      <Button size='lg' variant='secondary'>
        Botón
      </Button>
    );

    const button = getByText('Botón');

    expect(button).toHaveStyle(`
        border-radius: ${theme.borderRadius['border-radius-3']};
        ${theme.textStyles['text-preset-5']()};
        padding: 
          ${theme.spacing['spacing-3']} 
          ${theme.spacing['spacing-4']};
    `);
  });

  it('con fullwidth debe mostrarse con width 100%', () => {
    const { getByText } = render(
      <Button size='lg' fullWidth>
        Botón
      </Button>
    );

    const button = getByText('Botón');

    expect(button).toHaveStyle(`
      width: 100%;
      justify-content: center;
    `);
  });

  it('con ícono a izquieda debe renderizarse correctamente', () => {
    const { getByRole, container } = render(
      <Button icon={defaultIcon} iconAlign='left' size='lg' id='boton-icono'>
        Botón
      </Button>
    );

    const button = getByTestId(container, 'boton-icono');
    const svg = container.getElementsByTagName('svg');

    expect(button).toBeVisible();
    expect(button).toHaveStyle(`
      padding: 
      ${theme.spacing['spacing-3']}
      ${theme.spacing['spacing-4']};
    `);
    expect(svg).not.toBe(null);
  });

  it('con ícono a derecha debe renderizarse correctamente', () => {
    const { getByRole, container } = render(
      <Button icon={defaultIcon} iconAlign='right' size='lg' id='boton-icono'>
        Botón
      </Button>
    );

    const button = getByTestId(container, 'boton-icono');
    const svg = container.getElementsByTagName('svg');

    expect(button).toBeVisible();
    expect(button).toHaveStyle(`
      padding: 
          ${theme.spacing['spacing-3']}
          ${theme.spacing['spacing-4']};`);
    expect(svg).not.toBe(null);
  });

  it('con ícono centrado debe renderizarse correctamente', () => {
    const { getByRole, container } = render(
      <Button icon={defaultIcon} iconAlign='center' id='boton-icono' />
    );

    const button = getByTestId(container, 'boton-icono');
    const svg = container.getElementsByTagName('svg');

    expect(button).toBeVisible();
    expect(button).toHaveStyle(`
      padding: 
       ${theme.spacing['spacing-3']};
    `);
    expect(svg).not.toBe(null);
  });
});
