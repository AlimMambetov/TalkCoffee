'use client'
import React from 'react';
import cls from './style.module.scss';
import { Navigation } from '@/components/common';
import { Button, Icon } from '@/components/ui';
import Container from '../Container';

export const Header = (props: any) => {


	return (<>
		<header className={cls.wrap}>
			<Container className={cls.grid}>
				<Icon className={cls.logo} onClick={e => location.reload()} name='logo' />
				<Navigation className={cls.nav} />
				<Button color='heavy'>Связаться с нами</Button>
			</Container>
		</header>
	</>)
}

export default Header;