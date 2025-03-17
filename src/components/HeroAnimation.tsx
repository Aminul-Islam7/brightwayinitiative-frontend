'use client';

import { useRive } from '@rive-app/react-canvas';

export function HeroAnimation() {
	const { RiveComponent } = useRive({
		src: '/hero-animation.riv',
		autoplay: true,
	});

	return (
		<div className="relative z-10 w-full aspect-[4/3] max-h-[500px] rounded-lg overflow-hidden">
			<div style={{ width: '100%', height: '100%', position: 'absolute' }}>
				<RiveComponent />
			</div>
		</div>
	);
}
