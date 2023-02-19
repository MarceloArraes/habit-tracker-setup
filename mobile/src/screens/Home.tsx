import { View } from "react-native";
import React from "react";
import { Header } from "../components/Header";
import { HabitDay } from "../components/HabitDay";

export function Home() {
  return (
    <View className="flex-1 bg-zinc-700 px-8 pt-16">
      <Header />
      <HabitDay />
    </View>
  );
}
