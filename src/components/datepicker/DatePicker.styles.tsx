import styled, { css } from 'styled-components';
import Flex, {FlexProps} from '../flex/Flex';
import theme from '../../assets/styles/theme';

export interface DatePickerStylesProps {
    months?:number,
    numberOfMonths?:number,
    bookingDate?:boolean,
    isStartDate?:boolean,
    isEndDate?:boolean,
    range?:string
    variant?:string
}

export interface ButtonProps{
    variant?:'startOrEnd'| 'selected'|'inrange'|'disabled'|'normal',
    isStartOrEndOfRowGrid?:'startRowGrid'|'endRowGrid',

}

const DatePickerGrid = styled.div<DatePickerStylesProps>`
  min-height: 200px;
  padding-top: ${theme.spacing['spacing-4']};
  ${({ months }) =>
    months &&
    months >= 2 &&
    css`
      min-width ${344 / months}px;
      min-height: 310px;
      &:nth-child(2n) {
        margin-left: ${theme.spacing['spacing-3']};
      }
    `}
`;

const DatePickerDay = styled.div<DatePickerStylesProps>`
  display: grid;
  grid-template-columns: repeat(
    ${({ numberOfMonths }) => numberOfMonths},
    230px
  );
`;

const DayGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 32px);
  justify-content: left;
`;

const DatePickerWeek = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 32px);
  justify-content: left;
`;

const DatePickerWeekContent = styled.div`
  text-align: center;
  height: 14px;
  width: 14px;
  padding: ${theme.spacing['spacing-3']};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NavButton = styled.div`
  align-self: center;
  background: transparent;
  cursor: pointer;
  min-width: 60px;
  padding: ${theme.spacing['spacing-0']} ${theme.spacing['spacing-3']};
`;

const DatePickerBody = styled(Flex)<FlexProps>`
  position: relative;
`;

const DatePickerFooter = styled.div<DatePickerStylesProps>`
  width: 90%;
  padding-top: ${theme.spacing['spacing-3']};
  padding-bottom: ${theme.spacing['spacing-4']};
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: ${theme.spacing['spacing-4']};
  padding-right: ${theme.spacing['spacing-4']};
  ${({ bookingDate, numberOfMonths }) =>
    !!bookingDate &&
    numberOfMonths !== 1 &&
    css`
      padding-left: ${theme.spacing['spacing-11']};
      padding-right: ${theme.spacing['spacing-11']};
    `}
`;

const DatePickerButtons = styled(Flex)`
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const DatePickerButtonsRight = styled(Flex)`
  justify-content: flex-end;
  & button:last-child {
    margin-left: ${theme.spacing['spacing-3']};
  }
`;

const DatePickerWrapper = styled.div`
  display: flex;
  margin-top: ${theme.spacing['spacing-2']};
  background-color: ${theme.colors.neutral.bg.weak};
  box-shadow: ${theme.elevations['elevation-3']};
  border-radius: ${theme.borderRadius['border-radius-3']};
`;

const DatePickerCalendarBox = styled.div<DatePickerStylesProps>`
  justify-self: center;
  margin: ${theme.spacing['spacing-2']} 0;
  ${({ isStartDate, isEndDate, range }) => {
    if (isStartDate !== isEndDate && range) {
        if (isStartDate) {
            return css`
          background: linear-gradient(
            90deg,
            transparent 50%,
            ${theme.colors.primary.bg.weak} 20%
          );
        `;
        } else if (isEndDate) {
            return css`
          background: linear-gradient(
            90deg,
            ${theme.colors.primary.bg.weak} 50%,
            transparent 20%
          );
        `;
        }
    }
}}
  &.inrange:hover {
    margin: ${theme.spacing['spacing-1']} 0;
    background: linear-gradient(
      90deg,
      ${theme.colors.primary.bg.weak} 50%,
      transparent 50%
    );
    & button {
      ${() => dayVariants['startOrEnd']}
      & span {
        color: ${theme.colors.primary.text.strong};
      }
    }
  }
`;

const MonthGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 65px);
  justify-content: left;
`;

const Month = styled(DatePickerCalendarBox)``;

const Day = styled(DatePickerCalendarBox)``;

const DayContent = styled.button<ButtonProps>`
  border: 0;
  text-transform: uppercase;
  align-items: center;
  display: flex;
  width: 14px;
  height: 14px;
  padding: ${theme.spacing['spacing-3']};
  justify-content: center;
  ${(props) => dayVariants[props.variant] || dayVariants.normal}
  ${(props) => startOrEndOfRowGridVariant[props.isStartOrEndOfRowGrid]}
`;

const MonthContent = styled.button<ButtonProps>`
  border: 0;
  text-transform: uppercase;
  align-items: center;
  display: flex;
  width: 65px;
  height: 30px;
  padding: ${theme.spacing['spacing-3']};
  justify-content: center;

  ${(props) => dayVariants[props.variant] || dayVariants.normal}
  ${(props) => startOrEndOfRowGridVariant[props.isStartOrEndOfRowGrid]}
`;

const DatePickerHeader = styled.div`
  text-align: center;
  margin: ${theme.spacing['spacing-0']} ${theme.spacing['spacing-2']}
    ${theme.spacing['spacing-3']};
`;

const DatePickerPopper = styled.div`
  position: absolute;
  z-index: 999;
`;

const startOrEndOfRowGridVariant = {
    startRowGrid: css`
    border-bottom-left-radius: ${theme.borderRadius['border-radius-4']};
    border-top-left-radius: ${theme.borderRadius['border-radius-4']};
  `,
    endRowGrid: css`
    border-bottom-right-radius: ${theme.borderRadius['border-radius-4']};
    border-top-right-radius: ${theme.borderRadius['border-radius-4']};
  `,
};

const dayVariants = {
    startOrEnd: css`
    background: ${theme.colors.primary.bg.regular};
    border-radius: ${theme.borderRadius['border-radius-4']};
    cursor: pointer;
  `,
    selected: css`
    background: ${theme.colors.primary.bg.weak};
    cursor: pointer;
  `,
    inrange: css`
    background: ${theme.colors.primary.bg.weak};
    cursor: pointer;
  `,
    disabled: css`
    background: transparent;
    cursor: auto !important;
    color: ${theme.colors.neutral.text.regular};
  `,
    normal: css`
    background: none;
    cursor: pointer;
  `,
};

const DatePickerOptions = styled.div`
  h6 {
    width: 250px;
    margin-bottom: ${theme.spacing['spacing-3']};
  }
  z-index:999;
  padding-top: ${theme.spacing['spacing-4']};
  padding-left: ${theme.spacing['spacing-3']};
  & ul {
    & li {
      display: block;
      margin-top: ${theme.spacing['spacing-4']};
      margin-right: 100%
    }
    list-style: none;
  }

  & label {
      margin-bottom: ${theme.spacing['spacing-4']};
      white-space: nowrap;
    }
  }
`;

const DatePickerCalendarControl = styled(Flex)`
  position: relative;
`;
const DatePickerCalendar = styled.div`
  position: relative;
`;

export {
    DatePickerOptions,
    DatePickerPopper,
    DatePickerGrid,
    Month,
    MonthGrid,
    MonthContent,
    DatePickerDay,
    Day,
    DayGrid,
    DayContent,
    DatePickerWeek,
    DatePickerWeekContent,
    DatePickerCalendarBox,
    DatePickerHeader,
    NavButton,
    DatePickerBody,
    DatePickerButtons,
    DatePickerButtonsRight,
    DatePickerWrapper,
    DatePickerFooter,
    DatePickerCalendarControl,
    DatePickerCalendar,
};
