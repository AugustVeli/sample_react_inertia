import { useState, useEffect }from 'react';
import { useForm } from '@inertiajs/react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import TextField from '@mui/material/TextField';
import AddNewAuthor from '../Components/AddNewAuthor';

export default function Dashboard_Author({authors}) {

    const [showAlert, setShowAlert] = useState(null)
    const [addAuthor, setAddAuthor] = useState('')
    const handle_addAuthor = (item) => setAddAuthor(item);

    useEffect(() => {
        const timeId = setTimeout(() => {
            // After 3 seconds set the show value to false
            setShowAlert(false)
        }, 5000)

        return () => {
            clearTimeout(timeId)
        }
    }, []);

    return(
        <>
            {showAlert ??
                    <Alert sx={{
                                position:"absolute",
                                left: 0,
                                right: 0,
                                marginInline: "auto",
                                width: "fit-content",
                                marginTop: '50px'
                            }}
                            severity="success"
                            onClose={() => {setShowAlert('')}}>
                            You added a new author!
                    </Alert>
            }
            <h1>Authors</h1>
            <Button onClick={()=>handle_addAuthor(null)} color="success">Add book</Button>
            {addAuthor ?? <AddNewAuthor handle_addAuthor={handle_addAuthor}/>}
        </>
    )

}
