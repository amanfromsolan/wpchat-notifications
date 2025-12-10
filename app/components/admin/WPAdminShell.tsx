"use client";

import { ReactNode } from "react";
import { FaWordpress } from "react-icons/fa";
import { Dashicon } from "./Dashicon";

interface MenuItem {
	icon: string;
	label: string;
	active?: boolean;
}

interface PluginSubmenuItem {
	label: string;
	active?: boolean;
}

interface PluginConfig {
	icon: string;
	label: string;
	active?: boolean;
	items: PluginSubmenuItem[];
}

interface WPAdminShellProps {
	children: ReactNode;
	siteName?: string;
	plugin?: PluginConfig;
}

const MENU_GROUPS: MenuItem[][] = [
	[{ icon: "dashboard", label: "Dashboard" }],
	[
		{ icon: "admin-post", label: "Posts" },
		{ icon: "admin-media", label: "Media" },
		{ icon: "admin-page", label: "Pages" },
		{ icon: "admin-comments", label: "Comments" },
	],
	[
		{ icon: "admin-appearance", label: "Appearance" },
		{ icon: "admin-plugins", label: "Plugins" },
		{ icon: "admin-users", label: "Users" },
		{ icon: "admin-generic", label: "Settings" },
	],
];

export const WPAdminShell = ({
	children,
	siteName = "My WordPress Site",
	plugin,
}: WPAdminShellProps) => {
	return (
		<div className="flex flex-col h-screen font-system">
			{/* Top Bar */}
			<header className="w-full h-8 bg-[#1d2327] flex items-center justify-between px-3 z-50">
				{/* Left: WP logo + site name */}
				<div className="flex items-center gap-4">
					<FaWordpress className="w-5 h-5 text-[#a0a5aa] hover:text-[#00b9eb] cursor-pointer" />
					<span className="text-[13px] font-medium text-white/90 hover:text-[#72aee6] cursor-pointer">
						{siteName}
					</span>
				</div>

				{/* Right: notifications + user */}
				<div className="flex items-center gap-3">
					<Dashicon
						icon="bell"
						size={16}
						className="text-[#a0a5aa] hover:text-[#00b9eb] cursor-pointer"
					/>
					<div className="flex items-center gap-2 cursor-pointer group">
						<span className="text-[13px] font-medium text-white/90 group-hover:text-[#72aee6]">
							Howdy, Admin
						</span>
						<div className="w-6 h-6 rounded-full bg-[#50575e]" />
					</div>
				</div>
			</header>

			<div className="flex flex-1 min-h-0">
				{/* Sidebar */}
				<aside className="w-[160px] bg-[#1d2327] shrink-0 flex flex-col subpixel-antialiased">
					<nav className="pt-3.5 pb-2 flex-1 overflow-y-auto">
						{MENU_GROUPS.map((group, groupIndex) => (
							<div key={groupIndex} className={groupIndex > 0 ? "mt-4" : ""}>
								{group.map((item) => (
									<div
										key={item.label}
										className={`flex items-center gap-2.5 px-3 py-1.5 cursor-pointer transition-colors hover:bg-[#2c3338] ${
											item.active ? "bg-[#2271b1]" : ""
										}`}
									>
										<Dashicon
											icon={item.icon}
											size={20}
											className={item.active ? "text-white" : "text-[#a0a5aa]"}
										/>
										<span className="text-sm text-white">{item.label}</span>
									</div>
								))}
							</div>
						))}

						{/* Plugin section with submenu */}
						{plugin && (
							<div className="mt-4">
								{/* Plugin parent item */}
								<div
									className={`flex items-center gap-2.5 px-3 py-1.5 cursor-pointer transition-colors hover:bg-[#2c3338] ${
										plugin.active ? "bg-[#2271b1]" : ""
									}`}
								>
									<Dashicon
										icon={plugin.icon}
										size={20}
										className={plugin.active ? "text-white" : "text-[#a0a5aa]"}
									/>
									<span className="text-sm text-white">{plugin.label}</span>
								</div>

								{/* Plugin submenu items */}
								<div className="bg-[#2c3338] py-1.5">
									{plugin.items.map((subItem) => (
										<div
											key={subItem.label}
											className={`px-3 py-[5px] text-sm leading-[1.4] cursor-pointer transition-colors ${
												subItem.active ? "text-white" : "text-white/70 hover:text-white"
											}`}
										>
											{subItem.label}
										</div>
									))}
								</div>
							</div>
						)}
					</nav>
				</aside>

				{/* Main Content */}
				<main className="flex-1 min-w-0 overflow-auto">{children}</main>
			</div>
		</div>
	);
};
