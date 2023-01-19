interface HabitProps {
  completed?: number;
}

export const Habit = ({ completed }: HabitProps) => {
  return (
    <p className="bg-zinc-500 w-10 text-white rounded-lg ">Habit {completed}</p>
  );
};
