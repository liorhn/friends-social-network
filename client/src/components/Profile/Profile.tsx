import React from 'react'
import { HeaderDashboard } from '../Dashboard/HeaderDashboard';
import { Box, List, ListItem, ListItemIcon, ListItemText, Stack, Typography, Button, Link } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import BadgeIcon from '@mui/icons-material/Badge';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import axios from "axios";
import { config } from "../../config/config";
import { useNavigate } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import { store } from "../../store/store";
import { loggedOut } from "../../store/userSlice";


export const Profile = () => {

    const navigate = useNavigate();

    const logOutHandler = () => {
        axios
            .get(`${config.apiBase}/v1/logout`, {
                withCredentials: true,
            })
            .then((res) => {
                store.dispatch(loggedOut());
                navigate("/login");
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <>
            <HeaderDashboard />
            <Stack sx={{ justifyContent: "center", alignItems: "center", flexDirection: "column", gap: "80px", mt: "100px" }}>
                <Typography sx={{
                    textAlign: "center",
                    color: "primary.main",
                    fontWeight: 900,
                    textTransform: "uppercase",
                }}
                    variant="h4"
                    component="h1">
                    My Profile
                </Typography>
                <Stack sx={{
                    justifyContent: "center", alignItems: "center", p: "50px", width: "500px", height: "500px", borderColor: "primary.main", borderWidth: "1", borderStyle: "solid", borderRadius: "20px", gap: "50px"
                }}>
                    <Box>
                        <Avatar sx={{ bgcolor: "primary.main", width: "150px", height: "150px", fontSize: "90px" }}>LH</Avatar>
                    </Box>
                    <List>
                        <ListItem>
                            <ListItemIcon sx={{ minWidth: "40px" }} >
                                <BadgeIcon sx={{ color: "primary.main" }} />
                            </ListItemIcon>
                            <ListItemText sx={{ color: "primary.main" }}>
                                Lior Haninaev
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon sx={{ minWidth: "40px" }}>
                                <AlternateEmailIcon sx={{ color: "primary.main" }} />
                            </ListItemIcon>
                            <ListItemText sx={{ color: "primary.main" }}>
                                omglior@gmail.com
                            </ListItemText>
                        </ListItem>
                    </List>
                </Stack>
                <Stack sx={{ flexDirection: "row", gap: "10px", maxWidth: "500px", width: "100%" }}>
                    <Button onClick={logOutHandler} fullWidth variant='outlined' size="large" sx={{
                        borderRadius: "20px", height: "60px", color: "primary.main", fontSize: "20px", fontWeight: 900,
                    }}>
                        LOG OUT
                    </Button>
                    <Button fullWidth variant="outlined" size='large' sx={{
                        width: "100%",
                        borderRadius: "20px", height: "60px", color: "primary.main", fontSize: "20px", fontWeight: 900,
                    }}>
                        <Link component={RouterLink} to="/" sx={{ textDecoration: "none" }}>
                            FEED PAGE
                        </Link>
                    </Button>
                </Stack>
            </Stack >
        </>
    );
}