import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

export default function SearchBar({ value, onChange }) {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search dishes..."
        value={value}
        onChangeText={onChange}
        style={styles.input}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: { padding: 8 },
  input: { backgroundColor: '#f1f1f1', borderRadius: 8, padding: 10 }
});
