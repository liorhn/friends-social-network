import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { blueGrey } from "@mui/material/colors";
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
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { store } from "../../store/store";
import { loggedIn } from "../../store/userSlice";
import { BackgroundImage } from "../BackgroundImage/BackgroundImage";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [invalidDetails, setInvalidDetails] = useState("");

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const loginSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    let isValid = true;

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

    if (!isValid) {
      return;
    }

    setLoading(true);

    axios
      .post(
        `${config.apiBase}/v1/session`,
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      )
      .then(() => {
        setInvalidDetails("");
        store.dispatch(loggedIn());
        navigate("/posts");
      })  
      .catch((error) => { 
        if (error.response.data.errorMessage) { 
          setInvalidDetails("Email or Password is incorrect");
          return;
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
            backdropFilter: "blur(5px)",
          }}
          elevation={3}
          component="form"
          onSubmit={loginSubmitHandler}
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

          {invalidDetails && (
            <Typography
              component="h3"
              sx={{
                textAlign: "center",
                fontWeight: "bold",
                color: "secondary.main",
                fontSize: "12px",
                mt: "15px",
              }}
            >
              {invalidDetails}
            </Typography>
          )}

          {loading && <LinearProgress sx={{ mt: "20px" }} />}

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
              to="/reset-password"
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
