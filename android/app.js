import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import { AppProvider } from './src/AppContext';  // (for selections, see below)

export default function App() {
  return (
    <AppProvider>
      <AppNavigator />
    </AppProvider>
  );
}
