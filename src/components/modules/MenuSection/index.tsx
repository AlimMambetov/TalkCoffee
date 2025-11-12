'use client'
import React, { useState } from 'react';
import cls from './style.module.scss';
import { Container } from '@/components/layout';
import { Img, Text, Title } from '@/components/ui';
import MenuNav from './MenuNav';
import menuData from '&/data/menu.json';
import { T_MenuCategory } from '@/types';
import MenuList from './MenuList';


export const MenuSection = (props: any) => {
	const [menuIndex, setMenuIndex] = useState<number>(0);
	const activeData: T_MenuCategory[] = menuData[menuIndex]?.category;
	const navList: string[] = menuData.map(el => el.name);


	return (<>
		<section id='menu' className={cls.wrap}>
			<Container className={cls.container}>
				<Title size={2} decorLine>Меню</Title>
				<div className={cls.info}>
					<MenuNav data={navList} setter={setMenuIndex} activeIndex={menuIndex} />
					<MenuList data={activeData} />
				</div>
				<Img src={'/images/stars.svg'} className={cls.stars} />
			</Container>
		</section>
	</>)
}

export default MenuSection;