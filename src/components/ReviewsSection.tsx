'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import type { SwiperRef } from 'swiper/react';
import { CustomSwiper } from './ui/CustomSwiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const reviews = [
	{
		id: 1,
		name: 'Sarah Johnson',
		role: 'CEO, TechCorp',
		image: '/reviews/sarah.jpg',
		review: 'Working with BrightWay has been transformative for our business. Their innovative solutions helped us achieve our digital transformation goals ahead of schedule.',
		rating: 5,
	},
	{
		id: 2,
		name: 'Michael Chen',
		role: 'Marketing Director, InnovatePro',
		image: '/reviews/michael.jpg',
		review: "The team's expertise in digital marketing and analytics helped us increase our online presence significantly. Exceptional service and remarkable results.",
		rating: 5,
	},
	{
		id: 3,
		name: 'Emma Williams',
		role: 'CTO, CloudSecure',
		image: '/reviews/emma.jpg',
		review: "Their cybersecurity solutions are top-notch. We've seen a dramatic improvement in our security posture since partnering with BrightWay.",
		rating: 5,
	},
	{
		id: 4,
		name: 'David Rodriguez',
		role: 'Head of Development, FinTech Solutions',
		image: '/reviews/david.jpg',
		review: "BrightWay's development team exceeded our expectations. Their attention to detail and technical expertise helped us launch our financial platform months ahead of schedule.",
		rating: 5,
	},
];

const gradients = ['bg-accent/70', 'bg-accent/70', 'bg-accent/70'];

export function ReviewsSection() {
	const swiperRef = useRef<SwiperRef>(null);

	const goPrev = () => {
		if (swiperRef.current && swiperRef.current.swiper) {
			swiperRef.current.swiper.slidePrev();
		}
	};

	const goNext = () => {
		if (swiperRef.current && swiperRef.current.swiper) {
			swiperRef.current.swiper.slideNext();
		}
	};

	return (
		<section className="py-10 relative overflow-hidden">
			<div className="container mx-auto px-4">
				<div className="max-w-6xl mx-auto relative group">
					<CustomSwiper
						ref={swiperRef}
						modules={[Autoplay]}
						spaceBetween={30}
						slidesPerView={1}
						loop={true}
						speed={800}
						autoplay={{
							delay: 5000,
							disableOnInteraction: false,
						}}
						className="pb-4"
					>
						{reviews.map((review, index) => (
							<SwiperSlide key={review.id}>
								<div className={`${gradients[index % gradients.length]} rounded-2xl border border-border/50 dark:border-border backdrop-blur-sm relative flex flex-col md:flex-row overflow-hidden`}>
									{/* Card Navigation Buttons */}
									<div className="absolute left-4 right-4 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none z-10">
										<button onClick={goPrev} className="md:opacity-0 group-hover:opacity-100 transition-opacity pointer-events-auto w-10 h-10 rounded-full bg-background/50 backdrop-blur-sm flex items-center justify-center text-muted-foreground cursor-pointer hover:text-primary hover:bg-background/70 shadow-lg transform transition-all" aria-label="Previous review">
											<ChevronLeft className="w-5 h-5" />
										</button>
										<button onClick={goNext} className="md:opacity-0 group-hover:opacity-100 transition-opacity pointer-events-auto w-10 h-10 rounded-full bg-background/50 backdrop-blur-sm flex items-center justify-center text-muted-foreground cursor-pointer hover:text-primary hover:bg-background/70 shadow-lg transform transition-all" aria-label="Next review">
											<ChevronRight className="w-5 h-5" />
										</button>
									</div>

									{/* Image - circle on mobile, rectangle on desktop */}
									<div className="flex justify-center md:block py-8 md:py-0 w-full md:w-1/4">
										<div className="relative w-64 h-64 md:w-full md:h-full min-h-[300px] rounded-lg md:rounded-none overflow-hidden">
											<Image
												src={review.image}
												alt={review.name}
												fill
												className="object-cover"
												priority={index < 3} // Preload first 3 images
												sizes="(max-width: 768px) 100vw, 50vw"
											/>
											<div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-transparent to-black/30" />
										</div>
									</div>

									{/* Review content */}
									<div className="flex-1 p-6 md:p-8 flex flex-col relative">
										{/* Quote icon and stars on the same line */}
										<div className="flex justify-between items-center mb-4">
											<Quote className="w-8 h-8 md:w-12 md:h-12 text-primary/40" strokeWidth={1} />
											<div className="flex gap-1">
												{[...Array(review.rating)].map((_, i) => (
													<Star key={i} className="w-4 h-4 md:w-5 md:h-5 text-amber-400" fill="currentColor" />
												))}
											</div>
										</div>

										{/* Review text with overflow handling */}
										<div className="flex-1 overflow-y-auto">
											<blockquote className="text-lg md:text-xl lg:text-2xl font-light text-foreground leading-relaxed">&ldquo;{review.review}&rdquo;</blockquote>
										</div>

										{/* Name and designation at the bottom */}
										<div className="mt-4 pt-4 border-t border-border/30">
											<h4 className="font-semibold text-lg md:text-xl lg:text-2xl text-foreground">{review.name}</h4>
											<p className="text-primary font-medium text-sm md:text-base">{review.role}</p>
										</div>
									</div>
								</div>
							</SwiperSlide>
						))}
					</CustomSwiper>
				</div>
			</div>
		</section>
	);
}
