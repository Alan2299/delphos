import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";


export default function NavListDrawer({navLinks, NavLink, setOpen }) {

    return(
        <Box sx={{width: 250 }}>
            <nav>
                <List>
                    {navLinks.map((item) => (
                            <ListItem 
                            disablePadding
                            key={item.title}
                            >
                                <ListItemButton
                                component={NavLink}
                                to={item.path}
                                onClick={() =>setOpen(false)}
                                >
                                    <ListItemIcon>
                                        {item.icon}
                                        </ListItemIcon>
                                    <ListItemText>
                                        {item.title}
                                    </ListItemText>
                                </ListItemButton>
                            </ListItem>
                        ))}
                </List>
            </nav>
        </Box>
    );
}