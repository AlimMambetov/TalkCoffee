'use client'
import React from 'react';
import cls from './style.module.scss';
import clsx from 'clsx';
import { LinkIcon } from '@/components/ui';

export type T_SocialProps = React.ComponentProps<'div'> & {
	// size?: 1 | 2 | 3 | 4;
};

export const Socials = ({ className, ...props }: T_SocialProps) => {


	return (<>
		<div className={clsx(className, cls.wrap)}>
			<LinkIcon icon='telegram' />
			<LinkIcon icon='instagram' />
			<LinkIcon icon='whatsapp' />
		</div>
	</>)
}

export default Socials;