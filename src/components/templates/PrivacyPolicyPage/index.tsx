'use client'
import { Title } from '@/components/ui';
import cls from './style.module.scss';
import { Container } from '@/components/layout';
import { useScreen } from '@/hooks';
import { useEffect, useState } from 'react';
import { marked } from 'marked';
import mdText from '&/docs/privacy-policy.md'

export const PrivacyPolicyPage = (props: any) => {
	const { isTouch } = useScreen();
	const [html, setHtml] = useState('');

	useEffect(() => {
		const loadDocument = async () => {
			let markdown = mdText;

			// Конвертируем markdown в HTML
			const convertedHtml = await marked(markdown);
			setHtml(convertedHtml);
		};

		loadDocument();
	}, []);

	return (<>
		<div className={cls.wrap} >
			<Container className={cls.cont}>
				<div className={cls.md} dangerouslySetInnerHTML={{ __html: html }}></div>
			</Container>
		</div>
	</>)
}

export default PrivacyPolicyPage;