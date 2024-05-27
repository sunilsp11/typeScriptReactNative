/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import CommonTextInput from './CommonTextInput';

const ComponentReusable = () => {
  const [name, setName] = useState<string>('');
  const [mobile, setMobile] = useState<string>('');
const [ badName, setBadName] = useState<boolean>(false)
const [ badMobile, setBadMobile] = useState<boolean>(false)

const validate = () => {
    let valid = true;
    if(name === '') {
        valid = false;
        setBadName(true);
    } else if( name !== '') {
        setBadName(false);
    }
    if(mobile === '') {
        valid = false;
        setBadMobile(true);
    } else if( mobile.length <10) {
        setBadMobile(true);
    }  else if( mobile !== '') {
        setBadMobile(false);
}
return valid
}


  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <CommonTextInput
        value={name}
        onChangeText={(text: string) => setName(text)}
        placeholder="Enter Name"
        keyBoardType={'default'}
        maxLength={30}
        disabled={false}
        valid= {!badName}
      />
{badName && <Text style={{color: 'red', marginLeft: 20, marginTop:5, alignSelf:'flex-start'}}>Please Enter Name</Text>}
      <CommonTextInput
        value={mobile}
        onChangeText={(text: string) => setMobile(text)}
        placeholder="Enter Mobile number"
        keyBoardType={'number-pad'}
        maxLength={10}
        disabled={false}
        valid = {!badMobile}
      />
{badMobile && <Text style={{color: 'red', marginLeft: 20, marginTop:5,alignSelf:'flex-start' }}>Please Enter Mobile</Text>}

      <TouchableOpacity
        style={{
          width: '90%',
          height: 50,
          marginTop: 10,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'black',
        }} onPress={()=>{
            if(validate()){

            }
        }} >
        <Text style={{color: '#fff'}}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ComponentReusable;
