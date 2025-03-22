'use client';

import Link from 'next/link';
import { ArrowRight, Code2, Paintbrush, LineChart, Shield, Users2, Bot } from 'lucide-react';

const services = [
	{
		id: 1,
		title: 'Web Development',
		description: 'Custom web applications built with cutting-edge technologies to power your business.',
		icon: <Code2 className="w-8 h-8" strokeWidth={1.5} />,
		link: '/services/web-development',
	},
	{
		id: 2,
		title: 'UI/UX Design',
		description: 'Beautiful, intuitive interfaces that enhance user experience and engagement.',
		icon: <Paintbrush className="w-8 h-8" strokeWidth={1.5} />,
		link: '/services/ui-ux-design',
	},
	{
		id: 3,
		title: 'Digital Marketing',
		description: 'Strategic digital marketing solutions to grow your online presence and reach.',
		icon: <LineChart className="w-8 h-8" strokeWidth={1.5} />,
		link: '/services/digital-marketing',
	},
	{
		id: 4,
		title: 'Cybersecurity',
		description: 'Comprehensive security solutions to protect your digital assets and data.',
		icon: <Shield className="w-8 h-8" strokeWidth={1.5} />,
		link: '/services/cybersecurity',
	},
	{
		id: 5,
		title: 'IT Consulting',
		description: 'Expert guidance to help you make informed technology decisions.',
		icon: <Users2 className="w-8 h-8" strokeWidth={1.5} />,
		link: '/services/it-consulting',
	},
	{
		id: 6,
		title: 'AI Solutions',
		description: 'Harness the power of artificial intelligence to automate and innovate.',
		icon: <Bot className="w-8 h-8" strokeWidth={1.5} />,
		link: '/services/ai-solutions',
	},
];

export function ServicesSection() {
	return (
		<section className="py-20 bg-gradient-to-b from-background to-primary-50/30">
			<div className="container mx-auto px-4">
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
					<p className="text-muted-foreground max-w-2xl mx-auto">Comprehensive solutions tailored to meet your business needs and drive success</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{services.map((service) => (
						<Link key={service.id} href={service.link} className="group">
							<div
								className="h-full p-6 rounded-xl bg-gradient-to-br from-background to-primary-50/30 border border-border/30 backdrop-blur-sm 
                                hover:border-primary/20 hover:bg-gradient-to-br hover:from-primary-50/50 hover:to-background
                                transition-all duration-300 shadow-sm hover:shadow-md"
							>
								<div className="relative z-10 flex flex-col h-full">
									<div className="text-primary/80 group-hover:text-primary transition-colors duration-300 mb-4">{service.icon}</div>
									<h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">{service.title}</h3>
									<p className="text-muted-foreground mb-6 flex-grow">{service.description}</p>
									<div className="flex items-center text-primary font-medium">
										Learn More
										<ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
									</div>
								</div>
							</div>
						</Link>
					))}
				</div>
			</div>
		</section>
	);
}
