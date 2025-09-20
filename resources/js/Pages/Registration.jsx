import Container from '@mui/material/Container';
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export default function Registration() {
    return(
        <Container component="main" maxWidth="xs">
            <form action="" method="post">
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            fullWidth
                            variant="outlined"
                            name="email"
                            type="email"
                            id="email"
                            label="Email"
                            autoFocus
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            fullWidth
                            type="password"
                            variant="outlined"
                            name="password"
                            id="password"
                            label="Password"
                            autoFocus
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            fullWidth
                            type="password"
                            variant="outlined"
                            name="password_repeat"
                            id="password_repeat"
                            label="Repeat password"
                            autoFocus
                        />
                    </Grid>
                </Grid>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    >
                    Sign Up
                </Button>
            </form>
        </Container>
    );
}
