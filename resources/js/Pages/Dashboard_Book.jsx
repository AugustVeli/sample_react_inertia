import {useState} from 'react';
import { usePage } from '@inertiajs/react'
import Button from '@mui/material/Button';
import AddNewBook from '../Components/AddNewBook';
import { Head } from '@inertiajs/react'
import CustomAlert from '../Components/CustomAlert';

export default function Dashboard_Book({}) {
    const [type, setType] = useState('hello');
    const { flash } = usePage().props;
    const [addBook, setAddBook] = useState('');
    const handle_addBook = (item) => setAddBook(item);

    return(
        <>
            <CustomAlert type={type} message={flash.message_error}/>
            <CustomAlert type={type} message={flash.message_success}/>
            <Head title="Dashboard-Book" />
            <Button onClick={()=>handle_addBook(null)} color="success">Add book</Button>
            {addBook ?? <AddNewBook handle_addBook={handle_addBook}/>}

        </>

    )
}
