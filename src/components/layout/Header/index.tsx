'use client'
import React from 'react';
import cls from './style.module.scss';
import { Logo, Navigation } from '@/components/common';
import { Button, Icon } from '@/components/ui';
import Container from '../Container';

export const Header = (props: any) => {


	return (<>
		<header className={cls.wrap}>
			<Container className={cls.grid}>
				<Logo className={cls.logo} />
				<Navigation className={cls.nav} />
				<Button color='heavy'>Связаться с нами</Button>
			</Container>
		</header>
	</>)
}

export default Header;