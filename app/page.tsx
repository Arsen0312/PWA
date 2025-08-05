"use client"

import 'react-spring-bottom-sheet/dist/style.css'
import {TwoGisMap} from "@/components/TwoGisMap/TwoGisMap";
import {BottomSheet} from "react-spring-bottom-sheet";
import DrawerContent from "@/components/DrawerContent/DrawerContent";

const Page = () => {

    return (
        <main className="w-full h-full">
            <div className="w-full h-full">
                <TwoGisMap/>
            </div>
            <BottomSheet
                open={true}
                onDismiss={() => {}}
                snapPoints={({ maxHeight }) => [maxHeight * 0.156, maxHeight * 0.56, maxHeight * 0.932]}
                defaultSnap={({ snapPoints }) => snapPoints[3]}
                blocking={false}
                expandOnContentDrag
            >
                <DrawerContent/>
            </BottomSheet>
        </main>
    );
};

export default Page;