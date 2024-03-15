import React from 'react';
import { HeaderDashboard } from '../Dashboard/HeaderDashboard';
import { Typography } from '@mui/material';


import 'swiper/css';
import 'swiper/css/navigation';
import { MyFriends } from './MyFriends';
import { NewFriends } from './NewFriends';

export const Friends = () => {
    return (
        <>
            <HeaderDashboard />
            <Typography
                sx={{
                    textAlign: "center",
                    color: "primary.main",
                    fontWeight: 900,
                    textTransform: "uppercase",
                    fontSize: "40px",
                    textDecoration: "underline",
                    mt: "50px"
                }}
                variant="h4"
                component="h1"
            >
                My Friends
            </Typography>
            <MyFriends />
            <NewFriends />
        </>
    );
}   