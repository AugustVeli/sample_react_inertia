import {useState} from 'react';
import { useForm } from '@inertiajs/react'
import Button from '@mui/material/Box';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AddNewBook from '../Components/AddNewBook';

export default function Dashboard_Book({}) {

    const [addBook, setAddBook] = useState('')
    const handle_addBook = (item) => setAddBook(item);

    return(
        <>

            <Button onclick={()=>handle_addBook(null)} color="success">Add book</Button>
            {addBook ?? <AddNewBook handle_addBook={handle_addBook}/>}

        </>

    )
}
