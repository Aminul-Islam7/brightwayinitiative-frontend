import Link from 'next/link';
import Image from 'next/image';

export function Navbar() {
	return (
		<header className="fixed top-0 left-0 right-0 z-50 bg-background/30 backdrop-blur-md">
			<div className="container mx-auto px-4 py-4">
				<div className="flex items-center justify-between">
					{/* Logo */}
					<div className="flex items-center space-x-2">
						<Link href="/" className="flex items-center">
							<Image src="/logo.svg" alt="BrightWay Initiative Logo" width={40} height={40} className="h-10 w-auto" />
							<div className="ml-2">
								<span className="text-primary font-bold text-xl leading-none block">BrightWay</span>
								<span className="text-xs bg-primary text-primary-foreground px-1.5 py-0.5 rounded leading-none">Initiative</span>
							</div>
						</Link>
					</div>

					{/* Centered Navigation */}
					<nav className="hidden md:flex items-center absolute left-1/2 transform -translate-x-1/2">
						<ul className="flex space-x-8">
							<li>
								<Link href="/" className="text-foreground hover:text-primary transition-colors font-medium text-sm tracking-wide py-2 uppercase">
									Home
								</Link>
							</li>
							<li>
								<Link href="/about" className="text-foreground hover:text-primary transition-colors font-medium text-sm tracking-wide py-2 uppercase">
									About
								</Link>
							</li>
							<li>
								<Link href="/services" className="text-foreground hover:text-primary transition-colors font-medium text-sm tracking-wide py-2 uppercase">
									Services
								</Link>
							</li>
							<li>
								<Link href="/portfolio" className="text-foreground hover:text-primary transition-colors font-medium text-sm tracking-wide py-2 uppercase">
									Portfolio
								</Link>
							</li>
							<li>
								<Link href="/careers" className="text-foreground hover:text-primary transition-colors font-medium text-sm tracking-wide py-2 uppercase">
									Careers
								</Link>
							</li>
						</ul>
					</nav>

					{/* CTA Button */}
					<div className="hidden md:block">
						<Link href="/contact" className="inline-flex items-center justify-center px-5 py-2.5 bg-primary text-primary-foreground rounded-md font-medium text-sm hover:bg-primary-600 transition-colors">
							Contact Now
						</Link>
					</div>

					{/* Mobile Menu Button */}
					<div className="md:hidden">
						<button className="text-foreground p-2">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
							</svg>
						</button>
					</div>
				</div>
			</div>
		</header>
	);
}
