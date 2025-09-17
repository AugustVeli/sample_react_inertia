import { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export default function BooksData({data}) {
    // const [nbRows, setNbRows] = useState(3);
    // const removeRow = () => setNbRows();
    // const addRow = () => setNbRows();
     return (
    <Box sx={{ width: '100%' }}>
      {/* <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
        <Button size="small" onClick={removeRow}>
          Remove a row
        </Button>
        <Button size="small" onClick={addRow}>
          Add a row
        </Button>
      </Stack>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <DataGrid {...data} rows={data} loading={loading} />
      </div> */}
    </Box>
  );
}
