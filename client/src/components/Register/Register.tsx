import React, { useState } from "react";
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
import HowToRegIcon from "@mui/icons-material/HowToReg";

const imageURL =
  "https://fastly.picsum.photos/id/103/1000/500.jpg?blur=5&hmac=PgtaT5GayYD3i9VcIsdSDARKI0PSLks6KZtzEs8wTDQ";

export const Register = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const firstNameHandler = (e: any) => {
    setFirstName(e.target.value);
  };
  const passwordHandler = (e: any) => {
    setPassword(e.target.value);
  };
  const repeatPasswordHandler = (e: any) => {
    setRepeatPassword(e.target.value);
  };

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      Email: email,
      "First Name": firstName,
      Password: password,
      "Repeat Password": repeatPassword,
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
          onSubmit={submitHandler}
        >
          <Typography component="h2" sx={{ textAlign: "center" }}>
            Create your account
          </Typography>

          <TextField
            sx={{ mt: 3 }}
            required
            fullWidth
            label="Email"
            value={email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            sx={{ mt: 2 }}
            required
            fullWidth
            label="Name"
            value={firstName}
            type="name"
            onChange={firstNameHandler}
          />

          <TextField
            sx={{ mt: 2 }}
            required
            fullWidth
            label="Password"
            value={password}
            type="password"
            onChange={passwordHandler}
          />

          <TextField
            sx={{ mt: 2 }}
            required
            fullWidth
            label="Repeat Password"
            value={repeatPassword}
            type="repeat password"
            onChange={repeatPasswordHandler}
          />

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
              to="/forgotpass"
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
