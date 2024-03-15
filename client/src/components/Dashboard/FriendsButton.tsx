import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import GroupIcon from '@mui/icons-material/Group';


export const FriendsButton = () => {
    return (
        <Link to={"/friends"}>
            <Button>
                <GroupIcon sx={{ color: "white" }} />
            </Button>
        </Link>
    );
}