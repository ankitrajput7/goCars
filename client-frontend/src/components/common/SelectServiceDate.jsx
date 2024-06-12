import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import multiMonthPlugin from "@fullcalendar/multimonth";

const SelectServiceDate = ({ handleServiceDate }) => {
  const handleDateClick = (arg) => {
    handleServiceDate(arg.dateStr);
  };

  return (
    <>
      <div
        className="w-80  font-medium text-xs
        absolute bottom-[0px] left-[-50px] rounded-md bg-white"
      >
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin, multiMonthPlugin]}
          initialView="dayGridMonth"
          dateClick={handleDateClick}
          contentHeight={320}
        />
      </div>
    </>
  );
};

export default SelectServiceDate;
