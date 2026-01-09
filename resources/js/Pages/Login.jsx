import React from "react";
// import "./style.css";
import Button from "@mui/material/Button";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from '@mui/material/Grid';
import Typography from "@mui/material/Typography";
import {createTheme}  from '@mui/material/styles';
import Container from "@mui/material/Container";
import { useForm, Head } from '@inertiajs/react'


const useStyles = createTheme(theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(10)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export default function Login() {

    const { data, setData, post, processing, errors } = useForm({
            email:'',
            password:''
    });

    function submit(e) {
        e.preventDefault();
        post('/login');
    }

    const classes = useStyles;

    return (
        <Container component="main" maxWidth="xs" sx={{marginTop:"200px"}}>
            <Link href="/" color='inherit'>
                <Button variant="contained" color='success' startIcon={<ArrowBackIcon/>} />
            </Link>
            <CssBaseline />
            <Head title='Login'/>
            <div className={classes.paper}>
                <Typography component="h1" variant="h4" sx={{marginBottom:"20px"}}>
                    Log in
                </Typography>
                <form className={classes.form}
                      onSubmit={submit}
                      autoComplete='off'
                      noValidate
                >
                    <Grid container spacing={2}>
                        <Grid size={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                value={data.book_name}
                                onChange={e => setData('email', e.target.value)}
                            />
                        </Grid>
                        <Grid size={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                value={data.password}
                                onChange={e => setData('password', e.target.value)}
                            />
                        </Grid>
                        <Grid size={12}>
                            <FormControlLabel
                                control={<Checkbox value="allowExtraEmails" color="primary" />}
                                label="I want to receive inspiration, marketing promotions and updates via email."
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign In
                    </Button>
                    <Grid container justify="flex-end">
                        <Grid >
                            <Link href="/register" variant="body2">
                                Don't have an account? Sign up
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
  );
}
