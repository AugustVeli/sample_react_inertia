import {useState} from 'react';
import { usePage } from '@inertiajs/react'
import Button from '@mui/material/Button';
import AddNewBook from '../Components/AddNewBook';
import EditBook from '../Components/EditBook';
import { Head } from '@inertiajs/react'
import CustomAlert from '../Components/CustomAlert';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Modal from '@mui/material/Modal';
import WantLook from '../Components/WantLook';
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

const styleBox = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


export default function Dashboard_Book({books, users, user_is_auth}) {
    const { flash } = usePage().props;
    const [addBook, setAddBook] = useState('');
    const [editBook, setEditBook] = useState('');
    const [book, setBook] = useState('');
    const [open, setOpen] = useState({myBoolean:false, myIndex:''});

    const handleOpen = (index) => setOpen({myBoolean:true, myIndex:index});
    const handleClose = () => setOpen({myBoolean:false, myIndex:''});

    const handle_addBook = (item) => setAddBook(item);
    const handle_editBook = (item) => setEditBook(item);

    return(
        <>
            <MyAppBar userAuth={user_is_auth}/>
            {console.log(users, 'users')}
            {console.log(books, 'books')}
            {console.table(flash.message_success)}
            {flash.message_success && <CustomAlert type={'success'} message={flash.message_success}/>}
            {users[0][0].length !=0 && <CustomAlert type={'success'} message={'Some people want to get in touch'}/>}
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
                </Stack>
            </Container>

            <Container component="main" maxWidth="lg" sx={{margin:"auto"}}>
                <Stack spacing={2}>

                    {books.map((book, index)=>{
                        return(
                        <>
                            <Item key={index}>
                                   {users[0][0].length!= 0 ? <div>
                                        <Modal
                                            open={open.myBoolean}
                                            onClose={handleClose}
                                            aria-labelledby="modal-modal-title"
                                            aria-describedby="modal-modal-description"
                                        >
                                            <Box sx={styleBox}>
                                                 <WantLook users={users[open.myIndex]}/>
                                            </Box>
                                        </Modal>
                                        <Button color='warning' onClick={()=>handleOpen(index)}>Users want the book</Button>
                                    </div>: ''}
                                    <Link href={`/one_book/${book.id}`} underline="none">
                                        {book.book_name}
                                    </Link>
                                    <Button color='info' variant="contained" onClick={()=>{handle_editBook(null); setBook(book)}}>Edit</Button>
                                    <Button color='error'variant="contained" href={`/account/dashboard/delete_book/${book.id}`}>Delete</Button>
                            </Item>
                        </>)})}
                </Stack>
            </Container>
        </>

    )
}
