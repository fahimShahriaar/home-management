import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useContext, useRef, useState } from "react";
import Calendar from "./Calendar";
import { IP } from "../../global";
import { AppContext } from "../../Store/AppContext";
console.log(IP);
const today = new Date();

export default function AddMeal({ navigation: { goBack } }) {
  const { userInfoState } = useContext(AppContext);
  const [userInfo, setUserInfo] = userInfoState;
  console.log("userInfo", userInfo);

  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [mealCount, setMealCount] = useState(0);
  const [bazarCost, setBazarCost] = useState(0);

  const handleSubmit = () => {
    console.log("===========================================");
    console.log("submit");
    console.log(selectedDate.replace(/\//g, "-"));
    console.log(mealCount);
    console.log(bazarCost);
    console.log("===========================================");
    fetch(`http://${IP}:8080/meal/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        mobile: userInfo.user.mobile,
        mealCount,
        bazarCost,
        date: selectedDate
          ? selectedDate.replace(/\//g, "-")
          : today.getFullYear() +
            "-" +
            (today.getMonth() + 1) +
            "-" +
            today.getDate(),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          alert("Meal Added Successfully!");
          goBack();
        } else if (!data.success) {
          alert(`${data.result}!`);
          goBack();
        }
      });
  };

  return (
    <View style={{ padding: 5, marginTop: 20 }}>
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
          <View style={{ margin: 10 }}>
            <Calendar
              showCalendar={showCalendar}
              setShowCalendar={setShowCalendar}
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
            />
          </View>
        )}
      </View>
      <View style={styles.mealCountContainer}>
        <View style={styles.mealCountBox}>
          <View style={{ flex: 1 }}>
            <Button
              title="+"
              onPress={() => mealCount >= 0 && setMealCount(mealCount + 1)}
            />
          </View>
          <View style={{ flex: 4 }}>
            <TextInput
              defaultValue={mealCount.toString()}
              // placeholder="Meal"
              keyboardType="numeric"
              maxLength={1}
              style={styles.input}
              // onChange={()=> }
            />
          </View>
          <View style={{ flex: 1 }}>
            <Button
              title="-"
              onPress={() => mealCount > 0 && setMealCount(mealCount - 1)}
            />
          </View>
        </View>
        <View style={styles.bazarCostBox}>
          <View>
            <TextInput
              placeholder="Bazar Cost"
              keyboardType="numeric"
              maxLength={4}
              style={styles.input}
              onChange={(e) => setBazarCost(e.nativeEvent.text)}
            />
          </View>
        </View>
      </View>
      <View style={{ alignItems: "center" }}>
        <View style={{ width: "50%" }}>
          <Button title="Submit" onPress={handleSubmit} />
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
  mealCountContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    marginVertical: 30,
  },
  mealCountBox: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
  bazarCostBox: {
    flex: 1,
    margin: 5,
  },
  input: {
    textAlign: "center",
    height: 35,
    padding: 5,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    marginHorizontal: 5,
  },
});
