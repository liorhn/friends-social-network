import React from "react";
import { Stack, Avatar, Typography } from "@mui/material";

export const Comment = ({
  comment,
  firstLetterFirstName,
  firstLetterLastName,
}: {
  comment: string;
  firstLetterFirstName: string | null;
  firstLetterLastName: string | null;
}) => {
  return (
    <Stack sx={{ gap: "15px", p: "15px" }}>
      <Stack sx={{ flexDirection: "row", alignItems: "center", gap: "10px" }}>
        <Avatar sx={{ width: 28, height: 28, fontSize: "14px" }}>
          {`${firstLetterFirstName}${firstLetterLastName}`}
        </Avatar>
        <Typography sx={{ fontSize: "14px" }}>{comment}</Typography>
      </Stack>
    </Stack>
  );
};
