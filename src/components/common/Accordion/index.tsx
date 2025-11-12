'use client'
import React, { useState } from 'react';
import cls from './style.module.scss';
import { Icon, Text, Title } from '@/components/ui';
import { motion, AnimatePresence, MotionProps } from 'motion/react';
import clsx from 'clsx';


interface I_AccordionProps {
	title?: string;
	content?: string;
	className?: string;
	isOpen?: boolean;
	onToggle?: (isOpen: boolean) => void;
	duration?: number;
}

export const Accordion = ({
	title = 'accordion',
	content = 'some text',
	className,
	isOpen: externalIsOpen,
	onToggle,
	duration = 0.3,
	...props
}: I_AccordionProps) => {
	const [internalIsOpen, setInternalIsOpen] = useState(false);

	const isOpen = externalIsOpen !== undefined ? externalIsOpen : internalIsOpen;


	const handleToggle = () => {
		const newState = !isOpen;
		if (externalIsOpen === undefined) {
			setInternalIsOpen(newState);
		}
		onToggle?.(newState);
	};


	const contentVariants = {
		collapsed: {
			height: 0,
			opacity: 0,
			transition: {
				height: { duration, ease: [0.04, 0.62, 0.23, 0.98] },
				opacity: { duration: duration * 0.5 }
			}
		},
		expanded: {
			height: 'auto',
			opacity: 1,
			transition: {
				height: { duration, ease: [0.04, 0.62, 0.23, 0.98] },
				opacity: { duration: duration * 0.5, delay: duration * 0.2 }
			}
		}
	};

	const contentAnim = {
		initial: contentVariants.collapsed,
		animate: contentVariants.expanded,
		exit: contentVariants.collapsed,
	} as MotionProps;



	return (<>
		<div
			data-active={isOpen || null}
			className={clsx(className, cls.wrap)}
		>
			<motion.div
				className={cls.preview}
				onClick={handleToggle}
				role="button"
				tabIndex={0}
				onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleToggle()}
			>
				<Title size={4}>{title}</Title>
				<Icon name='add' />
			</motion.div>
			<AnimatePresence initial={false}>
				{isOpen && (
					<motion.div
						key="content"
						{...contentAnim}
						className={cls.content}
						style={{ overflow: 'hidden' }}
					>
						<Text
							className={cls.text}
							dangerouslySetInnerHTML={{ __html: content }}
						/>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	</>)
}

export default Accordion;