import React from 'react';
import DatePickerContainer from './DatePickerContainer';
import DayPicker from './daypicker/Container.inner';
import MonthPicker from './monthpicker/Contaniner.inner';

export type FilterAlternativeProps = {
  label?: string;
  value?: string;
  id?: string;
};

export type DatePickerProps = {
  monthly?: boolean;
  minDate?: Date;
  maxDate?: Date;
  filterAlternatives?: Array<FilterAlternativeProps>;
  currentFilterAlternative?: FilterAlternativeProps;
  setCurrentFilterAlternative?;
  monthsShown?: number;
};

const DatePicker = (props: DatePickerProps) => {
  const {
    monthly,
    minDate,
    maxDate,
    filterAlternatives,
    setCurrentFilterAlternative,
  } = props;
  if (monthly)
    return (
      <DatePickerContainer
        {...props}
        filterAlternatives={filterAlternatives}
        setCurrentFilterAlternative={setCurrentFilterAlternative}
        dateFormat='LLL'
      >
        <MonthPicker minBookingDate={minDate} maxBookingDate={maxDate} />
      </DatePickerContainer>
    );
  return (
    <DatePickerContainer
      {...props}
      filterAlternatives={filterAlternatives}
      setCurrentFilterAlternative={setCurrentFilterAlternative}
    >
      <DayPicker
        minBookingDate={minDate}
        maxBookingDate={maxDate}
        numberOfMonths={1}
      />
    </DatePickerContainer>
  );
};
export default DatePicker;
