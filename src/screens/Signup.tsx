import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import {RootStackParamsList} from './AppNavigator';
import {StackNavigationProp} from '@react-navigation/stack';
import Loader from '../components/Loader';

type MyProps = {
  navigation: StackNavigationProp<RootStackParamsList, 'Signup'>;
};

const Signup = ({navigation}: MyProps) => {
  const [name, setName] = useState<string>('');
  const [badName, setBadName] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [badEmail, setBadEmail] = useState<boolean>(false);
  const [badPassword, setBadPassword] = useState<boolean>(false);
  const [loader, setLoader] = useState<boolean>(false);

  const validate = () => {
    let valid;
    if (name == '') {
      setBadName(true);
      valid = false;
    } else if (name != '') {
      setBadName(false);
    }
    if (email == '') {
      setBadEmail(true);
      valid = false;
    } else if (email != '') {
      setBadEmail(false);
    }
    if (password == '') {
      setBadPassword(true);
      valid = false;
    } else if (password != '') {
      setBadPassword(false);
    }
    return valid;
  };

  const signup = async () => {
    setLoader(true);
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const body = {email: email, password: password, name: name};
    const res = await fetch(
      'http://chartreuse-green-bear-yoke.cyclic.app/api/auth/register',
      {
        headers: headers,
        method: 'POST',
        body: JSON.stringify(body),
      },
    );
    const data = await res.json();
    setLoader(false);
    console.log(res);
    navigation.navigate('HomeMain', {id: data._id});
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Create New Account</Text>
      <TextInput
        value={name}
        onChangeText={text => setName(text)}
        placeholder="Enter Email"
        style={styles.input}
      />
      {badName && <Text style={styles.errorText}>Please Enter Name</Text>}
      <TextInput
        value={email}
        onChangeText={text => setEmail(text)}
        placeholder="Enter Email"
        style={styles.input}
      />
      {badEmail && <Text style={styles.errorText}>Please Enter Email</Text>}
      <TextInput
        value={password}
        onChangeText={text => setPassword(text)}
        placeholder="Enter Password"
        style={styles.input}
      />
      {badPassword && (
        <Text style={styles.errorText}>Please Enter Password</Text>
      )}

      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => {
          if (validate()) {
            signup();
          }
        }}>
        <Text style={styles.btnText}>Signup</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.loginBtn,
          {backgroundColor: '#fff', borderWidth: 1, borderColor: '#000'},
        ]}>
        <Text style={[styles.btnText, {color: '#000'}]}>Login</Text>
      </TouchableOpacity>

      <Loader visible={loader} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    fontSize: 20,
    color: '#000',
    marginLeft: 20,
    marginTop: 100,
    fontWeight: '500',
  },
  input: {
    width: '90%',
    height: 50,
    borderWidth: 1,
    borderColor: '#9e9e9e',
    marginTop: 20,
    alignSelf: 'center',
    paddingLeft: 20,
    borderRadius: 10,
  },
  loginBtn: {
    width: '90%',
    height: 50,
    backgroundColor: '#000',
    borderRadius: 10,
    marginTop: 50,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: '#fff',
    fontSize: 16,
  },
  errorText: {
    color: 'red',
    marginLeft: 20,
    marginTop: 10,
  },
});

export default Signup;
