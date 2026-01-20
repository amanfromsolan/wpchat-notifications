"use client";

import { ReactNode } from "react";
import { WPAdminShell } from "./WPAdminShell";
import {
    WPSidebar,
    WPSidebarGroup,
    WPSidebarItem,
    WPSidebarSubItem,
} from "./WPSidebar";
import { WPChatIcon } from "@/app/components/icons/WPChatIcon";

interface WPAdminWrapperProps {
    children: ReactNode;
}

export function WPAdminWrapper({ children }: WPAdminWrapperProps) {
    return (
        <WPAdminShell
            siteName="WPChat"
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
                        <WPSidebarItem icon={<WPChatIcon size={20} />} label="WPChat" active open>
                            <WPSidebarSubItem label="Overview" />
                            <WPSidebarSubItem label="Customize" href="/" active />
                            <WPSidebarSubItem label="Visibility" />
                            <WPSidebarSubItem label="Agents" />
                            <WPSidebarSubItem label="Chat Funnels" />
                            <WPSidebarSubItem label="Frequent Questions" />
                            <WPSidebarSubItem label="Settings" />
                            <WPSidebarSubItem label="About Us" />
                        </WPSidebarItem>
                    </WPSidebarGroup>
                </WPSidebar>
            }
        >
            {children}
        </WPAdminShell>
    );
}
