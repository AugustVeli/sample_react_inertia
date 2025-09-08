import * as React from 'react';
import { useForm } from '@inertiajs/react'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

export default function AddNewAuthor({handle_addAuthor}) {

    const { data, setData, post, processing, errors } = useForm({
            author: '',
            author_russian: '',
            type: '',
            date_birth: '',
            date_death: '',
            description: '',
        });

    function submit(e) {
        e.preventDefault();
        post('/admin/dashbord/add_author');
    }

    return(
        <Box>
            <IconButton color="error" aria-label="Close the form">
                <CloseIcon onClick={()=>handle_addAuthor('')}/>
            </IconButton>
            <Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }} onSubmit={submit} autoComplete="off">
                <TextField
                    required
                    id="filled-required"
                    type="text"
                    label="Author in English"
                    name="author"
                    value={data.author}
                    onChange={e => setData('author', e.target.value)}
                />
                <TextField
                    required
                    id="filled-required"
                    type="text"
                    label="Author in Russian"
                    name="author_russian"
                    value={data.author_russian}
                    onChange={e => setData('author_russian', e.target.value)}
                />
                <TextField
                    required
                    id="filled-required"
                    type="text"
                    label="Type of the author"
                    name="type"
                    value={data.type}
                    onChange={e => setData('type', e.target.value)}
                />
                <TextField
                    required
                    id="filled-required"
                    type="text"
                    label="The date of birth"
                    name="date_birth"
                    value={data.date_birth}
                    onChange={e => setData('date_birth', e.target.value)}
                />
                <TextField
                    id="filled-required"
                    type="text"
                    label="The date of death"
                    name="date_death"
                    value={data.date_death}
                    onChange={e => setData('date_death', e.target.value)}
                />
                <TextField
                    required
                    id="filled-multiline-static"
                    multiline
                    rows={6}
                    type="text"
                    label="Description"
                    name="description"
                    value={data.description}
                    onChange={e => setData('description', e.target.value)}
                />
                <Button type="submit" color="success" disabled={processing}>Create Book</Button>
            </Box>
        </Box>

    )

}
