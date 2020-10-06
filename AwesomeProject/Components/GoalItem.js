import React from 'react';

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

const GoalItem = props => {
    return (
        <TouchableOpacity onLongPress = {props.onDelete.bind(this, props.id)}>
            <View style = {styles.listItem}>
                <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    listItem:{
        marginTop: 10,
        padding: 5,
        borderColor: 'gray',
        borderWidth: 2,
        backgroundColor: 'skyblue',
      },
})

export default GoalItem;