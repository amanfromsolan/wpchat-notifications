"use client";

import { ReactNode, Children, isValidElement } from "react";
import { Dashicon } from "./Dashicon";

// ============================================
// WPSidebar (main container)
// ============================================
interface WPSidebarProps {
	children: ReactNode;
}

export function WPSidebar({ children }: WPSidebarProps) {
	// Add spacing between groups
	let groupIndex = 0;
	const childrenWithSpacing = Children.map(children, (child) => {
		if (isValidElement(child)) {
			const isFirstGroup = groupIndex === 0;
			groupIndex++;
			if (!isFirstGroup) {
				return <div className="mt-4">{child}</div>;
			}
		}
		return child;
	});

	return (
		<aside className="w-[160px] bg-wp-admin-bg shrink-0 flex flex-col font-system subpixel-antialiased">
			<nav className="pt-3.5 pb-2 flex-1 overflow-y-auto">
				{childrenWithSpacing}
			</nav>
		</aside>
	);
}

// ============================================
// WPSidebarGroup
// ============================================
interface WPSidebarGroupProps {
	children: ReactNode;
}

export function WPSidebarGroup({ children }: WPSidebarGroupProps) {
	return <div>{children}</div>;
}

// ============================================
// WPSidebarItem
// ============================================
interface WPSidebarItemProps {
	icon: string;
	label: string;
	children?: ReactNode;
	active?: boolean;
	open?: boolean;
}

export function WPSidebarItem({ icon, label, children, active, open }: WPSidebarItemProps) {
	const hasSubItems = Children.count(children) > 0;

	return (
		<>
			<div
				className={`flex items-center gap-2.5 px-3 py-1.5 cursor-pointer transition-colors hover:bg-wp-admin-hover ${
					active ? "bg-wp-admin-active" : ""
				}`}
			>
				<Dashicon
					icon={icon}
					size={20}
					className={active ? "text-white" : "text-wp-admin-icon"}
				/>
				<span className="text-sm text-white">{label}</span>
			</div>

			{/* Render submenu if open and has subitems */}
			{open && hasSubItems && (
				<div className="bg-wp-admin-hover py-1.5">
					{children}
				</div>
			)}
		</>
	);
}

// ============================================
// WPSidebarSubItem
// ============================================
interface WPSidebarSubItemProps {
	label: string;
	active?: boolean;
}

export function WPSidebarSubItem({ label, active }: WPSidebarSubItemProps) {
	return (
		<div
			className={`px-3 py-[5px] text-sm leading-[1.4] cursor-pointer transition-colors ${
				active ? "text-white" : "text-white/70 hover:text-white"
			}`}
		>
			{label}
		</div>
	);
}

WPSidebarSubItem.displayName = "WPSidebarSubItem";
