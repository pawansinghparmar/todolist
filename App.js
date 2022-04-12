import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  View,
  Button,
  FlatList,
  SafeAreaView
} from 'react-native';
import { useState } from 'react';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [goals, setGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }
  function endAddGoalHandler() {
    setModalIsVisible(false);
  }
  function addGoalHandler(enteredGoalText) {
    console.log(enteredGoalText);
    setGoals((currentGoals) => [...currentGoals, {
      text: enteredGoalText,
      key: Math.random().toString()
    }]);
    endAddGoalHandler();
  };

  function deleteGoalHandler(key) {
    console.log('Delete');
    setGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.key !== key)
    })
  }
  return (
    <>
      <StatusBar style="light" />
      <SafeAreaView style={{ flex: 1, backgroundColor: '#F2A154', }}>
        <View style={styles.container}>
          <View style={styles.inputContainer}>
            <Button title="Add New Goal" color="#314E52" onPress={startAddGoalHandler} />
            <View>
              <GoalInput visible={modalIsVisible} onAddGoal={addGoalHandler} onCancle={endAddGoalHandler} />
            </View>
          </View>
          <View style={styles.listDisplay}>

            <FlatList data={goals}
              renderItem={(itemData) => {
                console.log(itemData);
                return <GoalItem
                  text={itemData.item.text}
                  id={itemData.item.key}
                  onDeleteItem={deleteGoalHandler} />;
              }} />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: "8%",
    backgroundColor: '#F2A154',

  },
  inputContainer: {
    justifyContent: 'center',
  },
  listDisplay: {
    flex: 0.5,
  }
});
