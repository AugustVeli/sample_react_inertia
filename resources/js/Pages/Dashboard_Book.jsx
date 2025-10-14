import {useState, useEffect} from 'react';
import { usePage } from '@inertiajs/react'
import Button from '@mui/material/Button';
import AddNewBook from '../Components/AddNewBook';
import EditBook from '../Components/EditBook';
import { Head } from '@inertiajs/react'
import CustomAlert from '../Components/CustomAlert';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import MyAppBar from '../Layers/MyAppBar';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

export default function Dashboard_Book({books}) {
    const { flash } = usePage().props;
    const [addBook, setAddBook] = useState('');
    const [editBook, setEditBook] = useState('');
    const [book, setBook] = useState('');

    const handle_addBook = (item) => setAddBook(item);
    const handle_editBook = (item) => setEditBook(item);

    return(
        <>
            <MyAppBar/>
            {console.table(flash.message_success)}
            {/* <CustomAlert type={type} message={flash.message_error}/> */}
            {flash.message_success != null ? <CustomAlert type={'success'} message={flash.message_success}/> : ''}
            <Head title="Dashboard-Book" />

            {addBook ?? <AddNewBook handle_addBook={handle_addBook}/>}
            {editBook ?? <EditBook handle_editBook={handle_editBook} book={book}/>}
            <Container
                    sx={{
                        marginTop:"20px",
                        marginBottom:"20px",
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}
            >
                <Stack
                    direction="row"
                    divider={<Divider orientation="vertical" flexItem />}
                    spacing={2}
                >
                    <Item>
                        <Button
                            id="add-book"
                            onClick={()=>handle_addBook(null)}
                            color="success"
                        >
                            Add book
                        </Button>
                    </Item>
                    <Item>
                        <Button>Edit</Button>
                    </Item>
                    <Item>
                        <Button color="error">Delete</Button>
                    </Item>
                </Stack>
            </Container>

            <Container component="main" maxWidth="lg" sx={{margin:"auto"}}>
                <Stack spacing={2}>
                    {/* {console.table(books)} */}
                    {books.map((book, index)=>{
                        return <Item key={index}>{book.book_name}
                                    <Button color='info' variant="contained" onClick={()=>{handle_editBook(null); setBook(book)}}>Edit</Button>
                                    <Button color='error'variant="contained" href={`/account/dashboard/delete_book/${book.id}`}>Delete</Button>
                                </Item>

                    })}
                </Stack>
            </Container>
        </>

    )
}
