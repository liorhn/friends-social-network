import React from 'react';
import { Avatar, Box, Button, Stack, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

export const AddFriendCard = () => {
    return (
        <Stack sx={{ maxWidth: "150px", borderWidth: "1", borderColor: "primary.main", borderStyle: "solid", borderRadius: "20px", p: "20px", justifyContent: "center", alignItems: "center", gap: "20px" }}>
            <Box>
                <Avatar sx={{ bgcolor: "primary.main", width: "50px", height: "50px", fontSize: "20px" }}>LH</Avatar>
            </Box>
            <Typography>Lior Haninaev</Typography>
            <Button variant='outlined' startIcon={<AddIcon />}>Add</Button>
        </Stack>
    );
}   