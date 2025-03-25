'use client';

import { useRive } from '@rive-app/react-canvas';

export function HeroAnimation() {
	const { RiveComponent } = useRive({
		src: '/hero-animation.riv',
		autoplay: true,
	});

	return (
		<div style={{ width: '100%', height: '100%', minHeight: '300px' }}>
			<RiveComponent />
		</div>
	);
}
