import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, cleanup, fireEvent } from '@testing-library/react';
import Icon from './Icon';

afterEach(cleanup);

describe('Icon tests', () => {
  const defaultIcon = 'search';
  it('no debe mostrarse el componente', () => {
    const { container } = render(<Icon name={''} />);
    expect(container.querySelector('svg')).toBe(null);
  });

  it('debe mostrarse el componente', () => {
    const container = render(<Icon name={defaultIcon} />);
    expect(container).toBeDefined();
  });
  it('Render de svg en Icon', () => {
    const { container } = render(<Icon name={defaultIcon} />);
    const svg = container.getElementsByTagName('svg');
    expect(svg).not.toBe(null);
  });

  it('debe mostrarse los estilos correspondientes a cursor=pointer', () => {
    const { container } = render(<Icon name={defaultIcon} cursor='pointer' />);
    expect(container.firstElementChild).toHaveStyle(`cursor: pointer;`);
  });

  it('debe asignar el height=x coincida con el svg de icons', () => {
    const { container } = render(
      <Icon name={defaultIcon} cursor='pointer' height={24} />
    );
    const svg = container.querySelector('svg');
    expect(svg).toHaveAttribute(`height`, '24');
  });

  it('debe asignar el width=x coincida con el svg de icons', () => {
    const { container } = render(
      <Icon name={defaultIcon} cursor='pointer' width={23} />
    );
    const svg = container.querySelector('svg');
    expect(svg).toHaveAttribute(`width`, '23');
  });

  it('debe llamarse a la funcion de onClick al hacer click sobre el icono.', () => {
    const onClickMock = jest.fn();
    const { container } = render(
      <Icon name={defaultIcon} onClick={onClickMock} />
    );

    const icon = container.querySelector('i');

    fireEvent.click(icon);
    expect(onClickMock).toBeCalled();
  });

  it('al encontrarse deshabilitado no debe llamarse a la funcion de onClick al hacer click sobre el icono.', () => {
    const onClickMock = jest.fn();
    const { container } = render(
      <Icon name={defaultIcon} onClick={onClickMock} disabled={true} />
    );

    const icon = container.querySelector('i');

    fireEvent.click(icon);
    expect(onClickMock).not.toBeCalled();
  });
});
