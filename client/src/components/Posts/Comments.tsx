import React from "react";
import { Stack, TextField, Avatar, Typography, Button } from "@mui/material";

export const Comments = () => {
  return (
    <>
      <Stack
        sx={{
          width: "100%",
          height: "100%",
          transition: "ease-in-out",
          borderTop: "1px solid #00003026",
          pt: "10px",
        }}
      >
        <Stack sx={{ gap: "15px", pt: "20px" }}>
          <Stack
            sx={{ flexDirection: "row", alignItems: "center", gap: "10px" }}
          >
            <Avatar sx={{ width: 28, height: 28, fontSize: "14px" }}>LH</Avatar>
            <Typography sx={{ fontSize: "14px" }}>
              Just a random comment
            </Typography>
          </Stack>
          <Stack
            sx={{ flexDirection: "row", alignItems: "center", gap: "10px" }}
          >
            <Avatar sx={{ width: 28, height: 28, fontSize: "14px" }}>HH</Avatar>
            <Typography sx={{ fontSize: "14px" }}>
              Just a really long long long long long long random comment
            </Typography>
          </Stack>
          <Stack
            sx={{ flexDirection: "row", alignItems: "center", gap: "10px" }}
          >
            <Avatar sx={{ width: 28, height: 28, fontSize: "14px" }}>JD</Avatar>
            <Typography sx={{ fontSize: "14px" }}>
              Just a really long long long long long long random comment that
              should flex down
            </Typography>
          </Stack>
          <Stack
            sx={{ flexDirection: "row", alignItems: "center", gap: "10px" }}
          >
            <Avatar sx={{ width: 28, height: 28, fontSize: "14px" }}>SB</Avatar>
            <Typography sx={{ fontSize: "14px" }}>
              Im here for gossip
            </Typography>
          </Stack>
          <Stack
            sx={{ flexDirection: "row", alignItems: "center", gap: "5px" }}
          >
            <TextField
              fullWidth
              placeholder="Write your comment here.."
              inputProps={{
                style: {
                  height: "3.5px",
                  width: "100%",
                },
              }}
              sx={{
                "& input::placeholder": {
                  fontSize: "13px",
                },
              }}
            />
            <Button variant="outlined">POST</Button>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};
