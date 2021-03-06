import React, { useState } from 'react';
import { Button, View, TextInput, StyleSheet, Modal } from 'react-native';

const GoalInput = (props) => {

    const [enteredGoal, setEnteredGoal] = useState('')

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText)
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Course Goal"
                    style={styles.input}
                    onChangeText={goalInputHandler}
                    value={enteredGoal}
                />
                <Button
                    title="ADD"
                    onPress={() => props.addGoalHandler(enteredGoal)}
                />
            </View>
     </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    input: {
        width: "80%",
        borderWidth: 1,
        borderColor: "black",
        padding: 10,
        marginBottom:10
    }
})



export default GoalInput