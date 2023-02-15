// interface HabitDayProps {
//   completed?: number;
// }

export const HabitDay = ({ disabled = false }) => {
  let style = "h-10 w-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg";
  if (disabled) style = style + " cursor-not-allowed opacity-40";
  return <div className={style}></div>;
};
