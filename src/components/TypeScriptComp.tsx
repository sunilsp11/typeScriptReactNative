import {View, Text} from 'react-native';
import React from 'react';
import ClassComp from './ClassComp';
import FunctionalComp from './FunctionalComp';

const TypeScriptComp = () => {
  return (
    <View>
      <Text>TypeScriptComp</Text>
      <ClassComp name={'peter'} email={'peter@peter.com'} age={30} />
      <FunctionalComp name={'peter'} email={'peter@peter.com'} age={30} />
    </View>
  );
};

export default TypeScriptComp;
