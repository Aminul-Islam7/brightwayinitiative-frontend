import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/Navbar';

export const metadata: Metadata = {
	title: 'BrightWay Initiative',
	description: 'Innovative solutions for your business growth',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
				<link href="https://fonts.googleapis.com/css2?family=Maven+Pro:wght@400..900&family=Noto+Serif+Bengali:wght@100..900&display=swap" rel="stylesheet" />
			</head>
			<body className="color-theme-palette antialiased font-maven-pro">
				<Navbar />
				{children}
			</body>
		</html>
	);
}

