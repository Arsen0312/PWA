"use client";

import * as React from "react";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { cn } from "@/lib/utils";

export function SegmentControls({
                                   value,
                                   onChange,
                                   options,
                                   className
                               }: {
    value?: string;
    onChange?: (value: string) => void;
    options: { label: string; value: string }[];
    className?: string;
}) {
    return (
        <ToggleGroup.Root
            type="single"
            value={value}
            onValueChange={(v) => v && onChange?.(v)}
            className={cn(
                "inline-flex bg-muted p-0.75 rounded-full gap-0.5",
                className
            )}
        >
            {options.map((opt) => (
                <ToggleGroup.Item
                    key={opt.value}
                    value={opt.value}
                    className={cn(
                        "px-2 text-sm font-medium rounded-full transition-colors textStyle",
                        "data-[state=on]:bg-[var(--bg-color-active-sts)] data-[state=on]:text-[var(--text-active-sts)]",
                        "hover:text-red-500 data-[state=off]:text-[var(--text-disabled-sts)] ",
                    )}
                >
                    {opt.label}
                </ToggleGroup.Item>
            ))}
        </ToggleGroup.Root>
    );
}
