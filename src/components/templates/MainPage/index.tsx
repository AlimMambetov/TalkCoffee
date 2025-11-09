'use client'
import React from 'react';
import cls from './style.module.scss';
import { useDeviceType } from '@/hooks';
import HeroSection from '@/components/modules/HeroSection';

export const MainPage = (props: any) => {
	const device = useDeviceType();

	if (!device) return;

	console.log(device)
	return (<>
		<HeroSection />
	</>)
}

export default MainPage;