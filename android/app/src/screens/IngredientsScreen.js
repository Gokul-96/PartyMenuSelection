import React from 'react';
import { View, Text, FlatList } from 'react-native';
import dishes from '../data/dishes.json';
import { ingredientsData } from '../data/ingredients';

export default function IngredientsScreen({ route }) {
  const { dishId } = route.params;
  const dish = dishes.find(d => d.id == dishId);
  const ingredients = ingredientsData[dishId] || [];

  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{dish.name}</Text>
      <Text style={{ marginBottom: 10 }}>{dish.description}</Text>
      <Text style={{ fontWeight:'bold', marginTop:12 }}>Ingredients:</Text>
      <FlatList
        data={ingredients}
        keyExtractor={item => item.name}
        renderItem={({ item }) =>
          <Text>- {item.name}: {item.quantity}</Text>
        }
      />
    </View>
  );
}
