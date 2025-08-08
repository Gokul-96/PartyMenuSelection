import React, { useState, useContext } from 'react';
import { View, FlatList, Text, Button, Switch } from 'react-native';
import dishes from '../data/dishes.json';
import { AppContext } from '../AppContext';
import CategoryTabs from '../components/MenuCategoryTabs';
import SearchBar from '../components/SearchBar';
import DishCard from '../components/DishCard';

const categoryTypes = {
  'Starter': 'STARTER',
  'Main Course': 'MAIN COURSE',
  'Dessert': 'DESSERT',
  'Sides': 'SIDES'
};

export default function MenuScreen({ navigation }) {
  const [activeCat, setActiveCat] = useState('Main Course');
  const [search, setSearch] = useState('');
  const [showVeg, setShowVeg] = useState(true);
  const [showNonVeg, setShowNonVeg] = useState(true);

  const { selectedDishes } = useContext(AppContext);

  // Filter dishes based on category search Veg/Non-Veg
  const filtered = dishes.filter(d =>
    d.mealType === categoryTypes[activeCat] &&
    ((showVeg && d.type === 'VEG') || (showNonVeg && d.type === 'NON-VEG')) &&
    (search.trim().length === 0 || d.name.toLowerCase().includes(search.toLowerCase()))
  );

  // Count selected per category
  const catCounts = Object.keys(categoryTypes).reduce((acc, cat) => {
    const type = categoryTypes[cat];
    acc[cat] = Object.values(selectedDishes).filter((val, idx) =>
      val && dishes[idx].mealType === type && selectedDishes[dishes[idx].id]
    ).length;
    return acc;
  }, {});

  return (
    <View style={{ flex: 1, backgroundColor: '#f5f5f5' }}>
      <CategoryTabs selected={activeCat} counts={catCounts} onSelect={setActiveCat} />
      <SearchBar value={search} onChange={setSearch} />
      <View style={{ flexDirection:'row', padding: 10, justifyContent:'space-between' }}>
        <View style={{ flexDirection:'row', alignItems:'center' }}>
          <Text>Veg</Text>
          <Switch value={showVeg} onValueChange={() => setShowVeg(!showVeg)} />
        </View>
        <View style={{ flexDirection:'row', alignItems:'center' }}>
          <Text>Non-Veg</Text>
          <Switch value={showNonVeg} onValueChange={() => setShowNonVeg(!showNonVeg)} />
        </View>
      </View>
      <FlatList
        data={filtered}
        keyExtractor={item => ''+item.id}
        renderItem={({ item }) =>
          <DishCard
            dish={item}
            onIngredientsPress={() => navigation.navigate('Ingredients', { dishId: item.id })}
          />
        }
        ListEmptyComponent={<Text style={{ textAlign:'center', marginTop:50 }}>No dishes found.</Text>}
        style={{ flex: 1 }}
      />
      <View style={{ flexDirection:'row', justifyContent:'space-between', alignItems:'center', padding: 16, backgroundColor:'#fff' }}>
        <Text>Total selected: {
          Object.values(selectedDishes).filter(Boolean).length
        }</Text>
        <Button title="Continue" onPress={() => {}} />
      </View>
    </View>
  );
}
