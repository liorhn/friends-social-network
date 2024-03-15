import React from "react";
import Box from "@mui/material/Box";
import { blueGrey } from "@mui/material/colors";
import { Link as RouterLink } from "react-router-dom";
import { Paper, Typography, Link, Stack } from "@mui/material";
import TaskAlt from '@mui/icons-material/TaskAlt';
import { BackgroundImage } from "../BackgroundImage/BackgroundImage";


export const SucessRegister = () => {
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
        >
          <Stack
            sx={{
              justifyContent: "center",
              gap: "20px",
            }}
          >
            <Stack
              sx={{
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "coulmn",
                gap: "10px",
              }}
            >
              <TaskAlt
                sx={{
                  mb: "5px",
                }}
              ></TaskAlt>
              <Typography
                component="h2"
                sx={{
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                Registration Completed!
              </Typography>
            </Stack>
            <Link
              sx={{
                textAlign: "center",
                fontSize: "12px",
              }}
              underline="hover"
              to="/login"
              component={RouterLink}
            >
              Click here to go back to Login page.
            </Link>
          </Stack>
        </Paper>
      </Box>
    </Box>
  );
};
