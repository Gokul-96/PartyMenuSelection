import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [selectedDishes, setSelectedDishes] = useState({}); // { [dishId]: true }

  const toggleDish = dish => {
    setSelectedDishes(prev => ({
      ...prev,
      [dish.id]: !prev[dish.id]
    }));
  };

  return (
    <AppContext.Provider value={{ selectedDishes, toggleDish }}>
      {children}
    </AppContext.Provider>
  );
}
