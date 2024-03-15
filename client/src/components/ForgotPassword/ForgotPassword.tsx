import React from "react";
import Box from "@mui/material/Box";
import { blueGrey } from "@mui/material/colors";
import { Link as RouterLink } from "react-router-dom";
import {
  Button,
  Divider,
  Link,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import RotateLeftIcon from "@mui/icons-material/RotateLeft";
import { BackgroundImage } from "../BackgroundImage/BackgroundImage";


export const ForgotPassword = () => {
  return (
    <Box
      sx={{
        bgcolor: blueGrey[50],
        backgroundImage: `url(${BackgroundImage.imageUrl})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        py: 10,
        px: 3,
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 450,
          mx: "auto",
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            color: "primary.main",
            fontWeight: 900,
            textTransform: "uppercase",
          }}
          variant="h4"
          component="h1"
        >
          Friends.
        </Typography>

        <Paper
          sx={{
            p: 4,
            mt: 2,
            borderRadius: 3,
          }}
          elevation={3}
          component="form"
        >
          <Typography component="h2" sx={{ textAlign: "center" }}>
            Reset your password
          </Typography>

          <TextField
            sx={{ mt: 3 }}
            required
            fullWidth
            label="Email"
            name="email"
            type="email"
          />

          <Button
            startIcon={<RotateLeftIcon />}
            variant="contained"
            sx={{ mt: 2, letterSpacing: "2px" }}
            fullWidth
            size="large"
          >
            Reset
          </Button>

          <Stack
            divider={<Divider orientation="vertical" flexItem />}
            sx={{ mt: 3 }}
            direction="row"
            justifyContent="center"
            spacing={2}
          >
            <Link
              component={RouterLink}
              to="/login"
              underline="hover"
              sx={{ fontSize: 13 }}
            >
              Log in
            </Link>
            <Link
              component={RouterLink}
              to="/register"
              underline="hover"
              sx={{ fontSize: 13 }}
            >
              Create new account
            </Link>
          </Stack>
        </Paper>
      </Box>
    </Box>
  );
};
