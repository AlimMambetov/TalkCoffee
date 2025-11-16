'use client'
import React from 'react';
import { AboutSection, FAQSection, GallerySection, HeroSection, MenuSection, ReviewsSection } from '@/components/modules';

export const MainPage = (props: any) => {


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