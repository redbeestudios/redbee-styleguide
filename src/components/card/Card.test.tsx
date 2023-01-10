import React from 'react';
import Card from './Card';
import { render, fireEvent, cleanup, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import theme from '../../assets/styles/theme';

afterEach(cleanup);

describe('Card', () => {
  it('debe mostrarse el componente', () => {
    const container = render(<Card />);
    expect(container).toBeDefined();
  });

  it('si se hace click en la Card', () => {
    const mockedOnChange = jest.fn();
    const { queryByText } = render(<Card onClick={mockedOnChange}>Card</Card>);
    expect(mockedOnChange).toHaveBeenCalledTimes(0);
    fireEvent.click(queryByText('Card'));
    expect(mockedOnChange).toHaveBeenCalledTimes(1);
  });

  it('si tiene propiedad hasHover', () => {
    const container = render(<Card hasHover={true}>Card</Card>);
    expect(container).toBeDefined();
  });

  it('si tiene propiedad pressed', () => {
    const { queryByText } = render(<Card pressed={true}>Card</Card>);
    const card = queryByText('Card');
    expect(card).toHaveStyle(`
       background: ${theme.colors['secondary-1'].bg.weak}
    `);
  });

  it('si tiene propiedad disabled', () => {
    const { queryByText } = render(<Card disabled={true}>Card</Card>);
    const card = queryByText('Card');
    expect(card).toHaveStyle(`
      background: ${theme.colors.neutral.bg.regular}
    `);
  });

  it('si tiene border', () => {
    const { queryByText } = render(<Card border={true}>Card</Card>);
    const card = queryByText('Card');
    expect(card).toHaveStyle(`
       box-shadow: inset 0 0 0 1px ${theme.colors.neutral.border.weak};
    `);
  });

  it('si tiene borderRadius', () => {
    const { queryByText } = render(<Card borderRadius={true}>Card</Card>);
    const card = queryByText('Card');
    expect(card).toHaveStyle(`
      border-radius: ${theme.borderRadius[`border-radius-4`]};
    `);
  });

  it('si tiene borderRadius custom', () => {
    const borderRadiusDefault = theme.borderRadius[`border-radius-4`];
    const { queryByText } = render(
      <Card
        borderRadius={{
          bottomLeft: true,
          bottomRight: true,
        }}
      >
        Card
      </Card>
    );
    const card = queryByText('Card');
    expect(card).toHaveStyle(`
      border-radius: 0 0 ${borderRadiusDefault} ${borderRadiusDefault};
    `);
  });

  it('si tiene spacing custom', () => {
    const { queryByText } = render(
      <Card
        spacing={{
          top: '2',
          left: '2',
        }}
      >
        Card
      </Card>
    );
    const card = queryByText('Card');
    expect(card).toHaveStyle(`
      padding-left: ${theme.spacing['spacing-2']};
      padding-top: ${theme.spacing['spacing-2']};
    `);
  });

  it('si tiene variant y modifier', () => {
    const { queryByText } = render(
      <Card variant='neutral' modifier='regular'>
        Card
      </Card>
    );
    const card = queryByText('Card');
    expect(card).toHaveStyle(`
      background: ${theme.colors['neutral'].bg['regular']};
    `);
  });

  it('si tiene variant neutral y modifier weak por default', () => {
    const { queryByText } = render(<Card>Card</Card>);
    const card = queryByText('Card');
    expect(card).toHaveStyle(`
      background: ${theme.colors['neutral'].bg['weak']};
    `);
  });
});
