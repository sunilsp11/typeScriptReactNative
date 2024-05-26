/* eslint-disable prettier/prettier */
import {View, Text, TextInput} from 'react-native';
import React, { useReducer, useRef, useState } from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamsList} from './AppNavigator';
import { StyleProvider } from './StylecContext';
import Comp from '../components/Comp';
import Products from '../components/Products';
import Notes from '../components/Notes';
import { Provider } from 'react-redux';
import { store } from '../redux/store';

interface HomeScreenProps {
  navigation: StackNavigationProp<RootStackParamsList, 'Home'>;
}

interface User {
  name: string;
  email: string;
  age: number;
}
interface Items {
  title: string;
  price: number;
  id: string;
}

type MyState = {
  count: number;
}

const initialeState:MyState = {
  count: 0
}

type Action={
  type: 'INCREMENT' | 'DECREMENT'
}

const reducer = (state:MyState, action: Action):MyState=> {
  switch (action.type) {
    case 'INCREMENT':
      return {...state, count:state.count+1}
      case 'DECREMENT':
        return{...state, count:state.count-1}
    default:
      return state;
  }
}

const Home = ({navigation}: HomeScreenProps) => {
  const [counter, setCounter] = useState<number>(0);
  const [name, setName] = useState<string>('');
  const [isLoader, setIsLoader] = useState<boolean>(false);
  const [user, setUser] = useState<User>({name: '', age: 0, email: ''});
  const [items, setItems] = useState<Items[]>([]);
  const [details, setDetails] = useState<null>(null);

  const ref = useRef<TextInput>(null);

  const [state, dispatch] = useReducer(reducer, initialeState)

  return (

    // <StyleProvider>
  
   <View style={{flex:1}}>
      {/* <Text
        style={{padding: 10, borderWidth: 1, color: '#000'}}
        onPress={() =>
          navigation.navigate('Setting', {
            name: 'peter',
            email: 'peter@peter.com',
          })
        }>
        Go To Settings
      </Text> */}
      {/* <TextInput ref={ref} /> */}

      {/* <View style={{justifyContent:'center', alignItems:'center', flex:1}}>
        <Text>{state.count}</Text>
        <Text style={{padding:10, borderWidth: 1, color:'#000', fontSize:20}} onPress={()=> {
          dispatch({type: 'INCREMENT'})
        }}> Change Count</Text>
        <Comp/>

      </View> */}
        {/* <Products /> */}
        <Provider store={store}>
    <Notes/>
    </Provider>
    </View>
    // </StyleProvider>
 
  );
};

export default Home;
