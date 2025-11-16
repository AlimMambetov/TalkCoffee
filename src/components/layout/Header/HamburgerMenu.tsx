'use client'
import React, { useState } from 'react';
import cls from './style.module.scss';
import { motion, AnimatePresence, MotionProps, } from 'framer-motion';
import { Icon } from '@/components/ui';
import { Navigation } from '@/components/common';



export const HamburgerMenu = (props: any) => {
	const [isOpen, setIsOpen] = useState(false)


	const iconOps = {
		initial: { opacity: 0, rotate: -90 },
		animate: { opacity: 1, rotate: 0 },
		exit: { opacity: 0, rotate: 90 },
		transition: { duration: 0.2 },
		onClick: (e: any) => setIsOpen(prev => !prev),
		className: cls.hamburger
	} as MotionProps

	const menuOps = {
		className: cls.menu,
		initial: { y: "-100%", opacity: 0 },
		animate: { y: 0, opacity: 1 },
		exit: { y: "-100%", opacity: 0 },
		transition: {
			type: "spring",
			damping: 25,
			stiffness: 300,
			duration: 0.5
		},
		drag: "y",
		dragConstraints: { top: 0, bottom: 0 },
		dragElastic: 0.2,
		onDragEnd: (event: any, info: any) => {
			if (info.offset.y < -50 || info.velocity.y < -500) {
				setIsOpen(false);
			}
		},
	} as MotionProps

	const closeMenu = () => {
		setIsOpen(false);
	};

	return (<>
		<AnimatePresence>
			{isOpen && (
				<>
					<motion.div	{...menuOps}>
						<Navigation onClickItem={closeMenu} className={cls.menu__nav} mode='vertical' />
					</motion.div>
				</>
			)}
		</AnimatePresence>

		<AnimatePresence mode='wait' initial={false}>
			{!isOpen ? (
				<motion.div key="hamburger"	{...iconOps} >
					<Icon name='hamburger' />
				</motion.div>
			) : (
				<motion.div key="cross" {...iconOps}>
					<Icon name='cross' />
				</motion.div>
			)}
		</AnimatePresence>
	</>)
}

export default HamburgerMenu;