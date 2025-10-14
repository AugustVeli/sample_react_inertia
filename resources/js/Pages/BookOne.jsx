import MyAppBar from '../Layers/MyAppBar';
import Container from '@mui/material/Container';
// import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const book = {
  id: 1,
  img: 'https://images.unsplash.com/photo-1535058489223-1331b20fa114?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGJvb2tzfGVufDB8fDB8fHww',
  name: 'Mertv dushi',
  author: 'Gogol',
};

export default function BookOne() {
  return (
    <>
      <MyAppBar />
      <Container component="main">
        <Grid
          spacing={{ xs: 2, md: 3 }}
          container
          // spacing={1}
          // direction="row"
          // spacing={10}
          // sx={{ justifyItems: 'center', display: 'flex', alignItems: 'center' }}
        >
          <Grid item size="auto">
            <img src={book.img} alt={book.author} width="50%" />
          </Grid>
          <Grid item size="auto">
            <Box component="ul" aria-labelledby="category-b" sx={{ pl: 2 }}>
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
