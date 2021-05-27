import React, { useState } from "react";
import { Button, Modal, StyleSheet, TextInput, View } from "react-native";

const GoalInput = (props) => {

const [enteredGoal, setEnteredGoal] = useState("");

const change = (enteredText) => {
    setEnteredGoal(enteredText)
  }

const addGoalHandler = () => {
    props.addGoalHandler(enteredGoal)
    setEnteredGoal('')
}
  return (
      <Modal visible={props.showGoalModal} animationType='slide'>
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Course Goal"
        style={styles.input}
        onChangeText={change}
        value={enteredGoal}
      />
      <View style={styles.buttons}>
      <Button title="Add" onPress={addGoalHandler} />
      <Button title='Cancel' color='red' onPress={props.closeGoalModal}/>
      </View>
    </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
      },
      input: {
        borderColor: "black",
        borderWidth: 1,
        padding: 10,
        width: "80%",
        margin: 10,
      },
      buttons: {
          flexDirection: 'row',
          justifyContent: 'flex-end',
          width: '70%'
      }
})

export default GoalInput