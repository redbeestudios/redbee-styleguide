import React from 'react';
import Badge from './Badge';
import theme from '../../assets/styles/theme';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';

describe('Badge', () => {
  it('debe renderizarse', () => {
    const { getByText } = render(<Badge>Test</Badge>);

    const badge = getByText('Test');

    expect(badge).toBeVisible();
  });

  it('debe renderizar estilos default', () => {
    const { getByText } = render(<Badge>Test</Badge>);

    const badge = getByText('Test');
    expect(badge).toHaveStyle(`color: ${theme.colors.neutral.text.strong};`);
  });

  it('debe mostrarse los estilos correspondientes debido variantes, cuando type es text', () => {
    const variantsAndModifiers = [
      { variant: 'danger', modifier: 'strong' },
      { variant: 'info', modifier: 'regular' },
      { variant: 'warning', modifier: 'regular' },
      { variant: 'success', modifier: 'regular' },
    ];

    variantsAndModifiers.map((item) => {
      const { getByText } = render(
        <Badge variant={item.variant}>
          Variant {item.variant} {item.modifier}
        </Badge>
      );
      expect(getByText(`Variant ${item.variant} ${item.modifier}`)).toHaveStyle(
        `color: ${
          theme.colors[item.variant.split('-')[0]].text[item.modifier]
        };`
      );
    });
  });

  it('debe renderizar estilos para variante neutral-1', () => {
    const { getByText } = render(<Badge variant='neutral-1'>Test</Badge>);

    const badge = getByText('Test');
    expect(badge).toHaveStyle(`color: ${theme.colors.neutral.text.strong};`);
  });

  it('debe renderizar estilos para variante neutral-2', () => {
    const { getByText } = render(<Badge variant='neutral-2'>Test</Badge>);

    const badge = getByText('Test');
    expect(badge).toHaveStyle(`color: ${theme.colors.neutral.text.inverted};`);
  });

  it('debe renderizar estilos para variante, cuando type es dot', () => {
    const { getByText } = render(
      <Badge variant='neutral-1' type='dot'>
        Test
      </Badge>
    );

    const badge = getByText('Test');
    expect(badge).toHaveStyle(`color: ${theme.colors.neutral.text.strong};`);
  });
});
