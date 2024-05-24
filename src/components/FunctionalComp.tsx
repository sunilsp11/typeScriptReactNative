import {View, Text} from 'react-native';
import React from 'react';

interface MyProps {
  name: string;
  email: string;
  age: number;
}

const FunctionalComp = ({name, age, email}: MyProps) => {
  return (
    <View>
      <Text>
        {name} {age} {email}
      </Text>
    </View>
  );
};

export default FunctionalComp;
