"use client";

import { WPAdminShell } from "./components/admin/WPAdminShell";
import {
	WPSidebar,
	WPSidebarGroup,
	WPSidebarItem,
	WPSidebarSubItem,
} from "./components/admin/WPSidebar";
import { TopBar } from "./components/TopBar";
import { Notification } from "./components/Notification";

export default function Home() {
	return (
		<WPAdminShell
			siteName="My Plugin Demo"
			sidebar={
				<WPSidebar>
					<WPSidebarGroup>
						<WPSidebarItem icon="dashboard" label="Dashboard" />
					</WPSidebarGroup>

					<WPSidebarGroup>
						<WPSidebarItem icon="admin-post" label="Posts" />
						<WPSidebarItem icon="admin-media" label="Media" />
						<WPSidebarItem icon="admin-page" label="Pages" />
						<WPSidebarItem icon="admin-comments" label="Comments" />
					</WPSidebarGroup>

					<WPSidebarGroup>
						<WPSidebarItem icon="admin-appearance" label="Appearance" />
						<WPSidebarItem icon="admin-plugins" label="Plugins" />
						<WPSidebarItem icon="admin-users" label="Users" />
						<WPSidebarItem icon="admin-generic" label="Settings" />
					</WPSidebarGroup>

					<WPSidebarGroup>
						<WPSidebarItem icon="admin-generic" label="My Plugin" active open>
							<WPSidebarSubItem label="Dashboard" active />
							<WPSidebarSubItem label="Settings" />
							<WPSidebarSubItem label="Analytics" />
						</WPSidebarItem>
					</WPSidebarGroup>
				</WPSidebar>
			}
		>
			<div className="bg-wp-content-bg min-h-full">
				<TopBar title="Dashboard" />
				<Notification
					heading="Welcome to WPChat!"
					subtext="Get started by customizing your chat widget appearance and setting up your support team."
					primaryButtonText="Get Started"
					secondaryButtonText="Learn More"
					onPrimaryClick={() => console.log("Primary clicked")}
					onSecondaryClick={() => console.log("Secondary clicked")}
				/>
			</div>
		</WPAdminShell>
	);
}
