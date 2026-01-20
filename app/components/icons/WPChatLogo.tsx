interface WPChatLogoProps {
	size?: number;
	className?: string;
}

export function WPChatLogo({ size = 40, className }: WPChatLogoProps) {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 40 40"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
		>
			<rect width="40" height="40" fill="white" rx="6" />
			<path
				d="M24.9044 5.6283C32.471 5.6283 38.6049 11.7622 38.6049 19.3288C38.6049 27.075 32.2379 33.1326 24.7467 33.0312L1.39551 34.2794L4.02656 26.2735C2.36831 24.0989 1.39574 21.3895 1.39574 18.4818C1.39574 11.383 7.15043 5.6283 14.2492 5.6283H24.9044Z"
				fill="#F53C5E"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M15.4225 18.6218V18.7695C15.4225 20.8897 17.1413 22.6085 19.2616 22.6085C21.3818 22.6085 23.1006 20.8897 23.1006 18.7695V18.6218H26.9397V18.7695C26.9397 23.01 23.5021 26.4476 19.2616 26.4476C15.0211 26.4476 11.5835 23.01 11.5835 18.7695V18.6218H15.4225Z"
				fill="white"
			/>
		</svg>
	);
}
