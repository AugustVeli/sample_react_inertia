import * as React from 'react';
import { useForm } from '@inertiajs/react'
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

export default function AddNewBook({handleNewBook}) {
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
        post('/admin/dashbord/add_book');
    }

    return(
        <Box>
            <IconButton color="error" aria-label="Close the form">
                <CloseIcon onClick={()=>handleNewBook('')}/>
            </IconButton>
            <form onSubmit={submit}>
                <TextField
                    required
                    id="filled-required"
                    label="Required"
                    name="book_name"
                    defaultValue={data.book_name}
                    value={data.book_name}
                    variant="filled"
                    onChange={e => setData('book_name', e.target.value)}
                />
                <input type="text" name="iso"  value={data.iso} onChange={e => setData('iso', e.target.value)}/>
                <input type="text" name="author" value={data.author} onChange={e => setData('author', e.target.value)}/>
                <input type="text" name="author_russian" value={data.author_russian} onChange={e => setData('author_russian', e.target.value)}/>
                <input type="text" name="name_genre" value={data.name_genre} onChange={e => setData('name_genre', e.target.value)}/>
                <input type="text" name="editor" value={data.editor} onChange={e => setData('editor', e.target.value)}/>
                <input type="text" name="binding" value={data.binding} onChange={e => setData('binding', e.target.value)}/>
                <input type="text" name="amount" value={data.amount} onChange={e => setData('amount', e.target.value)}/>
                <input type="text" name="price" value={data.price} onChange={e => setData('price', e.target.value)}/>
                <Button variant="contained" disabled={processing}>Add book</Button>
            </form>
        </Box>
    )
}
