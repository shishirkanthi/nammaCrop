import React,{Component} from 'react';
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
  
  export default function Results(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    const handleChangeIndex = (index) => {
      setValue(index);
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
            <TabContent data={props.data} type='pest'/>
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            {/* <List data={props.data} type='disease'/> */}
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            {/* <List data={props.data} type='weed'/> */}
          </TabPanel>
        {/* </SwipeableViews> */}
      </div>
    );
  }
