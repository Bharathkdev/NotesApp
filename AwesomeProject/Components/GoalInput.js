import React from 'react';

import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Modal
} from 'react-native';

const GoalInput = props => {

        return (
            <Modal visible = {props.visibility} animationType = "fade" >
                <View style = {styles.inputContainer}>
                    <TextInput 
                        placeholder = "Write your goal here!!" 
                        style = {styles.textInput} 
                        onChangeText = {props.onInput} 
                    />
                    <View style = {styles.buttonContainer}>
                        <View style = {styles.button}>
                            <Button 
                                title = "Add Goal" 
                                onPress = {props.onAddGoal} 
                           />
                        </View>
                        <View style = {styles.button}>
                            <Button 
                                title = "Cancel"
                                onPress = {props.onCancel}
                                color = 'red'
                            />
                        </View>
                    </View>
                </View>
            </Modal>
        );
};

const styles = StyleSheet.create({

  inputContainer: {
    flex: 1,
  },

  buttonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 350,
    padding: 7,
    marginLeft: 30
  },

  button:{
    width: 150
  },

  textInput: {
    marginLeft: 30,
    marginTop: 300,
    padding: 7,
    width: 350,
    borderColor: 'gray',
    borderWidth: 2
  },
})

export default GoalInput;