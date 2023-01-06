import { useMonth } from "@datepicker-react/hooks";
import React from "react";
import P from "../../texts/p/P";
import * as S from "../DatePicker.styles";

import Day from "./Day.inner";

type MonthProps = {
  year: number;
  month: number;
  firstDayOfWeek: 0 | 1 | 2 | 3 | 4 | 5 | 6 | undefined;
};

const dayOfWeek = {
  Mo: "L",
  Tu: "M",
  We: "M",
  Th: "J",
  Fr: "V",
  Sa: "S",
  Su: "D",
};

const monthName = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

const isStartOrEndOfRowGrid = (index) => {
  const rest = (index + 1) % 7;
  if (index === 0 || rest === 1) return "startRowGrid";
  if (rest === 0) return "endRowGrid";
  return false;
};

function Month(props: MonthProps) {
  const { year, month, firstDayOfWeek } = props;
  const { days, weekdayLabels, monthLabel } = useMonth({
    year,
    month,
    firstDayOfWeek,
  });

  return (
    <S.DatePickerGrid months={2}>
      <S.DatePickerHeader>
        <P type="4" variant="primary" modifier="strong" align="center">
          {`${monthName[month]} ${year}`}
        </P>
      </S.DatePickerHeader>
      <S.DatePickerWeek>
        {weekdayLabels.map((dayLabel) => (
          <S.DatePickerWeekContent key={dayLabel}>
            <P type="4" variant="neutral" align="center">
              {dayOfWeek[dayLabel]}
            </P>
          </S.DatePickerWeekContent>
        ))}
      </S.DatePickerWeek>
      <S.DayGrid>
        {days.map((day, index) => {
          if (typeof day === "object") {
            return (
              <Day
                date={day.date}
                key={day.date.toString()}
                label={day.dayLabel}
                isStartOrEndOfRowGrid={isStartOrEndOfRowGrid(index)}
              />
            );
          }

          return <div key={index} />;
        })}
      </S.DayGrid>
    </S.DatePickerGrid>
  );
}

export default Month;
