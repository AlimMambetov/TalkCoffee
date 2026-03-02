'use client'
import React, { useRef } from 'react';
import cls from './style.module.scss';
import { Container } from '@/components/layout';
import { Text, Title, Img, Icon } from '@/components/ui';
import { useInView } from 'framer-motion';

export const AboutSection = (props: any) => {
	const sectionRef = useRef(null);
	const isInView = useInView(sectionRef, {
		once: true, // анимация сработает только один раз
		amount: 0.3 // 30% элемента должно быть видно
	});

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
				delayChildren: 0.1
			}
		}
	} as any

	const itemVariants = {
		hidden: { y: 30, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				type: "spring",
				damping: 12,
				stiffness: 100
			}
		}
	} as any

	return (<>
		<section ref={sectionRef} id='about' className={cls.wrap}>
			<Container
				variants={containerVariants}
				initial="hidden"
				animate={isInView ? "visible" : "hidden"}
				className={cls.content}
			>
				<Title variants={itemVariants} size={2} className={cls.title}>О нас</Title>
				<Text variants={itemVariants} size={2} className={cls.text}>Наша сила — в идеальном кофе и авторских лимонадах, которые мы готовим сами с нуля. Всё остальное — свежую выпечку и сэндвичи — мы тщательно отбираем у лучших локальных производителей. Так мы гарантируем высочайшее качество каждого продукта в вашей чашке и на вашей тарелке.</Text>
				<Text variants={itemVariants} size={2} className={cls.text}>Для нас важно, чтобы вы чувствовали не только насыщенный вкуc, но и уверенность в качестве того, что вы едите и пьете. Мы тратим свое время на поиск и приготовление, чтобы вы могли потратить ваше время на наслаждение моментом и общением с близкими.</Text>
			</Container>
			<div className={cls.preview}>
				<img src="/images/video-texture.png" alt="texture" />
				<video src="/videos/preview.mp4" muted autoPlay loop />
			</div>
		</section>
	</>)
}

export default AboutSection;