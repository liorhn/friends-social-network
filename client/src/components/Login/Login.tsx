import React from "react";
import Box from "@mui/material/Box";
import { Link as RouterLink } from "react-router-dom";

import { blueGrey } from "@mui/material/colors";
import {
  Button,
  Divider,
  Link,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import LockOpenIcon from "@mui/icons-material/LockOpen";

const imageURL =
  "https://fastly.picsum.photos/id/103/1000/500.jpg?blur=5&hmac=PgtaT5GayYD3i9VcIsdSDARKI0PSLks6KZtzEs8wTDQ";

export const Login = () => {
  return (
    <Box
      sx={{
        bgcolor: blueGrey[50],
        backgroundImage: `url(${imageURL})`,
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
            backdropFilter: "blur(5px)",
          }}
          elevation={3}
          component="form"
        >
          <Typography component="h2" sx={{ textAlign: "center" }}>
            Sign-in to your account
          </Typography>

          <TextField
            sx={{ mt: 3 }}
            required
            fullWidth
            label="Email"
            name="email"
            type="email"
          />

          <TextField
            sx={{ mt: 2 }}
            required
            fullWidth
            label="Password"
            name="password"
            type="password"
          />

          <Button
            startIcon={<LockOpenIcon />}
            variant="contained"
            sx={{ mt: 2, letterSpacing: "2px" }}
            fullWidth
            size="large"
          >
            Sign in
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
              to="/forgotpass"
              underline="hover"
              sx={{ fontSize: 13 }}
            >
              Forgot your password?
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
