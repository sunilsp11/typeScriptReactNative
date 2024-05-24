import {View, Text} from 'react-native';
import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamsList} from './AppNavigator';
import {useRoute} from '@react-navigation/native';

interface SettingScreenProps {
  navigation: StackNavigationProp<RootStackParamsList, 'Setting'>;
}

const Settings = ({navigation}: SettingScreenProps) => {
  const route = useRoute();
  console.log(route);
  //   const {name, email} = route.params;
  return (
    <View>
      <Text>Text</Text>
    </View>
  );
};

export default Settings;

// In Settings.tsx
// import { RouteProp } from '@react-navigation/native';

// interface SettingScreenProps {
//   navigation: StackNavigationProp<RootStackParamsList, 'Setting'>;
//   route: RouteProp<RootStackParamsList, 'Setting'>; // Add this line
// }

// const Settings = ({ navigation, route }: SettingScreenProps) => {
//   console.log(route);
//   const { name, email } = route.params;
//   return (
//     <View>
//       <Text>{name}</Text>
//       <Text>{email}</Text>
//     </View>
//   );
// };
