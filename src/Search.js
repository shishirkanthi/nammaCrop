import React,{Component} from 'react'
import { Container, Row } from 'react-bootstrap'
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';

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
        const crop = this.state.crop;
        const {performSearch, data} = this.props;
        
        return(
            <div>
                <Container>
                    <Row>
                        <Autocomplete
                            id="combo-box-demo"
                            onChange={(event, newValue)=>this.props.onSelect(event, newValue)}
                            options={data.sort()}
                            getOptionLabel={(option) => option}
                            style={{ width: '96vw' }}
                            renderInput={(params) => <TextField {...params} label="Crop" variant="outlined" />}
                        />
                    </Row>                    
                </Container>
            </div>
        )
    }
}

export default Search