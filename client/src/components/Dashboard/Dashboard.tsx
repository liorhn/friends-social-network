import React from "react";
import { Box, Typography, Stack, Button } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LogoutIcon from "@mui/icons-material/Logout";
import Badge from "@mui/material/Badge";
// import { Dropdown, Menu, MenuItem, MenuButton } from "@mui/base";

export const Dashboard = () => {
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
        {/* <Dropdown>
          <MenuButton>Hello</MenuButton>
          <Menu slots={{}}>
            <MenuItem>Profile</MenuItem>
            <MenuItem>Settings</MenuItem>
          </Menu>
        </Dropdown> */}
        <Stack sx={{ flexDirection: "row", alignItems: "center" }}>
          <Button>
            <AccountCircleIcon sx={{ color: "white" }}></AccountCircleIcon>
          </Button>
          <Button>
            <Badge color="primary" badgeContent={6}>
              <NotificationsIcon sx={{ color: "white" }}></NotificationsIcon>
            </Badge>
          </Button>
          <Button>
            <LogoutIcon sx={{ color: "white" }}></LogoutIcon>
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};
