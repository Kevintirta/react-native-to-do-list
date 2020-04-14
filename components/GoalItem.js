import React from 'react'
import {StyleSheet, View, Text} from 'react-native'

const GoalItem = (props) => {
    return (
        <View style={styles.listItem}>
            <Text >{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        borderColor: "black",
        backgroundColor: "#ccc",
        borderWidth: 1,
        marginVertical: 10
      }
})

export default GoalItem;