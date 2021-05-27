import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

const GoalInput = (props) => {

const [enteredGoal, setEnteredGoal] = useState("");

const change = (enteredText) => {
    setEnteredGoal(enteredText)
  }
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Course Goal"
        style={styles.input}
        onChangeText={change}
        value={enteredGoal}
      />
      <Button title="Add" onPress={props.addGoalHandler.bind(this, enteredGoal)} />
    </View>
  );
};

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      },
      input: {
        borderColor: "black",
        borderWidth: 1,
        padding: 10,
        width: "80%",
      },
})

export default GoalInput