'use client'
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
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

	const sectionRef = useRef(null);
	const isInView = useInView(sectionRef, {
		once: true, // анимация сработает только один раз
		amount: 0.3 // 30% элемента должно быть видно
	});

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
				delayChildren: 0.1
			}
		}
	} as any

	const itemVariants = {
		hidden: { y: 30, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				type: "spring",
				damping: 12,
				stiffness: 100
			}
		}
	} as any

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
		<section ref={sectionRef} id='menu' className={cls.wrap}>
			<Container
				variants={containerVariants}
				initial="hidden"
				animate={isInView ? "visible" : "hidden"}
				className={cls.container}
			>
				<Title variants={itemVariants} size={2} decorLine>Меню</Title>
				<motion.div variants={itemVariants} className={cls.info}>
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
								<motion.div>
									<MenuList data={activeData} />
								</motion.div>
							</AnimatePresence>
						</div>
					</motion.div>
				</motion.div>
				<Img variants={containerVariants} src={'/images/stars.svg'} className={cls.stars} />
			</Container>
		</section>
	)
}

export default MenuSection;