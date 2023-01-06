import React from "react";
import PropTypes from "prop-types";
import * as S from "./Badge.styles";
import Dot from "../dot/Dot";
import Span from "../texts/span/Span";
import Icon from "../icon/Icon";

const defaultProps = {
  type: "text",
  variant: "neutral-1",
  size: "md",
  withOval: false,
  border: null,
};

type BadgeProps = {
  type: "dot" | "text" | "notification";
  variant:
    | "danger"
    | "info"
    | "warning"
    | "success"
    | "neutral-1"
    | "neutral-2"
    | "primary"
    | "default";
  size: "sm" | "md";
  border:
    | "primary"
    | "primary-5"
    | "neutral-2"
    | "neutral-3"
    | "success"
    | "info"
    | "error"
    | "none";
  iconName?: string;
  children: any;
};

const Badge = (props: BadgeProps) => {
  const { children, type, variant, iconName, size, border } = props;

  const innerProps = {
    danger: {
      bg: {
        variant: "danger",
        modifier: "weak",
      },
      text: {
        variant: "danger",
        modifier: "strong",
      },
      ic: {
        variant: "danger",
        modifier: "regular",
      },
    },
    info: {
      bg: {
        variant: "info",
        modifier: "weak",
      },
      text: {
        variant: "info",
        modifier: "regular",
      },
      ic: {
        variant: "info",
        modifier: "regular",
      },
    },
    warning: {
      bg: {
        variant: "warning",
        modifier: "weak",
      },
      text: {
        variant: "warning",
        modifier: "regular",
      },
      ic: {
        variant: "warning",
        modifier: "regular",
      },
    },
    success: {
      bg: {
        variant: "success",
        modifier: "weak",
      },
      text: {
        variant: "success",
        modifier: "regular",
      },
      ic: {
        variant: "success",
        modifier: "regular",
      },
    },
    primary: {
      bg: {
        variant: "info",
        modifier: "weak",
      },
      text: {
        variant: "info",
        modifier: "regular",
      },
      ic: {
        variant: "info",
        modifier: "regular",
      },
    },
    "neutral-1": {
      bg: {
        variant: "neutral",
        modifier: "regular",
      },
      text: {
        variant: "neutral-1",
        modifier: "strong",
      },
      ic: {
        variant: "neutral",
        modifier: "strong",
      },
    },
    "neutral-2": {
      bg: {
        variant: "neutral",
        modifier: "inverted",
      },
      text: {
        variant: "neutral-1",
        modifier: "inverted",
      },
      ic: {
        variant: "neutral",
        modifier: "inverted",
      },
    },
  };

  const renderDotBadge = () => (
    <>
      <Dot
        variant={innerProps[variant].ic.variant}
        modifier={innerProps[variant].ic.modifier}
      />
      <Span type="5" variant="neutral-1" modifier="strong">
        {children}
      </Span>
    </>
  );

  const renderNotificationBadge = () => (
    <Span type="5" variant="neutral-1" modifier="inverted">
      {children}
    </Span>
  );

  const renderTextBadge = () => (
    <>
      {iconName && (
        <Icon
          name={iconName}
          variant={innerProps[variant].ic.variant}
          modifier={innerProps[variant].ic.modifier}
          height={16}
          width={16}
        />
      )}
      <Span
        type="5"
        variant={innerProps[variant].text.variant}
        modifier={innerProps[variant].text.modifier}
      >
        {children}
      </Span>
    </>
  );

  const badgeToRender = {
    dot: () => renderDotBadge(),
    notification: () => renderNotificationBadge(),
    text: () => renderTextBadge(),
  };

  return (
    <S.Badge
      variant={innerProps[variant].bg.variant}
      type={type}
      modifier={innerProps[variant].bg.modifier}
      size={size}
      border={border}
    >
      {<>{badgeToRender[type]()}</>}
    </S.Badge>
  );
};

Badge.defaultProps = defaultProps;

export default Badge;
