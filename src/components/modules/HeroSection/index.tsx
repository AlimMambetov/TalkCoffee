'use client'
import React from 'react';
import cls from './style.module.scss';
import { Button, Img, Text, Title } from '@/components/ui';

export const HeroSection = (props: any) => {


	return (<>
		<div className={cls.wrap}>
			<Img src='/Images/hero-img.png' className={cls.mainImage} />
			<div className={cls.info}>
				<Title>Talk Coffee — место,<br />где рождаются<br />вкусные разговоры</Title>
				<Text className={cls.text}>Кофе с характером, десерты с душой<br />В самом сердце Чегема</Text>
				<Button>Посмотреть меню</Button>
			</div>
		</div>
	</>)
}

export default HeroSection;