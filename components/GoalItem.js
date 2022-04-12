import { StyleSheet, View, Text, Pressable } from 'react-native';

function GoalItem(props) {
    console.log(props);
    return (
        <Pressable
            android_ripple={{ color: '#3eb' }}
            onPress={props.onDeleteItem.bind(this, props.id)}>
            <View style={styles.container}>
                <Text style={styles.text}>{props.text}</Text>
            </View>
        </Pressable>

    );
};

export default GoalItem;

const styles = StyleSheet.create({
    container: {
       

    },
    text: {
        color: '#fff',
        backgroundColor: '#315E31',
        margin: 5,
        padding: 5,
    }
})