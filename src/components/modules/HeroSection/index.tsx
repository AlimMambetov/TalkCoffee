'use client'
import React, { useRef } from 'react';
import cls from './style.module.scss';
import { Button, Img, Text, Title } from '@/components/ui';
import { Container } from '@/components/layout';
import { useInView } from 'framer-motion';

export const HeroSection = (props: any) => {
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

	const imageVariants = {
		hidden: {
			scale: 0.8,
			opacity: 0,
			x: -50
		},
		visible: {
			scale: 1,
			opacity: 1,
			x: 0,
			transition: {
				type: "spring",
				damping: 15,
				stiffness: 100,
				delay: 0.3
			}
		}
	} as any

	return (<>
		<div ref={sectionRef} className={cls.wrap}>
			<Container
				variants={containerVariants}
				initial="hidden"
				animate={isInView ? "visible" : "hidden"}
				className={cls.cont}
			>
				<Img
					variants={imageVariants}
					src='/images/hero-img.png' className={cls.preview}
				/>
				<div className={cls.info}>
					<Title variants={itemVariants}>Talk Coffee — место,<br />где рождаются<br />вкусные разговоры</Title>
					<Text variants={itemVariants} className={cls.text}>Кофе с характером, десерты с душой<br />В самом сердце Чегема</Text>
					<Button variants={itemVariants} toScroll="#menu">Посмотреть меню</Button>
				</div>
			</Container>
		</div>
	</>)
}

export default HeroSection;