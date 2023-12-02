import { AppBar, Box, Button, Drawer, IconButton, Toolbar, Typography } from "@mui/material";
import NavListDrawer from "./NavListDrawer";
import { useState } from "react";

import MenuIcon from "@mui/icons-material/Menu"
import GroupIcon from '@mui/icons-material/Group';
import ShoppingBagRoundedIcon from '@mui/icons-material/ShoppingBagRounded';

import { NavLink } from "react-router-dom";

const navLinks = [
    {
        title: "Panel", 
        path: "/",
        icon: <GroupIcon/>
    },
    {
        title: "Clientes", 
        path: "/clientes",
        icon: <GroupIcon/>
    },
    {
        title: "Productos", 
        path: "/productos",
        icon: <ShoppingBagRoundedIcon/>
    },
    {
        title: "Proveedores", 
        path: "/proveedores",
        icon: <GroupIcon/>
    },
]

export default function Navbar() {

    const [open, setOpen] = useState(false)

    return(
        <>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                    color="inherit"
                    size="large"
                    onClick={() => setOpen(true)}
                    sx={{display: {xs: "flex", sm: "none"}}}
                    edge="start"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography 
                    variant="h6" 
                    sx={{flexGrow: 1}}
                    >
                        Delphos
                    </Typography>

                    <Box sx={{display: {xs: "none", sm: "block" }}}>
                        {navLinks.map((item) => (    
                                <Button 
                                color="inherit" 
                                key={item.title}
                                component={NavLink}
                                to={item.path}
                                >
                                    {item.title}
                                </Button>
                            ))}
                    </Box>
                </Toolbar>
            </AppBar>

            <Drawer
            open={open}
            anchor="left"
            onClose={() => setOpen(false)}
            sx={{display: {xs: "flex", sm: "none"}}}
            >
                <NavListDrawer navLinks={navLinks}
                NavLink={NavLink}
                setOpen={setOpen}
                />
            </Drawer>
        </>
    );    
}