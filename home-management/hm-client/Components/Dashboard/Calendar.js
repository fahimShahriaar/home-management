import React, { useState } from "react";
import DatePicker from "react-native-modern-datepicker";

const Calendar = ({
  showCalendar,
  setShowCalendar,
  selectedDate,
  setSelectedDate,
}) => {
  // const [selectedDate, setSelectedDate] = useState("");
  // console.log(selectedDate);
  return (
    <DatePicker
      onSelectedChange={(date) => {
        setSelectedDate(date);
        console.log(date);
        setShowCalendar(!showCalendar);
      }}
      options={{ textHeaderFontSize: 15 }}
      mode="calendar"
      style={{ borderRadius: 10 }}
    />
  );
};

export default Calendar;
