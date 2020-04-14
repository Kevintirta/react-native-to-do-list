import React, { useState } from 'react';
import { Button, View, TextInput, StyleSheet } from 'react-native';

const GoalInput = (props) => {

    const [enteredGoal, setEnteredGoal] = useState('')

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText)
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput
                placeholder="Course Goal"
                style={styles.input}
                onChangeText={goalInputHandler}
                value={enteredGoal}
            />
            <Button
                title="ADD"
                onPress={()=>props.addGoalHandler(enteredGoal)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    input: {
        width: "80%",
        borderWidth: 1,
        borderColor: "black",
        padding: 10
    }
})



export default GoalInput