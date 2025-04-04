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
					backgroundColor: 'var(--primary-300-20)',
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
					backgroundColor: 'var(--success-300-20)',
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

			<div className="relative z-10 text-center px-4">
				<motion.h1
					style={{
						fontSize: 'clamp(6rem, 9rem, 10rem)',
						fontWeight: 'bold',
						color: 'var(--primary)',
						marginBottom: '1rem',
					}}
					initial={{ opacity: 0, y: -50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				>
					404
				</motion.h1>
				<motion.h2
					style={{
						fontSize: 'clamp(1.5rem, 2rem, 2.5rem)',
						fontWeight: 600,
						marginBottom: '1.5rem',
					}}
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.2 }}
				>
					Page Not Found
				</motion.h2>
				<motion.p
					style={{
						color: 'var(--muted-foreground)',
						marginBottom: '2rem',
						maxWidth: '28rem',
						margin: '0 auto',
					}}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5, delay: 0.4 }}
				>
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
