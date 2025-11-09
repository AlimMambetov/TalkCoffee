'use client'
import React from 'react';
import cls from './style.module.scss';
import clsx from 'clsx';
import { motion, MotionProps } from 'motion/react';
import { T_iconNames } from '@/types';
import Icon from '../Icon';


export type T_LinkIconProps =
	React.ComponentProps<'a'> &
	React.ComponentProps<typeof motion.a> & {
		icon?: T_iconNames,
	} & MotionProps;


export const LinkIcon = ({ children, style, className, icon, ...props }: T_LinkIconProps) => {


	return (<>
		<motion.a target='_blanck'
			className={clsx(className, cls.link)}
			style={{ ...style } as React.CSSProperties}
		>
			<Icon name={icon} />
		</motion.a>
	</>)
}

export default LinkIcon;