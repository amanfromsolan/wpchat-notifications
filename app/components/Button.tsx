"use client";

import { ReactNode } from "react";
import { cn } from "@/app/lib/cn";

interface ButtonProps {
    children: ReactNode;
    onClick?: () => void;
    icon?: React.ComponentType<{ className?: string }>;
    variant?: "primary" | "secondary";
    className?: string;
    disabled?: boolean;
}

const baseStyles = cn(
    "flex cursor-pointer items-center justify-center gap-1.5",
    "rounded-md border px-3 py-2 text-center text-sm font-semibold antialiased",
    "shadow inset-shadow-2xs outline-0 outline-offset-0 outline-sky-300/40 outline-solid",
    "transition-all hover:scale-102 focus-visible:outline-4 active:scale-98",
);

const primaryStyles = cn(
    "border-wp-blue-500 bg-wp-blue-500 text-white text-shadow-2xs",
    "shadow-wp-blue-800/30 inset-shadow-white/20",
    "hover:border-wp-blue-600 hover:bg-wp-blue-600 hover:shadow-wp-blue-800/20",
    "active:shadow-none active:inset-shadow-xs active:inset-shadow-black/30",
);

const secondaryStyles = cn(
    "border-black/10 bg-gray-50 text-gray-900",
    "shadow-black/10 inset-shadow-white",
    "hover:bg-gray-100",
    "active:shadow-none active:inset-shadow-black/5",
);

export const Button = ({
    children,
    onClick,
    icon: Icon,
    variant = "secondary",
    className,
    disabled,
}: ButtonProps) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={cn(
                baseStyles,
                variant === "primary" ? primaryStyles : secondaryStyles,
                className,
            )}
        >
            {Icon && <Icon className="size-[1.2em]" />}
            {children}
        </button>
    );
};

export const PrimaryButton = (props: Omit<ButtonProps, "variant">) => (
    <Button {...props} variant="primary" />
);

export const SecondaryButton = (props: Omit<ButtonProps, "variant">) => (
    <Button {...props} variant="secondary" />
);
