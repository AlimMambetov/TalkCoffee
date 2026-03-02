'use client'
import React, { CSSProperties, useRef, useState } from 'react';
import cls from './style.module.scss';
import { Container } from '@/components/layout';
import { Img, Text, Title } from '@/components/ui';
import { AnimatePresence, motion, useInView } from 'motion/react';
import imagesData from '&/data/gallery.json'
import { useScreen } from '@/hooks';

export const GallerySection = (props: any) => {
	const [selectedId, setSelectedId] = useState<number | null>(null);
	const getRatio = (ratio: string) => ({ gridColumn: `span ${ratio.split('x')[0]}`, gridRow: `span ${ratio.split('x')[1]}` } as CSSProperties);
	const { isTouch } = useScreen()

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
		<section ref={sectionRef} id='gallery' className={cls.wrap}>
			<Container
				variants={containerVariants}
				initial="hidden"
				animate={isInView ? "visible" : "hidden"}
				className={cls.container}
			>
				<Title size={2} decorLine variants={itemVariants}>Галерея</Title>
				<div className={cls.galleryGrid}>
					<div style={getRatio(isTouch ? '4x1' : '2x2')} className={cls.box}>
						<Title size={4}>Наше<br />Заведение</Title>
						<hr />
						<Text size={2}>На фотографиях</Text>
					</div>

					{imagesData.map((image, i) => (
						<motion.div
							key={image.id}
							className={cls.gridItem}
							layoutId={`image-${image.id}`}
							onClick={() => setSelectedId(image.id)}
							whileHover={{ scale: 0.95 }}
							whileTap={{ scale: 0.90 }}
							style={getRatio(image.ratio?.[isTouch ? 1 : 0])}
							variants={itemVariants}
						>
							<Img src={image.src} alt={image.title} />
							{/* <motion.div className={cls.title}>
								{image.title}
							</motion.div> */}
						</motion.div>
					))}
				</div>
			</Container>

			<AnimatePresence>
				{selectedId && (
					<motion.div
						className={cls.overlay}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={() => setSelectedId(null)}
					>
						<motion.div
							className={cls.expandedItem}
							layoutId={`image-${selectedId}`}
							onClick={(e) => e.stopPropagation()}
						>
							<motion.img
								src={imagesData.find(img => img.id === selectedId)?.src}
								alt="expanded"
								className={cls.expandedImage}
							/>
							<motion.h2 className={cls.expandedTitle}>
								{imagesData.find(img => img.id === selectedId)?.title}
							</motion.h2>
							<motion.button
								className={cls.closeButton}
								onClick={() => setSelectedId(null)}
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.9 }}
							>
								✕
							</motion.button>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</section>
	</>)
}

export default GallerySection;