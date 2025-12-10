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
						<WPSidebarItem icon="dashboard">Dashboard</WPSidebarItem>
					</WPSidebarGroup>

					<WPSidebarGroup>
						<WPSidebarItem icon="admin-post">Posts</WPSidebarItem>
						<WPSidebarItem icon="admin-media">Media</WPSidebarItem>
						<WPSidebarItem icon="admin-page">Pages</WPSidebarItem>
						<WPSidebarItem icon="admin-comments">Comments</WPSidebarItem>
					</WPSidebarGroup>

					<WPSidebarGroup>
						<WPSidebarItem icon="admin-appearance">Appearance</WPSidebarItem>
						<WPSidebarItem icon="admin-plugins">Plugins</WPSidebarItem>
						<WPSidebarItem icon="admin-users">Users</WPSidebarItem>
						<WPSidebarItem icon="admin-generic">Settings</WPSidebarItem>
					</WPSidebarGroup>

					<WPSidebarGroup>
						<WPSidebarItem icon="admin-generic" label="My Plugin" active open>
							<WPSidebarSubItem active>Dashboard</WPSidebarSubItem>
							<WPSidebarSubItem>Settings</WPSidebarSubItem>
							<WPSidebarSubItem>Analytics</WPSidebarSubItem>
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
