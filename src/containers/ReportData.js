import React, {useState} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import moment from 'moment';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
  makeStyles,
  Grid,
  Popper
} from '@material-ui/core';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import PrintIcon from '@material-ui/icons/Print'
import EmailIcon from '@material-ui/icons/Email';
import SettingsIcon from '@material-ui/icons/Settings';

const useStyles = makeStyles(() => ({
  root: {},
  header: {
    float:'left',
    width: '100%',
    margin:'10px 0 10px'
  },
  iconHeader:{
    width:'100%',
    height:'30px'
  },
  headIcons: {
    float:'right',
    width:'150px',
    display:'flex',
    justifyContent: 'space-around' 
  },
  exportList:{
    display:'flex',
    flexDirection: 'column',
    backgroundColor: '#f4f6f8',
    justifyContent: 'space-around',
    height:'50px',
    border: '1px solid #d2d1d1',
    borderRadius: '3px',
  },
  exportListItem:{
    backgroundColor: '#ffffff',
    cursor: 'pointer',

  },
}));

const ReportData = ({ className, exportAsPdf, printTable, ...rest }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const anchorElHandleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;
  return (
    <Grid item xs={12}>
        <Grid item xs={12}>
          <div className={classes.iconHeader}>
            <div className={classes.headIcons}>
              <EmailIcon/>
              <PrintIcon onClick={printTable}/>
              <ImportExportIcon onClick={anchorElHandleClick}/>
            </div> 
          </div>
          <Divider/>
          <Popper id={id} open={open} anchorEl={anchorEl}>
            <div className={classes.exportList}>
              <span className={classes.exportListItem} >Export as Excel</span>
              <span className={classes.exportListItem} onClick = {exportAsPdf}>Export as PDF</span>
            </div>
          </Popper>
        </Grid>
    {/* <Card
      className={clsx(classes.root, className)}
      {...rest}
    > */}
     <div className={classes.header}>
        <Box
          alignItems="center"
          display="flex"
          flexDirection="column"
        >         
          <Typography
            color="textSecondary"
            variant="body1"
          >
            Time Activities by Emp
          </Typography>
          <Typography
            className={classes.dateText}
            color="textSecondary"
            variant="body1"
          >
            Activity:{`${moment().format(' MMMM Do YYYY')}`}
          </Typography>
        </Box>
        <Typography
            color="textSecondary"
            variant="body1"
          >
            Empolyee Name: Dilip Gudivada
          </Typography>
     </div>
      <Divider />
    {/* </Card> */}
    </Grid>
  );
};

ReportData.propTypes = {
  className: PropTypes.string
};

export default ReportData;
