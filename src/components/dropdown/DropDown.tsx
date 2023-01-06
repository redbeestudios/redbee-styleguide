import React, { useState } from "react";
import OutsideAlerter from "../outsidealerter/OutsideAlerter";
import Button from "../button/Button";

import {
  DropdownWrapper,
  Element,
  ElementButton,
  Elements,
} from "./DropDown.styles";

import Span from "../texts/span/Span";

const defaultProps = {
  disabled: false,
};

type ItemProp = {
  title: string;
  disabled: boolean;
  action: () => void;
};

type DropDownProps = {
  disabled?: boolean;
  items?: Array<ItemProp>;
  size?: "sm" | "md" | "lg";
  title?: string;
  children?: any;
};

const DropDown = (props: DropDownProps) => {
  const { children, disabled, items, size, title } = props;
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  const renderDropdownContent = () => {
    return items
      ? items.map((item) => (
          <Element key={item.title}>
            <ElementButton
              type="button"
              onClick={() => callItemAction(item.action)}
              disabled={item.disabled}
            >
              <Span
                variant="neutral"
                modifier={item.disabled ? "weak" : "strong"}
                type="2"
              >
                {item.title}
              </Span>
            </ElementButton>
          </Element>
        ))
      : children;
  };

  const callItemAction = (action) => {
    toggle();
    action();
  };

  return (
    <OutsideAlerter handleOutSideClick={() => setOpen(false)} active={open}>
      <DropdownWrapper>
        <Button
          variant={disabled ? "secondary" : "primary"}
          size={size}
          type="button"
          onClick={toggle}
          disabled={disabled}
          icon={open ? "chevron_up_small" : "chevron_down_small"}
          iconAlign="right"
        >
          {title}
        </Button>
        {open && <Elements>{renderDropdownContent()}</Elements>}
      </DropdownWrapper>
    </OutsideAlerter>
  );
};

DropDown.defaultProps = defaultProps;
export default DropDown;
