import Container from '@mui/material/Container';
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useForm } from '@inertiajs/react'

export default function Registration() {

    const { data, setData, post, processing, errors } = useForm({
            // _token: props.csrf_token,
            name:'',
            email:'',
            password:''
    });

    function submit(e) {
        e.preventDefault();
        post('/register');
    }

    return(
            <>
            <Container sx={{marginBottom:"20px"}} component="header" maxWidth="xs">
                <Typography component="h1" variant="h5">
                    Sign In
                </Typography>
            </Container>
            <Container component="main" maxWidth="xs">
            <form action="" onSubmit={submit} method="post" autoComplete='off'>
                <Grid container spacing={2}>
                    <Grid size={12} sm={6}>
                        <TextField
                            required
                            fullWidth
                            type="text"
                            variant="outlined"
                            name="name"
                            id="name"
                            label="Name"
                            autoFocus
                            value={data.name}
                            onChange={e => setData('name', e.target.value)}
                        />
                    </Grid>
                    <Grid size={12} sm={6}>
                        <TextField
                            required
                            fullWidth
                            type="email"
                            variant="outlined"
                            name="email"
                            id="email"
                            label="Email"
                            autoFocus
                            value={data.email}
                            onChange={e => setData('email', e.target.value)}
                        />
                    </Grid>
                    <Grid size={12} sm={6}>
                        <TextField
                            required
                            fullWidth
                            type="password"
                            variant="outlined"
                            name="password"
                            id="password"
                            label="Password"
                            autoFocus
                            onChange={e => setData('password', e.target.value)}
                        />
                    </Grid>
                    <Grid size={12} sm={6}>
                        <TextField
                            required
                            fullWidth
                            type="password"
                            variant="outlined"
                            name="password_confirmation"
                            id="password_confirmation"
                            label="Repeat password"
                            autoFocus
                            onChange={e => setData('password_confirmation', e.target.value)}
                        />
                    </Grid>
                </Grid>
                <Button
                    sx={{marginTop:"30px"}}
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    >
                    Sign Up
                </Button>
            </form>
        </Container>
        </>
    );
}
