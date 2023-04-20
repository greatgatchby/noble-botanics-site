import * as React from 'react';
import { Box, Container, TextField, Typography, Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export default function ContactForm() {


    return (
        <Box sx={{display: 'flex', justifyContent:'center'}}>
            <iframe
                id={'contact'}
                src="https://docs.google.com/forms/d/e/1FAIpQLSf3YRA57fhaeN0vJFOwHNRlwPavj9Qz-5fxd7fA84xvXW9qmg/viewform?embedded=true"
                width="640" height="959" frameBorder={0} marginHeight={0} marginWidth={0}>Loading…</iframe>
        </Box>
    );
}
