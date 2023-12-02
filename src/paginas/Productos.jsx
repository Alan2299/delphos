import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Button } from '@mui/material';

const columns = [
  { id: 'rfc', 
    label: 'Clave', 
    minWidth: 170 },
  { id: 'razon', 
    label: 'Nombre del producto', 
    minWidth: 100 },
  {
    id: 'tel',
    label: 'Stock',
    minWidth: 170,
    align: 'right',
    
  },
  {
    id: 'email',
    label: 'Precio A',
    minWidth: 170,
    align: 'right',
    
  },
  {
    id: 'rp',
    label: 'Precio B',
    minWidth: 170,
    align: 'right',
    
  },
];

function createData(rfc, razon, tel, email, rp) {
  return { rfc, razon, tel, email, rp};
}

const rows = [
  createData('AGBY76', 'AGAR BYGGY SANGRE', 48, '$548.63', '$598.69'),
  
];
export default function Productos() {

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>

    <Button variant="contained" align="center" >Agregar producto</Button>

    <Paper sx={{ width: '100%' }}>
      <h1 align="center">Lista de productos</h1>
      
      <TableContainer sx={{ maxHeight: 650 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={2}>
                Datos
              </TableCell>
              <TableCell align="center" colSpan={3}>
                Precios / Existencia
              </TableCell>
            </TableRow>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ top: 57, minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.razon}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
    </>
  );
  
}