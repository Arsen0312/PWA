"use client"

import 'react-spring-bottom-sheet/dist/style.css'
import {TwoGisMap} from "@/components/TwoGisMap/TwoGisMap";
import {BottomSheet, BottomSheetRef} from "react-spring-bottom-sheet";
import DrawerContent from "@/components/DrawerContent/DrawerContent";
import React, { useRef, useState} from "react";

const Page = () => {
    const [expandOnContentDrag] = useState(true)
    const sheetRef = useRef<BottomSheetRef>(null)

    return (
        <main className="w-full h-full">
            <div className="w-full h-full">
                <TwoGisMap/>
            </div>
            <BottomSheet
                open
                skipInitialTransition
                ref={sheetRef}
                defaultSnap={({ maxHeight }) => maxHeight / 2}
                snapPoints={({ maxHeight }) => [
                    maxHeight - maxHeight / 10,
                    maxHeight / 4,
                    maxHeight * 0.6,
                ]}
                expandOnContentDrag={expandOnContentDrag}
                blocking={false}
            >
                <DrawerContent/>
            </BottomSheet>
        </main>
    );
};

export default Page;

