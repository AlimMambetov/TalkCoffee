'use client'
import React from 'react';
import cls from './style.module.scss';
import { useDeviceType } from '@/hooks';
import { AboutSection, GallerySection, HeroSection, MenuSection } from '@/components/modules';

export const MainPage = (props: any) => {
	const device = useDeviceType();

	if (!device) return;

	console.log(device)
	return (<>
		<HeroSection />
		<MenuSection />
		<GallerySection />
		<AboutSection />
	</>)
}

export default MainPage;