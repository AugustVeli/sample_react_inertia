import {useState} from 'react';
import { useForm } from '@inertiajs/react'
import dayjs from 'dayjs';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimeField } from '@mui/x-date-pickers/DateTimeField';;

export default function AddNewAuthor({handle_addAuthor}) {
    const [valueBirth, setValueBirth] = useState(dayjs());
    const [valueDeath, setValueDeath] = useState(dayjs());
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
        post('/admin/dashboard/add_author');
    }

    function save_birth(value) {
        const obj = dayjs(value).format('DD/MM/YYYY');
        setData('date_birth', obj);
        return value;
    }

    function save_death(value) {
        const obj = dayjs(value).format('DD/MM/YYYY');
        setData('date_death', obj);
        return value;
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
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DateTimeField
                            required
                            id="filled-required"
                            label="The date of birth"
                            name="date_birth"
                            format='DD/MM/YYYY'
                            value={valueBirth}
                            onChange={(newValue) =>{
                                setValueBirth(newValue);
                                save_birth(newValue);
                            }}
                        />
                        <DateTimeField
                            id="filled-required"
                            label="The date of death"
                            name="date_death"
                            format='DD/MM/YYYY'
                            value={valueDeath}
                            onChange={(newValue) => {
                                setValueDeath(newValue);
                                save_death(newValue);
                            }}
                        />
                    </LocalizationProvider>
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
