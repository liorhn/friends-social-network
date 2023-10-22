import React, { useState } from "react";
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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validateForm = () => {
    let isValid = true;

    if (!email) {
      setEmailError("Please fill your email here.");
      isValid = false;
    } else if (email.length < 10) {
      setEmailError("Email must be at least 10 characters, including @.");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (!password) {
      setPasswordError("Please fill your password here.");
      isValid = false;
    } else if (password.length < 8) {
      setPasswordError(
        "Password can be anything but must be at least 8 characters."
      );
      isValid = false;
    } else {
      setPasswordError("");
    }

    return isValid;
  };

  const submitHanlder = (e: any) => {
    e.preventDefault();
    console.log("sent on submit");

    const isValid = validateForm();
    if (!isValid) {
      return;
    }
  };
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
          onSubmit={submitHanlder}
        >
          <Typography component="h2" sx={{ textAlign: "center" }}>
            Sign-in to your account
          </Typography>

          <TextField
            sx={{ mt: 3 }}
            fullWidth
            label="Email"
            value={email}
            type="email"
            error={!!emailError}
            helperText={emailError}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <TextField
            sx={{ mt: 2 }}
            fullWidth
            label="Password"
            value={password}
            type="password"
            error={!!passwordError}
            helperText={passwordError}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

          <Button
            startIcon={<LockOpenIcon />}
            variant="contained"
            sx={{ mt: 2, letterSpacing: "2px" }}
            fullWidth
            size="large"
            type="submit"
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
