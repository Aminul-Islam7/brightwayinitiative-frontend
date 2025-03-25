'use client';

import { Facebook, Twitter, Linkedin, Mail, MapPin, Phone, CircleDot, Hexagon, Square, Circle, Instagram } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
	const { resolvedTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	return (
		<footer className="relative mt-20 overflow-hidden">
			{/* Gradient Top Border */}
			<div className="h-px bg-gradient-to-r from-transparent via-border/50 to-transparent w-full"></div>

			{/* Decorative Elements */}
			<div className="absolute inset-0 pointer-events-none">
				{/* Circuit-like pattern */}
				<div className="absolute left-0 top-0 w-[40%] h-[80%] opacity-[0.03]">
					<div className="relative w-full h-full">
						<CircleDot className="w-48 h-48 absolute -top-12 -left-12 stroke-[0.5]" />
						<Square className="w-32 h-32 absolute top-1/4 left-1/4 stroke-[0.5] rotate-45" />
						<Circle className="w-24 h-24 absolute bottom-1/4 left-1/3 stroke-[0.5]" />
					</div>
				</div>

				{/* Tech-inspired shapes */}
				<div className="absolute right-0 bottom-0 w-[45%] h-[70%] opacity-[0.03] transform rotate-12">
					<div className="relative w-full h-full">
						<Hexagon className="w-48 h-48 absolute bottom-0 right-0 stroke-[0.5]" />
						<Square className="w-32 h-32 absolute bottom-1/4 right-1/4 stroke-[0.5] rotate-45" />
						<Circle className="w-24 h-24 absolute top-1/4 right-1/3 stroke-[0.5]" />
					</div>
				</div>

				{/* Gradient Orbs */}
				<div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
				<div className="absolute -bottom-20 -left-20 w-40 h-40 bg-success/5 rounded-full blur-3xl"></div>
			</div>

			<div className="bg-gradient-to-b from-background to-background/5 dark:from-background dark:to-primary-950/10 relative transition-colors duration-300">
				<div className="container mx-auto px-4 py-16">
					{/* Grid layout section */}
					<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12">
						{/* Company Info */}
						<div className="space-y-6 relative flex flex-col items-center md:items-start">
							<div className="relative z-10">
								<Link href="/" className="flex items-center space-x-2">
									<Image src={mounted && resolvedTheme === 'dark' ? '/logo-full.svg' : '/logo-full.svg'} alt="BrightWay Initiative Logo" width={40} height={40} className="h-10 w-auto transition-colors duration-300" />
								</Link>
							</div>
							<p className="text-muted-foreground relative z-10 text-center md:text-left">Empowering businesses with innovative technology solutions for sustainable growth and digital transformation.</p>
							<div className="flex space-x-4 relative z-10 justify-center md:justify-start">
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
						<div className="relative z-10 flex flex-col items-center md:items-start">
							<h3 className="font-semibold text-lg mb-6 text-foreground text-center md:text-left">Quick Links</h3>
							<ul className="space-y-4 flex flex-col items-center md:items-start">
								<li>
									<Link href="/about" className="text-muted-foreground hover:text-primary transition-colors group flex items-center">
										<span className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary group-hover:bg-primary mr-2 hidden md:inline-block transition-colors"></span>
										About Us
									</Link>
								</li>
								<li>
									<Link href="/services" className="text-muted-foreground hover:text-primary transition-colors group flex items-center">
										<span className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary mr-2 hidden md:inline-block transition-colors"></span>
										Services
									</Link>
								</li>
								<li>
									<Link href="/portfolio" className="text-muted-foreground hover:text-primary transition-colors group flex items-center">
										<span className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary mr-2 hidden md:inline-block transition-colors"></span>
										Portfolio
									</Link>
								</li>
								<li>
									<Link href="/careers" className="text-muted-foreground hover:text-primary transition-colors group flex items-center">
										<span className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary mr-2 hidden md:inline-block transition-colors"></span>
										Careers
									</Link>
								</li>
							</ul>
						</div>

						{/* Services */}
						<div className="relative z-10 flex flex-col items-center md:items-start">
							<h3 className="font-semibold text-lg mb-6 text-foreground text-center md:text-left">Services</h3>
							<ul className="space-y-4 flex flex-col items-center md:items-start">
								<li>
									<Link href="/services/web-development" className="text-muted-foreground hover:text-primary transition-colors group flex items-center">
										<span className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary mr-2 hidden md:inline-block transition-colors"></span>
										Web Development
									</Link>
								</li>
								<li>
									<Link href="/services/ui-ux-design" className="text-muted-foreground hover:text-primary transition-colors group flex items-center">
										<span className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary mr-2 hidden md:inline-block transition-colors"></span>
										UI/UX Design
									</Link>
								</li>
								<li>
									<Link href="/services/digital-marketing" className="text-muted-foreground hover:text-primary transition-colors group flex items-center">
										<span className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary mr-2 hidden md:inline-block transition-colors"></span>
										Digital Marketing
									</Link>
								</li>
								<li>
									<Link href="/services/cybersecurity" className="text-muted-foreground hover:text-primary transition-colors group flex items-center">
										<span className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary mr-2 hidden md:inline-block transition-colors"></span>
										Cybersecurity
									</Link>
								</li>
							</ul>
						</div>

						{/* Contact Info */}
						<div className="relative z-10 flex flex-col items-center md:items-start">
							<h3 className="font-semibold text-lg mb-6 text-foreground text-center md:text-left">Contact Us</h3>
							<ul className="space-y-4 flex flex-col items-center md:items-start">
								<li className="flex items-center space-x-3 group justify-center md:justify-start w-full">
									<div className="relative">
										<div className="absolute -inset-1 bg-primary/10 rounded-full group-hover:scale-150 transition-transform duration-300 opacity-0 group-hover:opacity-100"></div>
										<Mail className="h-5 w-5 text-primary relative" />
									</div>
									<a href="mailto:contact@brightwayinitiative.com" className="text-muted-foreground hover:text-primary transition-colors">
										contact@brightwayinitiative.com
									</a>
								</li>
								<li className="flex items-center space-x-3 group justify-center md:justify-start w-full">
									<div className="relative">
										<div className="absolute -inset-1 bg-primary/10 rounded-full group-hover:scale-150 transition-transform duration-300 opacity-0 group-hover:opacity-100"></div>
										<Phone className="h-5 w-5 text-primary relative" />
									</div>
									<a href="tel:+8801234567890" className="text-muted-foreground hover:text-primary transition-colors">
										+880 1234&#8209;567890
									</a>
								</li>
								<li className="flex items-start space-x-3 group justify-center md:justify-start w-full text-center md:text-left">
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
						<div className="flex flex-col items-center space-y-4 md:flex-row md:justify-between md:items-center md:space-y-0">
							<p className="text-muted-foreground text-sm text-center md:text-left">© {new Date().getFullYear()} BrightWay Initiative. All rights reserved.</p>
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
