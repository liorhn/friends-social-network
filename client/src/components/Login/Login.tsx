import React from 'react';
import Box from '@mui/material/Box';
import css from './Login.module.scss';
import { blueGrey } from '@mui/material/colors';
import { Typography } from '@mui/material';

export const Login = () => {
    return <Box className={css.wrapper} sx={{
        bgcolor: blueGrey[50]
    }}>
        <Box className={css.main}>
            <Typography
                className={css.logo} variant='h4' component='h1'>
                Friends.
            </Typography>
        </Box>
    </Box>
}