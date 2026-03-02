'use client'
import React from 'react';
import cls from './style.module.scss';
import { Text, Title } from '@/components/ui';
import { T_MenuCategory, T_MenuItem } from '@/types';
import { AnimatePresence, m, motion, MotionProps } from 'motion/react';

export interface I_MenuListProps {
	data?: T_MenuCategory[];
}


export const MenuList = ({ data }: I_MenuListProps) => {



	const menuTitleAnim = {
		initial: { opacity: 0, x: -15 },
		animate: (custom: { delay: number }) => ({
			opacity: 1,
			x: 0,
			transition: {
				duration: 0.3,
				delay: custom.delay
			}
		}),
		exit: (custom: { delay: number }) => ({
			opacity: 0,
			x: -15,
			transition: {
				duration: 0.3,
				delay: 0.3 + custom.delay
			}
		})
	};

	const menuItemAnim = {
		initial: { opacity: 0, y: -15 },
		animate: (custom: { delay: number }) => ({
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.3,
				delay: 0.2 + custom.delay
			}
		}),
		exit: {
			opacity: 0,
			y: 15,
			transition: {
				duration: 0.3,
				delay: 0 // Без задержки при выходе
			}
		}
	};


	return (<>

		<AnimatePresence initial={false} mode="wait">
			<motion.div className={cls.menu} key={JSON.stringify(data)}>
				{data?.map((el, categoryIndex) => <motion.div className={cls.menu__category} key={el.title + categoryIndex}>
					<Title
						key={el.title + categoryIndex}
						variants={menuTitleAnim}
						initial="initial"
						animate="animate"
						exit="exit"
						custom={{ delay: categoryIndex * 0.1 }}
						size={4}

					>{el.title}</Title>
					<ul className={cls.menu__list}>
						{el.list.map((item: T_MenuItem, itemIndex) =>
							<motion.li
								key={item.name + itemIndex}
								variants={menuItemAnim}
								initial="initial"
								animate="animate"
								exit="exit"
								custom={{ delay: (categoryIndex * el.list.length + itemIndex) * 0.1 }}
								className={cls.menu__item}

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