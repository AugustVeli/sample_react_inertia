import Paper from '@mui/material/Paper';
import { useForm } from '@inertiajs/react'
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import CloseIcon from '@mui/icons-material/Close';
import Stack from '@mui/material/Stack';
import MyAppBar from '../Layers/MyAppBar';

export default function Account({user}) {
    const { data, setData, post, processing, errors } = useForm({
            name: user.name,
            email: user.email,
            inTouch: user.inTouch,
            password: user.password,
    });

    function submit(e) {
        e.preventDefault();
        post('/account/update');
    }

    return(
        <>
            <MyAppBar />
            <Head title="Account" />
            <Paper square={true} elevation={3} sx={{
                position:"absolute",
                zIndex:3,
                width: "-webkit-fill-available"
            }}>
                <IconButton id="close-add-book" color="error" aria-label="Close the form">
                    <CloseIcon onClick={()=>handle_editBook('')}/>
                </IconButton>
                <Box component="form" onSubmit={submit} autoComplete='off'>
                    <Stack>
                        <TextField
                            id="filled-required"
                            label="User name"
                            type="text"
                            name="user_name"
                            value={data.name}
                            onChange={e => setData('book_name', e.target.value)}
                        />
                        <TextField
                            id="filled-required"
                            label="Email"
                            type="email"
                            name="email"
                            value={data.email}
                            onChange={e => setData('iso', e.target.value)}/>
                        <TextField
                            required
                            id="filled-required"
                            label="password"
                            type="password"
                            name="password"
                            value={data.password}
                            onChange={e => setData('author', e.target.value)}
                        />
                        <div>If you want to add</div>
                        <TextField
                            id="filled-required"
                            label="Contact info"
                            type="text"
                            name="contact_info"
                            placeholder='email:exa@email.com,telefon:xxx-xxx-xxx'
                            value={data.inTouch}
                            multiline
                            maxRows={6}
                            onChange={e => setData('author_org', e.target.value)}
                        />
                        <Button type='submit' variant="contained" disabled={processing}>Save</Button>
                    </Stack>

                </Box>
            </Paper>
        </>
    );
}
