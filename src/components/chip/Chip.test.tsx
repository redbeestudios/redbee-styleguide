import React from 'react';
import Chip from './Chip';
import theme from '../../assets/styles/theme';
import '@testing-library/jest-dom/extend-expect';
import { render, cleanup } from '@testing-library/react';

afterEach(cleanup);

describe('Chip tests', () => {
  it('debe mostrarse el componente', () => {
    const container = render(<Chip />);
    expect(container).toBeDefined();
  });

  it('debe mostrarse el componente con el iconoExtra con el ancho y alto correcto', () => {
    const { container } = render(<Chip iconLeft='done_outline' />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveAttribute(`height`, expect.stringContaining('24'));
    expect(svg).toHaveAttribute(`width`, expect.stringContaining('24'));
  });

  it('debe mostrarse el componente con el iconoExit con el ancho y alto correcto', () => {
    const { container } = render(<Chip closeButton />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveAttribute(`height`, expect.stringContaining('24'));
    expect(svg).toHaveAttribute(`width`, expect.stringContaining('24'));
  });

  it('debe mostrarse el componente con el texto default', () => {
    const { getByText } = render(
      <Chip iconLeft='done_outline' closeButton text='Chip' />
    );
    expect(getByText('Chip')).toHaveStyle(
      `${theme.textStyles['text-preset-9']()}`
    );
    expect(getByText('Chip')).toHaveStyle(
      `color: ${theme.colors.neutral.text.strong}`
    );
  });

  it('debe mostrarse el componente con el texto de label', () => {
    const { getByText } = render(
      <Chip iconLeft='done_outline' closeButton text='Label' value='value' />
    );
    expect(getByText('Label')).toHaveStyle(
      `${theme.textStyles['text-preset-9']()}`
    );
    expect(getByText('Label')).toHaveStyle(
      `color: ${theme.colors.neutral.text.strong}`
    );
  });

  it('debe mostrarse el componente con el texto disabled', () => {
    const { getByText } = render(
      <Chip iconLeft='done_outline' closeButton text='Chip' disabled />
    );
    expect(getByText('Chip')).toHaveStyle(
      `${theme.textStyles['text-preset-9']()}`
    );
    expect(getByText('Chip')).toHaveStyle(
      `color: ${theme.colors.neutral.text.regular}`
    );
  });

  it('debe mostrarse el componente con el texto active', () => {
    const { getByText } = render(
      <Chip iconLeft='done_outline' closeButton text='Chip' active />
    );
    expect(getByText('Chip')).toHaveStyle(
      `${theme.textStyles['text-preset-9']()}`
    );
    expect(getByText('Chip')).toHaveStyle(
      `color: ${theme.colors['secondary-1'].text.strong}`
    );
  });
});
