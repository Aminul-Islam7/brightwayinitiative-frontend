'use client';

import Link from 'next/link';
import Image from 'next/image';
import LightDarkSwitch from './light-dark-switch';
import { useState, useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';
import { usePathname } from 'next/navigation';

export function Navbar() {
	const { resolvedTheme } = useTheme();
	const pathname = usePathname();
	const [mounted, setMounted] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [animationComplete, setAnimationComplete] = useState(true);

	// Refs for the mobile menu
	const menuRef = useRef<HTMLDivElement>(null);
	const overlayRef = useRef<HTMLDivElement>(null);
	const isDraggingRef = useRef(false);
	const startYRef = useRef(0);
	const currentYRef = useRef(0);

	const toggleMenu = () => {
		if (animationComplete) {
			setIsMenuOpen(!isMenuOpen);
		}
	};

	useEffect(() => {
		setMounted(true);
	}, []);

	// Close menu on route change
	useEffect(() => {
		setIsMenuOpen(false);
	}, [pathname]);

	// Prevent body scrolling when menu is open
	useEffect(() => {
		if (isMenuOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
		return () => {
			document.body.style.overflow = '';
		};
	}, [isMenuOpen]);

	// Mobile menu animation - completely rewritten
	useEffect(() => {
		const menu = menuRef.current;
		const overlay = overlayRef.current;

		if (!menu || !overlay) return;

		// Set initial state immediately when the component mounts
		if (!isMenuOpen) {
			// Make sure invisible menus are fully off-screen
			menu.style.transform = 'translateY(100%)';
			overlay.style.opacity = '0';
			overlay.style.pointerEvents = 'none';
		} else {
			// When opening, mark animation as in progress
			setAnimationComplete(false);

			// Reset transitions first
			menu.style.transition = 'none';
			overlay.style.transition = 'none';

			// Set initial position
			menu.style.transform = 'translateY(100%)';
			overlay.style.opacity = '0';
			overlay.style.pointerEvents = 'auto';

			// Force a reflow
			void menu.offsetHeight;

			// Now add transitions back
			menu.style.transition = 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)';
			overlay.style.transition = 'opacity 0.25s ease-out';

			// Set a small timeout to ensure the browser has processed the initial state
			setTimeout(() => {
				// Apply final state
				menu.style.transform = 'translateY(0)';
				overlay.style.opacity = '1';

				// Mark animation as complete after transition finishes
				const onTransitionEnd = () => {
					setAnimationComplete(true);
					menu.removeEventListener('transitionend', onTransitionEnd);
				};

				menu.addEventListener('transitionend', onTransitionEnd);
			}, 10);
		}
	}, [isMenuOpen]);

	// Touch handlers for swipe down to close - simplified and improved
	useEffect(() => {
		if (!isMenuOpen || !menuRef.current) return;

		const menu = menuRef.current;
		const overlay = overlayRef.current;

		const handleTouchStart = (e: TouchEvent) => {
			isDraggingRef.current = true;
			startYRef.current = e.touches[0].clientY;
			currentYRef.current = startYRef.current;

			// Remove transitions for responsive dragging
			menu.style.transition = 'none';
			if (overlay) overlay.style.transition = 'none';
		};

		const handleTouchMove = (e: TouchEvent) => {
			if (!isDraggingRef.current) return;

			currentYRef.current = e.touches[0].clientY;
			const deltaY = currentYRef.current - startYRef.current;

			// Only move if dragging downward
			if (deltaY > 0) {
				menu.style.transform = `translateY(${deltaY}px)`;

				// Fade overlay as menu is dragged down
				if (overlay) {
					const opacity = Math.max(0, 1 - deltaY / 300);
					overlay.style.opacity = opacity.toString();
				}
			}
		};

		const handleTouchEnd = () => {
			if (!isDraggingRef.current) return;

			isDraggingRef.current = false;
			const deltaY = currentYRef.current - startYRef.current;

			// Mark animation as in progress
			setAnimationComplete(false);

			// Add transition back for smooth animation
			menu.style.transition = 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)';
			if (overlay) overlay.style.transition = 'opacity 0.25s ease-out';

			// If dragged far enough down, close the menu
			if (deltaY > 80) {
				menu.style.transform = 'translateY(100%)';

				// Fade out overlay
				if (overlay) {
					overlay.style.opacity = '0';
					overlay.style.pointerEvents = 'none';
				}

				// Delay state change until animation completes
				const onTransitionEnd = () => {
					setIsMenuOpen(false);
					setAnimationComplete(true);
					menu.removeEventListener('transitionend', onTransitionEnd);
				};

				menu.addEventListener('transitionend', onTransitionEnd);
			} else {
				// Reset position
				menu.style.transform = 'translateY(0)';

				// Reset overlay
				if (overlay) {
					overlay.style.opacity = '1';
				}

				// Animation has finished
				setAnimationComplete(true);
			}
		};

		// Handle click on overlay to close
		const handleOverlayClick = () => {
			// Mark animation as in progress
			setAnimationComplete(false);

			menu.style.transition = 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)';
			menu.style.transform = 'translateY(100%)';

			// Fade out overlay
			if (overlay) {
				overlay.style.transition = 'opacity 0.25s ease-out';
				overlay.style.opacity = '0';
				overlay.style.pointerEvents = 'none';
			}

			const onTransitionEnd = () => {
				setIsMenuOpen(false);
				setAnimationComplete(true);
				menu.removeEventListener('transitionend', onTransitionEnd);
			};

			menu.addEventListener('transitionend', onTransitionEnd);
		};

		// Add event listeners to the menu
		menu.addEventListener('touchstart', handleTouchStart, { passive: true });
		document.addEventListener('touchmove', handleTouchMove, { passive: true });
		document.addEventListener('touchend', handleTouchEnd, { passive: true });

		// Add click handler to overlay
		if (overlay) {
			overlay.addEventListener('click', handleOverlayClick);
		}

		return () => {
			// Clean up all event listeners
			menu.removeEventListener('touchstart', handleTouchStart);
			document.removeEventListener('touchmove', handleTouchMove);
			document.removeEventListener('touchend', handleTouchEnd);

			if (overlay) {
				overlay.removeEventListener('click', handleOverlayClick);
			}
		};
	}, [isMenuOpen]);

	// List of navigation links
	const navLinks = [
		{ href: '/', label: 'Home' },
		{ href: '/about', label: 'About' },
		{ href: '/services', label: 'Services' },
		{ href: '/portfolio', label: 'Portfolio' },
		{ href: '/careers', label: 'Careers' },
	];

	return (
		<>
			<header className="fixed top-0 left-0 right-0 z-40 bg-background/30 backdrop-blur-md border-b border-border/40 transition-colors duration-300">
				<div className="container mx-auto px-4 py-4">
					<div className="flex items-center justify-between">
						{/* Logo */}
						<div className="flex items-center space-x-2">
							<Link href="/" className="flex items-center">
								<Image src={mounted && resolvedTheme === 'dark' ? '/logo-full.svg' : '/logo-full.svg'} alt="BrightWay Initiative Logo" width={40} height={40} className="h-10 w-auto transition-opacity duration-300" />
							</Link>
						</div>

						{/* Centered Navigation */}
						<nav className="hidden lg:flex items-center absolute left-1/2 transform -translate-x-1/2">
							<ul className="flex space-x-8">
								{navLinks.map((link) => (
									<li key={link.href}>
										<Link href={link.href} className={`text-foreground hover:text-primary transition-colors font-medium text-sm tracking-wide py-2 uppercase ${pathname === link.href ? 'text-primary' : ''}`}>
											{link.label}
										</Link>
									</li>
								))}
							</ul>
						</nav>

						{/* Right Side Actions */}
						<div className="hidden lg:flex items-center space-x-4">
							<LightDarkSwitch />
							<Link href="/contact" className="inline-flex items-center justify-center px-5 py-2.5 bg-primary text-primary-foreground rounded-md font-medium text-sm hover:bg-primary-600 transition-colors">
								Contact Now
							</Link>
						</div>

						{/* Mobile Menu Button */}
						<div className="lg:hidden flex items-center space-x-2">
							<LightDarkSwitch />
							<button className="text-foreground p-2 hover:bg-background/50 rounded-md transition-colors" onClick={toggleMenu} aria-label="Toggle menu" disabled={!animationComplete}>
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
								</svg>
							</button>
						</div>
					</div>
				</div>
			</header>

			{/* Mobile Navigation Menu - MOVED OUTSIDE HEADER */}
			{/* Overlay */}
			<div ref={overlayRef} className="fixed inset-0 bg-black/50 z-45 lg:hidden" style={{ opacity: 0, pointerEvents: 'none' }} />

			{/* Menu */}
			<div
				ref={menuRef}
				className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-background border-t rounded-t-xl shadow-lg"
				style={{
					height: 'auto',
					maxHeight: '75vh',
					transform: 'translateY(100%)', // Start off-screen at the bottom of the viewport
				}}
			>
				{/* Handle bar indicator */}
				<div className="w-full flex justify-center py-3">
					<div className="w-12 h-1 bg-border rounded-full" />
				</div>

				{/* Navigation links */}
				<nav className="overflow-y-auto px-4 pb-6 space-y-4">
					{navLinks.map((link) => (
						<Link key={link.href} href={link.href} className={`block py-3 px-4 rounded-lg text-center font-medium transition-colors ${pathname === link.href ? 'bg-primary/10 text-primary' : 'text-foreground hover:bg-accent hover:text-accent-foreground'}`}>
							{link.label}
						</Link>
					))}
					<div className="pt-4">
						<Link href="/contact" className="block w-full text-center py-3 px-4 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
							Contact Now
						</Link>
					</div>
				</nav>
			</div>
		</>
	);
}
