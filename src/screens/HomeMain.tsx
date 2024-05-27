import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {RootStackParamsList} from './AppNavigator';
import {StackNavigationProp} from '@react-navigation/stack';
import {useRoute} from '@react-navigation/native';

type MyProps = {
  navigation: StackNavigationProp<RootStackParamsList, 'HomeMain'>;
};

type Notes = {
  title: string;
  desc: string;
  id: string;
};

const HomeMain = ({navigation}: MyProps) => {
  const [notes, setNotes] = useState<Notes[]>([]);

  const route = useRoute();

  useEffect(() => {
    getNotes();
  }, []);

  const getNotes = async () => {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const res = await fetch(
      'http://chartreuse-green-bear-yoke.cyclic.app/notes/getNotes/' +
        route.params.id,
      {
        headers: headers,
        method: 'GET',
      },
    );
    const data = await res.json();
    setNotes(data);
    console.log(data);
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <View style={styles.header}>
        <Text style={styles.title}>Fullstack Notes App </Text>
      </View>
      {notes.length > 0 ? (
        <FlatList
          data={notes}
          renderItem={({item, index}: {item: Notes; index: number}) => {
            return (
              <View style={styles.notesItem}>
                <Text>{item.title}</Text>
                <Text>{item.desc}</Text>
              </View>
            );
          }}
        />
      ) : (
        <View style={styles.noDataView}>
          <Text style={styles.title}>Notes not Found</Text>
        </View>
      )}
      <TouchableOpacity style={styles.btn} onPress={() => {}}>
        <Text style={styles.btnText}>Add New Note</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    width: '100%',
    height: 50,
    backgroundColor: 'white',
    elevation: 5,
    justifyContent: 'center',
    paddingLeft: 20,
  },
  title: {
    color: 'black',
    fontSize: 18,
    fontWeight: '600',
  },
  btn: {
    width: 200,
    height: 50,
    borderRadius: 30,
    position: 'absolute',
    right: 20,
    bottom: 20,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
  notesItem: {
    width: '90%',
    height: 80,
    borderWidth: 1,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 10,
  },
  noDataView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeMain;
