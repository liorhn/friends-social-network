import React from 'react';
import { FormControl, TextField, InputAdornment, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';


export const Search = () => {

    return (
        <FormControl sx={{ display: "flex", flexDirection: "row", maxWidth: "1000px", justifyContent: "center", alignItems: "center" }}>
            <TextField
                id="standard-basic"
                label="Search People"
                variant="standard"
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton edge="end">
                                <SearchIcon />
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            />
        </FormControl>
    );
}
