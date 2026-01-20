"use client";

import { useState } from "react";
import { WPAdminWrapper } from "./components/admin/WPAdminWrapper";
import { TopBar } from "./components/TopBar";
import { NotificationStack } from "./components/NotificationStack";
import {
	NotificationControls,
	NotificationSettings,
	NOTIFICATION_PRESETS,
} from "./components/NotificationControls";

export default function Home() {
	const [notifications, setNotifications] = useState<NotificationSettings[]>([
		NOTIFICATION_PRESETS.welcome,
		NOTIFICATION_PRESETS.sale,
		NOTIFICATION_PRESETS.alert,
	]);
	const [selectedIndex, setSelectedIndex] = useState(0);

	return (
		<WPAdminWrapper>
			<div className="bg-wp-content-bg min-h-full">
				<TopBar title="Dashboard" />
				<NotificationStack
					notifications={notifications}
					onPrimaryClick={(index) => console.log("Primary clicked", index)}
					onSecondaryClick={(index) => console.log("Secondary clicked", index)}
					onDismiss={(index) => {
						const updated = notifications.filter((_, i) => i !== index);
						setNotifications(updated);
						if (selectedIndex >= updated.length && updated.length > 0) {
							setSelectedIndex(updated.length - 1);
						}
					}}
				/>
			</div>

			<NotificationControls
				notifications={notifications}
				selectedIndex={selectedIndex}
				onSelectIndex={setSelectedIndex}
				onChange={setNotifications}
			/>
		</WPAdminWrapper>
	);
}
