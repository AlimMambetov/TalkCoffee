'use client'
import React, { CSSProperties } from 'react';
import cls from './style.module.scss';
import clsx from 'clsx';
import { Button, Icon, Text, Title } from '@/components/ui';
import { useTruncation } from '@/hooks';


let test_avatar = 'https://img.freepik.com/free-photo/handsome-young-cheerful-man-with-arms-crossed_171337-1073.jpg?semt=ais_hybrid&w=740&q=80';
let test_text = 'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.." Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).'

export interface SocialLinks {
	telegram?: string;
	instagram?: string;
	vk?: string;
}

export interface ReviewProps {
	className?: string;
	avatar?: string;
	name: string;
	text: string;
	job?: string;
	socials?: SocialLinks;
}


export const Review = ({
	className,
	avatar,
	name,
	text,
	job,
	socials = {}
}: ReviewProps) => {
	const { telegram, instagram, vk } = socials;
	const { ref: nameRef, isTruncated: nameIsTruncated } = useTruncation<HTMLHeadingElement>();
	const nameLetter = String(name.split(' ')[1]).charAt(0).toUpperCase();
	const nameFirst = name.split(' ')[0];


	return (<>
		<div className={clsx(cls.wrap, className)}>
			<div data-empty={!avatar || null} className={cls.avatar}>
				{avatar ? <img src={`/images/persons/${avatar}.png`} alt={name} /> : <Icon name='user' />}
			</div>
			<Title ref={nameRef} className={cls.name} size={4}>{!nameIsTruncated ? name : <>{nameFirst} {nameLetter}.</>}</Title>
			<Text className={cls.text} size={4} dangerouslySetInnerHTML={{ __html: text }}></Text>
			<div className={cls.controlls}>
				<div className={cls.socials}>
					<a href="#" className={cls.icon}><Icon name='telegram' /></a>
					<a href="#" className={cls.icon}><Icon name='instagram' /></a>
					<a href="#" className={cls.icon}><Icon name='vk' /></a>
				</div>
				<Button size='small'>Подробнее</Button>
			</div>
		</div>
	</>)
}

export default Review;