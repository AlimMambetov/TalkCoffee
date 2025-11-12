'use client'
import React from 'react';
import cls from './style.module.scss';
import Container from '../Container';
import { Icon, LinkText, Text } from '@/components/ui';
import { Logo, Navigation, Socials } from '@/components/common';

export const Footer = (props: any) => {



	return (<>
		<footer id='contacts' className={cls.wrap}>
			<Container className={cls.grid}>
				<Logo className={cls.logo} />
				<Navigation className={cls.nav} mode={'footer'} />
				<Socials className={cls.socials} />
				<div data-block="actions">
					<Text size={3}>Быстрые действия</Text>
					<LinkText icon='lamp'>Предложить идею</LinkText>
					<LinkText icon='message'>Обратная связь</LinkText>
					<LinkText icon='question'>Задать вопрос</LinkText>
				</div>
				<div data-block="docs">
					<Text size={3}>Документы</Text>
					<LinkText>Публичная оферта</LinkText>
					<LinkText>Политика конфиденциальности</LinkText>
					<LinkText>ООО «Talk Coffee», ИП Иванов И.И.</LinkText>
				</div>
				<div data-block="contacts">
					<Text size={3}>Контакты</Text>
					<LinkText icon='phone'>+7-928-131-42-13</LinkText>
					<LinkText icon='mail'>talkcoffee.chegem@gmail.com</LinkText>
					<LinkText icon='mark'>г. Чегем, ул. Ленина 123в</LinkText>
				</div>
				<Text size={3} className={cls.date}>© 2025 • by <span>NajmLabs</span> • v{process.env.APP_VERSION || '0.0.0'}</Text>
			</Container>
		</footer>
	</>)
}

export default Footer;