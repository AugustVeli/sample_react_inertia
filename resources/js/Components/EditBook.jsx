import * as React from 'react';
import Paper from '@mui/material/Paper';
import { useForm } from '@inertiajs/react'
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import CloseIcon from '@mui/icons-material/Close';
import Stack from '@mui/material/Stack';

export default function EditBook({handle_editBook, book}) {
    const { data, setData, post, processing, errors } = useForm({
            photo_link: book.photo_link,
            book_name: book.book_name,
            iso: book.iso,
            author: book.author,
            author_org: book.author_org,
            name_genre: book.name_genre,
            binding: book.binding,
            publisher: book.publisher,
            description: book.description,
            location: book.location,
            amount: book.amount,
        });

    function submit(e) {
        e.preventDefault();
        handle_editBook('');
        post(`/account/dashboard/update_book/${book.id}`);
    }

    return(
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
                        required
                        id="filled-required"
                        label="Photo link"
                        type="text"
                        name="photo_link"
                        value={data.photo_link}
                        onChange={e => setData('photo_link', e.target.value)}
                    />
                    <TextField
                        required
                        id="filled-required"
                        label="Name of the book"
                        type="text"
                        name="book_name"
                        value={data.book_name}
                        onChange={e => setData('book_name', e.target.value)}
                    />
                    <TextField
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
                        label="Author in original"
                        type="text"
                        name="author_org"
                        value={data.author_org}
                        onChange={e => setData('author_org', e.target.value)}
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
                        label="Location"
                        type="text"
                        name="location"
                        value={data.location}
                        onChange={e => setData('location', e.target.value)}
                    />
                    {/* Make more places */}
                    <TextField
                        required
                        id="filled-required"
                        label="Description"
                        type="text"
                        name="description"
                        value={data.description}
                        onChange={e => setData('description', e.target.value)}
                    />
                    <Button type='submit' variant="contained" disabled={processing}>Save</Button>
                </Stack>

            </Box>
        </Paper>
    );
}
