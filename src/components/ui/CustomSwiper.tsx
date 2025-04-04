'use client';

import { useRef, useEffect, forwardRef, type ComponentProps } from 'react';
import { Swiper } from 'swiper/react';
import type { SwiperRef } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

type CustomSwiperProps = ComponentProps<typeof Swiper>;

export const CustomSwiper = forwardRef<SwiperRef, CustomSwiperProps>((props, ref) => {
	const wrapperRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const wrapper = wrapperRef.current;
		if (!wrapper) return;

		const handleMouseDown = () => {
			wrapper.style.cursor = 'grabbing';
			wrapper.style.userSelect = 'none';
		};

		const handleMouseUp = () => {
			wrapper.style.cursor = 'grab';
			wrapper.style.userSelect = 'none';
		};

		wrapper.style.cursor = 'grab';
		wrapper.style.userSelect = 'none';

		wrapper.addEventListener('mousedown', handleMouseDown);
		document.addEventListener('mouseup', handleMouseUp);

		return () => {
			wrapper.removeEventListener('mousedown', handleMouseDown);
			document.removeEventListener('mouseup', handleMouseUp);
		};
	}, []);

	return (
		<div ref={wrapperRef} style={{ touchAction: 'pan-y' }}>
			<Swiper ref={ref} {...props} />
		</div>
	);
});

CustomSwiper.displayName = 'CustomSwiper';
