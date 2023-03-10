import { Text, View, ScrollView } from "react-native";
import React from "react";
import { Header } from "../components/Header";
import { DAY_SIZE, HabitDay } from "../components/HabitDay";
import { generateDatesFromYearBeginning } from "../utils/generate-dates-from-year";

const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];
const datesFromYearStart = generateDatesFromYearBeginning();
const minimumSummaryDatesSizes = 18 * 5;
const amountOfDaysToFill = minimumSummaryDatesSizes - datesFromYearStart.length;

export function Home() {
  return (
    <View className="flex-1 bg-zinc-700 px-8 pt-16">
      <Header />
      <View>
        {weekDays.map((weekDay, i) => (
          <Text
            key={`${weekDay}-${i}`}
            className="text-zinc-400 text-xl font-bold text-center mx-1"
          >
            {weekDay}
          </Text>
        ))}
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <View className="flex-row flex-wrap">
          {datesFromYearStart.map((date) => (
            <HabitDay key={date.toISOString()} />
          ))}
        </View>
        {amountOfDaysToFill > 0 &&
          Array.from({ length: amountOfDaysToFill }).map((_, index) => (
            <View
              className="bg-zinc-900 rounded-lg border-2 m-1 border-zinc-800"
              style={{ width: DAY_SIZE, height: DAY_SIZE }}
            />
          ))}
      </ScrollView>
    </View>
  );
}
