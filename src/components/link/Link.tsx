import React from "react";
import * as S from "./Link.styles";
import Icon from "../icon/Icon";

const defaultProps = {
  size: "sm",
  target: "_self",
  variant: "primary",
};
type IconProps = {
  iconLeft: string;
  iconRight: string;
  iconCenter: string;
};

type LinkProps = {
  href?: string;
  children?: any;
  size: "xs" | "sm" | "md";
  target: "_blank" | "_self" | "_parent" | "_top" | "framename";
  variant: "primary" | "inverted";
  icons?: IconProps;
  onClick?: () => void;
};

const Link = (props: LinkProps) => {
  const { children, href, size, target, variant, icons, onClick } = props;
  const renderIcon = (name) => {
    const iconSizes = {
      sm: 20,
      md: 24,
    };

    return (
      <Icon
        cursor="pointer"
        name={name}
        width={iconSizes[size]}
        height={iconSizes[size]}
        variant={variant === "primary" ? "primary" : "neutral"}
        modifier={variant === "primary" ? "weak" : "inverted"}
      />
    );
  };

  return (
    <S.Link
      href={href}
      icons={icons}
      size={size}
      target={target}
      variant={variant}
      onClick={onClick}
    >
      <S.HyperlinkContent>
        {icons?.iconLeft && renderIcon(icons.iconLeft)}
        {children}
        {icons?.iconRight && renderIcon(icons.iconRight)}
      </S.HyperlinkContent>
    </S.Link>
  );
};

Link.defaultProps = defaultProps;

export default Link;
