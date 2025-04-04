'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';
import { Sun, Moon, Stars } from 'lucide-react';

interface LightDarkSwitchProps {
	className?: string;
}

export default function LightDarkSwitch({ className = '' }: LightDarkSwitchProps) {
	const { resolvedTheme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);
	const [isHovered, setIsHovered] = useState(false);
	const [isTouchDevice, setIsTouchDevice] = useState(false);

	useEffect(() => {
		setMounted(true);
		setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
	}, []);

	if (!mounted) {
		return (
			<div className={`w-10 h-10 flex items-center justify-center ${className}`}>
				<div className="w-6 h-6" />
			</div>
		);
	}

	const isDarkMode = resolvedTheme === 'dark';

	const toggleTheme = () => {
		setIsHovered(false);
		setTheme(isDarkMode ? 'light' : 'dark');
	};

	const handleHoverStart = () => {
		if (!isTouchDevice) {
			setIsHovered(true);
		}
	};

	const handleHoverEnd = () => {
		setIsHovered(false);
	};

	const handleTouchStart = () => {
		if (isTouchDevice) {
			setIsHovered(true);
		}
	};

	const handleTouchEnd = () => {
		if (isTouchDevice) {
			setIsHovered(false);
		}
	};

	return (
		<button type="button" onClick={toggleTheme} onMouseEnter={handleHoverStart} onMouseLeave={handleHoverEnd} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd} onTouchCancel={handleTouchEnd} className={`relative flex items-center justify-center rounded-full cursor-pointer p-2 transition-colors ${className}`} aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}>
			<motion.div
				style={{
					position: 'absolute',
					inset: 0,
					borderRadius: '9999px',
				}}
				initial={false}
				animate={{
					boxShadow: isHovered ? (isDarkMode ? '0 0 8px 2px var(--primary-700), inset 0 0 8px var(--primary-600)' : '0 0 8px 2px var(--primary-300), inset 0 0 8px var(--primary-200)') : 'none',
				}}
				transition={{ type: 'tween', duration: 0.3 }}
			/>

			<div className="relative h-6 w-6">
				<motion.div
					style={{
						position: 'absolute',
						inset: 0,
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
					}}
					initial={false}
					animate={{
						scale: isDarkMode ? 0 : 1,
						opacity: isDarkMode ? 0 : 1,
						color: isHovered ? 'var(--primary-600)' : 'var(--primary-500)',
					}}
					transition={{
						type: 'spring',
						stiffness: 200,
						damping: 10,
					}}
				>
					<Sun className="h-5 w-5" strokeWidth={2} />
				</motion.div>

				<motion.div
					style={{
						position: 'absolute',
						inset: 0,
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
					}}
					initial={false}
					animate={{
						scale: isDarkMode ? 1 : 0,
						opacity: isDarkMode ? 1 : 0,
						color: isHovered ? 'var(--primary-300)' : 'var(--primary-400)',
					}}
					transition={{
						type: 'spring',
						stiffness: 200,
						damping: 10,
					}}
				>
					{isDarkMode ? (
						<>
							<motion.div
								style={{ position: 'relative' }}
								initial={false}
								animate={{ rotate: isHovered ? [0, 15, -5, 0] : 0 }}
								transition={{
									duration: 1.5,
									repeat: isHovered ? Infinity : 0,
									repeatType: 'loop',
								}}
							>
								<Moon className="h-5 w-5" strokeWidth={2} />
								<motion.div
									style={{
										position: 'absolute',
										right: '-2px',
										top: '-2px',
										transformOrigin: 'center',
										transform: 'scale(0.8)',
									}}
									animate={{
										scale: isHovered ? [1, 1.2, 1] : 1,
										opacity: isHovered ? [0.7, 1, 0.7] : 0.7,
									}}
									transition={{
										duration: 2,
										repeat: isHovered ? Infinity : 0,
										repeatType: 'loop',
									}}
								>
									<Stars className="h-2 w-2" strokeWidth={2} />
								</motion.div>
							</motion.div>
						</>
					) : (
						<Moon className="h-5 w-5" strokeWidth={2} />
					)}
				</motion.div>
			</div>
		</button>
	);
}
