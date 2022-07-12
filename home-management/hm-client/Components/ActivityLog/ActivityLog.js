import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import BottomNavigation from "../BottomNavigation/BottomNavigation";
import ActivityLogBody from "./ActivityLogBody";
const global = require("../../global");
// console.log(global);

export default function ActivityLog({ navigation }) {
  // Get all activities
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    fetch(`http://${global.IP}:8080/activityLog`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.success) {
          setActivities(data.result);
        }
      });
  }, []);

  // console.log(activities);
  return (
    <View style={{ flex: 1 }}>
      <Text>Activity Log</Text>
      <View style={styles.activityLogContainer}>
        <ActivityLogBody activities={activities} />
      </View>
      <View style={{ height: "10%", borderWidth: 1, marginBottom: 2 }}>
        <BottomNavigation navigation={navigation} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  activityLogContainer: {
    borderWidth: 1,
    margin: 5,
    flex: 1,
    // backgroundColor: "white",
  },
});
