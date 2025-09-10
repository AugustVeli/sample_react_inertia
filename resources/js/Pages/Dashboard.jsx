import { Link } from '@inertiajs/react'
import Button from '@mui/material/Button';

export default function Dashboard() {
    return(
        <>
            <Button variant="text">
                <Link href="/admin/dashbord/book" method="post">Book</Link>
            </Button>
            <Button variant="text">
                <Link href="/admin/dashbord/author" method="post">Author</Link>
            </Button>
        </>
    )
}
