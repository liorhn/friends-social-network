import React from 'react';
import { Avatar, Box, Button, Stack, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

export const AddFriendCard = () => {
    return (
        <Stack sx={{ maxWidth: "150px", borderWidth: "1", borderColor: "primary.main", borderStyle: "solid", borderRadius: "20px", p: "20px", justifyContent: "center", alignItems: "center", gap: "20px" }}>
            <Box>
                <Avatar sx={{ bgcolor: "primary.main", width: "50px", height: "50px", fontSize: "20px" }}>LH</Avatar>
            </Box>
            <Typography>Lior Haninaev</Typography>
            <Button variant='outlined' startIcon={<AddIcon />}>Add</Button>
        </Stack>
    );
}   



/* 
My design to friendship schema MYSQL DB:

* Creating a table called Friendship with 3 coulmns (userId-1, userId-2, status)

* Each useId will be indexed by the UserId ( userId-2 will be indexed as 2)

* It will be spereted to 'The Reciver', 'The Sender'.

--

ADD FRIEND =>  INSERT INTO Friendship (sender_id, reciver_id, status) VALUES (sender_id, receiver_id, 'pending');

REMOVE FRIEND =>  DELETE FROM Friendship WHERE (userId_1 = user_id AND userId_2 = friend_id) OR (userId_1 = friend_id AND userId_2 = user_id);

LOAD FRIENDS POSTS => 

SELECT p.*
FROM Posts p
JOIN Friendship f ON (p.author_id = f.userId_1 OR p.author_id = f.userId_2)
WHERE (f.userId_1 = your_user_id OR f.userId_2 = your_user_id)
AND f.status = 'accepted';

*/


