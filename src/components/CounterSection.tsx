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
	const sectionRef = useRef<HTMLElement | null>(null);

	useEffect(() => {
		// Function to check if element is in viewport
		const checkIfVisible = () => {
			if (!sectionRef.current || isVisible) return;

			const rect = sectionRef.current.getBoundingClientRect();
			const windowHeight = window.innerHeight || document.documentElement.clientHeight;

			// Consider element visible if it's in viewport
			if (rect.top <= windowHeight - 200 && rect.bottom >= 0) {
				setIsVisible(true);
				// Remove scroll listener once counters start
				window.removeEventListener('scroll', checkIfVisible);
			}
		};

		// Initial check
		checkIfVisible();

		// Add scroll listener
		window.addEventListener('scroll', checkIfVisible);

		// Cleanup
		return () => {
			window.removeEventListener('scroll', checkIfVisible);
		};
	}, [isVisible]);

	return (
		<section ref={sectionRef} className="py-10">
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{counterData.map((counter) => (
						<div key={counter.id} className="group relative">
							<div className="p-6 rounded-xl border border-border/50 flex items-center justify-center relative group-hover:border-primary/20 transition-colors">
								<div className="absolute inset-0 rounded-xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
								<div className="relative z-10 flex flex-col items-center gap-4">
									<div className="text-primary/80 group-hover:text-primary transition-colors duration-300">{counter.icon}</div>
									<div className="text-4xl font-bold text-foreground">
										{isVisible ? (
											<CountUp start={0} end={counter.value} duration={2.5} separator="," suffix={counter.suffix} preserveValue={true} useEasing={true} delay={0}>
												{({ countUpRef }) => <span ref={countUpRef} />}
											</CountUp>
										) : (
											<span>0{counter.suffix || ''}</span>
										)}
									</div>
									<p className="text-muted-foreground font-medium group-hover:text-foreground transition-colors duration-300 text-center">{counter.title}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
