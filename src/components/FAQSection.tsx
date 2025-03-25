'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
	{
		id: 1,
		question: 'What services do you specialize in?',
		answer: 'We specialize in web development, UI/UX design, digital marketing, cybersecurity, IT consulting, and AI solutions. Our comprehensive suite of services is designed to meet all your digital transformation needs.',
	},
	{
		id: 2,
		question: 'How long does a typical project take?',
		answer: 'Project timelines vary depending on scope and complexity. A simple website might take 4-6 weeks, while a complex enterprise solution could take 3-6 months. We provide detailed timelines during our initial consultation.',
	},
	{
		id: 3,
		question: 'Do you offer ongoing support and maintenance?',
		answer: 'Yes, we provide comprehensive post-launch support and maintenance services. We offer different support packages tailored to your needs, ensuring your digital solutions remain up-to-date and perform optimally.',
	},
	{
		id: 4,
		question: 'How do you ensure project security?',
		answer: 'We implement industry-leading security practices, including encrypted communications, secure code development, regular security audits, and compliance with international security standards.',
	},
	{
		id: 5,
		question: 'What is your approach to client collaboration?',
		answer: 'We believe in transparent, collaborative partnerships. We maintain regular communication through scheduled updates, provide access to project management tools, and ensure our clients are involved in key decision-making processes.',
	},
	{
		id: 6,
		question: 'What technologies do you work with?',
		answer: 'We work with a wide range of modern technologies including React, Next.js, Node.js, Python, and cloud platforms like AWS and Azure. We choose the best technology stack based on your specific project requirements.',
	},
];

export function FAQSection() {
	const [openIndexes, setOpenIndexes] = useState<number[]>([]);

	const toggleFAQ = (index: number) => {
		setOpenIndexes((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]));
	};

	return (
		<section className="py-10">
			<div className="container mx-auto px-4">
				<div className="max-w-3xl mx-auto">
					{faqs.map((faq, index) => (
						<div
							key={faq.id}
							className="mb-4 rounded-xl border border-border/50 backdrop-blur-sm 
                                     hover:border-primary/40 transition-all duration-300"
						>
							<button onClick={() => toggleFAQ(index)} className="w-full px-6 py-4 cursor-pointer text-left flex items-center justify-between" aria-expanded={openIndexes.includes(index)}>
								<span className="text-lg font-medium text-foreground">{faq.question}</span>
								<ChevronDown className={`w-5 h-5 text-primary transition-transform duration-300 ${openIndexes.includes(index) ? 'rotate-180' : ''}`} />
							</button>
							<div className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndexes.includes(index) ? 'max-h-48' : 'max-h-0'}`}>
								<div className="px-6 pb-4 text-muted-foreground">{faq.answer}</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
