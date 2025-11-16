'use client'
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import cls from './style.module.scss';
import { Container } from '@/components/layout';
import { Img, Text, Title } from '@/components/ui';
import MenuNav from './MenuNav';
import menuData from '&/data/menu.json';
import { T_MenuCategory } from '@/types';
import MenuList from './MenuList';

export const MenuSection = (props: any) => {
	const [menuIndex, setMenuIndex] = useState<number>(0);
	const [height, setHeight] = useState<number | 'auto'>('auto');
	const menuListRef = useRef<HTMLDivElement>(null);

	const activeData: T_MenuCategory[] = menuData[menuIndex]?.category;
	const navList: string[] = menuData.map(el => el.name);

	useEffect(() => {
		if (menuListRef.current) {
			const resizeObserver = new ResizeObserver((entries) => {
				for (let entry of entries) {
					setHeight(entry.contentRect.height);
				}
			});

			resizeObserver.observe(menuListRef.current);
			return () => resizeObserver.disconnect();
		}
	}, [activeData]);

	return (
		<section id='menu' className={cls.wrap}>
			<Container className={cls.container}>
				<Title size={2} decorLine>Меню</Title>
				<div className={cls.info}>
					<MenuNav data={navList} setter={setMenuIndex} activeIndex={menuIndex} />

					<motion.div
						className={cls.menuListContainer}
						initial={false}
						animate={{ height }}
						transition={{
							type: "spring",
							stiffness: 300,
							damping: 30,
							duration: 0.3
						}}
					>
						<div ref={menuListRef}>
							<AnimatePresence mode="wait">
								<motion.div
									key={menuIndex}
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
									transition={{ duration: 0.2 }}
								>
									<MenuList data={activeData} />
								</motion.div>
							</AnimatePresence>
						</div>
					</motion.div>
				</div>
				<Img src={'/images/stars.svg'} className={cls.stars} />
			</Container>
		</section>
	)
}

export default MenuSection;