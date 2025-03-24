'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

interface Bubble {
	id: number;
	left: number;
	top: number;
	size: number;
	color: string;
	animation: string;
}

export function BackgroundBubbles() {
	const { resolvedTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	const [bubbles] = useState<Bubble[]>(() => {
		// Generate more random bubbles (10 instead of 6)
		return Array.from({ length: 10 }, (_, i) => {
			const colors = ['bg-primary-300/10', 'bg-success-300/10', 'bg-info-400/10', 'bg-primary-200/10', 'bg-warning-200/10', 'bg-primary-400/10', 'bg-info-300/10', 'bg-success-400/10', 'bg-primary-500/10', 'bg-warning-300/10'];
			const animations = ['animate-float-slow', 'animate-float-medium', 'animate-float-fast', 'animate-float-slow-reverse', 'animate-float-medium-reverse', 'animate-float-fast-reverse'];

			// Distribute bubbles more evenly across the viewport
			// Using golden ratio to help distribute points more naturally
			const phi = (1 + Math.sqrt(5)) / 2;
			const theta = (i * phi * Math.PI * 2) % (Math.PI * 2);

			// Convert polar coordinates to cartesian, then adjust to percentage
			const radius = Math.sqrt(i / 10) * 70; // Distribute from center outward
			const left = 50 + radius * Math.cos(theta); // Center point is 50%
			const top = 50 + radius * Math.sin(theta); // Center point is 50%

			// Randomize the size between 10vw and 25vw
			const size = Math.random() * 15 + 10;

			return {
				id: i,
				left,
				top,
				size,
				color: colors[i % colors.length],
				animation: animations[i % animations.length],
			};
		});
	});

	// Define different bubble colors for dark mode
	const getLightModeColor = (index: number) => {
		const colors = ['bg-primary-300/20', 'bg-success-300/20', 'bg-info-400/20', 'bg-primary-200/20', 'bg-warning-200/20', 'bg-primary-400/20', 'bg-info-300/20', 'bg-success-400/20', 'bg-primary-500/20', 'bg-warning-300/20'];
		return colors[index % colors.length];
	};

	const getDarkModeColor = (index: number) => {
		const colors = ['bg-primary-700/20', 'bg-success-700/20', 'bg-info-700/20', 'bg-primary-800/20', 'bg-warning-800/15', 'bg-primary-600/20', 'bg-info-600/20', 'bg-success-600/20', 'bg-primary-500/20', 'bg-warning-700/15'];
		return colors[index % colors.length];
	};

	const isDarkMode = mounted && resolvedTheme === 'dark';

	return (
		<div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none transition-colors duration-500">
			{bubbles.map((bubble, i) => (
				<div
					key={bubble.id}
					className={`absolute rounded-full blur-3xl ${isDarkMode ? getDarkModeColor(i) : getLightModeColor(i)} ${bubble.animation} transition-colors duration-500`}
					style={{
						left: `${bubble.left}%`,
						top: `${bubble.top}%`,
						width: `${bubble.size}vw`,
						height: `${bubble.size}vw`,
						maxWidth: '400px',
						maxHeight: '400px',
					}}
				/>
			))}
		</div>
	);
}
