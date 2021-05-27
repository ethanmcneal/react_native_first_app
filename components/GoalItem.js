import { StyleSheet, Text, Touchable, TouchableOpacity, View } from "react-native";
import React from "react";

const GoalItem = (props) => {
  return (
    <TouchableOpacity onPress={props.onDelete}>
      <View style={styles.listItem}>
        <Text>{props.goal}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 8,
    backgroundColor: "#888",
    margin: 5,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 8,
  },
});

export default GoalItem;
