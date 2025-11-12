'use client'
import React from 'react';
import { useDeviceType } from '@/hooks';
import { AboutSection, FAQSection, GallerySection, HeroSection, MenuSection, ReviewsSection } from '@/components/modules';

export const MainPage = (props: any) => {
	const device = useDeviceType();

	if (!device) return;

	console.log(device)
	return (<>
		<HeroSection />
		<MenuSection />
		<GallerySection />
		<AboutSection />
		<ReviewsSection />
		<FAQSection />
	</>)
}

export default MainPage;