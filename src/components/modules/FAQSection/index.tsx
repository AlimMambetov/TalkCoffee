'use client'
import React from 'react';
import cls from './style.module.scss';
import { Container } from '@/components/layout';
import { Button, Icon, Title } from '@/components/ui';
import { Accordion } from '@/components/common';
import FAQ_data from '&/data/FAQ-accordion.json'


export const FAQSection = (props: any) => {


	return (<>
		<section id='FAQ' className={cls.wrap}>
			<Icon data-star="1" name='star' />
			<Icon data-star="2" name='star' />
			<Container className={cls.content}>
				<Title size={2} decorLine>Вопрос - ответ</Title>
				<div className={cls.list}>
					{FAQ_data.map(el => <Accordion key={el.id} {...el} />)}
				</div>
				<Button className={cls.btn} color='plain'>Задать вопрос</Button>
			</Container>
		</section>
	</>)
}

export default FAQSection;