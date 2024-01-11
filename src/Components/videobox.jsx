import React from 'react';
import { Box, Typography, Button, useMediaQuery, createTheme, ThemeProvider } from '@mui/material';
import Logo from "../assets/dyp2.png";
import VideoBackground from '../assets/video.mp4';

const Videobox = () => {
    const theme = createTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
    const adjustMargin = isSmallScreen ? 2 : -60;
    const adjustWidth = isSmallScreen ? 100 : 110;
    return (
        // Entire Screen with Video Background
        <>

            {/* Main Content box  */}
            <Box position="relative"  zIndex='1'>
            <video
                    autoPlay
                    muted
                    loop
                    style={{
                        position: 'absolute', // Set position to absolute
                        width: '100%',
                        height: '90vh',
                        objectFit: 'cover',
                       
                    }}
                >
                    {/* Add your video source here */}
                  
                    <source src={VideoBackground} type="video/mp4" />
                    
                </video>  
            <Box
                sx={{
                    position: 'relative', // Set position to relative
                    
                  
                    padding: '20px',
                    textAlign: 'center',
                    color: 'white',
                   
                    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
                }}
            >

                {/* Logo centered in the box */}
                <img src={Logo} alt="Logo" style={{ width: '30%', marginBottom: '20px', marginTop:"95px", }} />

                {/* Paragraph */}
                <Typography variant="body1" style={{ fontFamily: "Arial", fontSize: "20px" }}>
                    We prepare diverse, talented, and ambitious students.
                </Typography>
                <Typography variant="body1" style={{ marginBottom: '20px', fontFamily: "Arial", fontSize: "20px" }}>
                    Learn, lead, and embody excellence in truth and service.
                </Typography>

                {/* Buttons in row direction */}
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: '10px', justifyContent: 'center' }}>
                    <Button variant="contained" style={{ backgroundColor: "#edc054", color: "black", fontFamily: "Arial", fontSize: "18px", fontWeight: "bold", textTransform: "capitalize" }} >
                        Explore our program
                    </Button>
                    <Button variant="contained" style={{ backgroundColor: "#edc054", color: "black", fontFamily: "Arial", fontSize: "18px", fontWeight: "bold", textTransform: "capitalize" }}>
                        Schedule A Tour
                    </Button>
                </Box>
            </Box>
            </Box>
        </>
    );
};

export default Videobox;
