import Paper from '@mui/material/Paper';
import { useForm, Head } from '@inertiajs/react'
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import CloseIcon from '@mui/icons-material/Close';
import Stack from '@mui/material/Stack';
import MyAppBar from '../Layers/MyAppBar';

export default function Account({user, user_is_auth}) {
    console.log(user);
    const { data, setData, post, processing, errors } = useForm({
            name: user[0].name,
            email: user[0].email,
            inTouch: user[0].inTouch,
            password: user[0].password,
    });

    function submit(e) {
        console.log('submit');
        e.preventDefault();
        post('/account/update');
    }

    function submitDelete(e) {
        post('/account/delete');
    }

    return(
        <>
            <MyAppBar userAuth={user_is_auth}/>
            <Head title="Account" />
            <Paper square={true} elevation={3} sx={{
                position:"absolute",
                zIndex:3,
                width: "-webkit-fill-available"
            }}>
                <Box component="form" onSubmit={submit} autoComplete='off'>
                    <Stack>
                        <TextField
                            required
                            sx={{marginTop:'15px'}}
                            id="filled-required"
                            label="User name"
                            type="text"
                            name="name"
                            value={data.name}
                            onChange={e => setData('name', e.target.value)}
                        />
                        <TextField
                            required
                            sx={{marginTop:'15px'}}
                            id="filled-required"
                            label="Email"
                            type="email"
                            name="email"
                            value={data.email}
                            onChange={e => setData('email', e.target.value)}/>
                        <TextField
                            required
                            sx={{marginTop:'15px'}}
                            id="filled-required"
                            label="Password"
                            type="password"
                            name="password"
                            value={data.password}
                            onChange={e => setData('password', e.target.value)}
                        />
                        <TextField
                            required
                            sx={{marginTop:'15px'}}
                            id="filled-required"
                            label="Contact info"
                            type="text"
                            name="inTouch"
                            placeholder='email:exa@email.com,telefon:xxx-xxx-xxx'
                            value={data.inTouch}
                            multiline
                            maxRows={6}
                            onChange={e => setData('inTouch', e.target.value)}
                        />
                        <Button type='submit' variant="contained" disabled={processing}>Save</Button>
                    </Stack>
                </Box>
                <Box component="form" sx={{marginTop:'15px'}} onSubmit={submitDelete}>
                    <Button type='submit'color='error' variant="contained" disabled={processing}>Delete Account</Button>
                </Box>
            </Paper>
        </>
    );
}
