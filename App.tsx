import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <Text style={styles.text}>Hello, world!</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    marginVertical: 10,
    marginHorizontal: 10,
    fontFamily: 'Montserrat-Regular',
  },
});

export default App;
