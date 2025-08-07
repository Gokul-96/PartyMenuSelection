import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const categories = ['Starter', 'Main Course', 'Dessert', 'Sides'];

export default function CategoryTabs({ selected, counts, onSelect }) {
  return (
    <View style={{ flexDirection: 'row' }}>
      {categories.map(cat => (
        <TouchableOpacity
            key={cat}
            style={[styles.tab, selected === cat && styles.selectedTab]}
            onPress={() => onSelect(cat)}
        >
          <Text style={selected === cat && styles.selectedText}>{cat}</Text>
          {!!(counts && counts[cat]) && <Text> ({counts[cat]})</Text>}
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
