import React,{Component} from 'react'
import ReactDom from 'react-dom'

const List = (props) =>{
    if(props.data.results.length > 0){
        const items = props.data.results.map((item,index) =>{
            return(
                <li key={index}>
                    <div class={item.type}>
                        <label>{item.type}: </label>
                        <label>{item.name}: </label>
                        <label>{item.recommendation}</label>
                    </div>
                </li>
            )
        });
        return <ul>{items}</ul>
    } else if(props.data.crop !=='') {        
        return <label>No result found</label>
    } else{
        return <span></span>
    }
    
}

class Results extends Component{
    render(){
        const {data} = this.props
        return(
            <div className="results">
                <List data={data}/>
            </div>
        )
    }
}

export default Results