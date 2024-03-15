import React from "react";
import { Box, Typography, Stack, Link, Button } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { NotificationsButton } from "./NotificationsButton";
import { LogoutButton } from "./LogoutButton";
import { Link as RouterLink } from "react-router-dom";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BrushIcon from '@mui/icons-material/Brush';
import { Search } from "../Feed/Search";
import { FriendsButton } from "./FriendsButton";


export const HeaderDashboard = () => {
  return (
    <Box>
      <Stack
        sx={{
          bgcolor: "primary.main",
          width: "100%",
          minHeight: "100px",
          p: "10px",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link component={RouterLink} to="/home" >
          <Typography
            sx={{
              color: "white",
              fontWeight: 900,
              textTransform: "uppercase",
            }}
            variant="h4"
            component="h1"
          >
            FRIENDS
          </Typography>
        </Link>
        <Stack sx={{ flexDirection: "row", alignItems: "center" }}>
          <Search />
          <Link component={RouterLink} to="/profile" >
            <Button>
              <AccountCircleIcon sx={{ color: "white" }}></AccountCircleIcon>
            </Button>
          </Link>
          <FriendsButton />
          <Link>
            <Button>
              <MailOutlineIcon sx={{ color: "white" }} />
            </Button>
          </Link>
          <Link>
            <Button>
              <BrushIcon sx={{ color: "white" }} />
            </Button>
          </Link>
          <NotificationsButton />
          <LogoutButton />
        </Stack>
      </Stack>
    </Box>
  );
};
