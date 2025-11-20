import { Container, Grid, Button} from "@mui/material";
import {useState, useEffect} from 'react';

export default function WantLook({users}) {
    {console.log(users, 'users')}
    const [newUsers, setUsers] = useState(users);
    useEffect((()=>{
            let array = [];
            newUsers.forEach(element => {
                array.push(...element);
            });
            setUsers(array);
        }
    ),[]);

    return(
        <Container component="div" sx={{margin:"auto"}}>
            <Grid container>
                {
                newUsers.map((item, index) => {
                     return(
                        <>
                            <Grid key={index+10}>
                                <div>Name: <span>{item.name}</span></div>
                                <div>Contact info: <span>{item.inTouch}</span></div>
                                <Button variant="contained" color="error">DELETE</Button>
                            </Grid>
                            <br />
                        </>
                    )
                })}
            </Grid>
        </Container>
    )
}
