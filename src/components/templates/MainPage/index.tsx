'use client'
import React from 'react';
import cls from './style.module.scss';
import { useDeviceType } from '@/hooks';
import { AboutSection, HeroSection, MenuSection } from '@/components/modules';

export const MainPage = (props: any) => {
	const device = useDeviceType();

	if (!device) return;

	console.log(device)
	return (<>
		<HeroSection />
		<AboutSection />
		<MenuSection />
	</>)
}

export default MainPage;