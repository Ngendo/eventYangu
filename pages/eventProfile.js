import React from 'react';
import  Typography  from '@material-ui/core'; 
import  Grid  from '@material-ui/core';
import  TextField  from '@material-ui/core';
import  FormControlLabel from '@material-ui/core';
import Checkbox  from '@material-ui/core';

export default function eventProfile() {
    return (
        <React.Fragment>
            <Typography variant ="h6"gutterBottom>
                Event Profile
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                  <TextField
                     required
                     id="deceasedName"
                     name="deceasedName"
                     label="Deceased Name"
                     fullWidth
                     autoComplete="deceasedName"
                  />
              </Grid>
              <Grid item xs={12} sm={6}>
          <TextField
            required
            id="dateofbirth"
            name="dateofbirth"
            label="Date of Birth"
            fullWidth
            autoComplete="Date of birth"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="dateofdeath"
            name="dateofdeath"
            label="dateofdeath"
            fullWidth
            autoComplete="Date of death"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="eventdays"
            name="eventdays"
            label="Days to run the event"
            fullWidth
            autoComplete="Days for event to run"
          />
        </Grid>
        </Grid>
        </React.Fragment>
    )
}
