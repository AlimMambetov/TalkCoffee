'use client'
import React, { ComponentProps, CSSProperties, ReactNode } from 'react';
import cls from './style.module.scss';
import clsx from 'clsx';
import { motion, MotionProps } from 'motion/react';


export type T_ButtonProps = ComponentProps<typeof motion.button> & {
	className?: string | string[];
	children?: ReactNode;
	style?: CSSProperties;
	adaptive?: boolean;
	color?: 'primary' | 'heavy' | 'plain';
	size?: 'normal' | 'small';
	w?: string;
	href?: string;
}


export const Button = ({
	children,
	color = 'primary',
	adaptive = true,
	size = 'normal',
	w = 'fit-content',
	className,
	style,
	href,
	onClick,
	...props }: T_ButtonProps) => {


	const ops = {
		...props,
		style: {
			...style,
			"--default-width": w,
		} as CSSProperties,
		className: clsx(className, cls.btn),
		"data-color": color,
		"data-size": size,
		whileTap: { scale: 0.95 },
		onClick: (e: any) => {
			if (onClick) onClick(e);
			if (href) location.hash = href;
		}
	} as MotionProps


	return (<motion.button  {...ops}>
		{children}
	</motion.button>)
}

export default Button;