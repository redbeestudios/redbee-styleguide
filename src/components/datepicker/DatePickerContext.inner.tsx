import React from 'react';

export const datepickerContextDefaultValue = {
  focusedDate: null,
  onDateFocus: (date: Date) => {},
  onDateHover: (date: Date) => {},
  onDateSelect: (date: Date) => {},
  isDateSelected: (date: Date) => false,
  isDateFocused: (date: Date) => false,
  isFirstOrLastSelectedDate: (date: Date) => false,
  isDateHovered: (date: Date) => false,
  isDateBlocked: (date: Date) => false,
  range: false,
};

export default React.createContext(datepickerContextDefaultValue);
