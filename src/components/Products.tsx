import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import ProductItem from './ProductItem'

type ProductsState ={
  category:string,
    description:string,
  id:number,
  image:string,
  price:number,
  rating:any,
  title:string
}

const Products = () => {

    const [ products,setProducts] = useState<ProductsState[]>([])
    useEffect(()=> {
        getProduct()
    },[])

    const getProduct = () => {
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(json => {console.log(json)
        setProducts(json)}
      )
        
    }
  return (
    <View style={{flex:1}}>
     <FlatList data={products}
     
     renderItem={({item,index}: {item:ProductsState, index:number})=>{
      return(
        <ProductItem item={item}/>
      )
     }}/>
    </View>
  )
}

export default Products