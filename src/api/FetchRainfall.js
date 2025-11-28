export async function FetchRainfall(mode) 
{
    const { lat, lon } = await getLocation();
    const resp = await fetch(`https://rainfall-words-server-production.up.railway.app/api/rainfall?lat=${lat}&lon=${lon}&mode=${mode}`);
    const data = await resp.json();

    return {
        type: "weather",
        value: data.rainfall,
        days: data.days,
        location: 
        {
            lat,
            lon
        }
    };
}

function getLocation() 
{
    return new Promise((resolve, reject) => 
    {
        if (!navigator.geolocation) 
        {
                return resolve ({
                lat:52.5200, 
                lon: 13.4050
            });
        }
        
        const options = 
        {
            enableHighAccuracy: true, 
            timeout: 5000, 
            maximumAge: 0
        };

        navigator.geolocation.getCurrentPosition 
        (
            (pos) => 
            {
                resolve
                ({
                    lat: pos.coords.latitute,
                    lon: pos.coords.longitute
                });
            },
            (err) => 
            {
                console.warn("Geolocation failed:", err);
                resolve 
                ({
                    lat:52.5200, 
                    lon:13.4050
                });
            },
            options
        );
    });
}