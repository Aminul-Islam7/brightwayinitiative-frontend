import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { BackgroundBubbles } from '@/components/BackgroundBubbles';
import { Maven_Pro, Noto_Serif_Bengali } from 'next/font/google';

// Configure the fonts
const mavenPro = Maven_Pro({
	subsets: ['latin'],
	variable: '--font-maven-pro',
	display: 'swap',
});

const notoSerifBengali = Noto_Serif_Bengali({
	subsets: ['bengali'],
	variable: '--font-noto-serif-bengali',
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	display: 'swap',
});

export const metadata: Metadata = {
	title: 'BrightWay Initiative',
	description: 'Innovative solutions for your business growth',
	icons: {
		icon: [
			{
				url: '/favicon.svg',
				type: 'image/svg+xml',
			},
		],
		shortcut: '/favicon.svg',
		apple: '/favicon.svg',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={`${mavenPro.variable} ${notoSerifBengali.variable}`}>
			<body className="color-theme-palette antialiased font-maven-pro">
				<BackgroundBubbles />
				<Navbar />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
