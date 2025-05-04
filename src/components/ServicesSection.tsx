'use client';

import Link from 'next/link';
import { ArrowRight, Lightbulb, Presentation, LineChart, FileText, Users2, Bot } from 'lucide-react';

const services = [
	{
		id: 1,
		title: 'Business Consultation',
		description: 'Strategic planning and operational improvement consultancy to drive business growth.',
		icon: <Lightbulb className="w-8 h-8" strokeWidth={1.5} />,
		link: '/services#business-consultation',
	},
	{
		id: 2,
		title: 'Pitch Deck Presentation',
		description: 'Compelling presentations that help startups and established businesses secure funding and partnerships.',
		icon: <Presentation className="w-8 h-8" strokeWidth={1.5} />,
		link: '/services#pitch-deck',
	},
	{
		id: 3,
		title: 'Sales Presentation',
		description: 'High-impact sales materials and presentations designed to drive conversions and boost revenue.',
		icon: <LineChart className="w-8 h-8" strokeWidth={1.5} />,
		link: '/services#sales-presentation',
	},
	{
		id: 4,
		title: 'Professional Formatting & Documentation',
		description: 'Expert formatting services for academic, business, and technical documents.',
		icon: <FileText className="w-8 h-8" strokeWidth={1.5} />,
		link: '/services#documentation',
	},
	{
		id: 5,
		title: 'IT Consulting',
		description: 'Expert guidance to help you make informed technology decisions.',
		icon: <Users2 className="w-8 h-8" strokeWidth={1.5} />,
		link: '/services#it-consulting',
	},
	{
		id: 6,
		title: 'AI Solutions',
		description: 'Harness the power of artificial intelligence to automate and innovate.',
		icon: <Bot className="w-8 h-8" strokeWidth={1.5} />,
		link: '/services#ai-solutions',
	},
];

export function ServicesSection() {
	return (
		<section className="py-10">
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{services.map((service) => (
						<Link key={service.id} href={service.link} className="group">
							<div
								className="h-full p-6 rounded-xl bg-card border border-border bg-card/60
                                hover:border-primary/50 hover:bg-accent/40
                                transition-all duration-300 backdrop-blur-sm"
							>
								<div className="relative z-10 flex flex-col h-full">
									<div className="text-primary/80 group-hover:text-primary transition-colors duration-300 mb-4">{service.icon}</div>
									<h3 className="text-xl font-semibold mb-3 text-card-foreground group-hover:text-primary transition-colors duration-300">{service.title}</h3>
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
