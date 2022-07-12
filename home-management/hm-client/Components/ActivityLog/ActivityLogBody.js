import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function ActivityLogBody({ activities }) {
  //   console.log(JSON.parse(activities[0]?.description));
  return (
    <View>
      <Text>ActivityLogBody</Text>
      {activities?.map((activity, i) => (
        <View key={i} style={styles.activityBox}>
          <Text style={styles.activityBoxText}>{activity?.name}</Text>
          <Text style={styles.activityBoxText}>{activity?.activity}</Text>
          <Text style={styles.activityBoxText}>{activity?.date}</Text>
          {/* <Text style={styles.activityBoxText}>{activity?.description}</Text> */}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  activityBox: {
    borderRadius: 5,
    backgroundColor: "#9bb1ff",
    margin: 5,
    padding: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  activityBoxText: {
    flex: 1,
    color: "#333",
  },
});
