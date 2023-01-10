import React from 'react';
import Dropdown, { ItemProp } from './DropDown';
import '@testing-library/jest-dom/extend-expect';
import {
  render,
  fireEvent,
  getByText,
  getAllByRole,
  queryAllByRole,
  queryByText,
} from '@testing-library/react';

const chocolateFlavourClickMock = jest.fn(() => {});
const strawberryFlavourClickMock = jest.fn(() => {});
const vanillaFlavourClickMock = jest.fn(() => {});

const ICE_CREAM_FLAVOURS: Array<ItemProp> = [
  {
    title: 'Chocolate',
    action: chocolateFlavourClickMock,
  },
  {
    title: 'Strawberry',
    action: strawberryFlavourClickMock,
  },
  {
    title: 'Vanilla',
    action: vanillaFlavourClickMock,
    disabled: true,
  },
];

const DROPDOWN_TITLE = 'Choose Your Ice Cream Flavour';

const RANDOM_CHILDREN_TEXT = 'Hello I am a children';

describe('Dropdown', () => {
  it('El componente debe renderizarse', () => {
    const { getByText } = render(<Dropdown title={DROPDOWN_TITLE} />);

    const dropdown = getByText(DROPDOWN_TITLE);
    expect(dropdown).toBeVisible();
  });

  it('Al pasarle una lista de items al componente y hacerle click, debe renderizar un item de lista por cada elemento.', () => {
    const { getByText, getAllByRole } = render(
      <Dropdown title={DROPDOWN_TITLE} items={ICE_CREAM_FLAVOURS} />
    );

    const dropdown = getByText(DROPDOWN_TITLE);
    fireEvent.click(dropdown);

    const dropdownListItems = getAllByRole('listitem');
    expect(dropdownListItems).toHaveLength(ICE_CREAM_FLAVOURS.length);
  });

  it('Al pasarle un children al componente y hacerle click, debe renderizar ese children.', () => {
    const { getByText } = render(
      <Dropdown title={DROPDOWN_TITLE}>
        <div>{RANDOM_CHILDREN_TEXT}</div>
      </Dropdown>
    );

    const dropdown = getByText(DROPDOWN_TITLE);
    fireEvent.click(dropdown);

    const children = getByText(RANDOM_CHILDREN_TEXT);
    expect(children).toBeVisible();
  });

  it('Al pasarle un children al componente y hacerle click pero estar deshabilitado, no deberia rendenderizar ese children', () => {
    const { queryByText } = render(
      <Dropdown title={DROPDOWN_TITLE} disabled>
        <div>{RANDOM_CHILDREN_TEXT}</div>
      </Dropdown>
    );

    const dropdown = queryByText(DROPDOWN_TITLE);
    fireEvent.click(dropdown);

    const children = queryByText(RANDOM_CHILDREN_TEXT);
    expect(children).toBeNull();
  });

  it('Al pasarle un children al componente y hacerle doble click, deberia dejar de mostrar el children.', () => {
    const { queryByText } = render(
      <Dropdown title={DROPDOWN_TITLE}>
        <div>{RANDOM_CHILDREN_TEXT}</div>
      </Dropdown>
    );

    const dropdown = queryByText(DROPDOWN_TITLE);
    fireEvent.doubleClick(dropdown);

    const children = queryByText(RANDOM_CHILDREN_TEXT);
    expect(children).toBeNull();
  });

  it('Al pasarle una lista de items al componente y hacerle click pero estar deshabilitado, no deberia rendenderizar sus items.', () => {
    const { getByText, queryAllByRole } = render(
      <Dropdown title={DROPDOWN_TITLE} items={ICE_CREAM_FLAVOURS} disabled />
    );

    const dropdown = getByText(DROPDOWN_TITLE);
    fireEvent.click(dropdown);

    const dropdownListItems = queryAllByRole('listitem');
    expect(dropdownListItems).toHaveLength(0);
  });

  it('Al pasarle una lista de items al componente y hacerle doble click, deberia dejar de mostrar sus items.', () => {
    const { getByText, queryAllByRole } = render(
      <Dropdown title={DROPDOWN_TITLE} items={ICE_CREAM_FLAVOURS} />
    );

    const dropdown = getByText(DROPDOWN_TITLE);
    fireEvent.doubleClick(dropdown);

    const dropdownListItems = queryAllByRole('listitem');
    expect(dropdownListItems).toHaveLength(0);
  });

  it('Al pasarle un children al componente, hacerle click, pero luego hacer click por fuera, deberia dejar de rendenderizar su children.', () => {
    const { queryByText } = render(
      <Dropdown title={DROPDOWN_TITLE}>
        <div>{RANDOM_CHILDREN_TEXT}</div>
      </Dropdown>
    );

    const dropdown = queryByText(DROPDOWN_TITLE);

    fireEvent.click(dropdown);
    fireEvent.mouseDown(document.body);

    const children = queryByText(RANDOM_CHILDREN_TEXT);
    expect(children).toBeNull();
  });

  it('Al pasarle una lista de items al componente, hacerle click, pero luego hacer click por fuera, deberia dejar de rendenderizar sus items.', () => {
    const { getByText, queryAllByRole } = render(
      <Dropdown title={DROPDOWN_TITLE} items={ICE_CREAM_FLAVOURS} />
    );

    const dropdown = getByText(DROPDOWN_TITLE);

    fireEvent.click(dropdown);
    fireEvent.mouseDown(document.body);

    const listItems = queryAllByRole('listitem');
    expect(listItems).toHaveLength(0);
  });

  it('Al pasarle una lista de items al componente y hacer click sobre uno de sus items, debe llamar a la funcion indicada por el item.', () => {
    const { getByText, queryAllByRole } = render(
      <Dropdown title={DROPDOWN_TITLE} items={ICE_CREAM_FLAVOURS} />
    );

    const dropdown = getByText(DROPDOWN_TITLE);

    fireEvent.click(dropdown);

    const listItems = queryAllByRole('button');
    listItems[1].click();

    expect(chocolateFlavourClickMock).toBeCalled();
  });

  it('Al pasarle una lista de items al componente y hacer click sobre uno de sus items pero estar deshabilitado, no debe llamar a la funcion indicada por el item.', () => {
    const { getByText, queryAllByRole } = render(
      <Dropdown title={DROPDOWN_TITLE} items={ICE_CREAM_FLAVOURS} />
    );

    const dropdown = getByText(DROPDOWN_TITLE);

    fireEvent.click(dropdown);

    const listItems = queryAllByRole('button');
    listItems[3].click();

    expect(vanillaFlavourClickMock).not.toBeCalled();
  });
});
