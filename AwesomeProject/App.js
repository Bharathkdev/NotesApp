/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
  FlatList
} from 'react-native';


import GoalItem from './Components/GoalItem';
import GoalInput from './Components/GoalInput';

const App: () => React$Node = () => {

  const[enteredGoal,addedGoal] = useState('');
  const[goals, newGoals] = useState([]);
  const[isAddMode, setIsAddMode] = useState(false);

  const getInputHandler = (enteredInput) => {
          addedGoal('');
          addedGoal(enteredInput);
  };

  const goalsHandler = () => {
        if(Boolean(enteredGoal)==true){
          newGoals((carrierGoals) => 
          [...carrierGoals, {key: Math.random().toString(), value: enteredGoal}]);

          setIsAddMode(false);

          addedGoal('');
        }

  };

  const cancelHandler = () => {
        setIsAddMode(false);
        addedGoal('');
  }

  const removeHandler = (goalID) => {
        newGoals((carrierGoals) => {
          return carrierGoals.filter((goals) => goals.key !== goalID);
        });
 };

  return (
          <View style = {styles.container}>
            <Button title = "Add your new goal!!" onPress = {() => setIsAddMode(true)}  /> 
            <GoalInput visibility = {isAddMode} onInput = {getInputHandler} onAddGoal = {goalsHandler} onCancel = {cancelHandler} />
            <FlatList 
                keyExtractor = {(item, index) => item.key}
                data = {goals} 
                renderItem = {(itemData) => <GoalItem 
                  id = {itemData.item.key} 
                  onDelete = {removeHandler} 
                  title = {itemData.item.value} />}
            />
          
          </View>
    
        );
};

const styles = StyleSheet.create({

  container: {
    padding: 5
  },
  
});

export default App;
