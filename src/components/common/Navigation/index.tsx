'use client'
import React from 'react';
import cls from './style.module.scss';
import clsx from 'clsx';
import { motion, MotionProps } from 'motion/react';
import { Text } from '@/components/ui';

export type T_Navigation =
	React.ComponentProps<'div'> &
	React.ComponentProps<typeof motion.div> & {

	} & MotionProps;


export const Navigation = ({ className, ...props }: T_Navigation) => {

	const navs = [
		{ key: 'menu', value: 'Меню' },
		{ key: 'gallery', value: 'Галерея' },
		{ key: 'about', value: 'О нас' },
		{ key: 'reviews', value: 'Отзывы' },
		{ key: 'contacts', value: 'Контакты' },
	] as const;

	return (<>
		<nav className={clsx(cls.nav, className)}>
			{navs.map(el => <a className={cls.link} href={`#${el.key}`} key={el.key}><Text size={3}>{el.value}</Text></a>)}
		</nav>
	</>)
}

export default Navigation;