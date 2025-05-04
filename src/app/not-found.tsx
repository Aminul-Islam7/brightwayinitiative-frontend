'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
	return (
		<div className="min-h-[calc(100vh-4rem)] flex items-center justify-center relative overflow-hidden">
			{/* Animated background elements */}
			<motion.div
				style={{
					position: 'absolute',
					width: '18rem',
					height: '18rem',
					borderRadius: '9999px',
					filter: 'blur(64px)',
					backgroundColor: 'hsl(var(--primary) / 0.2)',
				}}
				initial={{ x: -200, y: -200 }}
				animate={{
					x: [-200, 0, -100],
					y: [-200, 100, -150],
				}}
				transition={{
					duration: 20,
					repeat: Infinity,
					repeatType: 'reverse',
				}}
			/>
			<motion.div
				style={{
					position: 'absolute',
					width: '18rem',
					height: '18rem',
					borderRadius: '9999px',
					filter: 'blur(64px)',
					backgroundColor: 'hsl(var(--success) / 0.2)',
				}}
				initial={{ x: 200, y: 200 }}
				animate={{
					x: [200, 0, 100],
					y: [200, -100, 150],
				}}
				transition={{
					duration: 20,
					repeat: Infinity,
					repeatType: 'reverse',
				}}
			/>

			<div className="relative z-10 text-center px-4 flex flex-col items-center gap-2">
				<motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
					<h1 className="text-[clamp(6rem,9rem,10rem)] font-bold text-primary">404</h1>
				</motion.div>

				<motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
					<h2 className="text-[clamp(1.5rem,2rem,2.5rem)] font-semibold">Page Not Found</h2>
				</motion.div>

				<div className="max-w-xl mx-auto mt-2">
					<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }}>
						<p className="text-muted-foreground">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
					</motion.div>
				</div>

				<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.6 }}>
					<div className="mt-8">
						<Link href="/" className="inline-flex items-center space-x-2 bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-lg font-medium transition-colors">
							<ArrowLeft className="w-4 h-4" />
							<span>Back to Home</span>
						</Link>
					</div>
				</motion.div>
			</div>
		</div>
	);
}
