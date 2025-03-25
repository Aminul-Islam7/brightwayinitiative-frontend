import Link from 'next/link';
import { HeroAnimation } from '@/components/HeroAnimation';
import { CounterSection } from '@/components/CounterSection';
import { ServicesSection } from '@/components/ServicesSection';
import { PortfolioSection } from '@/components/PortfolioSection';
import { ReviewsSection } from '@/components/ReviewsSection';
import { FAQSection } from '@/components/FAQSection';
import { ArrowRight } from 'lucide-react';

const SectionTitle = ({ children, label }: { children: React.ReactNode; label: string }) => (
	<div className="mb-2 lg:mb-8 text-center relative">
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

export default function Home() {
	return (
		<div className="min-h-screen">
			{/* Hero Section */}
			<section className="pt-20 lg:pt-32 xl:pt-48 pb-16 md:pb-32 overflow-hidden">
				<div className="container mx-auto px-4">
					<div className="flex flex-col lg:flex-row items-center">
						{/* Show animation first on smaller screens */}
						<div className="order-1 lg:order-2 lg:w-1/2 relative mb-1 lg:mb-0 w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] overflow-hidden">
							<HeroAnimation />
							{/* <div className="absolute -top-6 -right-6 w-64 h-64 bg-primary/20 rounded-full blur-3xl -z-10"></div>
							<div className="absolute -bottom-8 -left-8 w-40 h-40 bg-success/20 rounded-full blur-3xl -z-10"></div> */}
						</div>

						<div className="order-2 lg:order-1 lg:w-1/2 lg:pr-12">
							<h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
								<span className="relative">
									<span className="relative z-10">Innovative Solutions</span>
									{/* <span className="absolute bottom-2 left-0 h-3 w-full bg-primary/20 -z-10"></span> */}
								</span>{' '}
								for Your Business Growth
							</h1>
							<p className="text-lg md:text-xl mb-8 text-muted-foreground">We help businesses leverage technology to achieve their goals, drive growth, and stay ahead of the competition.</p>
							<div className="flex flex-col sm:flex-row gap-4">
								<Link href="/services" className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors">
									Our Services
									<ArrowRight className="w-5 h-5 ml-2" />
								</Link>
								<Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary rounded-md font-medium hover:bg-primary/10 transition-colors">
									Contact Us
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Counter Section */}
			<div className="py-6 sm:py-8 lg:py-14">
				<SectionTitle label="Metrics">Our Impact in Numbers</SectionTitle>
				<CounterSection />
			</div>

			{/* Services Section */}
			<div className="py-6 sm:py-8 lg:py-14">
				<SectionTitle label="Services">What We Offer</SectionTitle>
				<ServicesSection />
			</div>

			{/* Portfolio Section */}
			<div className="py-6 sm:py-8 lg:py-14">
				<SectionTitle label="Portfolio">Our Success Stories</SectionTitle>
				<PortfolioSection />
			</div>

			{/* Reviews Section */}
			<div className="py-6 sm:py-8 lg:py-14">
				<SectionTitle label="Testimonials">What Our Clients Say</SectionTitle>
				<ReviewsSection />
			</div>

			{/* FAQ Section */}
			<div className="py-6 sm:py-8 lg:py-14">
				<SectionTitle label="FAQ">Common Questions</SectionTitle>
				<FAQSection />
			</div>
		</div>
	);
}
