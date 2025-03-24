'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

export function Footer() {
	const { resolvedTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	return (
		<footer className="relative mt-20 overflow-hidden">
			{/* Gradient Top Border */}
			<div className="h-px bg-gradient-to-r from-transparent via-border to-transparent w-full"></div>

			{/* Decorative Elements */}
			<div className="absolute inset-0 pointer-events-none">
				{/* Circuit-like lines */}
				<div className="absolute left-0 top-0 w-[40%] h-[80%] opacity-[0.03]">
					<svg viewBox="0 0 200 200" className="w-full h-full">
						<path d="M0,100 L200,100 M100,0 L100,200 M20,20 L180,180 M180,20 L20,180" stroke="currentColor" strokeWidth="1" fill="none" />
						<circle cx="100" cy="100" r="50" stroke="currentColor" strokeWidth="1" fill="none" />
						<circle cx="100" cy="100" r="30" stroke="currentColor" strokeWidth="1" fill="none" />
					</svg>
				</div>

				{/* Tech-inspired shapes */}
				<div className="absolute right-0 bottom-0 w-[45%] h-[70%] opacity-[0.03] transform rotate-12">
					<svg viewBox="0 0 200 200" className="w-full h-full">
						<path d="M100,0 L200,100 L100,200 L0,100 Z" stroke="currentColor" strokeWidth="1" fill="none" />
						<path d="M70,30 L170,130 L70,170 L30,130 Z" stroke="currentColor" strokeWidth="1" fill="none" />
						<circle cx="100" cy="100" r="40" stroke="currentColor" strokeWidth="1" fill="none" />
					</svg>
				</div>

				{/* Gradient Orbs */}
				<div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
				<div className="absolute -bottom-20 -left-20 w-40 h-40 bg-success/5 rounded-full blur-3xl"></div>
			</div>

			<div className="bg-gradient-to-b from-background to-background/5 dark:from-background dark:to-primary-950/10 relative transition-colors duration-300">
				<div className="container mx-auto px-4 py-16">
					{/* Grid layout section */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
						{/* Company Info */}
						<div className="space-y-6 relative">
							<div className="relative z-10">
								<Link href="/" className="flex items-center space-x-2">
									<Image src={mounted && resolvedTheme === 'dark' ? '/logo-full.svg' : '/logo-full.svg'} alt="BrightWay Initiative Logo" width={40} height={40} className="h-10 w-auto transition-colors duration-300" />
								</Link>
							</div>
							<p className="text-muted-foreground relative z-10">Empowering businesses with innovative technology solutions for sustainable growth and digital transformation.</p>
							<div className="flex space-x-4 relative z-10">
								<Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
									<Facebook className="h-5 w-5" />
								</Link>
								<Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
									<Twitter className="h-5 w-5" />
								</Link>
								<Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
									<Linkedin className="h-5 w-5" />
								</Link>
								<Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
									<Instagram className="h-5 w-5" />
								</Link>
							</div>
						</div>

						{/* Quick Links */}
						<div className="relative z-10">
							<h3 className="font-semibold text-lg mb-6 text-foreground">Quick Links</h3>
							<ul className="space-y-4">
								<li>
									<Link href="/about" className="text-muted-foreground hover:text-primary transition-colors group flex items-center">
										<span className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary mr-2 transition-colors"></span>
										About Us
									</Link>
								</li>
								<li>
									<Link href="/services" className="text-muted-foreground hover:text-primary transition-colors group flex items-center">
										<span className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary mr-2 transition-colors"></span>
										Services
									</Link>
								</li>
								<li>
									<Link href="/portfolio" className="text-muted-foreground hover:text-primary transition-colors group flex items-center">
										<span className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary mr-2 transition-colors"></span>
										Portfolio
									</Link>
								</li>
								<li>
									<Link href="/careers" className="text-muted-foreground hover:text-primary transition-colors group flex items-center">
										<span className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary mr-2 transition-colors"></span>
										Careers
									</Link>
								</li>
							</ul>
						</div>

						{/* Services */}
						<div className="relative z-10">
							<h3 className="font-semibold text-lg mb-6 text-foreground">Services</h3>
							<ul className="space-y-4">
								<li>
									<Link href="/services/web-development" className="text-muted-foreground hover:text-primary transition-colors group flex items-center">
										<span className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary mr-2 transition-colors"></span>
										Web Development
									</Link>
								</li>
								<li>
									<Link href="/services/ui-ux-design" className="text-muted-foreground hover:text-primary transition-colors group flex items-center">
										<span className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary mr-2 transition-colors"></span>
										UI/UX Design
									</Link>
								</li>
								<li>
									<Link href="/services/digital-marketing" className="text-muted-foreground hover:text-primary transition-colors group flex items-center">
										<span className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary mr-2 transition-colors"></span>
										Digital Marketing
									</Link>
								</li>
								<li>
									<Link href="/services/cybersecurity" className="text-muted-foreground hover:text-primary transition-colors group flex items-center">
										<span className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary mr-2 transition-colors"></span>
										Cybersecurity
									</Link>
								</li>
							</ul>
						</div>

						{/* Contact Info */}
						<div className="relative z-10">
							<h3 className="font-semibold text-lg mb-6 text-foreground">Contact Us</h3>
							<ul className="space-y-4">
								<li className="flex items-center space-x-3 group">
									<div className="relative">
										<div className="absolute -inset-1 bg-primary/10 rounded-full group-hover:scale-150 transition-transform duration-300 opacity-0 group-hover:opacity-100"></div>
										<Mail className="h-5 w-5 text-primary relative" />
									</div>
									<a href="mailto:contact@brightwayinitiative.com" className="text-muted-foreground hover:text-primary transition-colors">
										contact@brightwayinitiative.com
									</a>
								</li>
								<li className="flex items-center space-x-3 group">
									<div className="relative">
										<div className="absolute -inset-1 bg-primary/10 rounded-full group-hover:scale-150 transition-transform duration-300 opacity-0 group-hover:opacity-100"></div>
										<Phone className="h-5 w-5 text-primary relative" />
									</div>
									<a href="tel:+8801234567890" className="text-muted-foreground hover:text-primary transition-colors">
										+880 1234&#8209;567890
									</a>
								</li>
								<li className="flex items-start space-x-3 group">
									<div className="relative mt-1">
										<div className="absolute -inset-1 bg-primary/10 rounded-full group-hover:scale-150 transition-transform duration-300 opacity-0 group-hover:opacity-100"></div>
										<MapPin className="h-5 w-5 text-primary relative" />
									</div>
									<span className="text-muted-foreground">
										House 123, Road 456
										<br />
										Dhaka, Bangladesh
									</span>
								</li>
							</ul>
						</div>
					</div>

					{/* Bottom Bar */}
					<div className="mt-16 pt-8 border-t border-border/50 relative z-10">
						<div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
							<p className="text-muted-foreground text-sm">© {new Date().getFullYear()} BrightWay Initiative. All rights reserved.</p>
							<div className="flex space-x-6">
								<Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
									Privacy Policy
								</Link>
								<Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
									Terms of Service
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
