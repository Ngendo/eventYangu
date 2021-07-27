import React, { useState } from 'react';
import Button from '../components/CustomButtons/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import GridContiner from '../components/Grid/GridContainer';
import logo from '../assets/img/reactlogo.png';
import { useRouter } from 'next/router';
import * as Yup from 'yup';
import axios from 'axios';
import cookie from 'js-cookie';
import Link from 'next/link';
import { Formik } from 'formik';
import Alert from '@material-ui/lab/Alert';
import Snackbar from 'components/Snackbar/Snackbar.js';

const useStyles = makeStyles((theme) => ({
  formFields: {
    width: '100%',
    margin: theme.spacing(3, 4),
    color: 'green',
  },
  image: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '20%',
    width: '30%',
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(10, 4),
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  typography: {
    fontWeight: 'bold',
    margin: theme.spacing(5),
  },
  formHeaders: {
    fontWeight: 'bold',
    margin: theme.spacing(0, 4),
  },
}));

export default function SignInSide() {
  const classes = useStyles();
  const router = useRouter();

  const [openAlert, setOpenAlert] = useState(false);
  const handleOpenAlert = () => setOpenAlert(true);
  const [showError, setShowError] = useState(false);

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7}>
        <img src={logo} alt="LOGO" className={classes.image} />
      </Grid>

      <Grid item xs={12} sm={8} md={5} elevation={6} square>
        <Paper className={classes.paper}>
          <Typography variant="h4" className={classes.typography}>
            Sign in
          </Typography>

          <Formik
            initialValues={{
              email: 'susan@dataintegrated.co.ke',
              password: 'susan@dataintegrated.co.ke',
            }}
            validationSchema={Yup.object().shape({
              email: Yup.string()
                .email('Must be a valid email')
                .max(255)
                .required('Email is required'),
              password: Yup.string().max(255).required('Password is required'),
            })}
            onSubmit={async (values) => {
              try {
                await axios({
                  method: 'post',
                  url: 'http://localhost:4000/v1/login',
                  data: values,
                }).then((data) => {
                  if (data && data.data.token) {
                    cookie.set('token', data.data.token, { expires: 3 });
                    localStorage.setItem(
                      'user',
                      JSON.stringify({
                        isAdmin: data.data.isAdmin,
                        firstname: data.data.firstname,
                        lastname: data.data.lastname,
                        username: data.data.username,
                        email: data.data.email,
                        aboutme: data.data.aboutme,
                        userid: data.data._id,
                      })
                    );
                    handleOpenAlert();

                    const userData = JSON.parse(localStorage.getItem('user'));
                    setShowError(false);
                    if (userData.isAdmin === true && data.data.token) {
                      return router.push('/admin/dashboard');
                    } else if (!userData.isAdmin && data.data.token)
                      router.push('/customer-care/dashboard');
                  }
                });
              } catch (err) {
                setShowError(true);
                console.log('login error...', err);
              }
            }}
          >
            {({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              touched,
              values,
            }) => (
              <form className={classes.form} onSubmit={handleSubmit} noValidate>
                <GridContiner>
                  <Typography
                    className={classes.formHeaders}
                    variant="subtitle1"
                  >
                    Email
                  </Typography>
                  <TextField
                    error={Boolean(touched.email && errors.email)}
                    helperText={touched.email && errors.email}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type="email"
                    value={values.email}
                    size="small"
                    className={classes.formFields}
                    variant="outlined"
                    margin="normal"
                    required
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                  />
                  <Typography
                    className={classes.formHeaders}
                    variant="subtitle1"
                  >
                    Password
                  </Typography>
                  <TextField
                    error={Boolean(touched.password && errors.password)}
                    helperText={touched.password && errors.password}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.password}
                    size="small"
                    className={classes.formFields}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                  />
                  <div className={classes.formFields}>
                    <Button
                      type="submit"
                      variant="contained"
                      color={'primary'}
                      className={classes.formFields}
                    >
                      Sign In
                    </Button>
                  </div>
                  <Grid container>
                    <Grid item xs>
                      <Typography style={{ marginLeft: 34 }} variant="body2">
                        Forgot password?
                      </Typography>
                    </Grid>
                  </Grid>
                </GridContiner>
              </form>
            )}
          </Formik>
        </Paper>
      </Grid>
    </Grid>
  );
}