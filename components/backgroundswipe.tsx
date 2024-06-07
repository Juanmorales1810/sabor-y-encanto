'use client';

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '@/styles/globals.css';

// import required modules
import { EffectFade, Autoplay } from 'swiper/modules';
import Image from 'next/image';

export default function BackgroundSwipe() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                effect={'fade'}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                modules={[EffectFade, Autoplay]}
                className="mySwiper"
            >
                {[1, 2, 3].map((index) => (
                    <SwiperSlide key={index}>
                        <Image className='w-960 h-full object-cover' src={`/background/bg-${index}.webp`} alt='Imagenes de Machupichu' width={960} height={1200} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
