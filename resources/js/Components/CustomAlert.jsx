import { useState, useEffect, useCallback} from 'react';
import Alert from '@mui/material/Alert';

export default function CustomAlert({type, message}) {
    const [showAlert, setShowAlert] = useState(true);
    const [messageShow, setMessageShow] = useState('');

    useEffect(() => {
        const timeId = setTimeout(() => {
            console.log("useEffect")
            // After 3 seconds set the show value to false
            setShowAlert(false)
            // setMessageShow(null)
        }, 4000)
        return () => clearTimeout(timeId);
    }, [showAlert]);

    // const handle = (()=>{
    //     if(messageShow != null)return;
    //     setMessageShow(message);
    //     setShowAlert(null);
    // });

    // handle();

    return(showAlert && <Alert
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
