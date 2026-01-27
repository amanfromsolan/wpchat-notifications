"use client";

import { useState } from "react";
import { cn } from "@/app/lib/cn";
import {
    MdAdd,
    MdClose,
    MdCelebration,
    MdWarning,
    MdInfo,
    MdLocalOffer,
    MdRocket,
    MdStar,
    MdNotifications,
    MdCardGiftcard,
    MdTrendingUp,
    MdNewReleases,
    MdCheckCircle,
    MdError,
    MdLightbulb,
    MdFavorite,
    MdThumbUp,
    MdAutoAwesome,
    MdBolt,
    MdDiamond,
    MdEmojiEvents,
    MdFlare,
    MdGrade,
    MdInsights,
    MdLocalFireDepartment,
    MdMilitaryTech,
    MdPsychology,
    MdSavings,
    MdSchedule,
    MdSecurity,
    MdSpeed,
    MdTimer,
    MdUpdate,
    MdVerified,
    MdWorkspacePremium,
    MdKeyboardArrowDown,
} from "react-icons/md";

// Available icons for the notification
export const NOTIFICATION_ICONS = {
    celebration: MdCelebration,
    warning: MdWarning,
    info: MdInfo,
    offer: MdLocalOffer,
    rocket: MdRocket,
    star: MdStar,
    notification: MdNotifications,
    gift: MdCardGiftcard,
    trending: MdTrendingUp,
    new: MdNewReleases,
    check: MdCheckCircle,
    error: MdError,
    lightbulb: MdLightbulb,
    heart: MdFavorite,
    thumbUp: MdThumbUp,
    sparkle: MdAutoAwesome,
    bolt: MdBolt,
    diamond: MdDiamond,
    trophy: MdEmojiEvents,
    flare: MdFlare,
    grade: MdGrade,
    insights: MdInsights,
    fire: MdLocalFireDepartment,
    medal: MdMilitaryTech,
    brain: MdPsychology,
    savings: MdSavings,
    schedule: MdSchedule,
    security: MdSecurity,
    speed: MdSpeed,
    timer: MdTimer,
    update: MdUpdate,
    verified: MdVerified,
    premium: MdWorkspacePremium,
} as const;

// Color theme options
export const NOTIFICATION_COLORS = {
    blue: {
        label: "Blue",
        bg: "bg-wp-blue-50",
        iconBg: "bg-wp-blue-50",
        iconColor: "text-wp-blue-500",
        buttonBg: "bg-wp-blue-500 hover:bg-wp-blue-600",
        buttonBorder: "border-wp-blue-500 hover:border-wp-blue-600",
        swatch: "bg-wp-blue-600",
    },
    green: {
        label: "Green",
        bg: "bg-emerald-50",
        iconBg: "bg-emerald-50",
        iconColor: "text-emerald-600",
        buttonBg: "bg-emerald-600 hover:bg-emerald-700",
        buttonBorder: "border-emerald-600 hover:border-emerald-700",
        swatch: "bg-emerald-600",
    },
    amber: {
        label: "Amber",
        bg: "bg-amber-50",
        iconBg: "bg-amber-50",
        iconColor: "text-amber-600",
        buttonBg: "bg-amber-600 hover:bg-amber-700",
        buttonBorder: "border-amber-600 hover:border-amber-700",
        swatch: "bg-amber-600",
    },
    red: {
        label: "Red",
        bg: "bg-red-50",
        iconBg: "bg-red-50",
        iconColor: "text-red-500",
        buttonBg: "bg-red-600 hover:bg-red-700",
        buttonBorder: "border-red-600 hover:border-red-700",
        swatch: "bg-red-600",
    },
} as const;

export type NotificationColorKey = keyof typeof NOTIFICATION_COLORS;

export type NotificationIconKey = keyof typeof NOTIFICATION_ICONS;

// Presets for quick setup
export const NOTIFICATION_PRESETS = {
    welcome: {
        icon: "celebration" as NotificationIconKey,
        color: "blue" as NotificationColorKey,
        heading: "Welcome to WPChat!",
        subtext: "Get started by customizing your chat widget appearance and setting up your support team.",
        primaryButtonText: "Get Started",
        secondaryButtonText: "Learn More",
    },
    sale: {
        icon: "offer" as NotificationIconKey,
        color: "green" as NotificationColorKey,
        heading: "Black Friday Sale!",
        subtext: "Get 50% off on all premium plans. Limited time offer - upgrade now and save big!",
        primaryButtonText: "Upgrade Now",
        secondaryButtonText: "View Plans",
    },
    alert: {
        icon: "warning" as NotificationIconKey,
        color: "amber" as NotificationColorKey,
        heading: "Action Required",
        subtext: "Your API key is about to expire. Please renew it to continue using all features.",
        primaryButtonText: "Renew Now",
        secondaryButtonText: "Remind Later",
    },
    error: {
        icon: "error" as NotificationIconKey,
        color: "red" as NotificationColorKey,
        heading: "Something Went Wrong",
        subtext: "We encountered an error while processing your request. Please try again or contact support.",
        primaryButtonText: "Try Again",
        secondaryButtonText: "Contact Support",
    },
    success: {
        icon: "check" as NotificationIconKey,
        color: "green" as NotificationColorKey,
        heading: "Setup Complete!",
        subtext: "Your WhatsApp chat widget is now live and ready to engage with your visitors.",
        primaryButtonText: "View Dashboard",
        secondaryButtonText: "Customize More",
    },
};

export type NotificationPresetKey = keyof typeof NOTIFICATION_PRESETS;

export interface NotificationSettings {
    icon: NotificationIconKey;
    color: NotificationColorKey;
    heading: string;
    subtext: string;
    primaryButtonText: string;
    secondaryButtonText: string;
}

interface NotificationControlsProps {
    notifications: NotificationSettings[];
    selectedIndex: number;
    onSelectIndex: (index: number) => void;
    onChange: (notifications: NotificationSettings[]) => void;
}

export function NotificationControls({
    notifications,
    selectedIndex,
    onSelectIndex,
    onChange
}: NotificationControlsProps) {
    const [isIconPickerOpen, setIsIconPickerOpen] = useState(false);

    const settings = notifications[selectedIndex] || NOTIFICATION_PRESETS.welcome;

    const updateSetting = <K extends keyof NotificationSettings>(
        key: K,
        value: NotificationSettings[K]
    ) => {
        const updated = [...notifications];
        updated[selectedIndex] = { ...settings, [key]: value };
        onChange(updated);
    };

    const applyPreset = (presetKey: NotificationPresetKey) => {
        const updated = [...notifications];
        updated[selectedIndex] = NOTIFICATION_PRESETS[presetKey];
        onChange(updated);
    };

    const addNotification = () => {
        if (notifications.length < 3) {
            onChange([...notifications, NOTIFICATION_PRESETS.welcome]);
            onSelectIndex(notifications.length);
        }
    };

    const removeNotification = (index: number, e: React.MouseEvent) => {
        e.stopPropagation();
        if (notifications.length > 1) {
            const updated = notifications.filter((_, i) => i !== index);
            onChange(updated);
            if (selectedIndex >= updated.length) {
                onSelectIndex(updated.length - 1);
            } else if (selectedIndex === index) {
                onSelectIndex(Math.max(0, index - 1));
            }
        }
    };

    const SelectedIcon = NOTIFICATION_ICONS[settings.icon];
    const selectedColor = NOTIFICATION_COLORS[settings.color];

    return (
        <div className="w-full max-w-3xl">
            {/* Header */}
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Notification Controls</h3>
            
            {/* Card */}
            <div className="bg-gray-200 rounded-xl p-1 shadow-lg">
                {/* Tabs */}
                <div className="flex items-end gap-1">
                {notifications.map((notification, index) => (
                    <div
                        key={index}
                        onClick={() => onSelectIndex(index)}
                        className={cn(
                            "group relative flex-1 flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium transition-all min-w-0 cursor-pointer select-none",
                            selectedIndex === index
                                ? "bg-white text-gray-900 rounded-t-lg"
                                : "text-gray-600 hover:text-gray-900 hover:bg-gray-300/50 rounded-t-lg"
                        )}
                    >
                        <span className={cn(
                            "shrink-0 size-5 rounded text-xs font-medium flex items-center justify-center",
                            selectedIndex === index
                                ? "bg-gray-100 text-gray-500"
                                : "bg-gray-300/50 text-gray-500"
                        )}>
                            {index + 1}
                        </span>
                        <span className="truncate">{notification.heading || "Untitled"}</span>
                        {notifications.length > 1 && (
                            <button
                                onClick={(e) => removeNotification(index, e)}
                                className="absolute top-1 right-1 shrink-0 size-5 rounded-full flex items-center justify-center transition-all text-gray-400 hover:text-white hover:bg-red-500 opacity-0 group-hover:opacity-100"
                            >
                                <MdClose className="size-3" />
                            </button>
                        )}
                    </div>
                ))}
                {notifications.length < 3 && (
                    <button
                        onClick={addNotification}
                        className="shrink-0 px-4 py-2.5 flex items-center justify-center text-gray-500 hover:text-gray-700 hover:bg-gray-300/50 rounded-t-lg transition-colors cursor-pointer"
                        title="Add notification"
                    >
                        <MdAdd className="size-5" />
                    </button>
                )}
            </div>

            {/* Content Panel */}
            <div className={cn(
                "bg-white rounded-b-lg",
                selectedIndex !== 0 && "rounded-tl-lg",
                selectedIndex !== notifications.length - 1 && "rounded-tr-lg"
            )}>
                {/* Content */}
                <div className="p-5 space-y-6">
                {/* Style Section */}
                <div>
                    <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Style</h4>
                    <div className="space-y-4">
                        {/* Preset */}
                        <div className="flex items-center gap-3">
                            <label className="text-sm text-gray-600 w-24 shrink-0">Preset</label>
                            <div className="inline-flex rounded-lg border border-gray-200 overflow-hidden">
                                {(Object.keys(NOTIFICATION_PRESETS) as NotificationPresetKey[]).map((key, index, arr) => {
                                    const isSelected = NOTIFICATION_PRESETS[key].heading === settings.heading;
                                    return (
                                        <button
                                            key={key}
                                            onClick={() => applyPreset(key)}
                                            className={cn(
                                                "px-3 py-1.5 text-sm transition-all capitalize",
                                                index !== arr.length - 1 && "border-r border-gray-200",
                                                isSelected
                                                    ? "bg-wp-blue-50 text-wp-blue-600 font-medium"
                                                    : "bg-white text-gray-600 hover:bg-gray-50"
                                            )}
                                        >
                                            {key.replace(/([A-Z])/g, ' $1').trim()}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Color */}
                        <div className="flex items-center gap-3">
                            <label className="text-sm text-gray-600 w-24 shrink-0">Color</label>
                            <div className="flex items-center gap-2">
                                {(Object.keys(NOTIFICATION_COLORS) as NotificationColorKey[]).map((key) => {
                                    const color = NOTIFICATION_COLORS[key];
                                    return (
                                        <button
                                            key={key}
                                            onClick={() => updateSetting("color", key)}
                                            className={cn(
                                                "size-5 rounded-full transition-all",
                                                color.swatch,
                                                settings.color === key
                                                    ? "ring-2 ring-offset-1 ring-gray-400"
                                                    : "hover:scale-110"
                                            )}
                                            title={color.label}
                                        />
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content Section */}
                <div>
                    <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Content</h4>
                    <div className="space-y-4">
                        {/* Icon Picker */}
                        <div className="flex items-center gap-3">
                            <label className="text-sm text-gray-600 w-24 shrink-0">Icon</label>
                            <div className="relative">
                                <button
                                    onClick={() => setIsIconPickerOpen(!isIconPickerOpen)}
                                    className={cn(
                                        "flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors",
                                        selectedColor.iconBg
                                    )}
                                >
                                    <SelectedIcon className={cn("size-5", selectedColor.iconColor)} />
                                    <MdKeyboardArrowDown className={cn(
                                        "size-4 text-gray-400 transition-transform",
                                        isIconPickerOpen && "rotate-180"
                                    )} />
                                </button>
                                {isIconPickerOpen && (
                                    <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10 p-3 max-h-56 overflow-y-auto w-64">
                                        <div className="grid grid-cols-6 gap-1">
                                            {(Object.keys(NOTIFICATION_ICONS) as NotificationIconKey[]).map((key) => {
                                                const Icon = NOTIFICATION_ICONS[key];
                                                return (
                                                    <button
                                                        key={key}
                                                        onClick={() => {
                                                            updateSetting("icon", key);
                                                            setIsIconPickerOpen(false);
                                                        }}
                                                        className={cn(
                                                            "size-9 rounded-md flex items-center justify-center transition-colors",
                                                            settings.icon === key
                                                                ? cn(selectedColor.iconBg, selectedColor.iconColor)
                                                                : "hover:bg-gray-100 text-gray-500"
                                                        )}
                                                        title={key}
                                                    >
                                                        <Icon className="size-5" />
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Heading */}
                        <div className="flex items-center gap-3">
                            <label className="text-sm text-gray-600 w-24 shrink-0">Heading</label>
                            <input
                                type="text"
                                value={settings.heading}
                                onChange={(e) => updateSetting("heading", e.target.value)}
                                className="flex-1 px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-wp-blue-500 focus:border-transparent"
                                placeholder="Notification heading"
                            />
                        </div>

                        {/* Subtext */}
                        <div className="flex items-start gap-3">
                            <label className="text-sm text-gray-600 w-24 shrink-0 pt-2">Subtext</label>
                            <textarea
                                value={settings.subtext}
                                onChange={(e) => updateSetting("subtext", e.target.value)}
                                rows={2}
                                className="flex-1 px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-wp-blue-500 focus:border-transparent resize-none"
                                placeholder="Additional details..."
                            />
                        </div>

                        {/* Buttons */}
                        <div className="flex items-center gap-3">
                            <label className="text-sm text-gray-600 w-24 shrink-0">Buttons</label>
                            <div className="flex-1 flex gap-3">
                                <input
                                    type="text"
                                    value={settings.primaryButtonText}
                                    onChange={(e) => updateSetting("primaryButtonText", e.target.value)}
                                    className="flex-1 px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-wp-blue-500 focus:border-transparent"
                                    placeholder="Primary"
                                />
                                <input
                                    type="text"
                                    value={settings.secondaryButtonText}
                                    onChange={(e) => updateSetting("secondaryButtonText", e.target.value)}
                                    className="flex-1 px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-wp-blue-500 focus:border-transparent"
                                    placeholder="Secondary"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
}
