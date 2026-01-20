"use client";

import { IoMdHelpCircleOutline } from "react-icons/io";
import { WPChatLogo } from "./icons/WPChatLogo";
import { SecondaryButton } from "./Button";

interface TopBarProps {
	title?: string;
}

export function TopBar({ title = "Dashboard" }: TopBarProps) {
	return (
		<div className="bg-white border-b border-black/5 px-[52px] py-3 flex items-center justify-between">
			<div className="flex items-center gap-2.5">
				<WPChatLogo size={40} />
				<span className="text-lg font-semibold text-[#141b38] tracking-tight">
					{title}
				</span>
			</div>

			<SecondaryButton icon={IoMdHelpCircleOutline}>
				Help
			</SecondaryButton>
		</div>
	);
}
