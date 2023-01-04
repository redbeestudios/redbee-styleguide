import { format } from 'date-fns';
import React, { useEffect, useRef, useState } from 'react';
import Button from '../button/Button';
import Link from '../link/Link';

import { RangeInput } from '../input/Input';
import OutsideAlerter from '../outsidealerter/OutsideAlerter';

import es from 'date-fns/locale/es';
import SelectableChips from '../selectablechips/SelectableChips';
import H from '../texts/h/H';
import * as S from './DatePicker.styles';
import {FilterAlternativeProps} from "./DatePicker";

const RESET_VALUE = [null, null];

const getInitialValue = (range, value) =>
    value ? (range ? value : [value]) : [];

const defaultProps ={
    dateFormat: 'dd/MM/yyyy',
    outputFormat: 'dd-MM-yyyy',

};

type DatePickerProps ={
    onChange?:(date:Date) =>void,
    dateFormat?:string,
    outputFormat?:string ,
    range?:boolean,
    filterAlternatives?:Array<FilterAlternativeProps>,
    setCurrentFilterAlternative?,
    currentFilterAlternative?:FilterAlternativeProps,
    bookingDate?:boolean,
    disabled?:boolean,
    numberOfMonths?:number,
    value?,
    label?:string,
    children?:any
}

const DatePicker = (props:DatePickerProps) => {

    const {
        onChange,
            dateFormat,
            outputFormat,
            range,
            filterAlternatives,
            setCurrentFilterAlternative,
            currentFilterAlternative,
            bookingDate,
            disabled,
            numberOfMonths,
    } = props;
    const initialValue = getInitialValue(range, props.value);
    const [value, setValue] = useState(initialValue);
    const lastValueRef = useRef(initialValue);
    const inputEl = useRef(null);

    const setLastValue = (lastValue) => {
        lastValueRef.current = lastValue;
    };

    useEffect(() => {
        if (value !== props.value) {
            setValue(props.value || []);
        }
    }, [props.value]);

    const [startDate, endDate] = value;

    const [open, setOpen] = useState(false);

    const outputFormatDate = (date) => (date ? format(date, outputFormat) : date);

    const handleClose = () => setOpen(false);

    const handleApply = () => {
        handleClose();
        if (range) {
            onChange && onChange(value.map(outputFormatDate));
        } else {
            onChange && onChange(value.map(outputFormatDate)[0]);
        }

        setLastValue(value);
    };

    const handleCancel = () => {
        setValue(lastValueRef.current);
        handleClose();
    };
    const handleOnChange = ({ startDate, endDate }) =>
        setValue([startDate, endDate]);

    const handleReset = () => {
        onChange && onChange(null);
        setValue(RESET_VALUE);
        setLastValue(RESET_VALUE);
        handleClose();
    };

    const startFormatted = startDate
        ? `${format(startDate, dateFormat, { locale: es })}${range ? ' - ' : ''}`
        : '';
    const endFormatted = endDate
        ? format(endDate, dateFormat, { locale: es })
        : '';

    const handleSelected = (filterAlternatives) =>
        filterAlternatives.map((item) =>
            item.id === currentFilterAlternative
                ? { ...item, active: true }
                : { ...item, active: false }
        );

    const filtersAlternativesRender = () => (
        <S.DatePickerOptions data-testid='datepicker-filter-alternatives'>
            <H
                type='6'
                align='left'
                variant='neutral'
            >
                Seleccioná tipo de fecha
            </H>

            <SelectableChips
                options={handleSelected(filterAlternatives)}
                direction='column'
                onChange={(list) => {
                    setValue(RESET_VALUE);
                    setCurrentFilterAlternative(list.filter((item) => item.active)[0].id);
                }}
            />
        </S.DatePickerOptions>
    );
    return (
        <>
            <OutsideAlerter
                handleOutSideClick={handleCancel}
                exclude={['#daterange-picker']}
                active={open}
            >
                <RangeInput
                    from={capitalize(startFormatted)}
                    to={capitalize(endFormatted)}
                    placeHolder={'Desde - Hasta'}
                    label={props.label}
                    onClick={() => setOpen(true)}
                    inputRef={inputEl}
                    icons={{
                        iconRight: 'calendar_outline',
                    }}
                    disabled={disabled}
                />
                {open && inputEl.current && (
                    <DatePickerContainerPortal target={inputEl}>
                        <S.DatePickerWrapper>
                            {filterAlternatives && filtersAlternativesRender()}
                            <S.DatePickerCalendar>
                                <S.DatePickerCalendarControl>
                                    {React.cloneElement(React.Children.only(props.children), {
                                        onChange: handleOnChange,
                                        value: { startDate, endDate },
                                    })}
                                </S.DatePickerCalendarControl>

                                <S.DatePickerFooter
                                    bookingDate={bookingDate}
                                    numberOfMonths={numberOfMonths}
                                >
                                    <S.DatePickerButtons>
                                        <Link variant='primary' size='sm' onClick={handleReset}>
                                            Limpiar
                                        </Link>
                                        <S.DatePickerButtonsRight>
                                            <Button
                                                variant='secondary'
                                                size='sm'
                                                onClick={handleCancel}
                                            >
                                                Cancelar
                                            </Button>
                                            <Button variant='primary' size='sm' onClick={handleApply}>
                                                Aplicar
                                            </Button>
                                        </S.DatePickerButtonsRight>
                                    </S.DatePickerButtons>
                                </S.DatePickerFooter>
                            </S.DatePickerCalendar>
                        </S.DatePickerWrapper>
                    </DatePickerContainerPortal>
                )}
            </OutsideAlerter>
        </>
    );
};

const DatePickerContainerPortal = ({ children, target }) => {
    const targetContainer = getScrollableParent(target.current);

    const getTargetProps = () =>
        target.current.getBoundingClientRect().toJSON &&
        target.current.getBoundingClientRect().toJSON();

    const [targetProps, setTargetProps] = useState(getTargetProps());

    const handleScroll = () => setTargetProps(getTargetProps());

    useEffect(() => {
        targetContainer.addEventListener('scroll', handleScroll);

        return () => {
            targetContainer.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return <S.DatePickerPopper {...targetProps}>{children}</S.DatePickerPopper>;
};

const isScrollable = function (ele) {
    const hasScrollableContent = ele.scrollHeight > ele.clientHeight;

    const overflowYStyle = window.getComputedStyle(ele).overflowY;
    const isOverflowHidden = overflowYStyle.indexOf('hidden') !== -1;

    return hasScrollableContent && !isOverflowHidden;
};

const getScrollableParent = function (ele) {
    return !ele || ele === document.body
        ? document.body
        : isScrollable(ele)
            ? ele
            : getScrollableParent(ele.parentNode);
};

const capitalize = (str) => {
    const lower = str.toLowerCase();
    return str.charAt(0).toUpperCase() + lower.slice(1);
};

DatePicker.defaultProps = defaultProps;

export default DatePicker;
