import {useState} from 'react';
import { usePage } from '@inertiajs/react'
import Button from '@mui/material/Button';
import AddNewBook from '../Components/AddNewBook';
import { Head } from '@inertiajs/react'
import CustomAlert from '../Components/CustomAlert';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

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

            {addBook ?? <AddNewBook handle_addBook={handle_addBook}/>}
            <Container
                    sx={{
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
                        <Button onClick={()=>handle_addBook(null)}
                                color="success">Add book
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

            <Container component="main" maxWidth="lg">

            </Container>
        </>

    )
}
