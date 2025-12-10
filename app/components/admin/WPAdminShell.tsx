"use client";

import { ReactNode } from "react";
import { FaWordpress } from "react-icons/fa";
import { Dashicon } from "./Dashicon";

interface WPAdminShellProps {
	children: ReactNode;
	sidebar: ReactNode;
	siteName?: string;
}

export const WPAdminShell = ({
	children,
	sidebar,
	siteName = "My WordPress Site",
}: WPAdminShellProps) => {
	return (
		<div className="flex flex-col h-screen font-system">
			{/* Top Bar */}
			<header className="w-full h-8 bg-wp-admin-bg flex items-center justify-between px-3 z-50">
				{/* Left: WP logo + site name */}
				<div className="flex items-center gap-4">
					<FaWordpress className="w-5 h-5 text-wp-admin-icon hover:text-[#00b9eb] cursor-pointer" />
					<span className="text-[13px] font-medium text-white/90 hover:text-[#72aee6] cursor-pointer">
						{siteName}
					</span>
				</div>

				{/* Right: notifications + user */}
				<div className="flex items-center gap-3">
					<Dashicon
						icon="bell"
						size={16}
						className="text-wp-admin-icon hover:text-[#00b9eb] cursor-pointer"
					/>
					<div className="flex items-center gap-2 cursor-pointer group">
						<span className="text-[13px] font-medium text-white/90 group-hover:text-[#72aee6]">
							Howdy, Admin
						</span>
						<div className="size-5 rounded-[1px] bg-zinc-700 flex items-center justify-center overflow-hidden">
							<svg
								viewBox="0 0 24 24"
								className="w-5 h-5 text-zinc-400/80 translate-y-0.5"
								fill="currentColor"
							>
								<circle cx="12" cy="8" r="4" />
								<path d="M12 14c-6 0-8 3-8 5v1h16v-1c0-2-2-5-8-5z" />
							</svg>
						</div>
					</div>
				</div>
			</header>

			<div className="flex flex-1 min-h-0">
				{/* Sidebar */}
				{sidebar}

				{/* Main Content */}
				<main className="flex-1 min-w-0 overflow-auto">{children}</main>
			</div>
		</div>
	);
};
