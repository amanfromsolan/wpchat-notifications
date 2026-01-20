"use client";

import { ReactNode } from "react";
import { cn } from "@/app/lib/cn";
import { PrimaryButton, SecondaryButton } from "./Button";

interface NotificationProps {
    icon?: ReactNode;
    heading: string;
    subtext: string;
    primaryButtonText: string;
    secondaryButtonText: string;
    onPrimaryClick?: () => void;
    onSecondaryClick?: () => void;
    className?: string;
}

export const Notification = ({
    icon,
    heading,
    subtext,
    primaryButtonText,
    secondaryButtonText,
    onPrimaryClick,
    onSecondaryClick,
    className,
}: NotificationProps) => {
    return (
        <div className={cn("flex justify-center px-4 py-4", className)}>
            <div className="w-full max-w-3xl bg-white rounded-lg border border-black/10 shadow-lg p-5">
                <div className="flex gap-4">
                    {/* Icon placeholder */}
                    <div className="shrink-0">
                        {icon || (
                            <div className="size-12 rounded-full bg-wp-blue-100 flex items-center justify-center">
                                <div className="size-6 rounded-full bg-wp-blue-400" />
                            </div>
                        )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                        <h3 className="text-base font-semibold text-gray-900 mb-1">
                            {heading}
                        </h3>
                        <p className="text-sm text-gray-600 mb-4">
                            {subtext}
                        </p>
                        <div className="flex gap-3">
                            <PrimaryButton onClick={onPrimaryClick}>
                                {primaryButtonText}
                            </PrimaryButton>
                            <SecondaryButton onClick={onSecondaryClick}>
                                {secondaryButtonText}
                            </SecondaryButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
