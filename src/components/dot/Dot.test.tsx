import React from 'react';
import Dot, { DotProps } from './Dot';
import theme from '../../assets/styles/theme';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';

describe('Dot', () => {
  it('debe renderizarse', () => {
    const { container } = render(<Dot />);
    expect(container).toBeDefined();
  });

  it('debe mostrarse los estilos correspondientes de variante y modificador', () => {
    const variantsAndModifiers: Array<DotProps> = [
      { variant: 'neutral', modifier: 'regular' },
      { variant: 'neutral', modifier: 'strong' },
      { variant: 'neutral', modifier: 'weak' },
      { variant: 'neutral', modifier: 'inverted' },
      { variant: 'danger', modifier: 'regular' },
      { variant: 'danger', modifier: 'strong' },
      { variant: 'danger', modifier: 'weak' },
      { variant: 'warning', modifier: 'regular' },
      { variant: 'info', modifier: 'regular' },
      { variant: 'success', modifier: 'regular' },
    ];

    variantsAndModifiers.map((item) => {
      const { container } = render(
        <Dot variant={item.variant} modifier={item.modifier} />
      );
      let div = container.querySelector('div');
      expect(div).toHaveStyle(
        `background-color: ${theme.colors[item.variant].bg[item.modifier]};`
      );
    });
  });

  it('debe mostrarse los estilos correspondientes de un dot default', () => {
    const { container } = render(<Dot />);
    let div = container.querySelector('div');
    expect(div).toHaveStyle(`
      width: 8px;
      height: 8px;
      border-radius: ${theme.borderRadius['border-radius-5']};
      margin: ${theme.spacing['spacing-1']} ${theme.spacing['spacing-1']}
        ${theme.spacing['spacing-1']} 0;
      background-color: ${theme.colors.neutral.bg.regular};
    `);
  });
});
