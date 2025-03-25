'use client';

import { useRive, Layout, Fit, Alignment } from '@rive-app/react-canvas';

export function HeroAnimation() {
	const { RiveComponent } = useRive({
		src: '/hero-animation.riv',
		autoplay: true,
		layout: new Layout({
			fit: Fit.Contain,
			alignment: Alignment.Center,
		}),
	});

	return (
		<div
			style={{
				width: '100%',
				height: '100%',
				minHeight: '300px',
				position: 'relative',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<RiveComponent />
		</div>
	);
}
