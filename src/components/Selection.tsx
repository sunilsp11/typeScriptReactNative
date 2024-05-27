import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

interface Arr {
  lang: string;
  isSelected: boolean;
}

const Selection = () => {
  const [data, setData] = useState<Arr[]>([
    {lang: 'Malayalam', isSelected: false},
    {lang: 'Punjabi', isSelected: false},
    {lang: 'Gujarati', isSelected: false},
    {lang: 'Hindi', isSelected: false},
    {lang: 'Hindi', isSelected: false},
    {lang: 'Bangla', isSelected: false},
    {lang: 'Telugu', isSelected: false},
    {lang: 'Oriya', isSelected: false},
    {lang: 'Lushai', isSelected: false},
    {lang: 'Marathi', isSelected: false},
    {lang: 'Konkani', isSelected: false},
    {lang: 'Khasi', isSelected: false},
    {lang: 'Kannada', isSelected: false},
    {lang: 'Nepali', isSelected: false},
    {lang: 'Manipuri', isSelected: false},
    {lang: 'Assamese', isSelected: false},
  ]);

  const [selectedLang, setSelectedLang] = useState<number>(-1);

  const onSelect = (ind: number) => {
    let temp = data;
    temp.map((item, index) => {
      if (index == ind) {
        item.isSelected = !item.isSelected;
      } 
    });
    let tempData = [];
    temp.map(item => {
      tempData.push(item);
    });
    setData(tempData);
  };
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <FlatList
        data={data}
        numColumns={2}
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                width: '50%',
                height: 100,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                style={{
                  width: '90%',
                  height: 90,
                  borderWidth: 1,
                  //   borderColor: selectedLang == index ? 'blue' : '#9e9e9e',
                  borderColor: item.isSelected ? 'blue' : '#9e9e9e',
                  //   marginHorizontal: 8,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 10,
                }}
                onPress={
                  () => {
                    onSelect(index);
                  }
                  //  setSelectedLang(index)
                }>
                <Text style={{color: item.isSelected ? 'blue' : '#000'}}>
                  {item.lang}
                </Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Selection;
