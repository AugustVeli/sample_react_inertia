import MyAppBar from '../Layers/MyAppBar';
import Container from '@mui/material/Container';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import Stack from '@mui/material/Stack';

const book = {
  id: 1,
  img: 'https://images.unsplash.com/photo-1535058489223-1331b20fa114?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGJvb2tzfGVufDB8fDB8fHww',
  name: 'Mertv dushi',
  author: 'Gogol',
};

export default function BookOne({book}) {
  return (
    <>
      <MyAppBar />
      <Container component="main">
        <Grid
          mt={'15px'}
          spacing={{ xs: 2, md: 3 }}
          container
          // spacing={1}
          // direction="row"
          // spacing={10}
          // sx={{ justifyItems: 'center', display: 'flex', alignItems: 'center' }}
        >
          <Grid size="auto">
            <Link href="/back" color='inherit'>
                <Button variant="contained" color='success' startIcon={<ArrowBackIcon/>} />
            </Link>
            {/* <img src={book.img} alt={book.author} width="50%" /> */}
          </Grid>
          <Grid size="auto">
            <Box component="ul" aria-labelledby="category-b" sx={{ pl: 2 }}>
              <h2>{book.book_name}</h2>
              <li>{book.author}</li>
              <li>Link 2.2</li>
              <li>Link 2.3</li>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
