import { useDay } from "@datepicker-react/hooks";
import React, { useContext, useRef } from "react";
import Span from "../../texts/span/Span";
import DatePickerContext from "../DatePickerContext.inner";
import { getColor } from "../DatePickerUtils.inner";
import * as S from "../DatePicker.styles";

type MonthProps = {
  label: string;
  date: Date;
  isStartOrEndOfRowGrid;
};

function Month(props: MonthProps) {
  const { label, date, isStartOrEndOfRowGrid } = props;
  const dayRef = useRef(null);

  const { range, ...context } = useContext(DatePickerContext);
  const {
    isSelected,
    isSelectedStartOrEnd,
    isWithinHoverRange,
    disabledDate,
    onClick,
    onKeyDown,
    onMouseEnter,
    tabIndex,
  } = useDay({
    date,
    ...context,
    dayRef,
  });

  if (!label) {
    return <div />;
  }

  const { buttonVariant, ...spanProps } = getColor(
    isSelected,
    isSelectedStartOrEnd,
    isWithinHoverRange,
    disabledDate,
    range
  );

  //const isStartDate = context.isStartDate(date);
  //const isEndDate = context.isEndDate(date);
  const isStartDate = false;
  const isEndDate = false;
  return (
    <S.Month
      className={buttonVariant}
      isStartDate={isStartDate}
      isEndDate={isEndDate}
    >
      <S.MonthContent
        onClick={onClick}
        onKeyDown={onKeyDown}
        onMouseEnter={onMouseEnter}
        tabIndex={tabIndex}
        type="button"
        ref={dayRef}
        variant={buttonVariant}
        isStartOrEndOfRowGrid={isStartOrEndOfRowGrid}
      >
        <Span {...spanProps}>{label}</Span>
      </S.MonthContent>
    </S.Month>
  );
}

export default Month;
