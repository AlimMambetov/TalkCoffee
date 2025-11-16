'use client'
import React from 'react';
import cls from './style.module.scss';
import clsx from 'clsx';
import { motion, MotionProps } from 'motion/react';

export type T_Image =
	React.ComponentProps<'img'> &
	React.ComponentProps<typeof motion.img> & {
	} & MotionProps;


export const Img = ({ ...props }: T_Image) => {


	return (<>
		<motion.img {...props} />
	</>)
}

export default Img;