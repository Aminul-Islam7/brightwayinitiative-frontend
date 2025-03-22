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
		image: '/reviews/avatar1.svg',
		review: 'Working with BrightWay has been transformative for our business. Their innovative solutions helped us achieve our digital transformation goals ahead of schedule.',
		rating: 5,
	},
	{
		id: 2,
		name: 'Michael Chen',
		role: 'Marketing Director, InnovatePro',
		image: '/reviews/avatar2.svg',
		review: "The team's expertise in digital marketing and analytics helped us increase our online presence significantly. Exceptional service and remarkable results.",
		rating: 5,
	},
	{
		id: 3,
		name: 'Emma Williams',
		role: 'CTO, CloudSecure',
		image: '/reviews/avatar3.svg',
		review: "Their cybersecurity solutions are top-notch. We've seen a dramatic improvement in our security posture since partnering with BrightWay.",
		rating: 5,
	},
];

const gradients = ['from-primary-400/10 to-info-400/10', 'from-success-400/10 to-primary-400/10', 'from-warning-400/10 to-success-400/10'];

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
		<section className="py-20 relative overflow-hidden">
			{/* Background decorative elements */}
			<div className="absolute inset-0 -z-10">
				<div className="absolute top-40 -left-40 w-96 h-96 bg-primary-400/10 rounded-full blur-3xl" />
				<div className="absolute bottom-20 -right-40 w-96 h-96 bg-success-400/10 rounded-full blur-3xl" />
			</div>

			<div className="container mx-auto px-4">
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-4xl font-bold mb-4">Client Reviews</h2>
					<p className="text-muted-foreground max-w-2xl mx-auto">See what our clients have to say about working with us</p>
				</div>

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
								<div className={`bg-gradient-to-br ${gradients[index % gradients.length]} rounded-2xl p-8 md:p-12 border border-border/30 backdrop-blur-sm relative`}>
									{/* Card Navigation Buttons */}
									<div className="absolute left-4 right-4 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none z-10">
										<button onClick={goPrev} className="opacity-0 group-hover:opacity-100 transition-opacity pointer-events-auto w-10 h-10 rounded-full bg-background/40 backdrop-blur-sm border border-border/50 flex items-center justify-center text-foreground/50 cursor-pointer hover:text-primary hover:border-primary hover:bg-background/80 shadow-lg transform hover:scale-110 transition-all" aria-label="Previous review">
											<ChevronLeft className="w-5 h-5" />
										</button>
										<button onClick={goNext} className="opacity-0 group-hover:opacity-100 transition-opacity pointer-events-auto w-10 h-10 rounded-full bg-background/40 backdrop-blur-sm border border-border/50 flex items-center justify-center text-foreground/50 cursor-pointer hover:text-primary hover:border-primary hover:bg-background/80 shadow-lg transform hover:scale-110 transition-all" aria-label="Next review">
											<ChevronRight className="w-5 h-5" />
										</button>
									</div>

									<div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-start">
										{/* Left column with image and details */}
										<div className="flex flex-col items-center md:items-start">
											<div className="relative w-24 h-24 md:w-32 md:h-32 mb-4">
												<Image src={review.image} alt={review.name} fill className="rounded-2xl shadow-lg" />
											</div>
											<div className="flex gap-1 mb-2">
												{[...Array(review.rating)].map((_, index) => (
													<Star key={index} className="w-5 h-5 text-amber-400" fill="currentColor" />
												))}
											</div>
											<h4 className="font-semibold text-xl md:text-2xl text-foreground mb-1">{review.name}</h4>
											<p className="text-primary font-medium">{review.role}</p>
										</div>

										{/* Right column with review text */}
										<div className="flex-1">
											<Quote className="w-12 h-12 mb-4 text-primary/40" strokeWidth={1} />
											<blockquote className="text-xl md:text-2xl lg:text-3xl font-light text-foreground/90 leading-relaxed">&ldquo;{review.review}&rdquo;</blockquote>
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
