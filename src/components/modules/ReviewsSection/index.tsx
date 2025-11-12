'use client'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import cls from './style.module.scss';
import { Container } from '@/components/layout';
import { Review } from '@/components/common';
import { Button, Icon, Title } from '@/components/ui';
import reviews_data from '&/data/reviews.json';

import 'swiper/css';



export const ReviewsSection = (props: any) => {
	const swiperRef = useRef<SwiperType | null>(null);
	const [isBeginning, setIsBeginning] = useState(true);
	const [isEnd, setIsEnd] = useState(false);


	const swiperOps = {
		slidesPerView: 2,
		slidesPerGroup: 2,
		spaceBetween: 60,
		onSwiper: (swiper) => {
			swiperRef.current = swiper;
			setIsBeginning(swiper.isBeginning);
			setIsEnd(swiper.isEnd);
		},
		onSlideChange: swiper => {
			setIsBeginning(swiper.isBeginning);
			setIsEnd(swiper.isEnd);
		},

	} as SwiperProps;


	const handlePrev = () => {
		if (swiperRef.current) {
			swiperRef.current.slidePrev();
		}
	};

	const handleNext = () => {
		if (swiperRef.current) {
			swiperRef.current.slideNext();
		}
	};

	return (<>
		<section id='reviews' className={cls.wrap}>
			<Container className={cls.cont}>
				<Title size={2} decorLine>Отзывы <Icon name='info' /></Title>
				<div className={cls.reviews}>
					<Swiper className={cls.swiper} {...swiperOps}>
						{reviews_data.map((el, i) =>
							<SwiperSlide key={i} className={cls.swiper__slide}>
								<Review {...el} />
							</SwiperSlide>
						)}
					</Swiper>
				</div>
				<div className={cls.controlls}>
					<div className={cls.arrows}>
						<Button onClick={handlePrev} disabled={isBeginning} color='heavy'><Icon flipX name='arrow' /></Button>
						<Button onClick={handleNext} disabled={isEnd} color='heavy'><Icon name='arrow' /></Button>
					</div>
					<Button color='heavy'>Оставить отзыв</Button>
				</div>
			</Container>
		</section>
	</>)
}

export default ReviewsSection;