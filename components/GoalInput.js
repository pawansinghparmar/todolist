import { StyleSheet, View, TextInput, Button, Modal, Image } from 'react-native';

import { useState } from 'react';
function GoalInput(props) {

    const [enteredGoalText, setEnteredGoalText] = useState('');
    function goalInputHandler(enteredGoal) {
        setEnteredGoalText(enteredGoal);
    };

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    };



    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={props.visible}>
            <View style={styles.container}>
                <TextInput
                    style={styles.textInput}
                    placeholder='enter the task'
                    value={enteredGoalText}
                    onChangeText={goalInputHandler} />
                <View style={styles.buttonContainer}>

                    <View style={styles.button}>

                        <Button title='Add Task' onPress={addGoalHandler} />
                    </View>
                    <View style={styles.button}>

                        <Button title="Cancel" color="#b45" onPress={props.onCancle} />
                    </View>
                </View>
            </View>
        </Modal>
    );
};
export default GoalInput;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F2A154',
        flex: 1,

        justifyContent: 'center',
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#F7F6E7',
        borderRadius: 8,
        backgroundColor: '#F7F6E7',
        margin: 8,
        padding: 8,
    },
    buttonContainer: {
        marginTop: 8,
        flexDirection: 'row',
        justifyContent: 'center',


    },
    button: {
        margin: 8,
    }
})