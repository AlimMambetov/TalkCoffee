'use client'
import React from 'react';
import cls from './style.module.scss';
import { Icon } from '@/components/ui';
import { useDeviceType } from '@/hooks';

export const MainPage = (props: any) => {
	const device = useDeviceType();

	if (!device) return;

	console.log(device)
	return (<>
		<div className={cls.wrap}>
			<Icon name='next' />
			<h1>Next <span>TS</span></h1>
			<p>device: {device}</p>
		</div>
	</>)
}

export default MainPage;