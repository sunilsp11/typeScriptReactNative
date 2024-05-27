import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamsList} from './AppNavigator';

type MyProps = {
  navigation: StackNavigationProp<RootStackParamsList, 'Splash'>;
};

const Splash = ({navigation}: MyProps) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Notes App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    color: 'white',
    fontSize: 30,
  },
});

export default Splash;
