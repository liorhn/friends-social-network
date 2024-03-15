import { Avatar, Box, Button, Stack, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import React from 'react';

export const ExistFriendCard = () => {
    return (
        <Stack sx={{ maxWidth: "150px", borderWidth: "1", borderColor: "primary.main", borderStyle: "solid", borderRadius: "20px", p: "20px", justifyContent: "center", alignItems: "center", gap: "20px" }}>
            <Box>
                <Avatar sx={{ bgcolor: "primary.main", width: "50px", height: "50px", fontSize: "20px" }}>LH</Avatar>
            </Box>
            <Typography>Lior Haninaev</Typography>
            <Button variant='outlined' startIcon={<SendIcon />}>Send</Button>
        </Stack>
    );
}