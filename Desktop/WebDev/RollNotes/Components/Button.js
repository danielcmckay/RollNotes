import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Button = (props) => {
  return(
    <TouchableOpacity>
    <View style={styles.Button}>
      <Text style={styles.ButtonText}>{props.text}</Text>
    </View>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  Button: {
    padding: 20,
    height: 80,
    width: 250,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 24,
    backgroundColor: 'white',
    color: '#1f1f1f',
    borderRadius: 50,
    margin: 25
  },
  ButtonText: {
    fontSize: 24
  }
});

export default Button;