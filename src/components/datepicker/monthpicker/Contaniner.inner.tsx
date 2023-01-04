import {FocusedInput, START_DATE, useDatepicker, useMonth} from '@datepicker-react/hooks';
import { startOfYear } from 'date-fns';
import { es } from 'date-fns/locale';
import React, { useState } from 'react';
import P from '../../texts/p/P';
import DatePickerContextInner from '../DatePickerContext.inner';
import Month from './Month.inner';
import Icon from '../../icon/Icon';
import * as S from '../DatePicker.styles';

const months = [...Array(12).keys()].map((e, index) =>
    es.localize.month(index, { width: 'abbreviated' })
);

const isStartOrEndOfRowGrid = (index) => {
    if (index === 1) return false;
    const rest = (index + 1) % 3;
    if (index === 0 || rest === 1) return 'startRowGrid';
    if (index === 2 || rest === 0) return 'endRowGrid';
    return false;
};


type MonthlyProps ={
    onChange?:(date) =>void,
    value?,
    minBookingDate?:Date,
    maxBookingDate?:Date,
    range?:boolean,
};

const MonthlyContainer = (props:MonthlyProps) => {

    const [focusedInput, setFocusedInput] = useState<FocusedInput>(START_DATE);
    const { onChange, value,minBookingDate, maxBookingDate, range, } =props;
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
        goToNextMonths,
        goToPreviousMonths,
        ...context
    } = useDatepicker({
            ...value,
        onDatesChange,
        minBookingDate,
        maxBookingDate,
        focusedInput: focusedInput,
        numberOfMonths: 12,
        initialVisibleMonth: startOfYear(new Date()),
        changeActiveMonthOnSelect: false,
    });

    const { monthLabel } = useMonth({
        ...activeMonths[0],
        firstDayOfWeek,
    });

    const year = monthLabel.split(' ')[1];

    return (
        <DatePickerContextInner.Provider
            value={{
                focusedDate,
                range,
                ...context,
            }}
        >
            <S.NavButton onClick={() => goToPreviousMonths()}>
                <Icon
                    name='chevron_left_outline'
                    height={20}
                    width={20}
                    cursor='pointer'
                />
            </S.NavButton>
            <S.DatePickerBody>
                <S.DatePickerGrid>
                    <S.DatePickerHeader >
                        <P type='4' variant='primary' modifier='strong' align='center'>
                            {year}
                        </P>
                    </S.DatePickerHeader>
                    <S.MonthGrid>
                        {activeMonths.map((month, i) => (
                            <Month
                                key={`datepicker-monthly-${months[i]}`}
                                label={months[i]}
                                date={new Date(Number(year), i, 1)}
                                isStartOrEndOfRowGrid={isStartOrEndOfRowGrid(i)}
                            />
                        ))}
                    </S.MonthGrid>
                </S.DatePickerGrid>
            </S.DatePickerBody>
            <S.NavButton onClick={() => goToNextMonths()} >
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

export default MonthlyContainer;
