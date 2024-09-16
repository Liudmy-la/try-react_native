import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

export default function EditableTable() {
    const [data, setData] = useState([
      { id: '1', name: 'Item 1', value: 'Value 1', newValue: '' },
      { id: '2', name: 'Item 2', value: 'Value 2', newValue: '' },
      { id: '3', name: 'Item 3', value: 'Value 3', newValue: '' },
    ]);

    const handleEdit = (id: string, newValue: string) => {
        const updatedData = data.map(item =>
            item.id === id ? { ...item, newValue } : item
        );
        setData(updatedData);
    };

    const saveChanges = () => {
        const updatedData = data.map(item =>
            item.newValue ? { ...item, value: item.newValue, newValue: '' } : item
        );
        setData(updatedData);
    };

    const renderItem = ({ item }: any) => (
        <View style={styles.row}>
            <TextInput
                style={styles.input}
                value={item.newValue}
                onChangeText={(text) => handleEdit(item.id, text)}
                placeholder="Enter new value"
            />
            
            <Text style={styles.cell}>{item.value}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Set current values:</Text>

            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
            />

            <Button title="Save changes" onPress={saveChanges} />
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    maxWidth: 800,
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    color: 'rgb(33, 150, 243)',
    borderWidth: 1,
    borderColor: 'rgba(33, 150, 243, 0.5)',
    padding: 8,
    borderRadius: 4,
  },
  row: {
    flexDirection: 'row',
    margin: 8,
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 20,
  },
  cell: {
    flex: 1,
    fontSize: 16,
    textAlign: 'right',
    backgroundColor: 'rgba(33, 150, 243, 0.5)',
    padding: 8,
    borderRadius: 4,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    borderRadius: 4,
  },
});
