import React from "react";
import { AddFriendCard } from './AddFriendCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { Stack, Typography } from '@mui/material';
import { Search } from "./Search";
import 'swiper/css/pagination';


export const NewFriends = () => {
    return (
        <Stack sx={{ marginTop: "100px" }}>
            <Typography sx={{ color: "primary.main", textAlign: "center", textDecoration: "underline", fontWeight: "bold" }}>FIND NEW FRIENDS!</Typography>
            <Search />
            <Swiper
                style={{ maxWidth: "1000px", marginTop: "30px" }}
                spaceBetween={1}
                slidesPerView={4}
                modules={[Pagination]}
                pagination={{ clickable: true }}

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