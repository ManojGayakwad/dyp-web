import React from 'react';
import { Box, Typography, useMediaQuery, createTheme, ThemeProvider } from '@mui/material';
import Logo from "../assets/logo3.png";

const Fourthbox = () => {
    const theme = createTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box position="absolute" width="100%">
        <Box
            sx={{
                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
                textAlign: 'center',
                marginTop: '20px',
                height:"auto",
                background: "#031f33",
                display: 'flex',
                flexDirection: isSmallScreen ? 'column' : 'row',
                // justifyContent: 'space-between',
                alignItems: 'center',
                 padding: '20px',
                fontFamily:'Arial',
                fontSize:isSmallScreen ? "15px":"18px",
                gap:"20px", 
                // position:"fixed"
              
                
                
            }}
        >
            <div style={{display:'flex', flexDirection:isSmallScreen ? "row":"none", gap:"80px"}}>
            <Box textAlign="justify" display="flex" flexDirection="column" gap="10px">
                <Typography variant="p" sx={{ color: '#ffffff' }}>About Us</Typography>
                <Typography variant="p" sx={{ color: '#ffffff' }}>Departments</Typography>
                <Typography variant="p" sx={{ color: '#ffffff' }}>Internal Committees</Typography>
                <Typography variant="p" sx={{ color: '#ffffff' }}>Training & Placement</Typography>
            </Box>
            <Box textAlign="justify" display="flex" flexDirection="column" gap="10px">
                <Typography variant="p" sx={{ color: '#ffffff' }}>Admissions</Typography>
                <Typography variant="p" sx={{ color: '#ffffff' }}>Culture</Typography>
                <Typography variant="p" sx={{ color: '#ffffff' }}>Alumni</Typography>
                <Typography variant="p" sx={{ color: '#ffffff' }}>Application Form</Typography>
            </Box>
            </div>
            <Box>
                {/* Add your logo image here */}
                <img src={Logo} alt="Logo" style={{ maxWidth: '30%', maxHeight: '50%' }} />
            </Box>

            <Box display="flex" flexDirection="column" textAlign={isSmallScreen ? "center":"justify"} gap="10px">
                <Typography variant="p" sx={{ color: '#ffffff' }}>D. Y. Patil College of Engineering and Technology, Kasaba Bawada, Kolhapur</Typography>
                <Typography variant="p" sx={{ color: '#ffffff' }}>Email: info.dypcet@dypgroup.edu.in</Typography>
                <Typography variant="p" sx={{ color: '#ffffff' }}>Tel: 0231-2601431/32/33</Typography>
                <Typography variant="p" sx={{ color: '#ffffff' }}>Send your resumes for Jobs:career.dypcet@dypgroup.edu.in</Typography>
                <Typography variant="p" sx={{ color: '#ffffff' }}>For student document verification apply through e-office</Typography>

            </Box>
        </Box>
        </Box>
    );
};

export default Fourthbox;
