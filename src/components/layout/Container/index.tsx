'use client'
import React from 'react';
import cls from './style.module.scss';
import clsx from 'clsx';
import { motion, MotionProps } from 'motion/react';

export type T_Container =
	React.ComponentProps<'div'> &
	React.ComponentProps<typeof motion.div> & {
	} & MotionProps;

export const Container = ({ children, className, ...props }: T_Container) => {


	return (<><motion.div {...props} className={clsx(cls.cont, className)}>
		{children}
	</motion.div></>)
}

export default Container;