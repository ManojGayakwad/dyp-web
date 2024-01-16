import React from 'react';
import { Box, Typography, useMediaQuery, createTheme, ThemeProvider, Card } from '@mui/material';

const ThirdBox = () => {
    const theme = createTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const adjustedFontSize = isSmallScreen ? 20 : 40; 
    const adjustedWidth = isSmallScreen ? 100 : 110;
    const adjustedMargin = isSmallScreen ? 0 : -60; 
    return (
        <Box
            sx={{
                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)', // Box shadow
                // minWidth: `${adjustedWidth}%`, // Maximum width of the box
                // minHeight: '60vh',
                // marginLeft: `${adjustedMargin}px`, // Center the box
                // padding: '10px', // Padding inside the box
                textAlign: 'center', // Center text
                marginTop: '20px', // Add some top margin
                background: "#edc054",
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
            }}
        >
            {/* Profile Card 1 */}
            <div style={{ display: "flex", flexDirection: "row", gap:'20px', padding: '10px'}}>
                <Card
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        // border: "2px solid gray",
                        background:"white"
                    }}
                >
                    <img
                        src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Profile Image 1"
                        style={{
                            width: '100%',
                            height: 'auto',
                            
                        }}
                    />
                    <Typography variant="h5" style={{ marginTop: '10px' }}>
                        John Doe
                    </Typography>
                    <Typography variant="body1">
                        Bio for John Doe goes here.
                    </Typography>
                </Card>

                {/* Profile Card 2 */}
                <Card
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        // border: "2px solid gray",
                        background:"white"
                    }}
                >
                    <img
                        src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Profile Image 2"
                        style={{
                            width: '100%',
                            height: 'auto',
                        }}
                    />
                    <Typography variant="h5" style={{ marginTop: '10px' }}>
                        Jane Doe
                    </Typography>
                    <Typography variant="body1">
                        Bio for Jane Doe goes here.
                    </Typography>
                </Card>

                {/* Profile Card 3 */}
                <Card
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        // border: "2px solid gray",
                        background:"white"
                    }}
                >
                    <img
                        src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Profile Image 3"
                        style={{
                            width: '100%',
                            height: 'auto',
                        }}
                    />
                    <Typography variant="h5" style={{ marginTop: '10px' }}>
                        Alex Smith
                    </Typography>
                    <Typography variant="body1">
                        Bio for Alex Smith goes here.
                    </Typography>
                </Card>
            </div>
        </Box>
    );
};

export default ThirdBox;
