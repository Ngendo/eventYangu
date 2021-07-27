import PropTypes from 'prop-types'
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function AdminForm() {
    return (
      <React.Fragment>
          <Typography variant ="h6" gutterBottom>
              Admin Address
          </Typography>
          <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                  <TextField
                     required
                     id="firstName"
                     name="firstName"
                     label="First name"
                     fullWidth
                     autoComplete="given-name"
                  />
              </Grid>
              <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="phone"
            name="phone"
            label="phone"
            fullWidth
            autoComplete="phone number"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="password"
            name="password"
            label="Password/Pin"
            fullWidth
            autoComplete="password"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField id="state" name="state" label="State/Province/Region" fullWidth />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid>
          </Grid>
      </React.Fragment>
    );
}

export default AdminForm

