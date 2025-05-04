'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Users, Lightbulb, Handshake, GraduationCap, Award, Target, Globe, BarChart3, Code } from 'lucide-react';

const SectionTitle = ({ children, label }: { children: React.ReactNode; label: string }) => (
	<div className="mb-8 lg:mb-12 text-center relative">
		<span className="text-xs uppercase tracking-[0.2em] text-primary/80 font-medium mb-2 block">— {label} —</span>

		<h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight mb-3">{children}</h2>

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
);

export default function AboutPage() {
	return (
		<div className="min-h-screen">
			{/* Hero Section */}
			<section className="pt-32 lg:pt-40 pb-16 md:pb-24 overflow-hidden">
				<div className="container mx-auto px-4">
					<div className="flex flex-col lg:flex-row items-center">
						<div className="lg:w-1/2 lg:pr-12">
							<motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
								<div className="text-xs uppercase tracking-[0.2em] text-primary/80 font-medium mb-4 block">— About Us —</div>
							</motion.div>

							<motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
								<h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
									Empowering Youth for a
									<span className="relative ml-2">
										<span className="relative z-10">Brighter Future</span>
										<span className="absolute bottom-1 left-0 h-3 w-full bg-primary/20 -z-10"></span>
									</span>
								</h1>
							</motion.div>

							<motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
								<p className="text-lg md:text-xl mb-8 text-muted-foreground">At BrightWay Initiative, we directly employ and train talented youth to work on real-world client projects from across the globe, creating a unique dual-impact model that delivers professional services while building tomorrow&apos;s workforce.</p>
							</motion.div>

							<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
								<div className="flex flex-col sm:flex-row gap-4">
									<Link href="/services" className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors">
										Our Services
										<ArrowRight className="w-5 h-5 ml-2" />
									</Link>
									<Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary rounded-md font-medium hover:bg-primary/10 transition-colors">
										Work With Us
									</Link>
								</div>
							</motion.div>
						</div>

						<div className="lg:w-1/2 mt-8 lg:mt-0 hidden sm:block">
							<motion.div
								style={{
									position: 'relative',
									height: '400px',
									borderRadius: 'var(--radius-2xl)',
									overflow: 'hidden',
									boxShadow: 'var(--shadow-xl)',
								}}
								initial={{ opacity: 0, scale: 0.9 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.5, delay: 0.4 }}
							>
								<Image src="/about-hero.png" alt="Youth Working on Projects" fill className="object-cover" />
								<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
								<div className="absolute bottom-0 left-0 right-0 p-6">
									<span className="text-white/80 text-sm">Learn by doing, succeed by delivering</span>
									<h3 className="text-white text-2xl font-bold">Real Projects, Real Growth</h3>
								</div>
							</motion.div>
						</div>
					</div>
				</div>
			</section>

			{/* Our Model */}
			<section className="py-16 lg:py-24 relative overflow-hidden">
				<div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -z-10"></div>
				<div className="container mx-auto px-4">
					<SectionTitle label="Our Model">How We Empower Youth Through Employment</SectionTitle>

					<div className="max-w-4xl mx-auto text-center">
						<p className="text-lg mb-8 text-muted-foreground">Unlike traditional training programs, BrightWay Initiative directly employs young talent and immediately integrates them into our professional service delivery teams. Our youth employees work on actual client projects under the guidance of industry veterans, earning while they learn.</p>

						<p className="text-lg mb-8 text-muted-foreground">This unique approach creates a win-win situation: our clients receive high-quality services at competitive rates, while our youth employees gain invaluable hands-on experience across diverse industries and project types—from business consultation and pitch deck creation to professional document formatting and technical implementations.</p>

						<p className="text-lg mb-12 text-muted-foreground">Through this immersive work experience, our youth employees develop both technical expertise and essential professional skills that prepare them for long-term career success, whether they continue with BrightWay or pursue opportunities elsewhere.</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
						<div className="flex flex-col items-center text-center bg-accent/40 backdrop-blur-sm rounded-xl p-6 border border-border">
							<div className="text-4xl font-bold text-primary mb-2">75+</div>
							<div className="text-muted-foreground">Youth Currently Employed</div>
						</div>
						<div className="flex flex-col items-center text-center bg-accent/40 backdrop-blur-sm rounded-xl p-6 border border-border">
							<div className="text-4xl font-bold text-primary mb-2">150+</div>
							<div className="text-muted-foreground">Global Client Projects</div>
						</div>
						<div className="flex flex-col items-center text-center bg-accent/40 backdrop-blur-sm rounded-xl p-6 border border-border">
							<div className="text-4xl font-bold text-primary mb-2">12</div>
							<div className="text-muted-foreground">Industry Sectors</div>
						</div>
						<div className="flex flex-col items-center text-center bg-accent/40 backdrop-blur-sm rounded-xl p-6 border border-border">
							<div className="text-4xl font-bold text-primary mb-2">92%</div>
							<div className="text-muted-foreground">Client Satisfaction</div>
						</div>
					</div>
				</div>
			</section>

			{/* Our Approach */}
			<section className="py-16 lg:py-24 bg-accent/10">
				<div className="container mx-auto px-4">
					<div className="flex flex-col lg:flex-row gap-16">
						<div className="lg:w-1/2">
							<span className="text-xs uppercase tracking-[0.2em] text-primary/80 font-medium mb-4 block">— Our Approach —</span>
							<h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Work-Integrated Learning</h2>
							<p className="text-muted-foreground mb-6">We&apos;ve revolutionized the traditional internship model by creating a structured employment program where young professionals are fully integrated into our client service teams from day one. This isn&apos;t about making coffee or handling basic tasks—our youth employees contribute meaningfully to complex projects.</p>
							<p className="text-muted-foreground mb-6">Each team is led by an experienced mentor who provides guidance while ensuring our youth employees are challenged with increasingly complex responsibilities as they grow their capabilities.</p>
							<div className="space-y-4 mt-8">
								<div className="flex items-start">
									<div className="mt-1 bg-primary/10 p-2 rounded-full mr-4">
										<Code className="w-5 h-5 text-primary" />
									</div>
									<div>
										<h3 className="font-medium text-foreground">Real Project Experience</h3>
										<p className="text-muted-foreground">Working on actual client deliverables from day one</p>
									</div>
								</div>
								<div className="flex items-start">
									<div className="mt-1 bg-primary/10 p-2 rounded-full mr-4">
										<Handshake className="w-5 h-5 text-primary" />
									</div>
									<div>
										<h3 className="font-medium text-foreground">Direct Client Interaction</h3>
										<p className="text-muted-foreground">Learning professional communication and presentation</p>
									</div>
								</div>
								<div className="flex items-start">
									<div className="mt-1 bg-primary/10 p-2 rounded-full mr-4">
										<BarChart3 className="w-5 h-5 text-primary" />
									</div>
									<div>
										<h3 className="font-medium text-foreground">Performance-Based Growth</h3>
										<p className="text-muted-foreground">Clear advancement path based on demonstrated skills</p>
									</div>
								</div>
							</div>
						</div>
						<div className="lg:w-1/2">
							<span className="text-xs uppercase tracking-[0.2em] text-primary/80 font-medium mb-4 block">— Global Reach —</span>
							<h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Diverse Project Portfolio</h2>
							<p className="text-muted-foreground mb-6">Our youth employees work on projects spanning multiple industries and geographic regions, providing them with exposure to diverse business environments, challenges, and solutions. This broad experience builds adaptability and a global perspective that&apos;s invaluable in today&apos;s marketplace.</p>
							<p className="text-muted-foreground mb-6">From creating pitch decks for tech startups in Silicon Valley to developing documentation for financial institutions in Europe or crafting business strategies for manufacturing companies in Asia, our teams tackle a wide range of projects that build versatile skill sets.</p>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
								<div className="bg-accent/30 p-5 rounded-xl border border-border">
									<Lightbulb className="w-8 h-8 text-primary mb-3" />
									<h3 className="font-medium text-foreground mb-2">Business Consulting</h3>
									<p className="text-sm text-muted-foreground">Strategic planning and operational improvement</p>
								</div>
								<div className="bg-accent/30 p-5 rounded-xl border border-border">
									<GraduationCap className="w-8 h-8 text-primary mb-3" />
									<h3 className="font-medium text-foreground mb-2">Pitch Deck Creation</h3>
									<p className="text-sm text-muted-foreground">Compelling presentations for startups and established businesses</p>
								</div>
								<div className="bg-accent/30 p-5 rounded-xl border border-border">
									<Award className="w-8 h-8 text-primary mb-3" />
									<h3 className="font-medium text-foreground mb-2">Sales Presentations</h3>
									<p className="text-sm text-muted-foreground">High-impact materials that drive conversions</p>
								</div>
								<div className="bg-accent/30 p-5 rounded-xl border border-border">
									<Globe className="w-8 h-8 text-primary mb-3" />
									<h3 className="font-medium text-foreground mb-2">Documentation</h3>
									<p className="text-sm text-muted-foreground">Professional technical and business documentation</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Development Pathway */}
			<section className="py-16 lg:py-24">
				<div className="container mx-auto px-4">
					<SectionTitle label="Growth Path">Youth Development Journey</SectionTitle>

					<div className="max-w-5xl mx-auto">
						<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
							<div className="p-6 rounded-xl bg-card/60 border border-border hover:border-primary/50 hover:bg-accent/40 transition-all duration-300 backdrop-blur-sm">
								<div className="text-primary/80 mb-4 flex justify-between items-center">
									<Users className="w-8 h-8" strokeWidth={1.5} />
									<span className="text-xs font-semibold bg-primary/10 px-3 py-1 rounded-full text-primary">Phase 1</span>
								</div>
								<h3 className="text-xl font-semibold mb-3 text-card-foreground">Onboarding</h3>
								<p className="text-muted-foreground mb-4">Youth join as Junior Associates and receive intensive training while contributing to projects in supportive roles.</p>
								<ul className="text-sm text-muted-foreground space-y-2">
									<li className="flex items-center">
										<span className="w-1.5 h-1.5 rounded-full bg-primary/40 mr-2"></span>
										Technical skill development
									</li>
									<li className="flex items-center">
										<span className="w-1.5 h-1.5 rounded-full bg-primary/40 mr-2"></span>
										Professional communication
									</li>
									<li className="flex items-center">
										<span className="w-1.5 h-1.5 rounded-full bg-primary/40 mr-2"></span>
										Project fundamentals
									</li>
								</ul>
							</div>

							<div className="p-6 rounded-xl bg-card/60 border border-border hover:border-primary/50 hover:bg-accent/40 transition-all duration-300 backdrop-blur-sm">
								<div className="text-primary/80 mb-4 flex justify-between items-center">
									<Target className="w-8 h-8" strokeWidth={1.5} />
									<span className="text-xs font-semibold bg-primary/10 px-3 py-1 rounded-full text-primary">Phase 2</span>
								</div>
								<h3 className="text-xl font-semibold mb-3 text-card-foreground">Project Contribution</h3>
								<p className="text-muted-foreground mb-4">Associates take on defined project components with increasing autonomy while developing specialized expertise.</p>
								<ul className="text-sm text-muted-foreground space-y-2">
									<li className="flex items-center">
										<span className="w-1.5 h-1.5 rounded-full bg-primary/40 mr-2"></span>
										Client-facing responsibilities
									</li>
									<li className="flex items-center">
										<span className="w-1.5 h-1.5 rounded-full bg-primary/40 mr-2"></span>
										Specialized skill development
									</li>
									<li className="flex items-center">
										<span className="w-1.5 h-1.5 rounded-full bg-primary/40 mr-2"></span>
										Problem-solving capabilities
									</li>
								</ul>
							</div>

							<div className="p-6 rounded-xl bg-card/60 border border-border hover:border-primary/50 hover:bg-accent/40 transition-all duration-300 backdrop-blur-sm">
								<div className="text-primary/80 mb-4 flex justify-between items-center">
									<Award className="w-8 h-8" strokeWidth={1.5} />
									<span className="text-xs font-semibold bg-primary/10 px-3 py-1 rounded-full text-primary">Phase 3</span>
								</div>
								<h3 className="text-xl font-semibold mb-3 text-card-foreground">Leadership</h3>
								<p className="text-muted-foreground mb-4">Senior Associates lead project components and mentor newer team members, developing management skills.</p>
								<ul className="text-sm text-muted-foreground space-y-2">
									<li className="flex items-center">
										<span className="w-1.5 h-1.5 rounded-full bg-primary/40 mr-2"></span>
										Team leadership
									</li>
									<li className="flex items-center">
										<span className="w-1.5 h-1.5 rounded-full bg-primary/40 mr-2"></span>
										Project management
									</li>
									<li className="flex items-center">
										<span className="w-1.5 h-1.5 rounded-full bg-primary/40 mr-2"></span>
										Client relationship building
									</li>
								</ul>
							</div>
						</div>

						<div className="mt-12 p-8 rounded-2xl bg-primary/5 text-center">
							<h3 className="text-2xl font-semibold mb-4 text-foreground">Career Outcomes</h3>
							<p className="text-muted-foreground mb-6">Our youth employees follow various paths after their time with BrightWay. Many advance to senior positions within our organization, while others leverage their experience to secure opportunities with global companies or even launch their own ventures.</p>
							<div className="flex flex-wrap justify-center gap-4">
								<div className="bg-primary/10 px-4 py-2 rounded-full text-sm font-medium text-primary">Advanced Positions at BrightWay</div>
								<div className="bg-primary/10 px-4 py-2 rounded-full text-sm font-medium text-primary">Global Employment Opportunities</div>
								<div className="bg-primary/10 px-4 py-2 rounded-full text-sm font-medium text-primary">Startup Ventures</div>
								<div className="bg-primary/10 px-4 py-2 rounded-full text-sm font-medium text-primary">Freelance Consulting</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Client Testimonials */}
			<section className="py-16 lg:py-24 bg-accent/10">
				<div className="container mx-auto px-4">
					<SectionTitle label="Client Feedback">What Our Clients Say About Our Youth Teams</SectionTitle>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
						<div className="p-6 rounded-xl bg-card/60 border border-border backdrop-blur-sm relative">
							<div className="text-5xl font-serif text-primary/20 absolute top-4 left-4">&ldquo;</div>
							<div className="relative z-10">
								<p className="text-muted-foreground mb-6 pt-6">Working with BrightWay&apos;s youth team exceeded our expectations. Their fresh perspectives combined with professional delivery created a pitch deck that helped us secure our Series A funding. The quality was on par with agencies charging 3x more.</p>
								<div className="flex items-center">
									<div className="mr-4">
										<div className="font-medium text-foreground">Sarah Johnson</div>
										<div className="text-sm text-primary">CEO, TechCorp</div>
									</div>
								</div>
							</div>
						</div>

						<div className="p-6 rounded-xl bg-card/60 border border-border backdrop-blur-sm relative">
							<div className="text-5xl font-serif text-primary/20 absolute top-4 left-4">&ldquo;</div>
							<div className="relative z-10">
								<p className="text-muted-foreground mb-6 pt-6">I was initially hesitant about working with a youth-powered firm, but BrightWay&apos;s team delivered outstanding business consultation services. They brought innovative solutions while maintaining absolute professionalism throughout the process.</p>
								<div className="flex items-center">
									<div className="mr-4">
										<div className="font-medium text-foreground">Michael Chen</div>
										<div className="text-sm text-primary">Marketing Director, InnovatePro</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Join Us */}
			<section className="py-16 lg:py-24 bg-primary/5 rounded-3xl mx-4 lg:mx-8 my-10">
				<div className="container mx-auto px-4">
					<div className="max-w-3xl mx-auto text-center">
						<span className="text-xs uppercase tracking-[0.2em] text-primary/80 font-medium mb-4 block">— Partner With Us —</span>
						<h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">Double Your Impact</h2>
						<p className="text-lg mb-8 text-muted-foreground">When you work with BrightWay Initiative, you&apos;re not just getting high-quality professional services—you&apos;re also directly contributing to youth employment and skill development. Your projects become the training ground for the next generation of professionals.</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors">
								Hire Our Services
								<ArrowRight className="w-5 h-5 ml-2" />
							</Link>
							<Link href="/careers" className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary rounded-md font-medium hover:bg-primary/10 transition-colors">
								Join Our Team
							</Link>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
