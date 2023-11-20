import React, { useState, useRef } from "react";
import { Popover, Button, Typography } from "@mui/material";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";

export const NotificationsButton = () => {
  const [anchorEl, setAnchorEl] = useState<boolean>(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  return (
    <>
      <Button ref={buttonRef} onClick={(e) => setAnchorEl(true)}>
        <Badge color="primary" badgeContent={6}>
          <NotificationsIcon sx={{ color: "white" }}></NotificationsIcon>
        </Badge>
      </Button>
      <Popover
        id="notification-content"
        open={anchorEl}
        anchorEl={buttonRef.current}
        onClose={() => setAnchorEl(false)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
      </Popover>
    </>
  );
};
