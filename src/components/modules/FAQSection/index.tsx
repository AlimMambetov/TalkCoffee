'use client'
import React, { useRef } from 'react';
import cls from './style.module.scss';
import { Container } from '@/components/layout';
import { Button, Icon, Title } from '@/components/ui';
import { Accordion } from '@/components/common';
import FAQ_data from '&/data/FAQ-accordion.json'
import { useInView, motion } from 'framer-motion';


export const FAQSection = (props: any) => {
	const sectionRef = useRef(null);
	const isInView = useInView(sectionRef, {
		once: true, // анимация сработает только один раз
		amount: 0.3 // 30% элемента должно быть видно
	});

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
				delayChildren: 0.1
			}
		}
	} as any

	const itemVariants = {
		hidden: { y: 30, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				type: "spring",
				damping: 12,
				stiffness: 100
			}
		}
	} as any

	return (<>
		<section ref={sectionRef} id='FAQ' className={cls.wrap}>
			<Icon data-star="1" name='star' />
			<Icon data-star="2" name='star' />
			<Container
				variants={containerVariants}
				initial="hidden"
				animate={isInView ? "visible" : "hidden"}
				className={cls.content}
			>
				<Title variants={itemVariants} size={2} decorLine>Вопрос - ответ</Title>
				<div className={cls.list}>
					{FAQ_data.map((el, i) => <motion.div variants={itemVariants} transition={{ delay: i * 0.1 }} key={el.id}><Accordion {...el} /></motion.div>)}
				</div>
				{/* <Button className={cls.btn} color='plain'>Задать вопрос</Button> */}
			</Container>
		</section>
	</>)
}

export default FAQSection;