import React, { useState } from 'react';
import {
    AppBar,
    Toolbar,
    IconButton,
    Tabs,
    Tab,
    Container,
    Drawer,
    List,
    ListItem,
    ListItemText,
    Backdrop,
    useMediaQuery,
    useTheme,
    Box,
    Divider,
    TextField
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import Logo from '../assets/logo23.png';
import Videobox from '../Components/videobox';
import Secondbox from '../Components/secondbox';
import Thirdbox from '../Components/thirdbox';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Collapse from '@mui/material/Collapse';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const HomePage = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isAcademicsOpen, setIsAcademicsOpen] = useState(false);
    const [isNewsOpen, setIsNewsOpen] = useState(false);
    const [isCalendarsOpen, setIsCalendarsOpen] = useState(false);
    const [isAboutOpen, setIsAboutOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleAcademicsToggle = () => {
        setIsAcademicsOpen(!isAcademicsOpen);
    };

    const handleNewsToggle = () => {
        setIsNewsOpen(!isNewsOpen);
    };

    const handleCalendarsToggle = () => {
        setIsCalendarsOpen(!isCalendarsOpen);
    };

    const handleAboutToggle = () => {
        setIsAboutOpen(!isAboutOpen);
    };

    const handleSearchIconClick = () => {
        setIsSearchOpen(!isSearchOpen);
    };

    const handleCloseIconClick = () => {
        setIsSearchOpen(false);
    };

    const drawerWidth = isSmallScreen ? '100%' : '500px';


    return (
        <div style={{ backgroundColor: '#002940', minHeight: '400vh', overflow: 'hidden' }}>
            <AppBar position="fixed" style={{ backgroundColor: '#003a63', height: '100px', top: 0, zIndex: 1000 }}>
                <Toolbar style={{marginTop:"10px"}}>
                    {/* Left side with logo */}
                    <img src={Logo} alt="Logo" style={{
                        marginRight: '20px',
                        marginLeft:"20px",
                        height: '79px',  // Set your desired height
                        width: 'auto',  // Set your desired width or use 'auto' for maintaining aspect ratio
                    }} />

                    {/* Middle with tabs */}
                    {!isSmallScreen && !isMediumScreen && (
                        <>
                            <Tabs
                                value={false}
                                textColor="white"
                                style={{ flex: 1, justifyContent: 'center', marginLeft: '250px' }}
                            >
                                <Tab label="Apply" href="/apply" style={{ marginRight: '60px', fontFamily: 'Arial', fontSize: '16px', fontWeight: 'bold' }} />
                                <Tab label="Visit" href="/visit" style={{ marginRight: '60px', fontFamily: 'Arial', fontSize: '16px', fontWeight: 'bold' }} />
                                <Tab label="Give" href="/give" style={{ fontFamily: 'Arial', fontSize: '16px', fontWeight: 'bold' }} />
                            </Tabs>
                        </>
                    )}

                    {/* Right side with search icon and hamburger icon */}
                    <>
                        {/* Added fixed styles for search and menu icons */}
                        {!isMenuOpen && (
                            <IconButton
                                edge="end"
                                color="inherit"
                                aria-label="search"
                                style={{ marginRight: '10px', fontSize: '40px', position: 'fixed', right: '50px', zIndex: 1 }}
                                onClick={handleSearchIconClick}
                            >
                                {!isSearchOpen ? <SearchIcon /> : <CloseIcon />}
                            </IconButton>
                        )}

                        {isSearchOpen && (
                            <Box style={{
                                position: "absolute",
                                top: " 100%", /* Position the search box just below the search icon */
                                right: "0",
                                width: "100%",
                                backgroundColor: "#003a63",/* Background color for the search box */
                                boxShadow: " 0 4px 8px rgba(0, 0, 0, 0.1)", /* Add a subtle shadow */
                                padding: "10px", /* Add padding for better visual appeal */
                                display: "flex",
                                alignItems: "center",

                            }}>

                                {/* Your search box content goes here */}
                                {/* For example, you can add a text input */}
                                <TextField type="text" size="small" style={{ width: "100%", marginLeft: "20px", background: "white", borderRadius: "5px" }} placeholder="Search..." />
                                <IconButton
                                    edge="right"
                                    style={{ outline: "none", fontWeight: "bold" }}
                                    color="inherit"
                                    onClick={handleCloseIconClick}
                                >
                                    <CloseIcon fontSize="large" />
                                </IconButton>
                            </Box>
                        )}
                        <IconButton
                            edge="end"
                            color="black"
                            aria-label="menu"
                            style={{ fontSize: '40px', background: 'white', position: 'fixed', right: '20px', zIndex: 1 }}
                            onClick={handleMenuToggle}
                        >
                            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
                        </IconButton>
                    </>
                </Toolbar>
            </AppBar>

            {/* Drawer for menu on small screens */}
            <Drawer
                anchor="right"
                open={isMenuOpen}
                onClose={handleMenuToggle}
                BackdropComponent={Backdrop}
                BackdropProps={{ invisible: true }}
                PaperComponent={Paper}
                PaperProps={{
                    sx: { width: drawerWidth, top: '100px', position: 'fixed', backgroundColor: '#002940', color: "white", overflowY: 'auto' },
                }}
                ModalProps={{
                    style: { position: 'absolute', top: '100px', left: 0, right: 0, bottom: 0, overflowY: 'auto' },
                }}
            >
                {isSmallScreen && isMediumScreen && (
                    <List style={{ display: 'flex', marginLeft: "10px", flexDirection: 'row', borderBottom: "1px solid black" }}>
                        <ListItem button component="a" href="/apply">
                            {/* Add Typography component with fontSize */}
                            <ListItemText primary={<Typography variant="body1" fontSize={20} fontWeight="bold">Apply</Typography>} />
                        </ListItem>
                        <ListItem button component="a" href="/visit">
                            <ListItemText primary={<Typography variant="body1" fontSize={20} fontWeight="bold">Visit</Typography>} />
                        </ListItem>
                        <ListItem button component="a" href="/give">
                            <ListItemText primary={<Typography variant="body1" fontSize={20} fontWeight="bold">Give</Typography>} />
                        </ListItem>
                    </List>
                )}
                <List>
                    <ListItem button component="a" href="#" style={{ borderBottom: "1px solid black", }}>
                        {/* Add Typography component with fontSize */}
                        <ListItemText primary={<Typography fontSize={35} fontWeight="bold">Admission</Typography>} />
                    </ListItem>
                    <div style={{ display: "flex", flexDirection: "row", borderBottom: "1px solid black" }}>
                        <ListItem button component="a" href="#" onClick={handleAcademicsToggle}>
                            <ListItemText primary={<Typography fontSize={35} fontWeight="bold">Academics</Typography>} />
                        </ListItem>
                        <Box style={{ borderLeft: "1px solid black" }}>
                            <IconButton edge="end" color="inherit" aria-label="dropdown" onClick={handleAcademicsToggle} style={{ margin: "20px" }}>
                                {!isAcademicsOpen ? <ExpandMoreIcon /> : <KeyboardArrowUpIcon />}
                            </IconButton>
                        </Box>
                    </div>
                    <Collapse in={isAcademicsOpen} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            {/* Add sub-list items for Academics */}
                            <ListItem button component="a" href="#" style={{ paddingLeft: "40px", borderBottom: "1px solid black" }}>
                                <ListItemText primary={<Typography fontSize={25}>Sub Item 1</Typography>} />
                            </ListItem>
                            <ListItem button component="a" href="#" style={{ paddingLeft: "40px", borderBottom: "1px solid black" }}>
                                <ListItemText primary={<Typography fontSize={25}>Sub Item 2</Typography>} />
                            </ListItem>
                        </List>
                    </Collapse>
                    {/* News */}
                    <div style={{ display: "flex", flexDirection: "row", borderBottom: "1px solid black" }}>
                        <ListItem button component="a" href="#" onClick={handleNewsToggle}>
                            <ListItemText primary={<Typography fontSize={35} fontWeight="bold">News</Typography>} />
                        </ListItem>
                        <Box style={{ borderLeft: "1px solid black" }}>
                            <IconButton edge="end" color="inherit" aria-label="dropdown" onClick={handleNewsToggle} style={{ margin: "20px" }}>
                                {!isNewsOpen ? <ExpandMoreIcon /> : <KeyboardArrowUpIcon />}
                            </IconButton>
                        </Box>
                    </div>
                    <Collapse in={isNewsOpen} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            {/* Add sub-list items for Academics */}
                            <ListItem button component="a" href="#" style={{ paddingLeft: "40px", borderBottom: "1px solid black" }}>
                                <ListItemText primary={<Typography fontSize={25}>News 1</Typography>} />
                            </ListItem>
                            <ListItem button component="a" href="#" style={{ paddingLeft: "40px", borderBottom: "1px solid black" }}>
                                <ListItemText primary={<Typography fontSize={25}>News 2</Typography>} />
                            </ListItem>
                        </List>
                    </Collapse>
                    {/*Calenders  */}
                    <div style={{ display: "flex", flexDirection: "row", borderBottom: "1px solid black" }}>
                        <ListItem button component="a" href="#" onClick={handleCalendarsToggle}>
                            <ListItemText primary={<Typography fontSize={35} fontWeight="bold">Calendars</Typography>} />
                        </ListItem>
                        <Box style={{ borderLeft: "1px solid black" }}>
                            <IconButton edge="end" color="inherit" aria-label="dropdown" onClick={handleCalendarsToggle} style={{ margin: "20px" }}>
                                {!isCalendarsOpen ? <ExpandMoreIcon /> : <KeyboardArrowUpIcon />}
                            </IconButton>
                        </Box>
                    </div>
                    <Collapse in={isCalendarsOpen} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            {/* Add sub-list items for Academics */}
                            <ListItem button component="a" href="#" style={{ paddingLeft: "40px", borderBottom: "1px solid black" }}>
                                <ListItemText primary={<Typography fontSize={25}>Calenders 1</Typography>} />
                            </ListItem>
                            <ListItem button component="a" href="#" style={{ paddingLeft: "40px", borderBottom: "1px solid black" }}>
                                <ListItemText primary={<Typography fontSize={25}>Calenders 2</Typography>} />
                            </ListItem>
                        </List>
                    </Collapse>
                    {/* About */}
                    <div style={{ display: "flex", flexDirection: "row", borderBottom: "1px solid black" }}>
                        <ListItem button component="a" href="#" onClick={handleAboutToggle}>
                            <ListItemText primary={<Typography fontSize={35} fontWeight="bold">About</Typography>} />
                        </ListItem>
                        <Box style={{ borderLeft: "1px solid black" }}>
                            <IconButton edge="end" color="inherit" aria-label="dropdown" onClick={handleAboutToggle} style={{ margin: "20px" }}>
                                {!isAboutOpen ? <ExpandMoreIcon /> : <KeyboardArrowUpIcon />}
                            </IconButton>
                        </Box>
                    </div>
                    <Collapse in={isAboutOpen} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            {/* Add sub-list items for Academics */}
                            <ListItem button component="a" href="#" style={{ paddingLeft: "40px", borderBottom: "1px solid black" }}>
                                <ListItemText primary={<Typography fontSize={25}>About 1</Typography>} />
                            </ListItem>
                            <ListItem button component="a" href="#" style={{ paddingLeft: "40px", borderBottom: "1px solid black" }}>
                                <ListItemText primary={<Typography fontSize={25}>About 2</Typography>} />
                            </ListItem>
                        </List>
                    </Collapse>
                    {/* Contact */}
                    <ListItem button component="a" href="#" style={{ borderBottom: "1px solid black" }}>
                        {/* Add Typography component with fontSize */}
                        <ListItemText primary={<Typography fontSize={35} fontWeight="bold">Contacts</Typography>} />
                    </ListItem>


                </List>
            </Drawer>

            {/* Your main content goes here */}
            <Container style={{ marginTop: '100px' }}>
                <Videobox />
                <Secondbox style={{ marginTop: '20px' }} />
                <Thirdbox style={{ marginTop: '20px' }} />
            </Container>
        </div>
    );
};

export default HomePage;
