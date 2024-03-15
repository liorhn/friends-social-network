import React from "react";
import { AddFriendCard } from './AddFriendCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Stack, Typography } from '@mui/material';
import { Search } from "./Search";


export const NewFriends = () => {
    return (
        <Stack sx={{ marginTop: "100px" }}>
            <Typography sx={{ color: "primary.main", textAlign: "center", textDecoration: "underline", fontWeight: "bolds" }}>FIND NEW FRIENDS!</Typography>
            <Search />
            <Swiper
                style={{ maxWidth: "1000px", marginTop: "30px" }}
                spaceBetween={1}
                slidesPerView={4}
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                navigation
            >
                <SwiperSlide>
                    <Stack>
                        <AddFriendCard />
                    </Stack>
                </SwiperSlide>
                <SwiperSlide>
                    <Stack>
                        <AddFriendCard />
                    </Stack>
                </SwiperSlide>
                <SwiperSlide>
                    <Stack>
                        <AddFriendCard />
                    </Stack>
                </SwiperSlide>
                <SwiperSlide>
                    <Stack>
                        <AddFriendCard />
                    </Stack>
                </SwiperSlide>
                <SwiperSlide>
                    <Stack>
                        <AddFriendCard />
                    </Stack>
                </SwiperSlide>
            </Swiper>
        </Stack>
    );
}