/* eslint-disable react-native/no-inline-styles */
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { noteSelector } from '../redux/notesSlice';

const Notes = () => {

  const [ title, setTitle] = useState<string>('')
  const [ desc, setDesc] = useState<string>('')

  const dispatch = useAppDispatch()
  const notes = useAppSelector(noteSelector)
  console.log(notes)

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <TextInput
        placeholder="Enter note title"
        style={{
          width: '90%',
          height: 50,
          borderWidth: 1,
          alignSelf: 'center',
          marginTop: 20,
          paddingLeft: 20,
        }}
        value={title}
        onChangeText={txt => setTitle(txt)}
      />
      <TextInput
        placeholder="Enter note title"
        style={{
          width: '90%',
          height: 50,
          borderWidth: 1,
          alignSelf: 'center',
          marginTop: 20,
          paddingLeft: 20,
        }}
        value={desc}
        onChangeText={txt => setDesc(txt)}
      />
      <TouchableOpacity style={{
        width: '90%',
        height: 50,
        alignSelf: 'center',
        marginTop: 20,
        backgroundColor: 'black',
        justifyContent:'center',
        alignItems: 'center'
      }}>
        <Text style={{color: 'white'}}>
          Add Note
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Notes;
