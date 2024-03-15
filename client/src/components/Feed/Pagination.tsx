import React from "react";
import Pagination from "@mui/material/Pagination";

export type Page = {
    postPerPage: number;
    totalPosts: number;
    onPageChange: (event: React.ChangeEvent<unknown>, pageNumber: number) => void;
}

export const PostPagination = ({ postPerPage, totalPosts, onPageChange }: Page) => {

    const allPages = Math.ceil(totalPosts / postPerPage);

    return (
        <Pagination
            sx={{ display: "flex", justifyContent: "center", pt: "10px" }}
            count={allPages}
            onChange={onPageChange} 
        />
    );
};
