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
    label: 'RFC', 
    minWidth: 170 },
  { id: 'razon', 
    label: 'Razon social', 
    minWidth: 100 },
  {
    id: 'tel',
    label: 'Telefono',
    minWidth: 170,
    align: 'right',
    
  },
  {
    id: 'email',
    label: 'Correo Electronico',
    minWidth: 170,
    align: 'right',
    
  },
  {
    id: 'rp',
    label: 'Representante',
    minWidth: 170,
    align: 'right',
    
  },
  
];

function createData(rfc, razon, tel, email, rp) {
  return { rfc, razon, tel, email, rp};
}

const rows = [
  createData('CURA991022UX1', 'ALAN DE JESUS CRUZ RUIZ', 9611821112, 'alan-cruz99@hotmail.com', 'Paulina Alejandra Juarez Lopez'),
  createData('MAUR890623OX7','ROBERTO MARTINEZ URBINA', 9922347656,'roctu456@hotmail.com', 'FRANCISCO JOSE MORENO PEREZ'),
  createData('ORG782311AG3','GUADALUPE GOMEZ RUIZ', 9871416554,'guadalupe67@hotmail.com', 'CARLOS ALBERTO PEREZ JOSE'),
  createData('MAUR890623OX7','ROBERTO MARTINEZ URBINA', 9922347656,'roctu456@hotmail.com', 'FRANCISCO JOSE MORENO PEREZ'),
  createData('CAFG870709H7R', 'GUTBERTO CASTRO FERNANDEZ', 9612347865,'gutasfer89@hotmail.com', 'VERONICA FLORES ARCHILA'),
  createData('GORA890829', 'ANA LAURA GONZALEZ ROMERO', 9621344576, 'lic.ana_0889@hotmail.com', 'ADALBERTO FLORES PEREZ'),
  createData('BEDJ811227HK9','JULIO CESAR BEZARES DOMINGUEZ', 9611456579,'bedj_81@hotmail.com', 'ANAHI DE LA CRUZ JOSE'),
  createData('CAAL760222HI8', 'LILIANA CAMBRANO ALBORES', 9651234567, 'lili_23_02@hotmail.com', 'AUDELINA URBIETA LOPEZ'),
  createData('RUME851028OX7', 'EDILBERTO RUIZ MARTINEZ', 9651239845,'edi_rum_88@hotmail.com', 'PAOLA MONTERO GIL'),
];
export default function Clientes() {

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
    <Button 
    variant="contained" 
    align="center" >
    Agregar Cliente
    </Button>

    <Paper sx={{ width: '100%' }}>
      <h1 align="center">Lista de clientes</h1>
      
      
      <TableContainer sx={{ maxHeight: 650 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={2}>
                Empresa
              </TableCell>
              <TableCell align="center" colSpan={3}>
                Datos de contacto
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