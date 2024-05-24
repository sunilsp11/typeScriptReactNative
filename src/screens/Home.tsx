import {View, Text} from 'react-native';
import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamsList} from './AppNavigator';

interface HomeScreenProps {
  navigation: StackNavigationProp<RootStackParamsList, 'Home'>;
}

const Home = ({navigation}: HomeScreenProps) => {
  return (
    <View>
      <Text
        style={{padding: 10, borderWidth: 1, color: '#000'}}
        onPress={() =>
          navigation.navigate('Setting', {
            name: 'peter',
            email: 'peter@peter.com',
          })
        }>
        Go To Settings
      </Text>
    </View>
  );
};

export default Home;
