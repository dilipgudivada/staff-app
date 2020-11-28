import React from 'react';
import Page from 'src/components/Page';
import ReportData from './ReportData';
import { jsPDF } from "jspdf";
import autoTable from 'jspdf-autotable'
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


const useStyles = makeStyles({
  root: {
      margin: 5,
    },
  table: {
    minWidth: 650,
  },
});

function createData(Activity, calories, fat, carbs, protein, Billable) {
    return { Activity, calories, fat, carbs, protein, Billable };
  }
  
  const rows = [
    createData('11/01/2020', 'Cosmas Majachani', 'Off-Shore:No of Hours Worked', 'student moduke', 4.0, 'Yes'),
    createData('11/02/2020', 'Cosmas Majachani', 'Off-Shore:UI Services', 37, 4.3, 'Yes'),
    createData('11/01/2020', 'Cosmas Majachani', 'Off-Shore:No of Hours Worked', 24, 6.0, 'Yes'),
    createData('11/03/2020', 'Cosmas Majachani', 'Off-Shore:UI Services', 'student moduke', 4.3, 'No'),
    createData('11/02/2020', 'Cosmas Majachani', 'Off-Shore:No of Hours Worked', 49, 3.9, 'Yes'),
    createData('11/05/2020', 'Cosmas Majachani', 'Off-Shore:No of Hours Worked', 49, 3.9, 'Yes'),
    createData('11/01/2020', 'Cosmas Majachani', 'Off-Shore:UI Services', 'student moduke', 3.9, 'Yes'),
  ];
  
  export default function Report() {
    const classes = useStyles();
    const exportAsPdf = () => {
      var doc = new jsPDF();
      autoTable(doc, { html: '#table-data' })
      doc.save('table.pdf')
    };
    const printTable = () => {
      var content = document.getElementById("table-data-container");
      var pri = document.getElementById("ifmcontentstoprint").contentWindow;
      pri.document.open();
      console.log("content",content.innerHTML)
      pri.document.write(content.innerHTML);
      pri.document.close();
      pri.focus();
      pri.print();
    };
    return (
      <Page
      className={classes.root}
      title="Report"
    >
      <iframe id="ifmcontentstoprint" style={{height: '0px', width: '0px', position: 'absolute'}}></iframe>
      <div id="test-test"></div>
      <Grid item xs={12}>
      <ReportData 
        exportAsPdf={exportAsPdf}
        printTable={printTable}
        />
      <TableContainer component={Paper} id="table-data-container">
        <Table className={classes.table} aria-label="simple table" id="table-data">
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
  