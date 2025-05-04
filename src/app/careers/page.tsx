'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Users, Target, GraduationCap, Award, HeartHandshake } from 'lucide-react';

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

interface Benefit {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const benefits: Benefit[] = [
	{
		icon: <GraduationCap className="w-8 h-8" strokeWidth={1.5} />,
		title: 'Professional Development',
		description: 'Continuous learning through hands-on project experience and mentorship',
	},
	{
		icon: <Target className="w-8 h-8" strokeWidth={1.5} />,
		title: 'Career Growth',
		description: 'Clear advancement paths with opportunities to lead projects and teams',
	},
	{
		icon: <HeartHandshake className="w-8 h-8" strokeWidth={1.5} />,
		title: 'Supportive Environment',
		description: 'Collaborative culture focused on helping you succeed and grow',
	},
	{
		icon: <Award className="w-8 h-8" strokeWidth={1.5} />,
		title: 'Competitive Compensation',
		description: 'Fair pay and performance-based incentives from day one',
	},
];
interface Position {
  title: string;
  department: string;
  type: string;
  location: string;
  description: string;
}

interface Position {
  title: string;
  department: string;
  type: string;
  location: string;
  description: string;
}

const positions: Position[] = [
	{
		title: 'Junior Associate',
		department: 'Business Services',
		type: 'Full-time',
		location: 'Remote',
		description: 'Join our team as a Junior Associate and work on real client projects while developing your professional skills.',
	},
	{
		title: 'Project Coordinator',
		department: 'Project Management',
		type: 'Full-time',
		location: 'Hybrid',
		description: 'Coordinate and support project teams while learning essential project management skills.',
	},
	{
		title: 'Business Development Associate',
		department: 'Sales',
		type: 'Full-time',
		location: 'Remote',
		description: 'Help grow our client base while developing sales and relationship building skills.',
	},
	{
		title: 'Documentation Specialist',
		department: 'Technical Writing',
		type: 'Full-time',
		location: 'Remote',
		description: 'Create professional documentation while learning technical writing best practices.',
	},
];

export default function Page() {
	return (
		<div className="min-h-screen">
			{/* Hero Section */}
			<section className="pt-24 lg:pt-40 pb-12 md:pb-24 overflow-hidden">
				<div className="container mx-auto px-4">
					<div className="flex flex-col lg:flex-row items-center">
						<div className="lg:w-1/2 lg:pr-12">
							<motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
								<div className="text-xs uppercase tracking-[0.2em] text-primary/80 font-medium mb-4 block">— Join Our Team —</div>
							</motion.div>

							<motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
								<h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
									Launch Your Career with{' '}
									<span className="relative">
										<span className="relative z-10">Purpose</span>
										<span className="absolute bottom-1 left-0 h-3 w-full bg-primary/20 -z-10"></span>
									</span>
								</h1>
							</motion.div>

							<motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
								<p className="text-lg md:text-xl mb-8 text-muted-foreground">Start your professional journey with BrightWay Initiative. Work on real projects, develop valuable skills, and make a meaningful impact while building your career.</p>
							</motion.div>

							<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
								<div className="flex flex-col sm:flex-row gap-4">
									<Link href="#positions" className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors">
										View Open Positions
										<ArrowRight className="w-5 h-5 ml-2" />
									</Link>
									<Link href="#benefits" className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary rounded-md font-medium hover:bg-primary/10 transition-colors">
										Why Join Us
									</Link>
								</div>
							</motion.div>
						</div>{' '}
						<div className="lg:w-1/2 mt-8 lg:mt-0 hidden lg:block">
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
								<Image src="/about-hero.png" alt="Team Collaboration" fill className="object-cover" />
								<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
								<div className="absolute bottom-0 left-0 right-0 p-6">
									<span className="text-white/80 text-sm">Join our dynamic team</span>
									<h3 className="text-white text-2xl font-bold">Where Talent Meets Opportunity</h3>
								</div>
							</motion.div>
						</div>
					</div>
				</div>
			</section>{' '}
			{/* Benefits Section */}
			<section id="benefits" className="py-12 lg:py-24 bg-accent/10">
				<div className="container mx-auto px-4">
					<SectionTitle label="Benefits">Why Work With Us</SectionTitle>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
			{benefits.map((benefit, index) => (
			  <div key={benefit.title} className="p-6 rounded-xl bg-card/60 border border-border hover:border-primary/50 hover:bg-accent/40 transition-all duration-300 backdrop-blur-sm">
				<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }}>
				  <div className="text-primary/80 mb-4">{benefit.icon}</div>
				  <h3 className="text-xl font-semibold mb-2 text-foreground">{benefit.title}</h3>
				  <p className="text-muted-foreground">{benefit.description}</p>
				</motion.div>
			  </div>
			))}
					</div>
				</div>
			</section>
			{/* Open Positions Section */}
			<section id="positions" className="py-12 lg:py-24">
				<div className="container mx-auto px-4">
					<SectionTitle label="Opportunities">Open Positions</SectionTitle>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
			{positions.map((position, index) => (
			  <div key={position.title} className="group h-full p-6 rounded-xl bg-card/60 border border-border hover:border-primary/50 hover:bg-accent/40 transition-all duration-300 backdrop-blur-sm relative">
				<motion.div initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }}>
				  <div className="absolute top-6 right-6">
					<span className="text-xs text-muted-foreground">{position.location}</span>
				  </div>
				  <div className="mb-4">
					<h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors pr-20">{position.title}</h3>
					<div className="mt-2">
					  <div className="text-muted-foreground">{position.department}</div>
					</div>
				  </div>
				  <p className="text-muted-foreground mb-6">{position.description}</p>
				  <div className="flex items-center justify-between">
					<div className="flex items-center text-primary font-medium">
					  Apply Now
					  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
					</div>
					<span className="text-xs font-medium bg-primary/10 text-primary px-2 py-1 rounded-full whitespace-nowrap">{position.type}</span>
				  </div>
				</motion.div>
			  </div>
			))}
					</div>
				</div>
			</section>
			{/* Growth Path Section */}
			<section className="py-12 lg:py-24 bg-accent/10">
				<div className="container mx-auto px-4">
					<div className="max-w-5xl mx-auto">
						<div className="text-center mb-12">
							<span className="text-xs uppercase tracking-[0.2em] text-primary/80 font-medium mb-4 block">— Your Growth Path —</span>
							<h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Your Journey to Success</h2>
							<p className="text-lg text-muted-foreground">Follow a clear path of growth and advancement as you develop your skills and take on increasing responsibilities.</p>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
							<div className="p-6 rounded-xl bg-card/60 border border-border hover:border-primary/50 hover:bg-accent/40 transition-all duration-300 backdrop-blur-sm">
								<div className="text-primary/80 mb-4 flex justify-between items-center">
									<Users className="w-8 h-8" strokeWidth={1.5} />
									<span className="text-xs font-semibold bg-primary/10 px-3 py-1 rounded-full text-primary">Phase 1</span>
								</div>
								<h3 className="text-xl font-semibold mb-3 text-card-foreground">Junior Associate</h3>
								<p className="text-muted-foreground mb-4">Start your journey with hands-on project experience and comprehensive training.</p>
								<ul className="text-sm text-muted-foreground space-y-2">
									<li className="flex items-center">
										<span className="w-1.5 h-1.5 rounded-full bg-primary/40 mr-2"></span>
										Professional skills development
									</li>
									<li className="flex items-center">
										<span className="w-1.5 h-1.5 rounded-full bg-primary/40 mr-2"></span>
										Client project exposure
									</li>
									<li className="flex items-center">
										<span className="w-1.5 h-1.5 rounded-full bg-primary/40 mr-2"></span>
										Mentored learning
									</li>
								</ul>
							</div>

							<div className="p-6 rounded-xl bg-card/60 border border-border hover:border-primary/50 hover:bg-accent/40 transition-all duration-300 backdrop-blur-sm">
								<div className="text-primary/80 mb-4 flex justify-between items-center">
									<Target className="w-8 h-8" strokeWidth={1.5} />
									<span className="text-xs font-semibold bg-primary/10 px-3 py-1 rounded-full text-primary">Phase 2</span>
								</div>
								<h3 className="text-xl font-semibold mb-3 text-card-foreground">Associate</h3>
								<p className="text-muted-foreground mb-4">Take on more responsibility and develop specialized expertise.</p>
								<ul className="text-sm text-muted-foreground space-y-2">
									<li className="flex items-center">
										<span className="w-1.5 h-1.5 rounded-full bg-primary/40 mr-2"></span>
										Project component ownership
									</li>
									<li className="flex items-center">
										<span className="w-1.5 h-1.5 rounded-full bg-primary/40 mr-2"></span>
										Direct client interaction
									</li>
									<li className="flex items-center">
										<span className="w-1.5 h-1.5 rounded-full bg-primary/40 mr-2"></span>
										Skill specialization
									</li>
								</ul>
							</div>

							<div className="p-6 rounded-xl bg-card/60 border border-border hover:border-primary/50 hover:bg-accent/40 transition-all duration-300 backdrop-blur-sm">
								<div className="text-primary/80 mb-4 flex justify-between items-center">
									<Award className="w-8 h-8" strokeWidth={1.5} />
									<span className="text-xs font-semibold bg-primary/10 px-3 py-1 rounded-full text-primary">Phase 3</span>
								</div>
								<h3 className="text-xl font-semibold mb-3 text-card-foreground">Senior Associate</h3>
								<p className="text-muted-foreground mb-4">Lead projects and mentor junior team members.</p>
								<ul className="text-sm text-muted-foreground space-y-2">
									<li className="flex items-center">
										<span className="w-1.5 h-1.5 rounded-full bg-primary/40 mr-2"></span>
										Project leadership
									</li>
									<li className="flex items-center">
										<span className="w-1.5 h-1.5 rounded-full bg-primary/40 mr-2"></span>
										Team mentoring
									</li>
									<li className="flex items-center">
										<span className="w-1.5 h-1.5 rounded-full bg-primary/40 mr-2"></span>
										Strategic planning
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* Call to Action */}
			<section className="py-16 lg:py-24 bg-primary/5 rounded-3xl mx-4 lg:mx-8 my-10">
				<div className="container mx-auto px-4">
					<div className="max-w-3xl mx-auto text-center">
						<span className="text-xs uppercase tracking-[0.2em] text-primary/80 font-medium mb-4 block">— Ready to Start? —</span>
						<h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">Begin Your Professional Journey</h2>
						<p className="text-lg mb-8 text-muted-foreground">Take the first step towards a rewarding career. Join our team and work on meaningful projects while developing your professional skills.</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Link href="#positions" className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors">
								View Open Positions
								<ArrowRight className="w-5 h-5 ml-2" />
							</Link>
							<Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary rounded-md font-medium hover:bg-primary/10 transition-colors">
								Contact Us
							</Link>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
