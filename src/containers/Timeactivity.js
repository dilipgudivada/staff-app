import React from 'react';
import {
    Divider,
    Typography,
    makeStyles,
    Checkbox,
    TextField,
    Input,
    Grid,
    Box
  } from '@material-ui/core';
import Page from 'src/components/Page';
import logo from '../images/reloadtime-circle-512.png'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      flexGrow: 1,
    },
    },
    inputFieldStyle:{
      marginBottom:'15px',
      display:'flex'
    },
    labelWidth:{
      width:'100px'
    },
    discriptionLabel:{
      width:'85px',
      marginTop:'40px'
    },
    image:{
      position: 'absolute',
      top: '75px',
      width: '20px',
      height: '15px'
    }
}));

export default function Timeactivity(){
    const classes = useStyles();
    return(
        <Page
        className={classes.root}
        title="Timeactivity"
        >
          <Grid item xs={12}>
          <Box component="span" mt={2}>
          <img className={classes.image} src={logo} alt="Logo" />
          </Box>
          <Box component="span" ml={3}>
            <Typography
              color="textSecondary"
              display="inline"
              variant="body2"
            >
            Time Activity
            </Typography>
            </Box>
          </Grid>
          
            <Divider/>
            <form className={classes.root} noValidate autoComplete="off">
            <Grid container spacing={5}>
            <Grid item xs={6}>
            <Grid xs={12} className={classes.inputFieldStyle}>
              <label className={classes.labelWidth}>Date</label> 
              <TextField
                    id="date"
                    type="date"
                    className={classes.textField}
                    InputLabelProps={{
                    shrink: true,
                    }}
              /> 
            </Grid>
            <Grid xs={12} className={classes.inputFieldStyle}>
              <label className={classes.labelWidth}>Name</label>
              <Input/>
            </Grid>
           
            <Grid xs={12} className={classes.inputFieldStyle}>
              <label className={classes.labelWidth}>Customer</label>
              <Input/>
            </Grid>
            <Grid xs={12} className={classes.inputFieldStyle}>
              <label className={classes.labelWidth}>Service</label>
              <Input/>
            </Grid>
            <Checkbox
                checked= "true"
                // onChange={handleChange}
                inputProps={{ 'aria-label': 'primary checkbox' }}
            />   <label>Billable</label>
            </Grid>
            <Grid item xs={6}>
              <Grid xs={12} className={classes.inputFieldStyle}>
                <label className={classes.labelWidth}>Time</label>
                <Input/>
              </Grid>
              <Grid xs={12} className={classes.inputFieldStyle}>
                <label className={classes.discriptionLabel}>Description</label>
                <TextField
                    id="standard-multiline-static"
                    multiline
                    rows={4}
                    variant="outlined"
                />
              </Grid>
            </Grid>
            </Grid>
            </form>
        </Page>
    );
}