interface WPChatIconProps {
	size?: number;
	className?: string;
}

export function WPChatIcon({ size = 16, className }: WPChatIconProps) {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 16 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
		>
			<path
				d="M10.1088 0.846191C13.3624 0.846191 16 3.48377 16 6.73739C16 10.0682 13.2622 12.673 10.041 12.6294L0 13.1661L1.13135 9.72361C0.418306 8.78852 9.88182e-05 7.62348 9.88182e-05 6.37317C9.88182e-05 3.3207 2.47461 0.846191 5.52708 0.846191H10.1088Z"
				fill="currentColor"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M6.03164 6.43347V6.49696C6.03164 7.40867 6.77072 8.14775 7.68243 8.14775C8.59413 8.14775 9.33321 7.40867 9.33321 6.49696V6.43347H10.984V6.49696C10.984 8.32037 9.50583 9.79853 7.68243 9.79853C5.85902 9.79853 4.38086 8.32037 4.38086 6.49696V6.43347H6.03164Z"
				fill="#0073AA"
			/>
		</svg>
	);
}
