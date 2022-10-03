import React from "react";

const WeekdayBlobs = ({ dayName, date }: { dayName: string; date: string }) => (
  <div className="m-2 w-full grid justify-center">
    <p className="text-center">{dayName}</p>
    <div className="bg-black backdrop-blur-2xl w-14 h-14 rounded-full mt-2 grid items-center justify-items-center">
      <p>{date}</p>
    </div>
  </div>
);

const days = [
  { dayName: "Mon", date: "26th" },
  { dayName: "Tue", date: "27th" },
  { dayName: "Wed", date: "28th" },
  { dayName: "Thu", date: "29th" },
  { dayName: "Fri", date: "30th" },
  { dayName: "Sat", date: "31th" },
  { dayName: "Sun", date: "32th" },
];

export default function CalendarPage() {
  return (
    <div className="w-full">
      <h2 className="text-center">September 26th-32nd</h2>
      <div className="grid grid-cols-7 m-5 ">
        {days.map(({ dayName, date }) => (
          <WeekdayBlobs dayName={dayName} date={date} key={date} />
        ))}
      </div>
    </div>
  );
}
