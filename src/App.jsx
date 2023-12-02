import { Box, Button, Container, Typography } from "@mui/material"
import { Route, Routes } from "react-router-dom"

import Login from "./componentes/Login"
import Navbar from "./componentes/navbar/Navbar"
import Clientes from "./paginas/Clientes"
import Productos from "./paginas/Productos"
import Proveedores from "./paginas/Proveedores"


export default function App(){
  return(
    <>
        <Navbar/>
        <Container sx={{mt: 5}}>

          <Routes>
              <Route path="/clientes" 
              element={< Clientes/>}
              />
              <Route 
              path="/productos" 
              element={< Productos/>}
              />
              <Route 
              path="/proveedores" 
              element={< Proveedores/>}
              />
          </Routes>
        </Container> 
    </>

  )

}