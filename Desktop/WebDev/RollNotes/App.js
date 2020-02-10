import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Button from './Components/Button';

const App = () => {
  return (
    <View style={styles.MainView}>
      <Text style={styles.TitleText}>
        Roll<Text style={styles.TitleTextSecondary}>Notes</Text>
      </Text>
      <View>
        <Button text="Saved Rolls" />
        <Button text="Start a new roll" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  MainView: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingTop: 75,
    height: '100%',
    width: '100%',
    margin: 'auto',
    backgroundColor: '#1F1F1F',
  },
  TitleText: {
    color: 'white',
    fontSize: 56,
  },
  TitleTextSecondary: {
    color: '#E5BE1A',
  },
});

export default App;
