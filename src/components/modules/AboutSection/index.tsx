'use client'
import React from 'react';
import cls from './style.module.scss';
import { Container } from '@/components/layout';
import { Text, Title, Img, Icon } from '@/components/ui';

export const AboutSection = (props: any) => {


	return (<>
		<section id='about' className={cls.wrap}>
			<Container className={cls.content}>
				<Title size={2} className={cls.title}>О нас</Title>
				<Text size={2} className={cls.text}>Наша сила — в идеальном кофе и авторских лимонадах, которые мы готовим сами с нуля. Всё остальное — свежую выпечку и сэндвичи — мы тщательно отбираем у лучших локальных производителей. Так мы гарантируем высочайшее качество каждого продукта в вашей чашке и на вашей тарелке.</Text>
				<Text size={2} className={cls.text}>Для нас важно, чтобы вы чувствовали не только насыщенный вкуc, но и уверенность в качестве того, что вы едите и пьете. Мы тратим свое время на поиск и приготовление, чтобы вы могли потратить ваше время на наслаждение моментом и общением с близкими.</Text>
			</Container>
			<div className={cls.preview}>
				<img src="/images/video-texture.png" alt="texture" />
				<video src="/videos/preview.mp4" muted autoPlay loop />
			</div>
		</section>
	</>)
}

export default AboutSection;