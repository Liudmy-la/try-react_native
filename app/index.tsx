
import { useState } from "react";

import Hello from "./Greetings";
import ActionButton from "./ActionButton";
import EditableTable from "./EditableTable";
import { StyleSheet, View } from "react-native";

export default function Index() {
  const [count, setCount] = useState(1);

  const handlePress = () => {
    setCount(count + 1);
  };

  return (
    <View style={styles.container}>
      <Hello />
      <ActionButton count={count} onPress={handlePress} />
      <EditableTable />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 50,
    gap: 150
  }
})
