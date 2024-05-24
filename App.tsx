import {View, Text} from 'react-native';
import React from 'react';
import TypeScriptComp from './src/components/TypeScriptComp';
import AppNavigator from './src/screens/AppNavigator';

const App = () => {
  return (
    <View style={{flex: 1}}>
      {/* <Text>App</Text> */}
      {/* <TypeScriptComp /> */}
      <AppNavigator />
    </View>
  );
};

export default App;
