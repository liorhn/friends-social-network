import React from 'react';
import { FormControl, TextField, InputAdornment, IconButton, ThemeProvider, createTheme } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';


export const Search = () => {

    const headerSearchField = createTheme({
        components: {
            MuiTextField: {
                styleOverrides: {
                    root: {
                        '& .MuiInputBase-input': {
                            color: 'white',
                        },
                        '& .MuiInput-underline': {
                            '&:before': {
                                borderBottomColor: 'white !important',
                            },
                            '&:hover:before': {
                                borderBottomColor: 'white !important',
                            },
                            '&:after': {
                                borderBottomColor: 'white !important',
                            },
                        },
                        '& .MuiInputLabel-root': {
                            color: 'white',
                            '&.Mui-focused': {
                                color: 'white',
                            },
                        },
                    },
                },
            },
        },
    });

    return (
        <ThemeProvider theme={headerSearchField}>
            <FormControl sx={{ display: "flex", flexDirection: "row", color: "white", paddingBottom: "16px", paddingRight: "20px" }}>
                <TextField
                    id="standard-basic"
                    label="Search People"
                    variant="standard"
                    fullWidth
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton edge="end">
                                    <SearchIcon sx={{ color: "white" }} />
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
            </FormControl>
        </ThemeProvider>
    );
}
