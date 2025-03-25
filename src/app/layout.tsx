import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { BackgroundBubbles } from '@/components/BackgroundBubbles';
import { Maven_Pro, Noto_Serif_Bengali } from 'next/font/google';
import { ThemeProvider } from 'next-themes';

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
				url: '/favicon.ico',
				type: 'image/ico+xml',
			},
		],
		shortcut: '/favicon.ico',
		apple: '/favicon.ico',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning className={`${mavenPro.variable} ${notoSerifBengali.variable}`}>
			<body className="color-theme-palette antialiased font-maven-pro">
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
					<BackgroundBubbles />
					<Navbar />
					<main>{children}</main>
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}
