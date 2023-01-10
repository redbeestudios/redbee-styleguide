import DatePickerContainer from './DatePickerContainer';
import MonthPicker from './monthpicker/Contaniner.inner';
import DayPicker from './daypicker/Container.inner';
import React from 'react';
import { DatePickerProps } from './DatePicker';

const DateRangePicker = (props: DatePickerProps) => {
  const {
    monthly,
    minDate,
    maxDate,
    filterAlternatives,
    currentFilterAlternative,
    setCurrentFilterAlternative,
    monthsShown,
  } = props;
  const pickerProps = monthsShown ? { numberOfMonths: monthsShown } : {};
  if (monthly)
    return (
      <DatePickerContainer
        {...props}
        filterAlternatives={filterAlternatives}
        setCurrentFilterAlternative={setCurrentFilterAlternative}
        dateFormat='LLL'
        numberOfMonths={monthsShown}
        range
      >
        <MonthPicker
          {...pickerProps}
          minBookingDate={minDate}
          maxBookingDate={maxDate}
          range
        />
      </DatePickerContainer>
    );
  return (
    <DatePickerContainer
      {...props}
      filterAlternatives={filterAlternatives}
      setCurrentFilterAlternative={currentFilterAlternative}
      bookingDate={true}
      numberOfMonths={monthsShown}
      range
    >
      <DayPicker
        {...pickerProps}
        minBookingDate={minDate}
        maxBookingDate={maxDate}
        range
      />
    </DatePickerContainer>
  );
};

export default DateRangePicker;
