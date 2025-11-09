'use client'
import React from 'react';
import cls from './style.module.scss';
import { Container } from '@/components/layout';
import { Img, Text, Title } from '@/components/ui';

export const GallerySection = (props: any) => {


	return (<>
		<section className={cls.wrap}>
			<Container className={cls.container}>
				<Title decorLine>Галерея</Title>
				<div className={cls.galleryGrid}>
					<div data-span='2x2' className={cls.box}>
						<Title size={3}>Наше<br />Заведение</Title>
						<hr />
						<Text size={2}>На фотографиях</Text>
					</div>
					<Img data-span='2x2' src={'/images/gallery/2.jpg'} />
					<Img data-span='2x2' src={'/images/gallery/3.jpg'} />
					<Img data-span='3x3' src={'/images/gallery/4.jpg'} />
					<Img data-span='3x3' src={'/images/gallery/5.jpg'} />
					<Img data-span='2x3' src={'/images/gallery/6.jpg'} />
					<Img data-span='3x3' src={'/images/gallery/7.jpg'} />
					<Img data-span='1x3' src={'/images/gallery/8.jpg'} />
				</div>
			</Container>
		</section>
	</>)
}

export default GallerySection;