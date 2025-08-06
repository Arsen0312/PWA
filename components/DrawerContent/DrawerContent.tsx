import React from 'react';
import Image from "next/image";
import {Input} from "@/components/ui/input";
import listIcon from "@/public/assets/list-thin.svg"
import searchIcon from "@/public/assets/searchIcon.svg"

const DrawerContent = () => {
    return (
        <div className="pl-4 pr-4 pb-4 w-full flex gap-2 items-center justify-center">
            <div className="w-full">
                <div className="w-full h-10 flex items-center justify-center gap-2">
                    <div className="w-full h-10 relative">
                        <Image src={searchIcon} alt="searchIcon" width={18} height={18} className="absolute top-[20px] left-[8px] transform -translate-y-1/2" />
                        <Input className="border-[var(--light-gray)] text-white pl-9 h-full bg-[var(--light-gray)]" placeholder="Поиск"/>
                    </div>
                    <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-[var(--light-gray)]">
                        <Image src={listIcon} alt="listIcon" width={18} height={18}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DrawerContent;