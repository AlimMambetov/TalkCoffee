'use client'
import React from 'react';
import cls from './style.module.scss';
import { Container } from '@/components/layout';
import { Img, Text, Title } from '@/components/ui';

export const MenuSection = (props: any) => {


	return (<>
		<section className={cls.wrap}>
			<Container className={cls.container}>
				<Title decorLine>Меню</Title>
				<div className={cls.info}>


					<div className={cls.nav}>
						<Title size={5}>Кофе</Title>
						<Title size={5}>Чай</Title>
						<Title size={5}>Лимонады</Title>
						<Title size={5}>Закуски</Title>
						<Title size={5}>Десерты</Title>
					</div>

					<div className={cls.menuBlock}>
						<Title size={4}>Горячий кофе</Title>
						<div className={cls.menuPositions}>

							<div className={cls.position}>
								<Text size={2}>Эспрессо</Text>
								<Text size={2}>150₽ </Text>
							</div>

							<div className={cls.position}>
								<Text size={2}>Эспрессо</Text>
								<Text size={2}>150₽ </Text>
							</div>

							<div className={cls.position}>
								<Text size={2}>Эспрессо</Text>
								<Text size={2}>150₽ </Text>
							</div>

							<div className={cls.position}>
								<Text size={2}>Эспрессо</Text>
								<Text size={2}>150₽ </Text>
							</div>

							<div className={cls.position}>
								<Text size={2}>Эспрессо</Text>
								<Text size={2}>150₽ </Text>
							</div>

							<div className={cls.position}>
								<Text size={2}>Эспрессо</Text>
								<Text size={2}>150₽ </Text>
							</div>

						</div>
					</div>

					<div className={cls.menuBlock}>
						<Title size={4}>Холодный кофе</Title>
						<div className={cls.menuPositions}>

							<div className={cls.position}>
								<Text size={2}>Эспрессо</Text>
								<Text size={2}>150₽ </Text>
							</div>

							<div className={cls.position}>
								<Text size={2}>Эспрессо</Text>
								<Text size={2}>150₽ </Text>
							</div>

							<div className={cls.position}>
								<Text size={2}>Эспрессо</Text>
								<Text size={2}>150₽ </Text>
							</div>

							<div className={cls.position}>
								<Text size={2}>Эспрессо</Text>
								<Text size={2}>150₽ </Text>
							</div>

							<div className={cls.position}>
								<Text size={2}>Эспрессо</Text>
								<Text size={2}>150₽ </Text>
							</div>

							<div className={cls.position}>
								<Text size={2}>Эспрессо</Text>
								<Text size={2}>150₽ </Text>
							</div>

						</div>
					</div>
				</div>
				<Img src={'/images/stars.svg'} className={cls.stars} />
			</Container>
		</section>
	</>)
}

export default MenuSection;