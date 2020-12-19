import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { CSVLink } from "react-csv";
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
    width:'100px',
    display:'flex',
    justifyContent: 'space-around',
    marginRight: '20px'
  },
  exportList:{
    display:'flex',
    flexDirection: 'column',
    backgroundColor: '#f4f6f8',
    justifyContent: 'space-around',
    height:'50px',
    border: '1px solid #d2d1d1',
    borderRadius: '3px',
    width: '130px',
    textAlign: 'center'
  },
  exportListItem:{
    backgroundColor: '#ffffff',
    cursor: 'pointer',
    color: 'black',
    '&:hover': {
      background: '#3f51b5',
      color: '#ffffff'
    }
  },
}));

const ReportData = ({ exportAsPdf, printTable, data, headers}) => {
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
              <ImportExportIcon onClick={anchorElHandleClick}/>
              <PrintIcon onClick={printTable}/>
            </div> 
          </div>
          <Divider/>
          <Popper id={id} open={open} anchorEl={anchorEl}>
            <div className={classes.exportList}>
              <CSVLink className={classes.exportListItem} data={data} headers={headers}>
                <span >Export as CSV</span>
              </CSVLink>
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
            Activity:{`${moment().format('mm dd yyyy')}`}
          </Typography>
        </Box>
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
