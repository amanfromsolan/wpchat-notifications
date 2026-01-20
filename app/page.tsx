"use client";

import { WPAdminWrapper } from "./components/admin/WPAdminWrapper";
import { TopBar } from "./components/TopBar";
import { Notification } from "./components/Notification";

export default function Home() {
	return (
		<WPAdminWrapper>
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
		</WPAdminWrapper>
	);
}
