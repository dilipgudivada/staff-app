import React from 'react';
//import { makeStyles } from '@material-ui/core/styles';
//import Table from '@material-ui/core/Table';
//import TableBody from '@material-ui/core/TableBody';
//import TableCell from '@material-ui/core/TableCell';
//import TableContainer from '@material-ui/core/TableContainer';
//import TableHead from '@material-ui/core/TableHead';
//import TableRow from '@material-ui/core/TableRow';
//import Paper from '@material-ui/core/Paper';
import Page from 'src/components/Page';
import ReportData from './ReportData';
//import Grid from '@material-ui/core/Grid';
import {
  Divider,
  Typography,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Grid
} from '@material-ui/core';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import PrintIcon from '@material-ui/icons/Print';
import EmailIcon from '@material-ui/icons/Email';
import SettingsIcon from '@material-ui/icons/Settings';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(Activity, calories, fat, carbs, protein, Billable) {
    return { Activity, calories, fat, carbs, protein, Billable };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 'Yes'),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 'Yes'),
    createData('Eclair', 262, 16.0, 24, 6.0, 'Yes'),
    createData('Cupcake', 305, 3.7, 67, 4.3, 'No'),
    createData('Gingerbread', 356, 16.0, 49, 3.9, 'Yes'),
  ];
  
  export default function Report() {
    const classes = useStyles();
  
    return (
      <Page
      className={classes.root}
      title="Report"
    >
      <Grid item xs={12}>
      <ReportData/>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Activity Date</TableCell>
              <TableCell align="right">Customer</TableCell>
              <TableCell align="right">Product</TableCell>
              <TableCell align="right">Memo</TableCell>
              <TableCell align="right">Duration</TableCell>
              <TableCell align="right">Billable</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.Activity}>
                <TableCell component="th" scope="row">
                  {row.Activity}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
                <TableCell align="right">{row.Billable}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </Grid>
      </Page>
    );
  }
  