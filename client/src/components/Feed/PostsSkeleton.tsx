import React from "react";
import { Box, Stack, Skeleton } from "@mui/material";

export const PostsSkeleton = () => {
  const simulateList = React.useMemo(() => Array(5).fill(null), []);
  return (
    <>
      {simulateList.map((value, index) => (
        <Box
          key={index}
          sx={{
            maxWidth: "500px",
            minHeight: "200px",
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px;",
            p: "20px",
            m: "20px auto",
          }}
        >
          <Stack sx={{ flexDirection: "row", alignItems: "center", gap: 1 }}>
            <Skeleton
              animation="wave"
              variant="circular"
              width={30}
              height={30}
            />
            <Box sx={{ flexGrow: 1 }}>
              <Skeleton
                animation="wave"
                variant="text"
                width="60%"
                sx={{ fontSize: 8 }}
              />
              <Skeleton
                animation="wave"
                variant="text"
                width="40%"
                sx={{ fontSize: 8 }}
              />
            </Box>
          </Stack>
          <Stack sx={{ mt: 2 }}>
            <Skeleton animation="wave" variant="text" sx={{ fontSize: 10 }} />
            <Skeleton animation="wave" variant="text" sx={{ fontSize: 10 }} />
            <Skeleton
              animation="wave"
              variant="text"
              width="90%"
              sx={{ fontSize: 10 }}
            />
          </Stack>
        </Box>
      ))}
    </>
  );
};
