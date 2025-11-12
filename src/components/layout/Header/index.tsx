'use client'
import React, { useState } from 'react';
import cls from './style.module.scss';
import { Logo, Navigation } from '@/components/common';
import { Button, Icon } from '@/components/ui';
import Container from '../Container';
import { useScroll, motion, useMotionValueEvent } from 'motion/react';
import { useDevice } from '@/hooks';

export const Header = (props: any) => {
	const [headerPin, SET_headerPin] = useState(false);
	const { scrollY } = useScroll();
	const device = useDevice();

	useMotionValueEvent(scrollY, 'change', (latest) => {
		const currentScroll = Math.floor(latest);
		if (currentScroll > 100) SET_headerPin(true);
		else SET_headerPin(false);
	});


	if (!device) return;


	return (<>
		<motion.header data-fixed={headerPin || null} className={cls.wrap}>
			<Container className={cls.grid}>
				<Logo className={cls.logo} />
				{
					device.isDesktop && <>
						<Navigation className={cls.nav} />
						<Button className={cls.btn} color='heavy'>Связаться с нами</Button>
					</>
				}
			</Container>
		</motion.header>
	</>)
}

export default Header;