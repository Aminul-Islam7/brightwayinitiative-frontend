'use client';

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Lightbulb, Presentation, LineChart, FileText, ArrowRight, Check, Eye, Send } from 'lucide-react';
import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';

// Image Preview component
const ImagePreview = ({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) => {
	const contentRef = useRef<HTMLDivElement>(null);
	const imageRef = useRef<HTMLDivElement>(null);
	const dragRef = useRef({ startX: 0, startY: 0, translateX: 0, translateY: 0 });
	const [zoomLevel, setZoomLevel] = useState(1);
	const [isDragging, setIsDragging] = useState(false);
	const [position, setPosition] = useState({ x: 0, y: 0 });

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (contentRef.current && !contentRef.current.contains(event.target as Node)) {
				onClose();
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => document.removeEventListener('mousedown', handleClickOutside);
	}, [onClose]);

	const handleZoomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newZoomLevel = parseFloat(e.target.value);
		setZoomLevel(newZoomLevel);

		if (newZoomLevel === 1) {
			setPosition({ x: 0, y: 0 });
		}
	};

	const handleZoomIn = () => {
		const newZoomLevel = Math.min(zoomLevel + 0.1, 3);
		setZoomLevel(newZoomLevel);
		if (newZoomLevel === 1) {
			setPosition({ x: 0, y: 0 });
		}
	};

	const handleZoomOut = () => {
		const newZoomLevel = Math.max(zoomLevel - 0.1, 1);
		setZoomLevel(newZoomLevel);
		if (newZoomLevel === 1) {
			setPosition({ x: 0, y: 0 });
		}
	};

	const handleMouseDown = (e: React.MouseEvent) => {
		if (zoomLevel <= 1) return;
		e.preventDefault();
		setIsDragging(true);
		dragRef.current = {
			startX: e.clientX - position.x,
			startY: e.clientY - position.y,
			translateX: position.x,
			translateY: position.y,
		};
	};

	const handleMouseMove = (e: React.MouseEvent) => {
		if (!isDragging || zoomLevel <= 1) return;
		e.preventDefault();

		const containerRect = imageRef.current?.getBoundingClientRect();
		if (!containerRect) return;

		const zoomedWidth = containerRect.width * zoomLevel;
		const zoomedHeight = containerRect.height * zoomLevel;
		const maxX = (zoomedWidth - containerRect.width) / 2;
		const maxY = (zoomedHeight - containerRect.height) / 2;

		const newX = e.clientX - dragRef.current.startX;
		const newY = e.clientY - dragRef.current.startY;

		const boundedX = Math.max(-maxX, Math.min(maxX, newX));
		const boundedY = Math.max(-maxY, Math.min(maxY, newY));

		setPosition({ x: boundedX, y: boundedY });
	};

	const handleMouseUp = () => {
		setIsDragging(false);
	};

	useEffect(() => {
		if (zoomLevel > 1) {
			document.body.style.cursor = isDragging ? 'grabbing' : 'grab';
		} else {
			document.body.style.cursor = '';
		}
		return () => {
			document.body.style.cursor = '';
		};
	}, [zoomLevel, isDragging]);

	return (
		<div className="fixed inset-0 z-50">
			<div className="fixed inset-0 bg-black/80 backdrop-blur-sm" />
			<div className="fixed inset-0 z-10 flex items-center justify-center p-4">
				<div
					ref={contentRef}
					className="relative rounded-2xl overflow-hidden bg-black/20 backdrop-blur-sm"
					style={{
						maxWidth: '64rem',
						maxHeight: '90vh',
					}}
				>
					<div ref={imageRef} className={`relative ${zoomLevel > 1 && !isDragging ? 'cursor-grab' : ''} ${isDragging ? 'cursor-grabbing' : ''}`} onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp} onMouseLeave={handleMouseUp} onClick={(e) => e.preventDefault()}>
						<Image
							src={src}
							alt={alt}
							width={1280}
							height={720}
							className="object-contain select-none"
							style={{
								width: 'auto',
								height: 'auto',
								maxWidth: '100%',
								maxHeight: '85vh',
								transform: `scale(${zoomLevel}) translate(${position.x}px, ${position.y}px)`,
								pointerEvents: 'none',
							}}
							priority
							quality={100}
							draggable={false}
						/>
					</div>

					{/* Zoom slider control */}
					<div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center bg-black/20 backdrop-blur-sm rounded-full px-4 py-2 space-x-2 text-white">
						<button onClick={handleZoomOut} className="p-1 cursor-pointer hover:bg-white/10 rounded-full transition-colors" aria-label="Zoom out">
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
								<circle cx="11" cy="11" r="8" />
								<line x1="21" y1="21" x2="16.65" y2="16.65" />
								<line x1="8" y1="11" x2="14" y2="11" />
							</svg>
						</button>

						<input type="range" min="1" max="3" step="0.1" value={zoomLevel} onChange={handleZoomChange} className="w-32 accent-primary" aria-label="Zoom level" />

						<button onClick={handleZoomIn} className="p-1 cursor-pointer hover:bg-white/10 rounded-full transition-colors" aria-label="Zoom in">
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
								<circle cx="11" cy="11" r="8" />
								<line x1="21" y1="21" x2="16.65" y2="16.65" />
								<line x1="11" y1="8" x2="11" y2="14" />
								<line x1="8" y1="11" x2="14" y2="11" />
							</svg>
						</button>

						<span className="text-xs font-medium ml-1">{Math.round(zoomLevel * 100)}%</span>
					</div>

					<div className="absolute top-4 right-4">
						<Button
							variant="ghost"
							size="icon"
							onClick={(e) => {
								e.stopPropagation();
								onClose();
							}}
							className="p-2 rounded-full cursor-pointer bg-black/20 hover:bg-black/40 text-white hover:text-white"
							aria-label="Close preview"
						>
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
								<path d="M18 6L6 18M6 6l12 12" />
							</svg>
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

const services = [
	{
		id: 1,
		title: 'Business Consultation',
		description: 'Strategic planning and operational improvement consultancy to drive business growth and efficiency.',
		icon: Lightbulb,
		slug: 'business-consultation',
		bgColor: 'bg-blue-500/10',
		iconColor: 'text-blue-500',
		borderColor: 'hover:border-blue-500/50',
		features: ['In-depth Business Analysis', 'Market Research & Competitive Analysis', 'Growth Strategy Development', 'Process Optimization', 'Financial Planning & Forecasting', 'Risk Assessment & Management'],
		longDescription: `Our comprehensive business consultation service takes a deep dive into your organization's operations, market position, and growth potential. We start with a thorough analysis of your current business model, identify key opportunities and challenges, and develop actionable strategies for sustainable growth.`,
		images: [
			{
				src: '/portfolio/ai-analytics.webp',
				alt: 'Data Analysis of Business',
			},
			{
				src: '/portfolio/healthcare.jpg',
				alt: 'Business Analysis Dashboard',
			},
		],
	},
	{
		id: 2,
		title: 'Pitch Deck Presentation',
		description: 'Compelling, investor-ready presentations to help secure funding and critical partnerships.',
		icon: Presentation,
		slug: 'pitch-deck',
		bgColor: 'bg-purple-500/10',
		iconColor: 'text-purple-500',
		borderColor: 'hover:border-purple-500/50',
		features: ['Compelling Story Development', 'Market Opportunity Analysis', 'Financial Projections', 'Professional Design & Layout', 'Investor-Focused Messaging', 'Presentation Coaching'],
		longDescription: `We craft compelling pitch decks that tell your story and showcase your potential. Our team combines strategic thinking with creative design to develop presentations that capture attention, communicate value, and inspire action. Each deck is tailored to your specific audience and objectives.`,
		images: [
			{
				src: '/services/pitch-deck-presentation-example1.webp',
				alt: 'Pitch Deck Example',
			},
			{
				src: '/services/pitch-deck-presentation-example2.webp',
				alt: 'Investment Presentation',
			},
		],
	},
	{
		id: 3,
		title: 'Sales Presentation',
		description: 'High-impact sales materials designed to captivate audiences, drive conversions, and boost revenue.',
		icon: LineChart,
		slug: 'sales-presentation',
		bgColor: 'bg-green-500/10',
		iconColor: 'text-green-500',
		borderColor: 'hover:border-green-500/50',
		features: ['Customer-Centric Messaging', 'Value Proposition Design', 'Competitive Analysis', 'ROI Demonstrations', 'Visual Storytelling', 'Custom Templates & Guides'],
		longDescription: `Our sales presentations are designed to convert prospects into customers. We focus on creating compelling narratives that highlight your unique value proposition, address customer pain points, and demonstrate clear ROI. Each presentation is optimized for maximum impact and engagement.`,
		images: [
			{
				src: '/services/sales-presentation-example1.webp',
				alt: 'Sales Dashboard',
			},
			{
				src: '/services/sales-presentation-example2.webp',
				alt: 'Client Presentation',
			},
		],
	},
	{
		id: 4,
		title: 'Professional Formatting & Documentation',
		description: 'Expert document formatting and structuring services for academic, business, and technical materials.',
		icon: FileText,
		slug: 'documentation',
		bgColor: 'bg-orange-500/10',
		iconColor: 'text-orange-500',
		borderColor: 'hover:border-orange-500/50',
		features: ['Academic Dissertations & Theses', 'Research Grant Applications', 'Technical Reports & Case Studies', 'Corporate Documents & Agreements', 'Product Catalogs & Price Lists', 'Policy Documents & Handbooks'],
		longDescription: `We provide comprehensive document formatting and structuring services, specializing in academic papers, business documents, and technical materials. Our team ensures your documents meet the highest professional standards, whether it's a dissertation, research grant application, technical report, or corporate documentation. We handle everything from complex academic formatting to corporate style guidelines.`,
		images: [
			{
				src: '/services/documentation-example1.webp',
				alt: 'Documentation System',
			},
			{
				src: '/services/documentation-example2.png',
				alt: 'Process Documentation',
			},
		],
	},
];

export default function ServicesPage() {
	const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

	return (
		<div className="min-h-screen overflow-x-hidden">
			{/* Hero Section */}{' '}
			<section className="pt-32 lg:pt-40 pb-16 md:pb-24 overflow-hidden relative">
				<div className="container mx-auto px-4 relative z-10">
					<motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }}>
						<div className="text-center max-w-3xl mx-auto">
							<div className="text-xs uppercase tracking-[0.2em] text-primary/80 font-medium mb-4 block">— Our Expertise —</div>
							<h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
								Driving Growth Through <span className="text-primary">Strategic Services</span>
							</h1>
							<p className="text-lg md:text-xl mb-8 text-muted-foreground">We offer a focused suite of professional services designed to empower your business, from strategic planning to compelling presentations and documentation.</p>{' '}
							<div className="flex items-center justify-center space-x-2">
								<div className="w-1.5 h-1.5 bg-primary/5"></div>
								<div className="w-2.5 h-2.5 bg-primary/10"></div>
								<div className="w-3 h-3 bg-primary/20"></div>
								<div className="w-3.5 h-3.5 bg-primary/30"></div>
								<div className="w-3 h-3 bg-primary/20"></div>
								<div className="w-2.5 h-2.5 bg-primary/10"></div>
								<div className="w-1.5 h-1.5 bg-primary/5"></div>
							</div>
						</div>
					</motion.div>
				</div>
				{/* Subtle background elements */}
				<div className="absolute inset-0 pointer-events-none opacity-50">
					<div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/5 rounded-full blur-2xl animate-pulse"></div>
					<div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl animate-pulse animation-delay-200"></div>
					<div className="absolute top-1/3 right-1/3 w-24 h-24 bg-purple-500/5 rounded-full blur-2xl animate-pulse animation-delay-400"></div>
				</div>
			</section>
			{/* Services Detailed Sections */}
			{services.map((service, idx) => (
				<section id={service.slug} key={service.id} className="py-12 md:py-24 overflow-hidden">
					<div className="container mx-auto px-4">
						<div className="flex flex-col gap-8 md:gap-12">
							{/* Main Content */}
							<div className="grid md:grid-cols-2 gap-8 items-start">
								{/* Content Section */}
								<div className={`order-1 ${idx % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
									<motion.div initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
										<div className="space-y-8">
											{/* Header */}
											<div className="max-w-[calc(100vw-2rem)] md:max-w-3xl">
												<div className={`inline-flex items-center justify-center p-3 rounded-full ${service.bgColor} mb-6`}>
													<service.icon className={`w-8 h-8 ${service.iconColor}`} strokeWidth={1.5} />
												</div>
												<h2 className="text-3xl md:text-4xl font-bold mb-4">{service.title}</h2>
												<p className="text-lg text-muted-foreground">{service.description}</p>
											</div>

											<p className="text-muted-foreground leading-relaxed">{service.longDescription}</p>
											<div className="space-y-4">
												<h3 className="text-xl font-semibold">Key Features</h3>
												<div className="grid sm:grid-cols-2 gap-3">
													{service.features.map((feature, index) => (
														<div key={index} className={`flex items-start space-x-2 p-3 rounded-lg ${service.bgColor}`}>
															<div className={`mt-1 ${service.iconColor}`}>
																<Check className="w-4 h-4" />
															</div>
															<span className="text-sm font-medium">{feature}</span>
														</div>
													))}
												</div>
											</div>
											{/* Buttons */}
											<div className="pt-6 flex flex-col sm:flex-row gap-4">
												<Button asChild>
													<Link href="/contact">
														<Send className="mr-2 h-4 w-4" />
														Get Started
													</Link>
												</Button>
												<Button asChild variant="outline" className={service.iconColor}>
													<Link href="/portfolio">
														<Eye className="mr-2 h-4 w-4" />
														View Portfolio
													</Link>
												</Button>
											</div>
										</div>
									</motion.div>
								</div>

								{/* Images Section */}
								<div className={`order-2 ${idx % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
									<motion.div initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}>
										<div className="relative h-full md:sticky md:top-24">
											{/* Mobile: 2-column grid with square images */}
											{/* Desktop: Single column with offset design */}
											<div className="grid grid-cols-2 gap-4 md:grid-cols-1 md:gap-6">
												{service.images.map((image, index) => (
													<div
														key={index}
														className={`relative aspect-square md:aspect-auto md:h-[300px] rounded-xl overflow-hidden cursor-pointer
														${index === 1 ? 'md:ml-auto md:w-5/6' : 'md:w-5/6'}
														shadow-lg hover:shadow-xl transition-all duration-300
														border border-border/50 group`}
														onClick={() => setSelectedImage(image)}
													>
														<Image src={image.src} alt={image.alt} fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
														<div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
															<Eye className="w-6 h-6 text-white" />
														</div>
													</div>
												))}
											</div>

											{/* Decorative Elements */}
											<div className={`absolute -z-10 ${idx % 2 === 0 ? 'right-0 md:-right-4' : 'left-0 md:-left-4'} top-1/2 -translate-y-1/2`}>
												<div className={`w-24 h-24 ${service.bgColor} rounded-full blur-3xl opacity-50`} />
											</div>
										</div>
									</motion.div>
								</div>
							</div>
						</div>
					</div>
				</section>
			))}
			{/* Image Preview Modal */}
			<AnimatePresence>
				{selectedImage && (
					<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
						<ImagePreview src={selectedImage.src} alt={selectedImage.alt} onClose={() => setSelectedImage(null)} />
					</motion.div>
				)}
			</AnimatePresence>
			{/* CTA Section */}{' '}
			<section className="py-12 md:py-16 lg:py-24 overflow-hidden">
				<div className="container mx-auto px-4 text-center">
					<motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
						<div>
							<h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
							<p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">Let&apos;s discuss how our tailored services can help you achieve your specific goals. Our team is ready to support your journey to success.</p>{' '}
							<Button asChild size="lg">
								<Link href="/contact">
									Start Your Journey
									<ArrowRight className="w-5 h-5" />
								</Link>
							</Button>
						</div>
					</motion.div>
				</div>
			</section>
		</div>
	);
}
