import logo from './logo.svg';
import './App.css';
import Filter from './components/Filter';
import {Col} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Container} from 'react-bootstrap';
import ProductList from './components/ProductList';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from './assets/data';
import { useState } from 'react';
import { Prev } from 'react-bootstrap/esm/PageItem';
import { useEffect } from 'react';

const defaultfilter = {color:[],storage:[],isSorted:null}

function App() {

  const [ProductData, setProductData] = useState(data)

  const [FilterData, setFilterData] = useState(defaultfilter)

  const [FavData, setFavData] = useState([])

  useEffect(() => {
    let filteredData = data
    
    console.log(FilterData)
    if (JSON.stringify(FilterData) === JSON.stringify(defaultfilter))
    { setProductData(filteredData)
         return }

    if (FilterData.color && FilterData.color.length > 0)
      filteredData=filteredData.filter(item =>  FilterData.color.some(color => color === item.color))

    if (FilterData.storage && FilterData.storage.length > 0)
      filteredData=filteredData.filter(item =>  FilterData.storage.some(storage => storage == item.storage))

      console.log(filteredData)
    if (FilterData.isSorted)
      {if (FilterData.isSorted==="asc"){
        filteredData=filteredData.sort(function(a, b) {
        return parseFloat(a.price) - parseFloat(b.price);
    });
  }
      else{
        filteredData=filteredData.sort(function(a, b) {
        return parseFloat(b.price) - parseFloat(a.price);
    });}
}
       
    //filteredData.filter(item =>  FilterData.storage.some(storage => storage == item.storage))
    
    setProductData([...filteredData]) 

  }, [FilterData])
  

  // const ColorFilter = (ColorData) => { 
  //   setFilterData(prev =>({ ...prev, color:ColorData}))
  //   if (ColorData && ColorData.length == 0)
  //   { setProductData(data)
  //     return }
  //     const filteredData=data.filter(item =>  ColorData.some(color => color === item.color))
  //     setProductData(filteredData) 
  //  }

  // const StorageFilter = (StorageData) => {
  //   setFilterData(prev =>({ ...prev, storage:StorageData}))
  //   console.log(StorageData) 
  //   if (StorageData && StorageData.length == 0)
  //   { setProductData(data)
  //     return }
  //     const filteredData=data.filter(item =>  StorageData.some(storage => storage == item.storage))
  //     console.log(filteredData) 
  //     setProductData(filteredData) 
  // }

  // const Sorting= (SortingData) => { 
  //   setFilterData(prev =>({ ...prev, price:SortingData}))
  //   if (ColorData && ColorData.length == 0)
  //   { setProductData(data)
  //     return }
  //     const filteredData=data.filter(item =>  ColorData.some(color => color === item.color))
  //     setProductData(filteredData) 
  //  }

  const CalculateTotal = () => {
    const sum = FavData.map(FavItem => FavItem.price).reduce((a, b) => a + b, 0)
    return sum
  }

  console.log(FavData)

  return (
    <div className="App">
      <header className="App-header">
        <h1> The iPhone Store</h1>
      </header>
      
      <Container><br></br>
      <Row>
        
        <Col>
        {/* <Filter ColorFilter={ColorFilter} StorageFilter={StorageFilter} Sorting={Sorting} FilterData={FilterData} setFilterData={setFilterData}></Filter> */}
        <Filter  FilterData={FilterData} setFilterData={setFilterData} CalculateTotal = {CalculateTotal} ></Filter>
  
        </Col>
        <Col xs={9}>
          <ProductList data={ProductData} FavData={FavData} setFavData={setFavData}></ProductList>

        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default App;
