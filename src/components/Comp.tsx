import {View, Text } from 'react-native'
import React, { useContext } from 'react'
import { MyContext } from '../screens/StylecContext'

const Comp:React.FC = () => {
    const value = useContext(MyContext)
  return (
    <View
      style={{
        backgroundColor: value.bg,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 200,
      }}>
      <Text style={{color:value.color}}>Hello Typescript</Text>
    </View>
  )
}

export default Comp