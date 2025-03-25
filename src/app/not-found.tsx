'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
	return (
		<div className="min-h-[calc(100vh-4rem)] flex items-center justify-center relative overflow-hidden">
			{/* Animated background elements */}
			<motion.div
				className="absolute w-72 h-72 bg-primary-300/20 dark:bg-primary-700/20 rounded-full blur-3xl"
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
				className="absolute w-72 h-72 bg-success-300/20 dark:bg-success-700/20 rounded-full blur-3xl"
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

			<div className="relative z-10 text-center px-4">
				<motion.h1 className="text-8xl md:text-9xl font-bold text-primary mb-4" initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
					404
				</motion.h1>
				<motion.h2 className="text-2xl md:text-3xl font-semibold mb-6" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
					Page Not Found
				</motion.h2>
				<motion.p className="text-muted-foreground mb-8 max-w-md mx-auto" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }}>
					The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
				</motion.p>
				<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.6 }}>
					<Link href="/" className="inline-flex items-center space-x-2 bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-lg font-medium transition-colors">
						<ArrowLeft className="w-4 h-4" />
						<span>Back to Home</span>
					</Link>
				</motion.div>
			</div>
		</div>
	);
}
