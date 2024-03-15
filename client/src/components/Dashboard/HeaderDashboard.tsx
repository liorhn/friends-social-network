import React from "react";
import { Box, Typography, Stack, Link, Button } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { NotificationsButton } from "./NotificationsButton";
import { LogoutButton } from "./LogoutButton";
import { Link as RouterLink } from "react-router-dom";

export const HeaderDashboard = () => {
  return (
    <Box>
      <Stack
        sx={{
          bgcolor: "primary.main",
          width: "100%",
          height: "100%",
          p: "10px",
          flexDirection: "row",
          justifyContent: "space-between",
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
          <Link component={RouterLink} to="/profile" >
            <Button>
              <AccountCircleIcon sx={{ color: "white" }}></AccountCircleIcon>
            </Button>
          </Link>
          <NotificationsButton />
          <LogoutButton />
        </Stack>
      </Stack>
    </Box>
  );
};
