import React from 'react';
import {StyleSheet, Button, Text, View} from 'react-native';



export default function ActionButton ({ count, onPress }: { count: number; onPress: () => void }) {
    return (
        <View style={styles.container}>
            <Button title='Click more' onPress={onPress} />
          
            <View>
                <Text>You said hello {count} times</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        alignItems: 'center',
        color: 'white',
        gap: 20
    }
});
