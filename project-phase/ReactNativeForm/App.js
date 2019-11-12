import React from 'react';
import { Button, Text, StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import PizzaPicker from './components/PizzaPicker';

const App = () => {
  return (
    <>
      <Text>Pizza Picker</Text>
      <PizzaPicker />
    </>
  )
}
export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
