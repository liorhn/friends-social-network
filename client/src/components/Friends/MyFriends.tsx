import React from "react";
import { ExistFriendCard } from './ExistFriendCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { Stack, Typography } from '@mui/material';
import 'swiper/css/pagination';


export const MyFriends = () => {
    return (
        <Stack sx={{ marginTop: "100px" }}>
            <Typography sx={{ color: "primary.main", textAlign: "center", textDecoration: "underline", fontWeight: "bold" }}>MY FRIENDS LIST</Typography>
            <Swiper
                style={{ maxWidth: "1000px", marginTop: "30px" }}
                spaceBetween={1}
                slidesPerView={4}
                modules={[Pagination]}
                pagination
            >
                <SwiperSlide>
                    <Stack>
                        <ExistFriendCard />
                    </Stack>
                </SwiperSlide>
                <SwiperSlide>
                    <Stack>
                        <ExistFriendCard />
                    </Stack>
                </SwiperSlide>
                <SwiperSlide>
                    <Stack>
                        <ExistFriendCard />
                    </Stack>
                </SwiperSlide>
                <SwiperSlide>
                    <Stack>
                        <ExistFriendCard />
                    </Stack>
                </SwiperSlide>
                <SwiperSlide>
                    <Stack>
                        <ExistFriendCard />
                    </Stack>
                </SwiperSlide>
            </Swiper>
        </Stack>
    );
}