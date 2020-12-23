import React,{Component, useEffect, useState} from 'react';
// import SwipeableViews from 'react-swipeable-views';
import ReactDom from 'react-dom';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import TabResultGrid from './tabResultGrid'

export default function TabContent(props){
    console.log('tabContent.js > props.selectedValue: ', props.selectedValue);
    const items = props.data.filter((item)=>item.IssueType==props.type);
    const uniqueItemLabels = [...new Set(items.map((item)=>item.Name))];
    
    const nameSelected = (event, selectedValue) => {
        console.log('Selected issue name: ', selectedValue);
        props.onSelect(selectedValue, props.type);
    }
    // console.log('tabContent.js', props.selectedValue)
    return (
        <div>
            {console.log('before autocomplete:', props.selectedValue)}
            <Autocomplete                
                id="combo-box-demo"
                onChange ={(event, newValue)=>nameSelected(event, newValue)}
                options={uniqueItemLabels.sort()}
                getOptionLabel={(uniqueItemLabels) => uniqueItemLabels}                    
                defaultValue={props.selectedValue}
                style={{ width: '96vw', marginTop:'5%', textTransform: 'capitalize' }}                
                renderInput={(params) => { return (<TextField {...params} inputProps={{...params.inputProps}} label={props.type} variant="outlined"/>)}}
            />                
            <TabResultGrid data={items} selectedName={props.selectedValue} issueType={props.type}/>
        </div>
    )    
}