import { HelloWave } from '@/components/HelloWave';
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default function LotsOfGreetings() {
  return (
    <View style={styles.center}>
      <Greeting name="World" />
    </View>
  );
};


const Greeting = (props: {name: string}) => {
  return (
    <View style={styles.center}>
      <Text>
        Hello, {props.name}! {" "}
        <HelloWave />
      </Text>      
    </View>
  );
};


const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
  },
});
