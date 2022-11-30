import React from 'react'
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';

const ColorList = ["Black","White","Gold","Purple"]
const StorageList = ["128","256","512"]

const defaultfilter = {color:[],storage:[],price:null}

function Filter({FilterData, setFilterData, CalculateTotal}) {

    // const [ColorData, setColorData] = useState([])
    // const [StorageData, setStorageData] = useState([])
    // const [isSorted, setisSorted] = useState(null)

    // useEffect(() => {
    //     ColorFilter(ColorData);
    // }, [ColorData])

    // useEffect(() => {
    //     StorageFilter(StorageData);
    // }, [StorageData])

    // useEffect(() => {
    //     Sorting(isSorted);
    // }, [isSorted])
    

    const handleCheckboxColor =(color) =>{
        if(FilterData.color.includes(color)){
        const newColorList=FilterData.color.filter(item => item !=color)
        setFilterData(prev =>({ ...prev, color:newColorList}))
        //setFilterData(newColorList)
        }else{
        //setFilterData(prev => [...prev,color])
        setFilterData(prev =>({ ...prev, color:[...prev.color,color]}))
        }
        }
    const handleCheckboxStorage =(storage) =>{
            if(FilterData.storage.includes(storage)){
            const newStorageList=FilterData.storage.filter(item => item !=storage)
            //setStorageData(newStorageList)
            setFilterData(prev =>({ ...prev, storage:newStorageList}))
            }else{
            //setStorageData(prev => [...prev,storage])
            setFilterData(prev =>({ ...prev, storage:[...prev.storage,storage]}))
            }
            }
    //console.log(isSorted)

    const handleReset = () => {
        setFilterData({...defaultfilter})
       }


  return (
    <div>
        <div>
            <h4>Color</h4>
            <Form>
                
        {
        ColorList.map(color => <Form.Check
            type={"checkbox"}
            label={color}
            checked = {FilterData.color.length>0 && FilterData.color.includes(color)}
            onChange={()=> handleCheckboxColor(color)}
          />)
        }
        </Form>
        </div>

        <div>
            <h4>Storage</h4>
            <Form>
        {
        StorageList.map(storage => <Form.Check
            type={"checkbox"}
            label={storage}
            checked = {FilterData.storage.length>0 && FilterData.storage.includes(storage)}
            onChange={()=> handleCheckboxStorage(storage)}
          />)
        }
        </Form>
        </div>

        <div>
            <h4>Sort By Price</h4>
            <Form>
        <Form.Check
            type={"radio"}
            label={"Low to High"}
            checked = {FilterData.isSorted==="asc"}
            onChange={()=>setFilterData(prev =>({ ...prev, isSorted:"asc"}))}
          />
          <Form.Check
            type={"radio"}
            label={"High to Low"}
            checked = {FilterData.isSorted==="dsc"}
            onChange={()=>setFilterData(prev =>({ ...prev, isSorted:"dsc"}))}
          />
        
        </Form>
        <br></br>
        <Button variant="primary" onClick={handleReset}>Reset</Button>
        <br></br>
        <br></br>
        <h5>Favorites Price Total: ${CalculateTotal()}</h5>
        
        </div>

    </div>
  )
}

export default Filter; 