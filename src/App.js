import React,{Component, useState, useEffect} from 'react'
import Search from './Search'
import Results from './results'
import cropdb from './data/cropdb.json'

const metaData = {
    appName:'Pestopedia'
}

const dataBase = cropdb.Insecticides;

const App = () => {
    const [selectedCrop, setSelectedCrop] = useState('');
    const [results, setResults] = useState([]);

    const updatedSelectedCrop = (event, selectedCrop) =>{
        console.log('Selected crop:', selectedCrop);
        if(selectedCrop !== null){
            setResults(dataBase.filter(item=>{return item.Crop.toLowerCase()==selectedCrop.toLowerCase()}));
        } else{
            setResults([]);
        }
    }

    const performSearch = (selectedCrop) =>{
        console.log('Searching');
        if(selectedCrop){
            setResults(dataBase.filter(item=>{return item.Crop.toLowerCase()==selectedCrop.toLowerCase()}));
        }
    }
    
    return(
        <div>
            <h1 className="center pageheading" style={{background:'#00ff84'}}>{metaData.appName}</h1>
            <div className="text-center">
                <Search  data={[...new Set(dataBase.map(item=>item.Crop))]} onSelect={updatedSelectedCrop} performSearch={performSearch}/>
                <Results data={results}/>
            </div>
            
        </div>
    )
}

export default App