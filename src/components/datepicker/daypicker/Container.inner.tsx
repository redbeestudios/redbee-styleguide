import {FocusedInput, START_DATE, useDatepicker} from '@datepicker-react/hooks';
import React, { useState } from 'react';
import DatePickerContextInner from '../DatePickerContext.inner';
import MonthContainer from './MonthContainer.inner';
import Icon from '../../icon/Icon';
import * as S from '../DatePicker.styles';


const defaultProps ={
    range:false
};

type DatePickerContainerProps = {
    onChange?:(value)=>void,
    value?,
    minBookingDate:Date,
    maxBookingDate:Date,
    range?:boolean,
    numberOfMonths?:number,
}

const DatePickerContainer = (props:DatePickerContainerProps) => {

    const {
        onChange,
        value,
        minBookingDate,
        maxBookingDate,
        range,
        numberOfMonths,
    } = props;
    const [focusedInput, setFocusedInput] = useState<FocusedInput>(START_DATE);

    const onDatesChange = ({ focusedInput, ...data }) => {
        onChange && onChange(data);
        if (range) {
            setFocusedInput(focusedInput || START_DATE);
        }
    };

    const {
        firstDayOfWeek,
        activeMonths,
        focusedDate,
        goToPreviousMonths,
        goToNextMonths,
        ...context
    } = useDatepicker({
        ...value,
        endDate:null,
        minBookingDate,
        maxBookingDate,
        onDatesChange,
        focusedInput: focusedInput,
        numberOfMonths,
    });

    return (
        <DatePickerContextInner.Provider
            value={{
                focusedDate,
                range,
                ...context,
            }}
        >
            <S.NavButton onClick={goToPreviousMonths}>
                <Icon
                    name='chevron_left_outline'
                    height={20}
                    width={20}
                    cursor='pointer'
                />
            </S.NavButton>

            <S.DatePickerBody >
                <S.DatePickerDay numberOfMonths={numberOfMonths}>
                    {activeMonths.map((month, index) => (
                        <MonthContainer
                            key={`${month.year}-${month.month}-${index}`}
                            year={month.year}
                            month={month.month}
                            firstDayOfWeek={firstDayOfWeek}
                        />
                    ))}
                </S.DatePickerDay>
            </S.DatePickerBody>
            <S.NavButton onClick={goToNextMonths} >
                <Icon
                    name='chevron_right_outline'
                    height={20}
                    width={20}
                    cursor='pointer'
                />
            </S.NavButton>
        </DatePickerContextInner.Provider>
    );
};

DatePickerContainer.defailtProps = defaultProps;

export default DatePickerContainer;
