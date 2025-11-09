'use client'
import React from 'react';
import cls from './style.module.scss';
import { Button, Icon, LinkText, Text, Title } from '@/components/ui';
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
			<Button >Связаться с нами</Button>
			<Title>My Title</Title>
			<Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae beatae suscipit iure accusantium pariatur dolorum fugit minima, exercitationem quaerat. Alias.</Text>
			<LinkText icon='mark'>hello</LinkText>
		</div>
	</>)
}

export default MainPage;