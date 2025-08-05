import { load } from '@2gis/mapgl';
import { useEffect } from "react";
import MapWrapper from "@/components/TwoGisMap/MapWrapper";
import { Map } from "@2gis/mapgl/global";

export const TwoGisMap = () => {
    useEffect(() => {
        let map: Map | null = null;
        load().then((mapglAPI) => {
            map = new mapglAPI.Map('map-container', {
                center: [74.6122, 42.8746],
                zoom: 13,
                key: process.env.twoGisApiKey,
                style: "e05ac437-fcc2-4845-ad74-b1de9ce07555"
            });
        });

        return () => {
            if (map) {
                map.destroy();
            }
        };
    }, []);

    return (
        <div style={{ width: '100%', height: '100%' }}>
            <MapWrapper />
        </div>
    );
};
