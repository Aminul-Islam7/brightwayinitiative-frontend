'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Lock, AtSign, EyeOff, Eye, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ErrorAlert } from '@/components/ui/alert';

export default function EmployeeLogin() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [showPassword, setShowPassword] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState('');

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setError('');
		setIsLoading(true);

		try {
			await new Promise((resolve) => setTimeout(resolve, 1500));

			if (email === 'admin@brightwayinitiative.com' && password === 'demo') {
				console.log('Login successful');
			} else {
				setError('Invalid credentials. Please try again.');
			}
		} catch (err) {
			setError('An unexpected error occurred. Please try again.');
			console.error(err);
		} finally {
			setIsLoading(false);
		}
	};

	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};

	return (
		<div className="min-h-screen flex items-center justify-center relative overflow-hidden">
			{/* Animated background elements - constrained within viewport */}
			<motion.div
				style={{
					position: 'absolute',
					width: '18rem',
					height: '18rem',
					borderRadius: '9999px',
					filter: 'blur(64px)',
					backgroundColor: 'var(--primary-300)',
					opacity: 0.2,
					zIndex: 0,
					overflow: 'hidden',
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
					backgroundColor: 'var(--success-300)',
					opacity: 0.2,
					zIndex: 0,
					overflow: 'hidden',
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

			{/* Login Card - properly contained */}
			<div className="w-full max-w-md px-4 relative z-10">
				<div className="text-center mb-6">
					<Link href="/" className="inline-block mb-2">
						<Image src="/logo-full.svg" alt="BrightWay Initiative" width={60} height={60} className="mx-auto" />
					</Link>
					<h1 className="text-3xl font-bold text-foreground mb-2">Employee Login</h1>
					<p className="text-muted-foreground">Access your employee dashboard</p>
				</div>

				<motion.div
					style={{
						width: '100%',
						backgroundColor: 'var(--card)',
						backdropFilter: 'blur(8px)',
						borderRadius: 'var(--radius-xl)',
						border: '1px solid var(--border)',
						overflow: 'hidden',
						padding: '2rem',
						boxShadow: 'var(--shadow-lg)'
					}}
					initial={{ y: 20, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.5 }}
				>
					{error && <ErrorAlert className="mb-6">{error}</ErrorAlert>}

					<form onSubmit={handleSubmit} className="space-y-6">
						<div className="space-y-2">
							<label htmlFor="email" className="block text-sm font-medium text-foreground">
								Email Address
							</label>
							<div className="relative">
								<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-muted-foreground">
									<AtSign className="h-5 w-5" />
								</div>
								<input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="bg-background/50 pl-10 block w-full rounded-md border border-input py-2 text-foreground shadow-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 placeholder:text-sm" placeholder="employee@brightwayinitiative.com" required />
							</div>
						</div>

						<div className="space-y-2">
							<label htmlFor="password" className="block text-sm font-medium text-foreground">
								Password
							</label>
							<div className="relative">
								<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-muted-foreground">
									<Lock className="h-5 w-5" />
								</div>
								<input id="password" type={showPassword ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} className="bg-background/50 pl-10 block w-full rounded-md border border-input py-2 text-foreground shadow-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" placeholder="••••••••••••" required />
								<button type="button" onClick={togglePasswordVisibility} className="absolute inset-y-0 right-0 flex items-center pr-3 text-muted-foreground hover:text-foreground">
									{showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
								</button>
							</div>
						</div>

						<div className="flex items-center justify-between">
							<div className="flex items-center">
								<input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 rounded border-border bg-background/50 text-primary focus:ring-primary/20" />
								<label htmlFor="remember-me" className="ml-2 block text-sm text-muted-foreground">
									Remember me
								</label>
							</div>
							<div className="text-sm">
								<Link href="#" className="font-medium text-primary hover:text-primary/80">
									Forgot password?
								</Link>
							</div>
						</div>

						<Button type="submit" className="w-full flex items-center justify-center py-2.5" disabled={isLoading}>
							{isLoading ? (
								<div className="animate-spin h-5 w-5 border-2 border-current border-t-transparent rounded-full"></div>
							) : (
								<>
									Sign in <ArrowRight className="ml-2 h-4 w-4" />
								</>
							)}
						</Button>
					</form>

					<div className="mt-6 text-center text-sm">
						<span className="text-muted-foreground">Not an employee? </span>
						<Link href="/" className="font-medium text-primary hover:text-primary/80">
							Return to home
						</Link>
					</div>
				</motion.div>
			</div>
		</div>
	);
}
