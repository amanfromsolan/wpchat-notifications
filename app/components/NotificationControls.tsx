"use client";

import { useState } from "react";
import { cn } from "@/app/lib/cn";
import {
    MdSettings,
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
    newFeature: {
        icon: "rocket" as NotificationIconKey,
        color: "blue" as NotificationColorKey,
        heading: "New Feature Available!",
        subtext: "Introducing AI-powered responses. Let your chatbot handle common questions automatically.",
        primaryButtonText: "Try It Now",
        secondaryButtonText: "Learn More",
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
    settings: NotificationSettings;
    onChange: (settings: NotificationSettings) => void;
}

export function NotificationControls({ settings, onChange }: NotificationControlsProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [isIconPickerOpen, setIsIconPickerOpen] = useState(false);

    const updateSetting = <K extends keyof NotificationSettings>(
        key: K,
        value: NotificationSettings[K]
    ) => {
        onChange({ ...settings, [key]: value });
    };

    const applyPreset = (presetKey: NotificationPresetKey) => {
        onChange(NOTIFICATION_PRESETS[presetKey]);
    };

    const SelectedIcon = NOTIFICATION_ICONS[settings.icon];
    const selectedColor = NOTIFICATION_COLORS[settings.color];

    return (
        <>
            {/* Floating Control Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                    "fixed bottom-6 right-6 z-50",
                    "size-14 rounded-full",
                    "bg-gray-900 text-white shadow-lg",
                    "flex items-center justify-center",
                    "hover:bg-gray-800 hover:scale-105",
                    "transition-all duration-200",
                    isOpen && "rotate-90"
                )}
            >
                {isOpen ? <MdClose className="size-6" /> : <MdSettings className="size-6" />}
            </button>

            {/* Control Panel */}
            {isOpen && (
                <div className="fixed bottom-24 right-6 z-50 w-[480px] bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden">
                    <div className="bg-gray-50 px-5 py-3 border-b border-gray-200">
                        <h3 className="font-semibold text-gray-900">Notification Controls</h3>
                        <p className="text-xs text-gray-500">Customize the notification banner</p>
                    </div>

                    <div className="p-5 space-y-5 max-h-[70vh] overflow-y-auto">
                        {/* Presets */}
                        <div>
                            <label className="block text-xs font-medium text-gray-700 mb-2">
                                Presets
                            </label>
                            <div className="flex flex-wrap gap-2">
                                {(Object.keys(NOTIFICATION_PRESETS) as NotificationPresetKey[]).map((key) => (
                                    <button
                                        key={key}
                                        onClick={() => applyPreset(key)}
                                        className="px-3 py-1.5 text-sm bg-gray-100 hover:bg-gray-200 rounded-md capitalize transition-colors"
                                    >
                                        {key.replace(/([A-Z])/g, ' $1').trim()}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Color & Icon Row */}
                        <div className="flex gap-4">
                            {/* Color Picker */}
                            <div className="flex-1">
                                <label className="block text-xs font-medium text-gray-700 mb-2">
                                    Color Theme
                                </label>
                                <div className="flex gap-2.5">
                                    {(Object.keys(NOTIFICATION_COLORS) as NotificationColorKey[]).map((key) => {
                                        const color = NOTIFICATION_COLORS[key];
                                        return (
                                            <button
                                                key={key}
                                                onClick={() => updateSetting("color", key)}
                                                className={cn(
                                                    "size-6 rounded-full transition-all",
                                                    color.swatch,
                                                    settings.color === key
                                                        ? "ring-2 ring-offset-2 ring-gray-400 scale-110"
                                                        : "hover:scale-110"
                                                )}
                                                title={color.label}
                                            />
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Icon Picker Dropdown */}
                            <div className="flex-1 relative">
                                <label className="block text-xs font-medium text-gray-700 mb-2">
                                    Icon
                                </label>
                                <button
                                    onClick={() => setIsIconPickerOpen(!isIconPickerOpen)}
                                    className={cn(
                                        "w-full px-3 py-2 border border-gray-200 rounded-lg",
                                        "flex items-center justify-between",
                                        "hover:bg-gray-50 transition-colors",
                                        isIconPickerOpen && "ring-2 ring-wp-blue-500"
                                    )}
                                >
                                    <div className="flex items-center gap-2">
                                        <div className={cn("size-8 rounded-md flex items-center justify-center", selectedColor.iconBg)}>
                                            <SelectedIcon className={cn("size-5", selectedColor.iconColor)} />
                                        </div>
                                        <span className="text-sm text-gray-700 capitalize">{settings.icon}</span>
                                    </div>
                                    <MdKeyboardArrowDown className={cn(
                                        "size-5 text-gray-400 transition-transform",
                                        isIconPickerOpen && "rotate-180"
                                    )} />
                                </button>

                                {/* Icon Dropdown */}
                                {isIconPickerOpen && (
                                    <div className="absolute top-full right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10 p-3 max-h-56 overflow-y-auto w-56">
                                        <div className="grid grid-cols-4 gap-2">
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
                                                            "size-10 rounded-md flex items-center justify-center transition-colors shrink-0",
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
                        <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1.5">
                                Heading
                            </label>
                            <input
                                type="text"
                                value={settings.heading}
                                onChange={(e) => updateSetting("heading", e.target.value)}
                                className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-wp-blue-500 focus:border-transparent"
                            />
                        </div>

                        {/* Subtext */}
                        <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1.5">
                                Subtext
                            </label>
                            <textarea
                                value={settings.subtext}
                                onChange={(e) => updateSetting("subtext", e.target.value)}
                                rows={2}
                                className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-wp-blue-500 focus:border-transparent resize-none"
                            />
                        </div>

                        {/* Button Texts Row */}
                        <div className="flex gap-4">
                            <div className="flex-1">
                                <label className="block text-xs font-medium text-gray-700 mb-1.5">
                                    Primary Button
                                </label>
                                <input
                                    type="text"
                                    value={settings.primaryButtonText}
                                    onChange={(e) => updateSetting("primaryButtonText", e.target.value)}
                                    className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-wp-blue-500 focus:border-transparent"
                                />
                            </div>
                            <div className="flex-1">
                                <label className="block text-xs font-medium text-gray-700 mb-1.5">
                                    Secondary Button
                                </label>
                                <input
                                    type="text"
                                    value={settings.secondaryButtonText}
                                    onChange={(e) => updateSetting("secondaryButtonText", e.target.value)}
                                    className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-wp-blue-500 focus:border-transparent"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
