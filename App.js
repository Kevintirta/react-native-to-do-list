import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Button,
  FlatList
} from 'react-native';
import GoalItem from "./components/GoalItem"
import GoalInput from "./components/GoalInput"

export default function App() {

  const [courseGoals, setCourseGoals] = useState([])
  const [isAddMode, setAddMode] = useState(false)

  const addGoalHandler = (enteredGoal) => {
    setCourseGoals(courseGoals => [...courseGoals, { id: Math.random().toString(), value: enteredGoal }])
  }

  const removeGoalHandler = goalId =>{
    setCourseGoals(currentGoals=>{
      return currentGoals.filter((goal)=> goal.id !== goalId)
    })
  }

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" 
      onPress=  {()=>setAddMode(true)}   
      />
      <GoalInput 
      addGoalHandler={addGoalHandler} 
      visible={isAddMode}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData =>
          <GoalItem
            id={itemData.item.id}
            title={itemData.item.value}
            onDelete={removeGoalHandler}
          />} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});
