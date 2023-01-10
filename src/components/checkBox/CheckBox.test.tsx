import React from 'react';
import Checkbox from './CheckBox';
import { render, fireEvent, cleanup, screen } from '@testing-library/react';

afterEach(cleanup);

describe('Checkbox', () => {
  it('debe mostrarse el componente', () => {
    const container = render(<Checkbox />);
    expect(container).toBeDefined();
  });

  it('si se hace click en el componente se debe marcar como seleccionado', () => {
    const mockedOnChange = jest.fn();
    const { queryByTestId } = render(<Checkbox onChange={mockedOnChange} />);
    expect(mockedOnChange).toHaveBeenCalledTimes(0);
    fireEvent.click(queryByTestId('checkbox--checkbox'));
    expect(mockedOnChange).toHaveBeenCalledTimes(1);
  });

  it('comprobar se dibuja hijo ', () => {
    render(<Checkbox>Children</Checkbox>);
    expect(screen.queryByText('Children')).not.toBeNull();
  });

  it('comprobar que el checkbox este disabled', () => {
    render(<Checkbox disabled={true}>Children</Checkbox>);
    expect(screen.queryByTestId('checkbox--checkbox')).toHaveProperty(
      'disabled',
      true
    );
  });

  it('comprobar que el checkbox alternativo', () => {
    render(<Checkbox isSelectAllCheck={true}>Children</Checkbox>);
    expect(screen.queryByTestId('icon-parcial_outline')).not.toBeNull();
  });
});
