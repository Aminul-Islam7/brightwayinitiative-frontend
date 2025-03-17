import Link from 'next/link';
import { HeroAnimation } from '@/components/HeroAnimation';

export default function Home() {
	return (
		<div className="min-h-screen">
			{/* Hero Section */}
			<section className="pt-32 pb-16 md:pt-48 md:pb-32 bg-gradient-to-br from-background via-background to-primary/10">
				<div className="container mx-auto px-4">
					<div className="flex flex-col md:flex-row items-center">
						<div className="md:w-1/2 mb-12 md:mb-0 md:pr-12">
							<h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
								<span className="relative">
									<span className="relative z-10">Innovative Solutions</span>
									<span className="absolute bottom-2 left-0 h-3 w-full bg-primary/20 -z-10"></span>
								</span>{' '}
								for Your Business Growth
							</h1>
							<p className="text-lg md:text-xl mb-8 text-muted-foreground">We help businesses leverage technology to achieve their goals, drive growth, and stay ahead of the competition.</p>
							<div className="flex flex-col sm:flex-row gap-4">
								<Link href="/services" className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors">
									Our Services
									<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
									</svg>
								</Link>
								<Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary rounded-md font-medium hover:bg-primary/10 transition-colors">
									Contact Us
								</Link>
							</div>
						</div>
						<div className="md:w-1/2 relative">
							<HeroAnimation />
							<div className="absolute -top-6 -right-6 w-64 h-64 bg-primary/20 rounded-full blur-3xl -z-10"></div>
							<div className="absolute -bottom-8 -left-8 w-40 h-40 bg-success/20 rounded-full blur-3xl -z-10"></div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

