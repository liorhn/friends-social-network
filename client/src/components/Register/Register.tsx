import React, { useState } from "react";
import Box from "@mui/material/Box";
import { blueGrey } from "@mui/material/colors";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { config } from "../../config/config";
import {
  Button,
  Divider,
  Link,
  Paper,
  Stack,
  TextField,
  Typography,
  LinearProgress,
} from "@mui/material";
import HowToRegIcon from "@mui/icons-material/HowToReg";

const imageURL =
  "https://fastly.picsum.photos/id/103/1000/500.jpg?blur=5&hmac=PgtaT5GayYD3i9VcIsdSDARKI0PSLks6KZtzEs8wTDQ";

export const Register = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [repeatPasswordError, setRepeatPasswordError] = useState("");

  const [loading, setLoading] = useState(false);

  const registerSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    let isValid = true;

    if (!firstName) {
      setFirstNameError("Please fill your name here.");
      isValid = false;
    } else if (firstName.length < 2) {
      setFirstNameError("Name must be at least 2 characters.");
      isValid = false;
    } else {
      setFirstNameError("");
    }

    if (!lastName) {
      setLastNameError("Please fill your last name here.");
      isValid = false;
    } else if (lastName.length < 2) {
      setLastNameError("Name must be at least 2 characters.");
      isValid = false;
    } else {
      setLastNameError("");
    }

    if (!email) {
      setEmailError("Please fill your email here.");
      isValid = false;
    } else if (!/^[\S]+@[\S]+\.[\w]+$/.test(email)) {
      setEmailError("Please provide valid email address.");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (!password) {
      setPasswordError("Please fill your password here.");
      isValid = false;
    } else if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters.");
      isValid = false;
    } else {
      setPasswordError("");
    }

    if (!repeatPassword) {
      setRepeatPasswordError("Please repeat your password here.");
      isValid = false;
    } else if (password !== repeatPassword) {
      setRepeatPasswordError("Passwords do not match!");
      setPasswordError("Passwords do not match!");
      isValid = false;
    } else {
      setRepeatPasswordError("");
    }

    if (!isValid) {
      return;
    }

    setLoading(true);

    axios
      .post(`${config.apiBase}/v1/users`, {
        email,
        firstName,
        lastName,
        password,
      })
      .then(() => {
        setEmailError("");
        navigate("/registration-complete");
      })
      .catch((error) => {
        if (error.response.data.error) {  
          setEmailError("Email is already in use.");
        }
      })
      .finally(() => {
        setLoading(false);
      });
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
          }}
          elevation={3}
          component="form"
          onSubmit={registerSubmitHandler}
          noValidate={true}
        >
          <Typography component="h2" sx={{ textAlign: "center" }}>
            Create your account
          </Typography>

          <TextField
            sx={{ mt: 3 }}
            fullWidth
            label="Email"
            value={email}
            type="email"
            error={!!emailError}
            helperText={emailError}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <TextField
            sx={{ mt: 2 }}
            fullWidth
            label="Name"
            value={firstName}
            type="name"
            error={!!firstNameError}
            helperText={firstNameError}
            onChange={(e) => setFirstName(e.target.value)}
          />

          <TextField
            sx={{ mt: 2 }}
            fullWidth
            label="Last Name"
            value={lastName}
            type="name"
            error={!!lastNameError}
            helperText={lastNameError}
            onChange={(e) => setLastName(e.target.value)}
          />

          <TextField
            sx={{ mt: 2 }}
            fullWidth
            label="Password"
            value={password}
            type="password"
            error={!!passwordError}
            helperText={passwordError}
            onChange={(e) => setPassword(e.target.value)}
          />

          <TextField
            sx={{ mt: 2 }}
            fullWidth
            label="Repeat Password"
            value={repeatPassword}
            type="password"
            error={!!repeatPasswordError}
            helperText={repeatPasswordError}
            onChange={(e) => setRepeatPassword(e.target.value)}
          />
          {loading && <LinearProgress sx={{ mt: "20px" }} />}
          <Button
            startIcon={<HowToRegIcon />}
            variant="contained"
            sx={{ mt: 2, letterSpacing: "2px" }}
            fullWidth
            size="large"
            type="submit"
          >
            Register
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
              to="/reset-password"
              underline="hover"
              sx={{ fontSize: 13 }}
            >
              Forgot your password?
            </Link>
            <Link
              component={RouterLink}
              to="/login"
              underline="hover"
              sx={{ fontSize: 13 }}
            >
              Log in here
            </Link>
          </Stack>
        </Paper>
      </Box>
    </Box>
  );
};
