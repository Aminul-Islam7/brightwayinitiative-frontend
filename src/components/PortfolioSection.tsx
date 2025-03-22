'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const portfolioItems = [
	{
		id: 1,
		title: 'E-Commerce Platform',
		category: 'Web Development',
		description: 'A modern e-commerce solution with seamless payment integration and inventory management.',
		image: '/portfolio/ecommerce.svg',
		link: '/portfolio/ecommerce-platform',
	},
	{
		id: 2,
		title: 'Healthcare Dashboard',
		category: 'UI/UX Design',
		description: 'Intuitive analytics dashboard for healthcare providers to monitor patient care metrics.',
		image: '/portfolio/healthcare.svg',
		link: '/portfolio/healthcare-dashboard',
	},
	{
		id: 3,
		title: 'Social Media Campaign',
		category: 'Digital Marketing',
		description: 'Successful social media campaign that increased brand engagement by 150%.',
		image: '/portfolio/social-media.svg',
		link: '/portfolio/social-campaign',
	},
	{
		id: 4,
		title: 'Secure Payment Gateway',
		category: 'Cybersecurity',
		description: 'PCI-compliant payment processing system with advanced fraud detection.',
		image: '/portfolio/payment.svg',
		link: '/portfolio/payment-gateway',
	},
	{
		id: 5,
		title: 'Cloud Migration',
		category: 'IT Consulting',
		description: 'Strategic cloud migration that reduced operational costs by 40%.',
		image: '/portfolio/cloud.svg',
		link: '/portfolio/cloud-migration',
	},
	{
		id: 6,
		title: 'AI-Powered Analytics',
		category: 'AI Solutions',
		description: 'Machine learning solution for predictive business analytics.',
		image: '/portfolio/ai-analytics.svg',
		link: '/portfolio/ai-analytics',
	},
];

export function PortfolioSection() {
	return (
		<section className="py-20">
			<div className="container mx-auto px-4">
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-4xl font-bold mb-4">Our Portfolio</h2>
					<p className="text-muted-foreground max-w-2xl mx-auto">Explore our successful projects and see how we&apos;ve helped businesses transform and grow</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{portfolioItems.map((item) => (
						<Link key={item.id} href={item.link} className="group">
							<div
								className="h-full rounded-xl bg-gradient-to-br from-background to-primary-50/30 border border-border/30 backdrop-blur-sm 
                                hover:border-primary/20 hover:bg-gradient-to-br hover:from-primary-50/50 hover:to-background
                                transition-all duration-300 shadow-sm hover:shadow-md overflow-hidden"
							>
								<div className="relative h-48 w-full overflow-hidden">
									<Image src={item.image} alt={item.title} fill className="object-cover transform group-hover:scale-105 transition-transform duration-300" />
									<div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
								</div>
								<div className="p-6">
									<div className="text-sm font-medium text-primary mb-2">{item.category}</div>
									<h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">{item.title}</h3>
									<p className="text-muted-foreground mb-6">{item.description}</p>
									<div className="flex items-center text-primary font-medium">
										View Project
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
