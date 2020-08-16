import React,{Component} from 'react'
import ReactDom from 'react-dom'
import {Container} from 'react-bootstrap'
import Search from './Search'
import Results from './results'

const metaData = {
    appName:'Pestopedia'
}

const dataBase = [
        {
        type: "insect",
        crop: "togri",
        name: "hula1",
        recommendation: "ond hodidra hula1 hoykot hotava"
        },
        {
        type: "insect",
        crop: "togri",
        name: "hula2",
        recommendation: "yaad hodidra hula2 ullyaad saaytava"
        },
        {
        type: "insect",
        crop: "hesr",
        name: "hula3",
        recommendation: "ond hodidra hula3 hoykot hotava"
        },
        {
        type: "insect",
        crop: "hesr",
        name: "hula4",
        recommendation: "yaad hodidra hula4 ullyaad saaytava"
        },
        {
        type: "insect",
        crop: "jwala",
        name: "hula5",
        recommendation: "ond hodidra hula5 hoykot hotava"
        },
        {
        type: "disease",
        crop: "togri",
        name: "disease1",
        recommendation: "summ hogallappa, ond tatak ki yanni hodibek"
        },
        {
        type: "disease",
        crop: "togri",
        name: "disease2",
        recommendation: "idenaagal tension togo bhyaad ni"
        },
        {
        type: "disease",
        crop: "hesr",
        name: "disease3",
        recommendation: "summ hogallappa disease3, ond tatak ki yanni hodibek"
        },
        {
        type: "disease",
        crop: "hesr",
        name: "disease4",
        recommendation: "disease4 enaagal tension togo bhyaad ni"
        },
        {
        type: "disease",
        crop: "jwala",
        name: "disease5",
        recommendation: "summ hogallappa disease5, ond tatak ki yanni hodibek"
        },
        {
        type: "disease",
        crop: "jwala",
        name: "disease6",
        recommendation: "disease6 enaagal tension togo bhyaad ni"
        },
        {
        type: "weed",
        crop: "togri",
        name: "weed1",
        recommendation: "bhagg ant belitav iv, bhenki hacchri"
        },
        {
        type: "weed",
        crop: "togri",
        name: "weed2",
        recommendation: "ivka kaile kit vagibek"
        },
        {
        type: "weed",
        crop: "hesr",
        name: "weed3",
        recommendation: "bhagg ant belitav iv, bhenki hacchri weed3"
        },
        {
        type: "weed",
        crop: "hesr",
        name: "weed4",
        recommendation: "weed4 kaile kit vagibek"
        },
        {
        type: "weed",
        crop: "jwala",
        name: "weed5",
        recommendation: "bhagg ant belitav iv, bhenki hacchri weed5"
        }
    ]

class App extends Component{
    state = {
        crop:'',
        results:[]
    }


    performSearch = (crop) =>{
        this.setState({
            results: dataBase.filter(item=>{return item.crop.toLowerCase()==crop.toLowerCase()})
        })        
    }

    render(){        
        return(
            <div>
                <h1 class="center pageheading">{metaData.appName}</h1>
                <div class="text-center">
                    <Search handleChange={this.handleChange} performSearch={this.performSearch}/>
                    <Results data={this.state}/>
                </div>
                
            </div>
        )
    }
}

export default App