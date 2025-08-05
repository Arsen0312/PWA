"use client";

import * as React from "react";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { cn } from "@/lib/utils";


type TProps = {
    value: string;
    onChange: (value: string) => void;
    options: { label: string; value: string }[];
    className?: string;
}

const SegmentControl = (props: TProps)=> {
    const {
        value,
        onChange,
        options,
        className
    } = props;

    return (
        <ToggleGroup.Root
            type="single"
            value={value}
            onValueChange={(v) => v && onChange(v)}
            className={cn(
                "border border-gray-200 rounded-lg overflow-hidden flex items-center h-auto",
                className
            )}
        >
            {options.map((opt,i) => (
                <React.Fragment key={i}>
                    <ToggleGroup.Item
                        key={opt.value}
                        value={opt.value}
                        className={cn(
                            "px-4 py-2 text-base font-medium transition-colors",
                            "data-[state=on]:bg-[var(--bg-color-active-st)] data-[state=on]:text-[var(--text-active-st)]",
                            "data-[state=off]:text-[var(--text-disabled-st)]"
                        )}
                    >
                        {opt.label}
                    </ToggleGroup.Item>
                    {i !== options.length - 1 && <hr className="w-px self-stretch bg-gray-200 h-auto border-0" />}
                </React.Fragment>
            ))}
        </ToggleGroup.Root>
    );
}

export default SegmentControl;