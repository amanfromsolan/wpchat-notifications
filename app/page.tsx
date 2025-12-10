import { WPAdminShell } from "./components/admin/WPAdminShell";
import {
	WPSidebar,
	WPSidebarGroup,
	WPSidebarItem,
	WPSidebarSubItem,
} from "./components/admin/WPSidebar";

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
			{/* Empty content area - WordPress admin style background */}
			<div className="bg-wp-content-bg h-full p-5">
				<h1 className="text-2xl font-semibold text-[#1d2327]">
					Plugin Page Content
				</h1>
				<p className="mt-2 text-[#50575e]">Your plugin content goes here.</p>
			</div>
		</WPAdminShell>
	);
}
