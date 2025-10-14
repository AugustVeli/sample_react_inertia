import * as React from 'react';
import MyAppBar from '../Layers/MyAppBar';
import { styled } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Collapse from '@mui/material/Collapse';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: 'rotate(0deg)',
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: 'rotate(180deg)',
      },
    },
  ],
}));

export default function Home({books}) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [expanded, setExpanded] = React.useState(false);

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
            <form>
                <TextField
                id="search-bar"
                className="text"
                onInput={(e) => {
                    setSearchQuery(e.target.value);
                }}
                sx={{marginBottom:"12px", marginTop:"12px"}}
                label="Enter a book name"
                variant="outlined"
                placeholder="Search..."
                size="medium"
                />
                <IconButton type="submit" aria-label="search">
                    <SearchIcon style={{ fill: "blue" }} />
                </IconButton>
            </form>
{/* ------------------Search bar------------------- */}
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {console.table(books)}
            {books.map((item, index)=>{
                {console.log(item.book_name)}
                return(
                    <Grid item size={{ xs: 2, sm: 4, md: 4 }}>
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
                                    <MoreVertIcon />
                                </IconButton>
                                }
                                title={item.book_name}
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
                                This impressive paella is a perfect party dish and a fun meal to cook
                                together with your guests. Add 1 cup of frozen peas along with the mussels,
                                if you like.
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <ExpandMore
                                expand={expanded}
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                                aria-label="show more"
                                >
                                <ExpandMoreIcon />
                                </ExpandMore>
                            </CardActions>
                            <Collapse in={expanded} timeout="auto" unmountOnExit>
                                <CardContent>
                                <Typography sx={{ marginBottom: 2 }}>Method:</Typography>
                                <Typography sx={{ marginBottom: 2 }}>
                                    Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                                    aside for 10 minutes.
                                </Typography>
                                <Typography sx={{ marginBottom: 2 }}>
                                    Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
                                    medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
                                    occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
                                    large plate and set aside, leaving chicken and chorizo in the pan. Add
                                    pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
                                    stirring often until thickened and fragrant, about 10 minutes. Add
                                    saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                                </Typography>
                                <Typography sx={{ marginBottom: 2 }}>
                                    Add rice and stir very gently to distribute. Top with artichokes and
                                    peppers, and cook without stirring, until most of the liquid is absorbed,
                                    15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
                                    mussels, tucking them down into the rice, and cook again without
                                    stirring, until mussels have opened and rice is just tender, 5 to 7
                                    minutes more. (Discard any mussels that don&apos;t open.)
                                </Typography>
                                <Typography>
                                    Set aside off of the heat to let rest for 10 minutes, and then serve.
                                </Typography>
                                </CardContent>
                            </Collapse>
                        </Card>
                    </Grid>
                );
            })}
            </Grid>
        </Container>
    </>

  );
}
