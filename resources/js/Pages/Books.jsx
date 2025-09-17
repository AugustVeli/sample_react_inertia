// import {} from 'react';
import { Head } from '@inertiajs/react'
import BooksData from '../Components/BooksData';

export default function Books({books}) {


    return(
        <>
            <BooksData data={books}/>

        </>
    );
}
