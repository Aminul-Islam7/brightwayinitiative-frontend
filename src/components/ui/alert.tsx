import React from 'react';
import { cn } from '@/lib/utils';

type AlertVariant = 'info' | 'success' | 'warning' | 'error';

interface AlertProps {
	variant: AlertVariant;
	children: React.ReactNode;
	className?: string;
}

const variantStyles = {
	info: {
		container: 'bg-blue-50 dark:bg-blue-950/30 border-blue-300 dark:border-blue-800 text-blue-800 dark:text-blue-300',
		icon: 'text-blue-500',
	},
	success: {
		container: 'bg-green-50 dark:bg-green-950/30 border-green-300 dark:border-green-800 text-green-800 dark:text-green-300',
		icon: 'text-green-500',
	},
	warning: {
		container: 'bg-amber-50 dark:bg-amber-950/30 border-amber-300 dark:border-amber-800 text-amber-800 dark:text-amber-300',
		icon: 'text-amber-500',
	},
	error: {
		container: 'bg-red-50 dark:bg-red-950/30 border-red-300 dark:border-red-800 text-red-800 dark:text-red-300',
		icon: 'text-red-500',
	},
};

export const Alert: React.FC<AlertProps> = ({ variant = 'info', children, className, ...props }) => {
	return (
		<div className={cn('rounded-lg border px-4 py-3 text-sm font-medium', variantStyles[variant].container, className)} {...props}>
			{children}
		</div>
	);
};

// Convenience components for specific alert types
export const InfoAlert = (props: Omit<AlertProps, 'variant'>) => <Alert variant="info" {...props} />;

export const SuccessAlert = (props: Omit<AlertProps, 'variant'>) => <Alert variant="success" {...props} />;

export const WarningAlert = (props: Omit<AlertProps, 'variant'>) => <Alert variant="warning" {...props} />;

export const ErrorAlert = (props: Omit<AlertProps, 'variant'>) => <Alert variant="error" {...props} />;
