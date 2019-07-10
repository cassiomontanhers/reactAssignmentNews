import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));


const SimpleTabs = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs variant="fullWidth" centered value={props.activeTab} onChange={props.onChangeTab}>
          <Tab value="br" label="Brazil"/>
          <Tab value="fr" label="France"/>
          <Tab value="search" label="Search Results"/>
          <Tab value="us" label="USA"/>
          <Tab value="it" label="Italy"/>
        </Tabs>
      </AppBar>
    </div>
  );
}

export default SimpleTabs
