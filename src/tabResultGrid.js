import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core'

const styles = {
    cell:{
        width:'50%',
        padding:'10px'
    },
    evenRow: {
        'background-color': '#f2f2f2'
    },
    table:{
        'width':'100%',
        'text-align':'left'
    }
};

function tabResultGrid(props){
    const {classes} = props;
    let issueTypeColHeader;
    switch(props.data[0].IssueType)
    {
        case 'pest': issueTypeColHeader = 'Pesticide';break;
        case 'disease': issueTypeColHeader = 'Medicine';break;
        case 'weed': issueTypeColHeader = 'Weedicide';break;
        default: issueTypeColHeader = 'Invalid data';break;
    }

    return(
        <div>
            <table className={classes.table}>
                <tr>
                    <th className={classes.cell}>{issueTypeColHeader}</th>
                    <th className={classes.cell}>Dosage</th>
                </tr>
                <tbody>
                {props.data.filter((item)=>item.Name===props.selectedName).map((item, index)=>{
                    return(
                        <tr key={index} className={index%2===0?classes.evenRow:'oddRow'}>
                            <td className={classes.cell}>{item.Medicine}</td>
                            <td>{item.Dosage} {item.DosageUnit}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>            
        </div>    
    )
}

tabResultGrid.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(tabResultGrid)