'use client'
import React from 'react';
import cls from './style.module.scss';
import { Icon } from '@/components/ui';
import clsx from 'clsx';

export const Logo = ({ className, onClick, ...props }: any) => {

	const handleClick = (e: any) => {
		if (typeof onClick == 'function') onClick(e);
		window.scrollTo(0, 0);
		location.reload();
	}

	return (
		<Icon {...props} className={clsx(cls.logo, className)} onClick={handleClick} name='logo' />
	)
}

export default Logo;