"use client";

import { useState } from "react";
import { WPAdminWrapper } from "./components/admin/WPAdminWrapper";
import { TopBar } from "./components/TopBar";
import { Notification } from "./components/Notification";
import {
	NotificationControls,
	NotificationSettings,
	NOTIFICATION_ICONS,
	NOTIFICATION_COLORS,
	NOTIFICATION_PRESETS,
} from "./components/NotificationControls";

export default function Home() {
	const [notificationSettings, setNotificationSettings] = useState<NotificationSettings>(
		NOTIFICATION_PRESETS.welcome
	);

	const IconComponent = NOTIFICATION_ICONS[notificationSettings.icon];
	const colorTheme = NOTIFICATION_COLORS[notificationSettings.color];

	return (
		<WPAdminWrapper>
			<div className="bg-wp-content-bg min-h-full">
				<TopBar title="Dashboard" />
				<Notification
					icon={
						<div className={`size-12 rounded-full ${colorTheme.iconBg} flex items-center justify-center`}>
							<IconComponent className={`size-6 ${colorTheme.iconColor}`} />
						</div>
					}
					heading={notificationSettings.heading}
					subtext={notificationSettings.subtext}
					primaryButtonText={notificationSettings.primaryButtonText}
					secondaryButtonText={notificationSettings.secondaryButtonText}
					primaryButtonClassName={`${colorTheme.buttonBg} ${colorTheme.buttonBorder}`}
					onPrimaryClick={() => console.log("Primary clicked")}
					onSecondaryClick={() => console.log("Secondary clicked")}
				/>
			</div>

			<NotificationControls
				settings={notificationSettings}
				onChange={setNotificationSettings}
			/>
		</WPAdminWrapper>
	);
}
