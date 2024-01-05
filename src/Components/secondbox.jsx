import React from 'react';
import { Box, Typography, useMediaQuery, createTheme, ThemeProvider } from '@mui/material';
import Logo from "../assets/earth2.jpg";

const SecondBox = () => {
    const theme = createTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const adjustedFontSize = isSmallScreen ? 20 : 40; 
    const adjustedWidth = isSmallScreen ? 100 : 110;
    const adjustedMargin = isSmallScreen ? 0 : -60; 

    return (
        <ThemeProvider theme={theme}>
            <Box
                sx={{
                    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)', // Box shadow
                    minWidth: `${adjustedWidth}%`, // Maximum width of the box
                    minHeight: '60vh',
                    marginLeft: `${adjustedMargin}px`, // Center the box
                    // padding: '10px', // Padding inside the box
                    textAlign: 'center', // Center text
                    marginTop: '20px', // Add some top margin
                    backgroundImage: `url(${Logo})`, // Set background image
                    backgroundSize: 'cover', // Cover the entire box with the background image
                    backgroundRepeat: 'no-repeat', // Do not repeat the background image
                    position: 'relative', // Set position to relative for absolute positioning of the line
                }}
            >
                <div style={{ margin: '30px', display: "flex", flexDirection: "initial",  position: 'relative', gap: "10px" }}>
                    {/* Vertical solid line */}
                    <div
                        style={{
                            position: 'absolute',
                            left: 0,
                            top: 15,
                            minHeight: '100%',
                            width: '3px',
                            borderRadius: "2px",
                            background: 'red',
                            
                        }}
                    >
                    </div>
                    <div style={{ marginLeft: "20px", display: "flex", flexDirection: 'column', textAlign: "justify" }}>
                        <p style={{ fontFamily: "Arial", fontSize: `${adjustedFontSize}px`, color: "white", marginLeft: '10px', marginBottom: "0", textAlign: "justify" }}>
                            Our community of more than 12,000.
                        </p>
                        <p style={{ fontFamily: "Arial", fontSize: `${adjustedFontSize}px`, color: "white", marginLeft: '10px', marginBottom: "0" }}>
                            Undergraduate, graduate and professional students
                        </p>
                        <p style={{ fontFamily: "Arial", fontSize: `${adjustedFontSize}px`, color: "white", marginLeft: '10px' }}>
                            Represents 53 states and territories, and 53 nations.
                        </p>
                    </div>
                </div>
            </Box>
        </ThemeProvider>
    );
};

export default SecondBox;
