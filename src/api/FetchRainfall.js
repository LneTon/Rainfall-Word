export async function FetchRainfall(mode) 
{
    const { lat, lon } = await getLocation();
    const resp = await fetch(`https://rainfall-words-server-production.up.railway.app?lat=${lat}&lon=${lon}&mode=${mode}`);
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
        navigator.geolocation.getCurrentPosition
        (
            (pos) => 
            {
                resolve
                ({
                    lat: pos.coords.latitude,
                    lon: pos.coords.longitude
                });
            },
            () => 
            { 
                resolve 
                ({
                    lat: 51.2133,
                    lon: 13.2320
                });
            }
        );
    });
}