import React,{Component} from 'react'
import ReactDom from 'react-dom'
import Button, { Container, Row, Col, Form } from 'react-bootstrap'

class Search extends Component{

    state ={
        crop:''
    }

    handleChange = (event) =>{
        const {crop, value} = event.target
        this.setState({
            crop:value
        })
    }
    
    render(){
        const crop = this.state.crop
        console.log(`INIT: ${crop}`)
        const {performSearch} = this.props
        return(
            <div>
                <Container>
                    <Row>
                        <label class="field">Crop</label>
                        <input 
                            type = "text"
                            name = "crop"
                            id = "crop"
                            value = {crop}
                            onChange = {this.handleChange}/>                            
                        <button onClick={()=>performSearch(crop)}>Search</button>
                    </Row>
                    <Row>
                        
                    </Row>                
                </Container>
            </div>
        )
    }
}

export default Search