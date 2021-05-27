import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {

  const [courseGoals, setCourseGoals] = useState([])

 

  const addGoalHandler = (goalTitle) => {
    setCourseGoals(currentGoals => [...courseGoals, { key: Math.random().toString(), goal: goalTitle}])
    // setEnteredGoal("")
  }

  const deleteGoal = (key) => {
      setCourseGoals(courseGoals.filter(function(goal) {
        return goal.key != key}))
  }
  return (
    <View style={styles.screen}>
      <GoalInput addGoalHandler={addGoalHandler}/>
      <FlatList data={courseGoals} renderItem={itemData => (
        <GoalItem onDelete={deleteGoal.bind(this, itemData.item.key)} goal={itemData.item.goal}/>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  
});
