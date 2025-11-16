'use client'
import React from 'react';
import cls from './style.module.scss';
import { Button, Img, Text, Title } from '@/components/ui';
import { Container } from '@/components/layout';

export const HeroSection = (props: any) => {


	return (<>
		<div className={cls.wrap}>
			<Container className={cls.cont}>
				<Img src='/images/hero-img.png' className={cls.preview} />
				<div className={cls.info}>
					<Title>Talk Coffee — место,<br />где рождаются<br />вкусные разговоры</Title>
					<Text className={cls.text}>Кофе с характером, десерты с душой<br />В самом сердце Чегема</Text>
					<Button href="#menu">Посмотреть меню</Button>
				</div>
			</Container>
		</div>
	</>)
}

export default HeroSection;