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
        navigator.geolocation.getCurrentPosition
        (
            (pos) => resolve
            ({
            lat: pos.coords.latitude,
            lon: pos.coords.longitude
            }), 
            () => reject("Permission denied")
        );
    });
}