import styled, { css } from 'styled-components';
import theme from '../../assets/styles/theme';

type SpacingType = '0'|'1'|'2'|'3'|'4'|'5'|'6'|'7'|'8'|'9'|'10'|'11'

interface CardProps {
    spacing?:SpacingType|{top:SpacingType,left:SpacingType,right:SpacingType,bottom:SpacingType}
    hasHover?:boolean,
    border?:boolean,
    disabled?:boolean,
    pressed?:boolean,
    borderRadius?:boolean|{
        topLeft: boolean,
        topRight: boolean,
        bottomLeft: boolean,
        bottomRight: boolean,
    }
    onClick?:()=>void,
    variant:'neutral',
    modifier:'regular'|'weak',
    children:any,
    hasCursorPointer:boolean
}

const getSpacingCard = (spacing) =>
    typeof spacing === 'object'
        ? Object.keys(spacing)
            .map(
                (space) =>
                    `padding-${space}: ${theme.spacing[`spacing-${spacing[space]}`]};`
            )
            .join(' ')
        : `padding: ${theme.spacing[`spacing-${spacing}`]};`;

const getBorderRadiusCard = (borderRadius) =>
    typeof borderRadius === 'object'
        ? `
    border-radius: 
    ${borderRadius.topLeft ? theme.borderRadius[`border-radius-4`] : '0'}
    ${borderRadius.topRight ? theme.borderRadius[`border-radius-4`] : '0'}
    ${borderRadius.bottomLeft ? theme.borderRadius[`border-radius-4`] : '0'}
    ${borderRadius.bottomRight ? theme.borderRadius[`border-radius-4`] : '0'};
  `
        : borderRadius &&
        `border-radius: ${theme.borderRadius[`border-radius-4`]};`;

const Card = styled.div<CardProps>`
  ${({ variant, modifier }) =>
    `background: ${theme.colors[variant].bg[modifier]};`}
  ${({ spacing }) => spacing && getSpacingCard(spacing)}
  ${({ borderRadius }) => borderRadius && getBorderRadiusCard(borderRadius)}
  ${({ hasHover }) => hasHover && getElevationCard(hasHover)}
  ${({ disabled }) =>
    disabled &&
    `
    background: ${theme.colors.neutral.bg.regular};`}
  ${({ border }) =>
    border &&
    `
    box-shadow:  inset 0 0 0 1px ${theme.colors.neutral.border.weak};
  `}
  ${({ pressed }) =>
    pressed &&
    `
    background: ${theme.colors['secondary-1'].bg.weak};
  `}
   ${({ border, pressed }) =>
    border &&
    pressed &&
    `
    box-shadow:  inset 0 0 0 1px ${theme.colors['secondary-1'].border.weak};`}
  ${({ hasCursorPointer }) =>
    hasCursorPointer &&
    `
    cursor: pointer;
  `}
`;

const getElevationCard = (hasHover) =>
    hasHover &&
    `
  &:hover {
    box-shadow: ${theme.elevations[`elevation-2`]};
    cursor: pointer;
  }
`;

export { Card };
