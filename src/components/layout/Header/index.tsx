'use client'
import React, { useState } from 'react';
import cls from './style.module.scss';
import { Logo, Navigation } from '@/components/common';
import { Button } from '@/components/ui';
import Container from '../Container';
import { useScreen } from '@/hooks';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import HamburgerMenu from './HamburgerMenu';

export const Header = (props: any) => {
	const [headerPin, SET_headerPin] = useState(false);
	const { scrollY } = useScroll();
	const { isTouch } = useScreen();

	useMotionValueEvent(scrollY, 'change', (latest) => {
		const currentScroll = Math.floor(latest);
		if (currentScroll > 100) SET_headerPin(true);
		else SET_headerPin(false);
	});


	return (<>
		<motion.header data-fixed={headerPin || null} className={cls.wrap}>
			<Container className={cls.grid}>
				<Logo className={cls.logo} />
				{
					isTouch ?
						<HamburgerMenu />
						:
						<>
							<Navigation className={cls.nav} />
							<Button className={cls.btn} color='heavy'>Связаться с нами</Button>
						</>
				}
			</Container>
		</motion.header>
	</>)
}

export default Header;