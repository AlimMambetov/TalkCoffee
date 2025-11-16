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
import { useScreen } from '@/hooks';



export const ReviewsSection = (props: any) => {
	const swiperRef = useRef<SwiperType | null>(null);
	const [isBeginning, setIsBeginning] = useState(true);
	const [isEnd, setIsEnd] = useState(false);
	const { deviceType, isTouch } = useScreen();


	const slidesPerView = {
		'tablet': 1.7,
		'laptop': 1.7,
		'desktop': 2,
	} as any;

	const swiperOps = {
		slidesPerView: slidesPerView[deviceType] || 1.2,
		slidesPerGroup: deviceType == 'desktop' ? 2 : 1,
		style: {
			overflow: deviceType == 'desktop' ? 'hidden' : 'visible',
		},
		spaceBetween: isTouch ? 30 : 60,
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
					{!isTouch &&
						<div className={cls.arrows}>
							<Button onClick={handlePrev} disabled={isBeginning} color='heavy'><Icon flipX name='arrow' /></Button>
							<Button onClick={handleNext} disabled={isEnd} color='heavy'><Icon name='arrow' /></Button>
						</div>
					}
					<Button color='heavy'>Оставить отзыв</Button>
				</div>
			</Container>
		</section>
	</>)
}

export default ReviewsSection;