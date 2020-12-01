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

// function createData(Activity, calories, fat, carbs, protein, Billable) {
//     return { Activity, calories, fat, carbs, protein, Billable };
//   }
  
  // const rows = [
  //   createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 'Yes'),
  //   createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 'Yes'),
  //   createData('Eclair', 262, 16.0, 24, 6.0, 'Yes'),
  //   createData('Cupcake', 305, 3.7, 67, 4.3, 'No'),
  //   createData('Gingerbread', 356, 16.0, 49, 3.9, 'Yes'),
  // ];
  const headers = [
    { label: "Activity Date", key: "activity" },
    { label: "Customer", key: "calories" },
    { label: "Product", key: "fat" },
    { label: "Memo", key: "carbs" },
    { label: "Duration", key: "protein" },
    { label: "Billable", key: "billable" }
  ];

  const rows = [
    {activity: '11/01/2020', calories: 'Cosmas Majachani', fat: 'Off-Shore:No of Hours Worked', carbs: 'student moduke', protein: 4.0, billable: 'Yes'},
    {activity: '11/01/2020', calories: 'Cosmas Majachani', fat: 'Off-Shore:UI Services', carbs: 'student moduke', protein: 6.0, billable: 'Yes'},
    {activity: '11/01/2020', calories: 'Cosmas Majachani', fat: 'Off-Shore:No of Hours Worked', carbs: 'student moduke', protein: 9.0, billable: 'No'},
    {activity: '11/01/2020', calories: 'Cosmas Majachani', fat: 'Off-Shore:UI Services', carbs: 'student moduke', protein: 3.0, billable: 'Yes'},
    {activity: '11/01/2020', calories: 'Cosmas Majachani', fat: 'Off-Shore:UI Services', carbs: 'student moduke', protein: 7.0, billable: 'No'},
    {activity: '11/01/2020', calories: 'Cosmas Majachani', fat: 'Off-Shore:UI Services', carbs: 'student moduke', protein: 7.0, billable: 'No'},
    {activity: '11/01/2020', calories: 'Cosmas Majachani', fat: 'Off-Shore:UI Services', carbs: 'student moduke', protein: 7.0, billable: 'No'},
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
        headers={headers}
        data={rows}
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
              <TableRow key={row.activity}>
                <TableCell component="th" scope="row">
                  {row.activity}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
                <TableCell align="right">{row.billable}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </Grid>
      </Page>
    );
  }
  