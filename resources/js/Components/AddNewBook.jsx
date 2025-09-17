import * as React from 'react';
import { useForm, usePage } from '@inertiajs/react'
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import CloseIcon from '@mui/icons-material/Close';


export default function AddNewBook({handle_addBook}) {
    const { data, setData, post, processing, errors } = useForm({
            book_name: '',
            iso: '',
            author: '',
            author_russian: '',
            name_genre: '',
            editor: '',
            binding: '',
            amount: '',
            price: '',
        });

    function submit(e) {
        e.preventDefault();
        post('/admin/dashboard/add_book');
    }

    return(
        <Box>
            <IconButton color="error" aria-label="Close the form">
                <CloseIcon onClick={()=>handle_addBook('')}/>
            </IconButton>
            <Box component="form" onSubmit={submit}>
                <TextField
                    required
                    id="filled-required"
                    label="Name of the book"
                    type="text"
                    name="book_name"
                    value={data.book_name}
                    // variant="filled"
                    onChange={e => setData('book_name', e.target.value)}
                />
                <TextField
                    required
                    id="filled-required"
                    label="ISO"
                    type="text"
                    name="iso"
                    value={data.iso}
                    onChange={e => setData('iso', e.target.value)}/>
                <TextField
                    required
                    id="filled-required"
                    label="Author of the book"
                    type="text"
                    name="author"
                    value={data.author}
                    onChange={e => setData('author', e.target.value)}
                />
                <TextField
                    id="filled-required"
                    label="Author in Russian"
                    type="text"
                    name="author_russian"
                    value={data.author_russian}
                    onChange={e => setData('author_russian', e.target.value)}
                />
                <TextField
                    required
                    id="filled-required"
                    label="Genre of the book"
                    type="text"
                    name="name_genre"
                    value={data.name_genre}
                    onChange={e => setData('name_genre', e.target.value)}
                />
                <TextField
                    id="filled-required"
                    label="Editor"
                    type="text"
                    name="editor"
                    value={data.editor}
                    onChange={e => setData('editor', e.target.value)}
                />
                <TextField
                    required
                    id="filled-required"
                    label="Binding"
                    type="text"
                    name="binding"
                    value={data.binding}
                    onChange={e => setData('binding', e.target.value)}
                />
                <TextField
                    required
                    id="filled-required"
                    label="Amount"
                    type="text"
                    name="amount"
                    value={data.amount}
                    onChange={e => setData('amount', e.target.value)}
                />
                <TextField
                    required
                    id="filled-required"
                    label="Price"
                    type="text"
                    name="price"
                    value={data.price}
                    onChange={e => setData('price', e.target.value)}
                />
                <Button type='submit' variant="contained" disabled={processing}>Add book</Button>
            </Box>
        </Box>
    )
}
