import React, { useState } from "react";
import DatePicker from "react-native-modern-datepicker";

const Calendar = ({ showDatePicker, setShowDatePicker }) => {
  const [selectedDate, setSelectedDate] = useState("");
  //   console.log(selectedDate);

  return (
    <DatePicker
      onSelectedChange={(date) => {
        setSelectedDate(date);
        console.log(date);
        setShowDatePicker(!showDatePicker);
      }}
      options={{ textHeaderFontSize: 15 }}
      mode="calendar"
      style={{ borderRadius: 10 }}
    />
  );
};

export default Calendar;
