import React from "react";
import { HabitDay } from "./HabitDay";
import { generateDatesFromYearBeginning } from "../utils/generate-dates-from-year";

const summaryDates = generateDatesFromYearBeginning();

console.log("summaryDates ", summaryDates);

export function SummaryTable() {
  const daysOfWeek = ["D", "S", "T", "Q", "Q", "S", "S"];
  const threeSummdaryDates = [
    ...summaryDates,
    ...summaryDates,
    ...summaryDates,
  ];
  const daysLeftToEndOfYear = 365 - summaryDates.length;
  return (
    <div className="w-full flex ">
      <div className="grid grid-rows-7 grid-flow-row gap-3">
        {daysOfWeek.map((day, index) => (
          <div
            key={index}
            className="text-zinc-400 text-xl h-10 w-10 flex items-center justify-center font-bold"
          >
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-rows-7 grid-flow-col gap-3">
        {summaryDates.map((day) => (
          <HabitDay />
        ))}
        {Array.from({ length: daysLeftToEndOfYear }).map((_, index) => (
          <view key={index}>
            <HabitDay disabled={true} />
          </view>
        ))}
      </div>
    </div>
  );
}
