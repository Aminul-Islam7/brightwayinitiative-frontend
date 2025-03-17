'use client';

import { useEffect, useRef } from 'react';

export function BackgroundBubbles() {
	const bubblesRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleScroll = () => {
			if (bubblesRef.current) {
				const scrollY = window.scrollY;
				bubblesRef.current.style.transform = `translateY(${scrollY * 0.2}px)`;
			}
		};

		window.addEventListener('scroll', handleScroll, { passive: true });

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
			<div ref={bubblesRef} className="absolute inset-0 transition-transform duration-300 ease-out">
				{/* Bubble 1 - Top left */}
				<div className="absolute top-[5%] left-[10%] w-[25vw] h-[25vw] max-w-[400px] max-h-[400px] rounded-full bg-primary-300/20 blur-3xl animate-float-slow"></div>

				{/* Bubble 2 - Top right */}
				<div className="absolute top-[15%] right-[5%] w-[20vw] h-[20vw] max-w-[300px] max-h-[300px] rounded-full bg-success-300/20 blur-3xl animate-float-medium"></div>

				{/* Bubble 3 - Middle left */}
				<div className="absolute top-[40%] left-[5%] w-[15vw] h-[15vw] max-w-[250px] max-h-[250px] rounded-full bg-info-400/20 blur-3xl animate-float-fast"></div>

				{/* Bubble 4 - Middle right */}
				<div className="absolute top-[50%] right-[15%] w-[30vw] h-[30vw] max-w-[450px] max-h-[450px] rounded-full bg-primary-200/20 blur-3xl animate-float-slow-reverse"></div>

				{/* Bubble 5 - Bottom left */}
				<div className="absolute bottom-[10%] left-[20%] w-[18vw] h-[18vw] max-w-[350px] max-h-[350px] rounded-full bg-warning-200/10 blur-3xl animate-float-medium-reverse"></div>

				{/* Bubble 6 - Bottom right */}
				<div className="absolute bottom-[5%] right-[5%] w-[22vw] h-[22vw] max-w-[320px] max-h-[320px] rounded-full bg-primary-400/15 blur-3xl animate-float-fast-reverse"></div>
			</div>
		</div>
	);
}
