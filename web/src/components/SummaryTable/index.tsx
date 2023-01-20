import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { api } from '../../lib/axios';
import { generateDatesFromYearBeginning } from '../../utils/generate-dates-from-year-beginning';
import { HabitDay } from '../HabitDay';

const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

const summaryDates = generateDatesFromYearBeginning();

const minimumSummaryDatesSize = 18 * 7; // 18 weeks
const amountOfDaysToFill = minimumSummaryDatesSize - summaryDates.length;

type Summary = {
  id: string;
  date: string;
  amount: number;
  completed: number;
}[];

export function SummaryTable() {
  const [summary, setSummary] = useState<Summary>([]);

  useEffect(() => {
    api.get('summary').then((response) => {
      setSummary(response.data);
    });
  }, []);

  return (
    <div className="flex w-full">
      <div className="grid grid-flow-row gap-3 grid-rows-7">
        {weekDays.map((weekDay, i) => {
          return (
            <div
              key={`${weekDay}-${i}`}
              className="flex items-center justify-center w-10 h-10 text-xl font-bold text-zinc-400"
            >
              {weekDay}
            </div>
          );
        })}
      </div>

      <div className="grid grid-flow-col gap-3 grid-rows-7">
        {summaryDates.map((date) => {
          const dayInSummary = summary.find((day) => {
            return dayjs(date).isSame(day.date, 'day');
          });

          return (
            <HabitDay
              key={date.toString()}
              date={date}
              amount={dayInSummary?.amount}
              completed={dayInSummary?.completed}
            />
          );
        })}

        {amountOfDaysToFill > 0 &&
          Array.from({ length: amountOfDaysToFill }).map((_, i) => {
            return (
              <div
                key={i}
                className="w-10 h-10 border-2 rounded-lg cursor-not-allowed bg-zinc-900 border-zinc-800 opacity-40"
              />
            );
          })}
      </div>
    </div>
  );
}
