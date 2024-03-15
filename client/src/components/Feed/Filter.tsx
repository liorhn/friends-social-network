import { Checkbox, FormControlLabel, Typography } from "@mui/material";
import React from "react";

export const Filter = () => {
    return (
        <FormControlLabel
            control={<Checkbox size="small" />}
            label={
                <Typography variant="body2" sx={{ fontSize: "12px", color: "primary.main", fontWeight: "bold" }}>
                    FILTER BY MY POSTS ONLY
                </Typography>
            }
        />
    );
}   