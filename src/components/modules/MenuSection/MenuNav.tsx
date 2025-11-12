'use client'
import React from 'react';
import cls from './style.module.scss';
import { Title } from '@/components/ui';
import { motion } from 'motion/react';

export interface I_MenuNavProps {
	data: string[];
	activeIndex: number;
	setter: (index: number) => void;
}

export const MenuNav = ({ data = [], activeIndex = 0, setter }: any) => {



	return (<>
		<div className={cls.nav}>
			{data.map((el: string, i: number) =>
				<Title
					key={el} size={5}
					data-active={i == activeIndex || null}
					onClick={() => setter(i)}
					className={cls.nav__item}
				>{el}

					{i === activeIndex && (
						<motion.span
							className={cls.line}
							layoutId="activeLine"
							transition={{
								type: "spring",
								stiffness: 300,
								damping: 30
							}}
						/>
					)}
				</Title>
			)}
		</div>
	</>)
}

export default MenuNav;