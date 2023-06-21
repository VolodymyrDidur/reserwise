import { useState, useEffect } from 'react';
import { OpenStreetMapProvider } from 'leaflet-geosearch';

const geosearchProvider = new OpenStreetMapProvider();

export const useSearchLocation = (address) => {
    const [location, setLocation] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const searchLocation = async () => {
            setIsLoading(true);
            try {
                const results = await geosearchProvider.search({query: address});
                if (results.length > 0) {
                    const {x, y} = results[0];
                    setLocation([y, x]);
                }
            } catch (error) {
                console.error('Error searching location:', error);
            } finally {
                setIsLoading(false);
            }
        };

        searchLocation();
    }, [address]);

    return {location, isLoading};
};
