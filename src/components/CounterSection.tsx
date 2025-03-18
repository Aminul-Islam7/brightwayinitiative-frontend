'use client';

import { useEffect, useState, useRef } from 'react';
import CountUp from 'react-countup';
import { Briefcase, Users, Star, Shield } from 'lucide-react';

const counterData = [
	{
		id: 1,
		value: 250,
		title: 'Projects Completed',
		icon: <Briefcase className="w-10 h-10" strokeWidth={1.5} />,
	},
	{
		id: 2,
		value: 120,
		title: 'Happy Clients',
		icon: <Users className="w-10 h-10" strokeWidth={1.5} />,
	},
	{
		id: 3,
		value: 170,
		title: '5-Star Reviews',
		icon: <Star className="w-10 h-10" strokeWidth={1.5} fill="currentColor" />,
	},
	{
		id: 4,
		value: 95,
		suffix: '%',
		title: 'Client Retention',
		icon: <Shield className="w-10 h-10" strokeWidth={1.5} />,
	},
];

export function CounterSection() {
	const [isVisible, setIsVisible] = useState(false);
	const [hasClientLoaded, setHasClientLoaded] = useState(false);
	const sectionRef = useRef<HTMLElement | null>(null);

	// Mark when client-side JS is available
	useEffect(() => {
		setHasClientLoaded(true);
	}, []);

	// Set up the intersection observer once the client has loaded
	useEffect(() => {
		if (!hasClientLoaded) return;

		// Create a more basic IntersectionObserver configuration that works reliably in production
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					setIsVisible(true);
					observer.disconnect();
				}
			},
			{
				// Use a minimal threshold to improve reliability
				threshold: 0.1,
				rootMargin: '0px 0px -50px 0px',
			}
		);

		// Element to observe
		const currentRef = sectionRef.current;

		if (currentRef) {
			observer.observe(currentRef);
		}

		// Add a safety fallback - if for some reason the observer doesn't trigger in production
		// This will only run if scrolling doesn't activate the counter within 5 seconds of being in viewport
		const fallbackTimer = setTimeout(() => {
			// Check if visible is already set before forcing it
			if (!isVisible && document.visibilityState !== 'hidden') {
				// Only set if the element is actually in viewport
				const element = sectionRef.current;
				if (element) {
					const rect = element.getBoundingClientRect();
					if (rect.top <= (window.innerHeight || document.documentElement.clientHeight) && rect.bottom >= 0) {
						setIsVisible(true);
					}
				}
			}
		}, 5000);

		return () => {
			if (currentRef) {
				observer.disconnect();
			}
			clearTimeout(fallbackTimer);
		};
	}, [hasClientLoaded, isVisible]);

	return (
		<section ref={sectionRef} className="py-20 bg-gradient-to-b from-primary-50/50 to-background">
			<div className="container mx-auto px-4">
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact in Numbers</h2>
					<p className="text-muted-foreground max-w-2xl mx-auto">We&apos;ve helped numerous businesses achieve their goals through our innovative solutions and dedicated service.</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{counterData.map((counter) => (
						<div
							key={counter.id}
							className="group relative bg-gradient-to-br from-background to-primary-50/30 rounded-xl p-8 border border-border/30 backdrop-blur-sm 
                        hover:border-primary/20 hover:bg-gradient-to-br hover:from-primary-50/50 hover:to-background transition-all duration-300
                        flex flex-col items-center justify-center min-h-[200px]"
						>
							<div className="absolute inset-0 rounded-xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
							<div className="relative z-10 flex flex-col items-center gap-4">
								<div className="text-primary/80 group-hover:text-primary transition-colors duration-300">{counter.icon}</div>
								<div className="text-4xl font-bold text-foreground">
									{hasClientLoaded && isVisible ? (
										<CountUp start={0} end={counter.value} duration={2.5} separator="," suffix={counter.suffix} preserveValue={true} useEasing={true} enableScrollSpy={false}>
											{({ countUpRef }) => <span ref={countUpRef} />}
										</CountUp>
									) : (
										<span>0{counter.suffix || ''}</span>
									)}
								</div>
								<p className="text-muted-foreground font-medium group-hover:text-foreground transition-colors duration-300 text-center">{counter.title}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
