import MyAppBar from '../Layers/MyAppBar';
import Container from '@mui/material/Container';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import Stack from '@mui/material/Stack';

export default function BookOne({book, user_is_auth}) {
  return (
    <>
      <MyAppBar userAuth={user_is_auth}/>
      <Container component="main">
        <Grid
          mt={'15px'}
          spacing={{ xs: 2, md: 3 }}
          container
        >
          <Grid size="auto">
            <Link href="/" color='inherit'>
                <Button variant="contained" color='success' startIcon={<ArrowBackIcon/>} />
            </Link>
            <img src={book.photo_link} alt={book.book_name} width="50%" />
          </Grid>
          <Grid size="auto">
            <Box component="ul" aria-labelledby="category-b" sx={{ pl: 2 }}>
              <h2>{book.book_name}</h2>
              <li>{book.author}</li>
              <li>{book.name_genre}</li>
              <li>{book.binding}</li>
              <li>{book.location}</li>
              <li>{book.description}</li>
              <li>{book.amount}</li>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
