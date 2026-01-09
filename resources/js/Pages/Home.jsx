import * as React from 'react';
import Link from '@mui/material/Link';
import MyAppBar from '../Layers/MyAppBar';
import { styled } from '@mui/material/styles';
import { useForm, Head } from '@inertiajs/react'
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CheckIcon from '@mui/icons-material/Check';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";

export default function Home({books, user_is_auth}) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [expanded, setExpanded] = React.useState(false);
  const [valueInput, setValueInput] = React.useState('');

  const {data, get} = useForm();

  function submit(e) {
        console.log(valueInput, 'console');
        e.preventDefault();
        get('/?search=' + valueInput);
  }

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
        <Head title='Home'/>
        <MyAppBar userAuth={user_is_auth} />
{/* ------------------main component--------------- */}
        <Container component="main" maxWidth="xl">
{/* ------------------Search bar-------------------  */}
            <Container component="form" onSubmit={(e) => submit(e)}>
                <TextField
                    id="outlined-controlled"
                    fullWidth
                    margin="normal"
                    label="Enter a book name"
                    variant="outlined"
                    placeholder="Search..."
                    size="medium"
                    value={books.search}
                    onInput={(e) => setValueInput(e.target.value)}
                    onKeyDown={(e) => setValueInput(e.target.value)}
                     slotProps={{
                        input: {
                            endAdornment:   <InputAdornment position="end">
                                                <IconButton type="submit" aria-label="search">
                                                    <SearchIcon style={{ fill: "blue" }}
                                                    />
                                                </IconButton>
                                            </InputAdornment>,
                        },
                    }}
                />
            </Container>
{/* ------------------Search bar------------------- */}
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {console.table(books)}
            {books.map((book, index)=>{
                return(
                    <Grid key={index} size={{ xs: 2, sm: 4, md: 4 }}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardHeader
                                action={
                                <IconButton aria-label="settings">
                                    {/* <CheckIcon /> */}
                                    {user_is_auth && <AddCircleOutlineIcon onClick={()=>console.log("Click")} />}
                                </IconButton>
                                }
                                title={<Link href={`/one_book/${book.id}`} underline='none'>{book.book_name}</Link>}
                            />
                            <CardMedia
                                component="img"
                                height="194"
                                src={book.photo_link}
                                alt={book.name}
                            />
                            <CardContent>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    {book.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                );
            })}
            </Grid>
        </Container>
    </>

  );
}
