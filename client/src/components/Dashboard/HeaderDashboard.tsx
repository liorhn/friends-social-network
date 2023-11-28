import React from "react";
import { Box, Typography, Stack, Button } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { NotificationsButton } from "./NotificationsButton";
import { LogoutButton } from "./LogoutButton";

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
        <Stack sx={{ flexDirection: "row", alignItems: "center" }}>
          <Button>
            <AccountCircleIcon sx={{ color: "white" }}></AccountCircleIcon>
          </Button>
          <NotificationsButton />
          <LogoutButton />
        </Stack>
      </Stack>
    </Box>
  );
};
