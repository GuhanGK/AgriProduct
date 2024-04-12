import React, { useState } from "react";
import LayoutStyle from "./style";
import { Outlet } from "react-router-dom";
import Footer from "../../Footer";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import Toolbar from '@mui/material/Toolbar';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { styled, useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import MuiAppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import { Row, Navbar, Nav } from "react-bootstrap";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosContact } from "react-icons/io";

const drawerWidth = 240;

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

const Layout = () => {
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    const handleDrawerClose = () => {
        setIsClosing(true);
        setMobileOpen(false);
    };

    const handleDrawerTransitionEnd = () => {
        setIsClosing(false);
    };

    const handleDrawerOpen = () => {
        setMobileOpen(!mobileOpen);
    };

    const AppBar = styled(MuiAppBar, {
        shouldForwardProp: (prop) => prop !== 'open',
    })(({ theme, open }) => ({
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        ...(open && {
            marginLeft: drawerWidth,
            width: `calc(100% - ${drawerWidth}px)`,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        }),
    }));

    const menuItems = [
        { text: 'Inbox', icon: <InboxIcon /> },
        { text: 'Starred', icon: <MailIcon /> },
        { text: 'Send email', icon: <InboxIcon /> },
        { text: 'Drafts', icon: <MailIcon /> }
    ];

    return (
        <LayoutStyle mobileOpen={mobileOpen}>
            <AppBar position="fixed" open={mobileOpen}>
                <Toolbar className="header_toolbar_container">
                    <div
                        className="header_toolbar_items"
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        sx={{
                            marginRight: 5,
                            ...(mobileOpen && { display: 'none' }),
                        }}
                    >
                        <div className="menu_icon_section">
                            <MenuIcon className="header_menu_icon" onClick={handleDrawerOpen} />
                            <p className="project_header">AgriTech</p>
                        </div>

                        <Row className="header_navbar_container">
                            <Navbar collapseOnSelect expand="lg" className="navbar_container">
                                <Nav>
                                    <Nav.Link href="#home">Home</Nav.Link>
                                    <Nav.Link href="#features">Features</Nav.Link>
                                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                                </Nav>
                            </Navbar>
                        </Row>
                    </div>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                open={mobileOpen}
                onTransitionEnd={handleDrawerTransitionEnd}
                onClose={handleDrawerClose}
                ModalProps={{
                    keepMounted: true,
                }}
                className="sidebar_drawer"
            >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    {menuItems.map((item, index) => (
                        <ListItem key={index} disablePadding sx={{ display: 'block' }}>
                            <ListItemButton
                                sx={{
                                    minHeight: 48,
                                    justifyContent: mobileOpen ? 'initial' : 'center',
                                    px: 2.5,
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: mobileOpen ? 3 : 'auto',
                                        justifyContent: 'center',
                                    }}
                                >
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText primary={item.text} sx={{ display: mobileOpen ? "block" : "none" }} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <Outlet />
            <Footer />
        </LayoutStyle>
    );
}

export default Layout;
