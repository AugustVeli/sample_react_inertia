import * as React from 'react';
import MyAppBar from '../Layers/MyAppBar';
import { styled } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import { useForm } from '@inertiajs/react'
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

export default function Home({books}) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [expanded, setExpanded] = React.useState(false);

    const {post} = useForm();

    function submit(e) {
        e.preventDefault();
        post('/?search=' + e.target.value);
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
        <MyAppBar/>
{/* ------------------main component--------------- */}
        <Container component="main" maxWidth="xl">
{/* ------------------Search bar-------------------  */}
            <Container component="form">
                <TextField
                    id="outlined-controlled"
                    // className="text"
                    fullWidth

                    // sx={{marginBottom:"12px", marginTop:"12px", marginLeft:"auto", marginRight:"auto", minWidth:'100px',maxWidth:'400px'}}
                    margin="normal"
                    label="Enter a book name"
                    variant="outlined"
                    placeholder="Search..."
                    size="medium"
                     slotProps={{
                        input: {
                            endAdornment:   <InputAdornment position="end">
                                                <IconButton type="submit" aria-label="search">
                                                    <SearchIcon style={{ fill: "blue" }}
                                                                            onClick={(e) => {
                                                                                submit(e);
                                                                                // ()=>console.log("Click")
                                                                            }}
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
                        {/* <div>{item.book_name}</div> */}
                    <Card sx={{ maxWidth: 345 }}>
                            <CardHeader
                                avatar={
                                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                    R
                                </Avatar>
                                }
                                action={
                                <IconButton aria-label="settings">
                                    {/* <CheckIcon /> */}
                                    <AddCircleOutlineIcon onClick={()=>console.log("Click")} />
                                </IconButton>
                                }
                                title={book.book_name}
                                subheader="September 14, 2016"
                            />
                            <CardMedia
                                component="img"
                                height="194"
                                image="/static/images/cards/paella.jpg"
                                alt="Paella dish"
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
