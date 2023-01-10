import styled, { css } from 'styled-components';
import theme from '../../assets/styles/theme';

export interface BadgeStylesProps {
  type?: 'dot' | 'text' | 'notification';
  variant?:
    | 'danger'
    | 'info'
    | 'warning'
    | 'success'
    | 'neutral-1'
    | 'neutral-2'
    | 'primary'
    | 'default'
    | 'neutral-n-4'
    | 'white';
  modifier?: 'weak' | 'regular' | 'strong' | 'inverted';
  size?: 'sm' | 'md';
  border?:
    | 'primary'
    | 'primary-5'
    | 'neutral-2'
    | 'neutral-3'
    | 'success'
    | 'info'
    | 'error'
    | 'none';
  oval?: 'primary-5' | 'success' | 'neutral-2' | 'info' | 'error';
}

export const Badge = styled.div<BadgeStylesProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: ${theme.borderRadius['border-radius-5']};
  height: 24px;
  padding: ${theme.spacing['spacing-1']} ${theme.spacing['spacing-2']};
  ${({ variant, type, modifier, size, border }) =>
    isOldVariant(variant)
      ? oldStyles(variant, size, border)
      : getBadgeVariant(variant, type, modifier)}
  > i {
    margin-right: ${theme.spacing['spacing-1']};
  }
`;

const getBadgeVariant = (variant, type, modifier) => {
  switch (type) {
    case 'dot':
      return css`
        background-color: ${theme.colors.neutral.bg.weak};
        box-shadow: inset 0 0 0 1px ${theme.colors.neutral.border.weak};
      `;
    case 'notification':
      return css`
        min-width: 24px;
        height: 16px;
        background-color: ${theme.colors['secondary-2'].bg.regular};
      `;
    default:
      return css`
        background-color: ${theme.colors[variant].bg[modifier]};
      `;
  }
};

const oldVariants = ['primary', 'default', 'neutral-n-4', 'white'];

const isOldVariant = (variant) => oldVariants.includes(variant);

const oldStyles = (variant, size, border) => {
  switch (variant) {
    case 'primary':
      return css`
        background-color: ${theme.oldColors['palette-primary-p-1-p-1']};
      `;
    case 'neutral-n-4':
      return css`
        background-color: ${theme.oldColors['palette-neutral-n-4']};
      `;

    case 'white':
      return css`
        background-color: ${theme.oldColors['palette-background-cards-white']};
      `;
    case 'default':
      return css`
        font-size: 14px;
        background-color: ${theme.oldColors.white[600]};
        color: ${theme.oldColors['text-gray']};
      `;
  }

  switch (size) {
    case 'sm':
      return css`
        padding: 5px 10px;
      `;
    case 'md':
      return css`
        padding: 5px 15px;
      `;
  }

  switch (border) {
    case 'none':
      return css``;
    default:
      return css`
        border: solid 1px ${getBorderColor(border)};
      `;
  }
};

const getBorderColor = (border) => {
  switch (border) {
    case 'primary':
      return `${theme.oldColors['palette-primary-p-1-p-1']};`;
    case 'primary-5':
      return `${theme.oldColors['palette-primary-p-5-p-5']};`;
    case 'neutral-2':
      return `${theme.oldColors['palette-neutral-n-2']};`;
    case 'neutral-3':
      return `${theme.oldColors['palette-neutral-n-3']};`;
    case 'success':
      return `${theme.oldColors['palette-message-success']};`;
    case 'error':
      return `${theme.oldColors['palette-message-error']};`;
    case 'info':
      return `${theme.oldColors['palette-message-info']};`;
  }
};
