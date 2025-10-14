import { useState, useEffect, useCallback} from 'react';
import Alert from '@mui/material/Alert';

export default function CustomAlert({type, message}) {
    const [showAlert, setShowAlert] = useState(null);
    // const [messageShow, setMessageShow] = useState('');

    useEffect(() => {
        const timeId = setTimeout(() => {
            // After 3 seconds set the show value to false
            setShowAlert('')
        }, 5000)
        return () => clearTimeout(timeId);
    }, []);

    // useCallback(() => {
    //     // setMessageShow(message)
    //     setShowAlert(null);
    //     console.log(message, "CustomAlert");
    // }, [message]);

    return(showAlert ?? <Alert
            sx={{
                position:"absolute",
                left: 0,
                right: 0,
                marginInline: "auto",
                width: "fit-content",
                marginTop: '50px'
            }}
            severity={type}
            onClose={() => {setShowAlert('')}}>
            {message}
        </Alert>
    );
}
