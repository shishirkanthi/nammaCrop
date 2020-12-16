import React,{Component, useState} from 'react';
// import SwipeableViews from 'react-swipeable-views';
import ReactDom from 'react-dom';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import TabResultGrid from './tabResultGrid'

export default function TabContent(props){
    const [selectedName, setSelectedName] = useState('');

    if(props.data.results.length > 0){
        const items = props.data.results.filter((item)=>item.IssueType==props.type);
        const uniqueItemLabels = [...new Set(items.map((item)=>item.Name))];
        const nameSelected = (event, selectedName) => {
            console.log('Selected issue name: ', selectedName);
            setSelectedName(selectedName);
        }

        return (
            <div>
                <Autocomplete
                    id="combo-box-demo"
                    onChange ={(event, newValue)=>nameSelected(event, newValue)}
                    options={uniqueItemLabels}
                    getOptionLabel={(uniqueItemLabels) => uniqueItemLabels}
                    style={{ width: '96vw', marginTop:'5%' }}
                    renderInput={(params) => <TextField {...params} label={props.type} variant="outlined" />}
                />
                <TabResultGrid data={items} selectedName={selectedName}/>
            </div>
        )
    } else if(props.data.Crop !=='') {        
        return <label>No result found</label>
    } else{
        return <span></span>
    }    
}