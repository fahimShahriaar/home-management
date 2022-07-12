import { Button, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Calendar from "./Calendar";

export default function AddMeal() {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  console.log("from addmeal", selectedDate);
  return (
    <View style={{ padding: 5 }}>
      <Text>AddMeal</Text>
      <View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            // justifyContent: "space-around",
          }}
        >
          <Text
            style={styles.selectDateBtn}
            onPress={() => setShowCalendar(!showCalendar)}
          >
            Select Date
          </Text>
          <Text>{selectedDate}</Text>
        </View>
        {showCalendar && (
          <Calendar
            showCalendar={showCalendar}
            setShowCalendar={setShowCalendar}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
        )}
      </View>
      <View style={styles.mealCountBox}>
        <View>
          <Text>-</Text>
        </View>
        <View>
          <Text>Number</Text>
        </View>
        <View>
          <Text>+</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  selectDateBtn: {
    backgroundColor: "#2196F3",
    color: "white",
    textAlign: "center",
    padding: 5,
    width: "30%",
    borderRadius: 5,
    marginRight: 25,
  },
  mealCountBox: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
