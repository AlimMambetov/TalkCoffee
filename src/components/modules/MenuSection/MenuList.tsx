'use client'
import React from 'react';
import cls from './style.module.scss';
import { Text, Title } from '@/components/ui';
import { T_MenuCategory, T_MenuItem } from '@/types';
import { AnimatePresence, motion, MotionProps } from 'motion/react';

export interface I_MenuListProps {
	data?: T_MenuCategory[];
}


export const MenuList = ({ data }: I_MenuListProps) => {

	const menuAnim = {
		initial: { opacity: 0, y: 20 },
		animate: { opacity: 1, y: 0 },
		exit: { opacity: 0, y: -20 },
		transition: { duration: 0.3 },
	} as MotionProps;

	const menuItemAnim = {
		initial: { opacity: 0, y: -15 },
		animate: { opacity: 1, y: 0 }
	} as MotionProps;


	return (<>

		<AnimatePresence initial={false} mode="wait">
			<motion.div className={cls.menu} key={JSON.stringify(data)}>

				{data?.map((el, categoryIndex) => <motion.div
					key={el.title}
					className={cls.menu__category}
					{...menuAnim}
				>
					<Title size={4}>{el.title}</Title>
					<ul className={cls.menu__list}>
						{el.list.map((item: T_MenuItem, itemIndex) =>
							<motion.li
								key={item.name}
								className={cls.menu__item}
								{...menuItemAnim}
								transition={{ delay: 0.2 + categoryIndex * 0.1 + itemIndex * 0.05 }}
							>
								<Text size={2}>{item.name}</Text>
								<Text size={2}>{item.price}₽</Text>
							</motion.li>
						)}
					</ul>
				</motion.div>)}
			</motion.div>
		</AnimatePresence >
	</>)
}

export default MenuList;