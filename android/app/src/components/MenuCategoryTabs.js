import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const categories = ['Starter', 'Main Course', 'Dessert', 'Sides'];

export default function CategoryTabs({ selected, counts, onSelect }) {
  return (
    <View style={{ flexDirection: 'row' }}>
      {categories.map(arr => (
        <TouchableOpacity
            key={arr}
            style={[styles.tab, selected === arr && styles.selectedTab]}
            onPress={() => onSelect(arr)}
        >
          <Text style={selected === arr && styles.selectedText}>{arr}</Text>
          {!!(counts && counts[arr]) && <Text> ({counts[arr]})</Text>}
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  tab: { padding: 10, borderBottomWidth: 2, borderBottomColor: '#eee' },
  selectedTab: { borderBottomColor: '#008080' },
  selectedText: { color: '#008080', fontWeight: 'bold' }
});
