import { View, Text, Image } from 'react-native'
import React from 'react'

type ProductData={
    item:{
        category:string,
        description:string,
      id:number,
      image:string,
      price:number,
      rating:any,
      title:string
    }
}

const ProductItem = ({item}: ProductData) => {
  return (
    <View>
      <Text></Text>
      <Image source={{uri:item.image}}  style={{width:50, height:50}} />
    </View>
  )
}

export default ProductItem