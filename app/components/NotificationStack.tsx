"use client";

// Stacked notification cards with hover expansion
import { useState } from "react";
import { cn } from "@/app/lib/cn";
import { HiXMark } from "react-icons/hi2";
import { PrimaryButton, SecondaryButton } from "./Button";
import {
    NotificationSettings,
    NOTIFICATION_ICONS,
    NOTIFICATION_COLORS,
} from "./NotificationControls";

interface NotificationStackProps {
    notifications: NotificationSettings[];
    onPrimaryClick?: (index: number) => void;
    onSecondaryClick?: (index: number) => void;
    onDismiss?: (index: number) => void;
}

export function NotificationStack({
    notifications,
    onPrimaryClick,
    onSecondaryClick,
    onDismiss,
}: NotificationStackProps) {
    const [isExpanded, setIsExpanded] = useState(false);

    if (notifications.length === 0) return null;

    // Only show up to 3 notifications
    const visibleNotifications = notifications.slice(0, 3);
    const count = visibleNotifications.length;

    return (
        <div className="flex justify-center px-4 py-4">
            {/* Overlay - only show when multiple notifications */}
            {count > 1 && (
                <div
                    className={cn(
                        "fixed inset-0 bg-black/40 transition-opacity duration-300 pointer-events-none z-40",
                        isExpanded ? "opacity-100" : "opacity-0"
                    )}
                />
            )}

            <div 
                className="relative w-full max-w-3xl"
                onMouseEnter={() => setIsExpanded(true)}
                onMouseLeave={() => setIsExpanded(false)}
                style={{
                    zIndex: isExpanded ? 50 : 0,
                    transition: isExpanded ? "z-index 0s" : "z-index 0s 300ms",
                    paddingBottom: isExpanded ? `${(count - 1) * 155}px` : 0,
                }}
            >
                {visibleNotifications.map((notification, index) => {
                    const IconComponent = NOTIFICATION_ICONS[notification.icon];
                    const colorTheme = NOTIFICATION_COLORS[notification.color];

                    // Calculate stacking offsets - stack from bottom
                    const stackOffset = index * 12; // 12px offset per card when stacked (going down)
                    const expandOffset = index * 155; // Full card height + 8px gap when expanded

                    // Scale: first = 1, second = 0.98, third = 0.95
                    const stackScale = index === 0 ? 1 : index === 1 ? 0.98 : 0.95;

                    return (
                        <div
                            key={index}
                            className={cn(
                                "transition-all duration-300 ease-out origin-top",
                                index === 0 ? "relative" : "absolute top-0 left-0 right-0"
                            )}
                            style={{
                                transform: isExpanded
                                    ? `translateY(${expandOffset}px) scale(1)`
                                    : `translateY(${stackOffset}px) scale(${stackScale})`,
                                zIndex: count - index,
                            }}
                        >
                            <div
                                className={cn(
                                    "w-full rounded-lg border border-black/10 shadow-lg p-5 bg-white relative",
                                    "transition-all duration-300",
                                    !isExpanded && index > 0 && "opacity-95"
                                )}
                            >
                                {/* Dismiss button */}
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        onDismiss?.(index);
                                    }}
                                    className="absolute top-3 right-3 size-6 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
                                >
                                    <HiXMark className="size-4" />
                                </button>

                                <div className="flex gap-4 pr-6">
                                    <div className="shrink-0">
                                        <div
                                            className={cn(
                                                "size-12 rounded-full flex items-center justify-center",
                                                colorTheme.iconBg
                                            )}
                                        >
                                            <IconComponent
                                                className={cn("size-6", colorTheme.iconColor)}
                                            />
                                        </div>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="text-base font-semibold text-gray-900 mb-1">
                                            {notification.heading}
                                        </h3>
                                        <p className="text-sm text-gray-600 mb-4">
                                            {notification.subtext}
                                        </p>
                                        <div className="flex gap-3">
                                            <PrimaryButton
                                                onClick={() => onPrimaryClick?.(index)}
                                                className={`${colorTheme.buttonBg} ${colorTheme.buttonBorder}`}
                                            >
                                                {notification.primaryButtonText}
                                            </PrimaryButton>
                                            <SecondaryButton
                                                onClick={() => onSecondaryClick?.(index)}
                                            >
                                                {notification.secondaryButtonText}
                                            </SecondaryButton>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
