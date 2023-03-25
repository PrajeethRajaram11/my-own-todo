import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function AddItem(props) {
    const [item, setItem] = useState('');
    return (
        <View>
            <Text>Enter task to add to list</Text>
            <TextInput onChangeText={(textVal) => {
                setItem(textVal);
            }}
                style={{
                    borderBottomColor: 'black',
                    backgroundColor: '#f4f4f4',
                    margin: 4,
                    borderWidth: 1,
                    borderRadius: 10,
                    padding: 10,
                }}
            ></TextInput>
            <Button onPress={() => {
                props.addItem(item);
            }} title='submit'>button</Button>

        </View>
    );
}

const styles = StyleSheet.create({
    addView: {
        flex: 0.2,
        justifyContent: 'center',
    }
});