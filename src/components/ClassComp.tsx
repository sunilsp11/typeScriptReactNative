import {Text, StyleSheet, View} from 'react-native';
import React, {Component} from 'react';

interface MyProps {
  name: string;
  email: string;
  age: number;
}

interface MyState {
  counter: number;
}

export default class ClassComp extends Component<MyProps, MyState> {
  render() {
    return (
      <View>
        <Text>{this.props.name + ' ' + this.props.email}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
