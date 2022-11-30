
import React from 'react'
import data from '../assets/data'
import Product from './Product'
import {Col} from 'react-bootstrap';
import {Row} from 'react-bootstrap';

function ProductList({data,FavData,setFavData}) {

    const handleFav = (product) =>{
        if(FavData.find(item => item.name == product.name)){
        const newFavList=FavData.filter(item => item.name !=product.name)
        setFavData(newFavList)
        //setFilterData(newColorList)
        }else{
        setFavData(prev => [...prev,product])
        //setFilterData(prev =>({ ...prev, color:[...prev.color,color]}))
        }
        }
    
  return (
    <Row>

        {data.map(item => <Product onClick = {()=>{handleFav(item)}} isFav={FavData.find(Favitem => Favitem.name == item.name)} item={item}/>)}
        </Row>
  )
}

export default ProductList