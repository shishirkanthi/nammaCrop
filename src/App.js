import React,{Component} from 'react'
import Search from './Search'
import Results from './results'
import cropdb from './data/cropdb.json'
const metaData = {
    appName:'Pestopedia'
}

const dataBase = cropdb.Insecticides;

class App extends Component{
    state = {
        selectedCrop:'',
        results:[]
    }


    performSearch = (selectedCrop) =>{
        console.log('Searching');
        if(selectedCrop){
            this.setState({
                results: dataBase.filter(item=>{return item.Crop.toLowerCase()==selectedCrop.toLowerCase()})
            });
        }
    }

    updatedSelectedCrop = (event, selectedCrop) =>{
        console.log('Selected crop:', selectedCrop);
        if(selectedCrop !== null){
            this.setState({
                results: dataBase.filter(item=>{return item.Crop.toLowerCase()==selectedCrop.toLowerCase()})
            });
        } else{
            this.setState({
                results: []
            });
        }
    }

    render(){        
        return(
            <div>
                <h1 className="center pageheading">{metaData.appName}</h1>
                <div className="text-center">
                    <Search  data={[...new Set(dataBase.map(item=>item.Crop))]} onSelect={this.updatedSelectedCrop} handleChange={this.handleChange} performSearch={this.performSearch}/>
                    <Results data={this.state}/>
                </div>
                
            </div>
        )
    }
}

export default App