import React, { useContext } from 'react';
import { View, Text, Image, TouchableOpacity, Button, StyleSheet } from 'react-native';
import { AppContext } from '../AppContext';

export default function DishCard({ dish, onIngredientsPress }) {
  const { selectedDishes, toggleDish } = useContext(AppContext);

  return (
    <View style={[
      styles.card,
      selectedDishes[dish.id] ? styles.selected : null
    ]}>
      <Image
        source={dish.image ? { uri: dish.image } : { uri: dish.category.image }}
        style={{ width: 80, height: 80, borderRadius: 8 }}
      />
      <View style={{ flex: 1, marginLeft: 10 }}>
        <Text style={styles.title}>{dish.name}</Text>
        <Text numberOfLines={2}>{dish.description}</Text>
        <Text>{dish.type}</Text>
        <View style={{ flexDirection: 'row', marginTop: 4 }}>
          <Button
            title={selectedDishes[dish.id] ? 'Remove' : 'Add'}
            onPress={() => toggleDish(dish)}
            color={selectedDishes[dish.id] ? 'red' : 'green'}
          />
          <TouchableOpacity onPress={() => onIngredientsPress(dish)}>
            <Text style={styles.ingBtn}>Ingredients</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  card: { flexDirection: 'row', margin: 8, backgroundColor: '#fff', borderRadius: 8, padding: 10, },
  selected: { borderColor: '#008080', borderWidth: 2 },
  ingBtn: { marginLeft: 20, color: '#008080', textDecorationLine: 'underline', marginTop: 6 },
  title: { fontWeight: 'bold', fontSize: 16 }
});
