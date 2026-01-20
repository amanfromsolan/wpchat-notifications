"use client";

import { useState } from "react";
import { cn } from "@/app/lib/cn";
import {
    MdSettings,
    MdClose,
    MdAdd,
    MdRemove,
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
    MdTune,
    MdPalette,
    MdImage,
    MdTitle,
    MdNotes,
    MdSmartButton,
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

type ExpandedField = "heading" | "subtext" | "primaryButtonText" | "secondaryButtonText" | null;

export function NotificationControls({
    notifications,
    selectedIndex,
    onSelectIndex,
    onChange
}: NotificationControlsProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [isIconPickerOpen, setIsIconPickerOpen] = useState(false);
    const [isPresetOpen, setIsPresetOpen] = useState(false);
    const [expandedField, setExpandedField] = useState<ExpandedField>(null);
    const [selectedPreset, setSelectedPreset] = useState<NotificationPresetKey>("welcome");

    const settings = notifications[selectedIndex] || NOTIFICATION_PRESETS.welcome;

    const toggleField = (field: ExpandedField) => {
        setExpandedField(expandedField === field ? null : field);
    };

    const updateSetting = <K extends keyof NotificationSettings>(
        key: K,
        value: NotificationSettings[K]
    ) => {
        const updated = [...notifications];
        updated[selectedIndex] = { ...settings, [key]: value };
        onChange(updated);
    };

    const applyPreset = (presetKey: NotificationPresetKey) => {
        setSelectedPreset(presetKey);
        const updated = [...notifications];
        updated[selectedIndex] = NOTIFICATION_PRESETS[presetKey];
        onChange(updated);
        setIsPresetOpen(false);
    };

    const addNotification = () => {
        if (notifications.length < 3) {
            onChange([...notifications, NOTIFICATION_PRESETS.welcome]);
            onSelectIndex(notifications.length);
        }
    };

    const removeNotification = (index: number) => {
        if (notifications.length > 1) {
            const updated = notifications.filter((_, i) => i !== index);
            onChange(updated);
            if (selectedIndex >= updated.length) {
                onSelectIndex(updated.length - 1);
            }
        }
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

                    <div className="max-h-[70vh] overflow-y-auto divide-y divide-gray-100">
                        {/* Notification Selector */}
                        <div className="px-5 h-12 flex items-center">
                            <div className="w-full flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <MdNotifications className="size-4 text-gray-400" />
                                    <span className="text-sm font-medium text-gray-700">Notification</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    {notifications.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => onSelectIndex(index)}
                                            className={cn(
                                                "size-7 rounded-md flex items-center justify-center text-xs font-medium transition-colors",
                                                selectedIndex === index
                                                    ? "bg-wp-blue-500 text-white"
                                                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                            )}
                                        >
                                            {index + 1}
                                        </button>
                                    ))}
                                    {notifications.length < 3 && (
                                        <button
                                            onClick={addNotification}
                                            className="size-7 rounded-md flex items-center justify-center bg-gray-100 text-gray-500 hover:bg-gray-200 transition-colors"
                                            title="Add notification"
                                        >
                                            <MdAdd className="size-4" />
                                        </button>
                                    )}
                                    {notifications.length > 1 && (
                                        <button
                                            onClick={() => removeNotification(selectedIndex)}
                                            className="size-7 rounded-md flex items-center justify-center bg-red-50 text-red-500 hover:bg-red-100 transition-colors"
                                            title="Remove current notification"
                                        >
                                            <MdRemove className="size-4" />
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Preset - Dropdown */}
                        <div className="px-5 h-12 flex items-center relative">
                            <button
                                onClick={() => setIsPresetOpen(!isPresetOpen)}
                                className="w-full flex items-center justify-between"
                            >
                                <div className="flex items-center gap-3">
                                    <MdTune className="size-4 text-gray-400" />
                                    <span className="text-sm font-medium text-gray-700">Preset</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-sm text-gray-500 capitalize">
                                        {selectedPreset.replace(/([A-Z])/g, ' $1').trim()}
                                    </span>
                                    <MdKeyboardArrowDown className={cn(
                                        "size-4 text-gray-400 transition-transform",
                                        isPresetOpen && "rotate-180"
                                    )} />
                                </div>
                            </button>

                            {/* Preset Dropdown */}
                            {isPresetOpen && (
                                <div className="absolute top-full right-5 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10 py-1 min-w-32">
                                    {(Object.keys(NOTIFICATION_PRESETS) as NotificationPresetKey[]).map((key) => (
                                        <button
                                            key={key}
                                            onClick={() => applyPreset(key)}
                                            className={cn(
                                                "w-full px-4 py-2 text-sm text-left capitalize hover:bg-gray-50 transition-colors",
                                                selectedPreset === key && "bg-gray-50 text-wp-blue-600 font-medium"
                                            )}
                                        >
                                            {key.replace(/([A-Z])/g, ' $1').trim()}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Color */}
                        <div className="px-5 h-12 flex items-center">
                            <div className="w-full flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <MdPalette className="size-4 text-gray-400" />
                                    <span className="text-sm font-medium text-gray-700">Color</span>
                                </div>
                                <div className="flex gap-2">
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
                        </div>

                        {/* Icon */}
                        <div className="px-5 h-12 flex items-center relative">
                            <button
                                onClick={() => setIsIconPickerOpen(!isIconPickerOpen)}
                                className="w-full flex items-center justify-between"
                            >
                                <div className="flex items-center gap-3">
                                    <MdImage className="size-4 text-gray-400" />
                                    <span className="text-sm font-medium text-gray-700">Icon</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className={cn("size-7 rounded-md flex items-center justify-center", selectedColor.iconBg)}>
                                        <SelectedIcon className={cn("size-4", selectedColor.iconColor)} />
                                    </div>
                                    <MdKeyboardArrowDown className={cn(
                                        "size-4 text-gray-400 transition-transform",
                                        isIconPickerOpen && "rotate-180"
                                    )} />
                                </div>
                            </button>

                            {/* Icon Dropdown */}
                            {isIconPickerOpen && (
                                <div className="absolute top-full right-5 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10 p-3 max-h-56 overflow-y-auto w-56">
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

                        {/* Heading - Accordion */}
                        <div>
                            <button
                                onClick={() => toggleField("heading")}
                                className="w-full px-5 h-12 flex items-center justify-between hover:bg-gray-50 transition-colors"
                            >
                                <div className="flex items-center gap-3">
                                    <MdTitle className="size-4 text-gray-400" />
                                    <span className="text-sm font-medium text-gray-700">Heading</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-sm text-gray-500 truncate max-w-[180px]">
                                        {settings.heading}
                                    </span>
                                    <MdKeyboardArrowDown className={cn(
                                        "size-4 text-gray-400 transition-transform shrink-0",
                                        expandedField === "heading" && "rotate-180"
                                    )} />
                                </div>
                            </button>
                            {expandedField === "heading" && (
                                <div className="px-5 pb-3">
                                    <input
                                        type="text"
                                        value={settings.heading}
                                        onChange={(e) => updateSetting("heading", e.target.value)}
                                        className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-wp-blue-500 focus:border-transparent"
                                        autoFocus
                                    />
                                </div>
                            )}
                        </div>

                        {/* Subtext - Accordion */}
                        <div>
                            <button
                                onClick={() => toggleField("subtext")}
                                className="w-full px-5 h-12 flex items-center justify-between hover:bg-gray-50 transition-colors"
                            >
                                <div className="flex items-center gap-3">
                                    <MdNotes className="size-4 text-gray-400" />
                                    <span className="text-sm font-medium text-gray-700">Subtext</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-sm text-gray-500 truncate max-w-[180px]">
                                        {settings.subtext}
                                    </span>
                                    <MdKeyboardArrowDown className={cn(
                                        "size-4 text-gray-400 transition-transform shrink-0",
                                        expandedField === "subtext" && "rotate-180"
                                    )} />
                                </div>
                            </button>
                            {expandedField === "subtext" && (
                                <div className="px-5 pb-3">
                                    <textarea
                                        value={settings.subtext}
                                        onChange={(e) => updateSetting("subtext", e.target.value)}
                                        rows={3}
                                        className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-wp-blue-500 focus:border-transparent resize-none"
                                        autoFocus
                                    />
                                </div>
                            )}
                        </div>

                        {/* Primary Button - Accordion */}
                        <div>
                            <button
                                onClick={() => toggleField("primaryButtonText")}
                                className="w-full px-5 h-12 flex items-center justify-between hover:bg-gray-50 transition-colors"
                            >
                                <div className="flex items-center gap-3">
                                    <MdSmartButton className="size-4 text-gray-400" />
                                    <span className="text-sm font-medium text-gray-700">Primary Button</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-sm text-gray-500 truncate max-w-[180px]">
                                        {settings.primaryButtonText}
                                    </span>
                                    <MdKeyboardArrowDown className={cn(
                                        "size-4 text-gray-400 transition-transform shrink-0",
                                        expandedField === "primaryButtonText" && "rotate-180"
                                    )} />
                                </div>
                            </button>
                            {expandedField === "primaryButtonText" && (
                                <div className="px-5 pb-3">
                                    <input
                                        type="text"
                                        value={settings.primaryButtonText}
                                        onChange={(e) => updateSetting("primaryButtonText", e.target.value)}
                                        className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-wp-blue-500 focus:border-transparent"
                                        autoFocus
                                    />
                                </div>
                            )}
                        </div>

                        {/* Secondary Button - Accordion */}
                        <div>
                            <button
                                onClick={() => toggleField("secondaryButtonText")}
                                className="w-full px-5 h-12 flex items-center justify-between hover:bg-gray-50 transition-colors"
                            >
                                <div className="flex items-center gap-3">
                                    <MdSmartButton className="size-4 text-gray-400" />
                                    <span className="text-sm font-medium text-gray-700">Secondary Button</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-sm text-gray-500 truncate max-w-[180px]">
                                        {settings.secondaryButtonText}
                                    </span>
                                    <MdKeyboardArrowDown className={cn(
                                        "size-4 text-gray-400 transition-transform shrink-0",
                                        expandedField === "secondaryButtonText" && "rotate-180"
                                    )} />
                                </div>
                            </button>
                            {expandedField === "secondaryButtonText" && (
                                <div className="px-5 pb-3">
                                    <input
                                        type="text"
                                        value={settings.secondaryButtonText}
                                        onChange={(e) => updateSetting("secondaryButtonText", e.target.value)}
                                        className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-wp-blue-500 focus:border-transparent"
                                        autoFocus
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
