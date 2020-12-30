import React from "react";
import {
  Divider,
  Typography,
  makeStyles,
  Checkbox,
  TextField,
  Select,
  Grid,
  Box,
  NativeSelect,
  FormControl,
  InputLabel
} from "@material-ui/core";
import Page from "src/components/Page";
import logo from "../../images/reloadtime-circle-512.png";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import { timeActivityStyle } from "./TimeactivityStyle";
import axios from "axios";

const useStyles = makeStyles(() => timeActivityStyle);

export default function Timeactivity(props) {
  console.log("props",props.user);
  const classes = useStyles();
  const [user, setUser] = React.useState(props.user);
  const [customerData, setCustomerData] = React.useState([]);
  const [serviceData, setServiceData] = React.useState([]);
  const [toggleCheck, setToggleCheck] = React.useState(true);
  const form = React.useRef(null)
  const timeactivityData = (e) => {
    e.preventDefault();
    const data = new FormData(e.target)
    axios
      .post("http://localhost:5000/api/timeactivity", user)
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  React.useEffect(() => {
    getCustomer();
    getService();

  }, []);
  React.useEffect(()=>{
   setUser({ ...user, billable: toggleCheck })
  }, []);
  const getCustomer = () => {
    axios
      .get("http://localhost:5000/api/customer", {
      })
      .then(function(response) {
        setCustomerData(response.data.result);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  const getService = () => {
    axios
      .get("http://localhost:5000/api/service", {
      })
      .then(function(response) {
        setServiceData(response.data.result);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  return (
    <Page className={classes.root} title="Timeactivity">
      <Grid item xs={12}>
        <Box component="span" mt={2}>
          <img className={classes.image} src={logo} alt="Logo" />
        </Box>
        <Box component="span" ml={3}>
          <Typography color="textSecondary" display="inline" variant="body2">
            Time Activity
          </Typography>
        </Box>
      </Grid>

      <Divider />
      <form className={classes.root} noValidate autoComplete="off" ref={form} onSubmit={timeactivityData}>
        <Grid container spacing={6}>
        <Grid xs={10}>

        <TextField
            fullWidth
            label="Date"
            margin="normal"
            name="date"
            onChange={e => setUser({ ...user, date: e.target.value })}
            type="date"
            value={user && user.date ? user.date : ''}
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
          />
          </Grid>

          <Grid xs={10}>
          <TextField
            fullWidth
            label="Name"
            margin="normal"
            name="name"
            onChange={e => setUser({ ...user, name: e.target.value })}
            type="text"
            value={user && user.name ? user.name : 'DilipGudivada'}
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
          />
          </Grid>


        
            <Grid xs={10}>
          <TextField
            fullWidth
            label="Time"
            margin="normal"
            name="time"
            onChange={e => setUser({ ...user, time: e.target.value })}
            type="text"
            value={user && user.time ? user.time : ''}
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
          />
          </Grid>
          <Grid xs={10}>
          <TextField
                fullWidth
                multiline
                rows={10}
                label="Description"
                name="description" 
                onChange={e => setUser({ ...user, description: e.target.value })} 
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
                value={user && user.description ? user.description : ''}
              />
            </Grid>
       
            <Grid xs={10}>`
            
            <FormControl variant="outlined" fullWidth >
            <InputLabel id="role-select-outlined-label" > Customer Name </InputLabel>
            <Select style={{ textAlign: 'left' }}
                            fullWidth
                            label="Customer Name"
                            inputProps={
                                {
                                    shrink: true,
                                }
                            }
                            placeholder="Select Customer"
                            variant="outlined"
                            name="customer"
                            onChange={e => setUser({ ...user, customer_name: e.target.value })} 
                            value={user && user.customer_name ? user.customer_name: ''}
                        >
                                        <option value="">None</option>
              {customerData.map((row) => (
              <option value={row.customer_name}>{row.customer_name}</option>))}
                        </Select>
                        </FormControl>
            </Grid>
            <Grid xs={10}>
            <FormControl variant="outlined" fullWidth >
            <InputLabel id="role-select-outlined-label" > Service </InputLabel>
            <Select style={{ textAlign: 'left' }}
                            fullWidth
                            label="Service"
                            inputProps={
                                {
                                    shrink: true,
                                }
                            }
                            placeholder="Select Service"
                            variant="outlined"
                            name="service"
                            onChange={e => setUser({ ...user, service_name: e.target.value })} 
                            value={user && user.service_name ? user.service_name: ''}
                        >
                                        <option value="">None</option>
              {serviceData.map((row) => (
              <option value={row.service_name}>{row.service_name}</option>))}
                        </Select>
                        </FormControl>
    </Grid>
            
            <Grid xs={10}>
          <Checkbox
              checked={toggleCheck}
              name="user[billable]"
              onChange={e => setToggleCheck(!toggleCheck)} 
              inputProps={{ "aria-label": "primary checkbox" }}
            />{" "}
            <label>Billable</label>
            </Grid>

          </Grid>
        
      <Button
        type="submit"
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
        startIcon={<SaveIcon />}
      >
        Save
      </Button>
      </form>
    </Page>
  );
}
