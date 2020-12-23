import React,{Component, useState, useEffect} from 'react';
// import SwipeableViews from 'react-swipeable-views';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TabContent from './tabContent';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: theme.palette.background.paper,
      width: 500,
      marginTop:'5%'
    },
  }));

  export default function Results({...props}) {
    const classes = useStyles();
    const theme = useTheme();
    const [selectedPestName, setSelectedPestName] = useState('');
    const [selectedDiseaseName, setSelectedDiseaseName] = useState('');
    const [selectedWeedName, setSelectedWeedName] = useState('');
    const [value, setValue] = React.useState(0);

    useEffect(()=>{
      resetState();
    },[props.data]);

    console.log('post use Effect: ', props);

    const setSelectedIssueName = (val, issueType) => {
      console.log('results.js> setSelectedIssueName: ', val, 'type: ', issueType);
      switch(issueType){
        case 'pest': setSelectedPestName(val);
          break;
        case 'disease': setSelectedDiseaseName(val);
          break;
        case 'weed': setSelectedWeedName(val);
          break;
        default: console.log('results.js > setSelectedIssueName:: ', 'Error in issue name selection');
      }      
    }

    const resetState = () => {
      setSelectedPestName('');
      setSelectedDiseaseName('');
      setSelectedWeedName('');      
    }
    
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
          >
            <Tab label="Pests" {...a11yProps(0)} />
            <Tab label="Diseases" {...a11yProps(1)} />
            <Tab label="Weeds" {...a11yProps(2)} />
          </Tabs>
        </AppBar>
        {/* <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          onChangeIndex={handleChangeIndex}
        > */}
          <TabPanel value={value} index={0} dir={theme.direction}>
            <TabContent data={props.data} type='pest' selectedValue={selectedPestName} onSelect={setSelectedIssueName}/>
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <TabContent data={props.data} type='disease' selectedValue={selectedDiseaseName} onSelect={setSelectedIssueName}/>
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            <TabContent data={props.data} type='weed' selectedValue={selectedWeedName} onSelect={setSelectedIssueName}/>
          </TabPanel>
        {/* </SwipeableViews> */}
      </div>
    );
  }
