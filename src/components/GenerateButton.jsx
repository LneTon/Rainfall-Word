import { GenerateImage } from "../api/GenerateImage";
import { FetchRainfall } from "../api/FetchRainfall";

export default function GenerateButton({ lockedWord, setResult, setLoading }) 
{
    const handleClick = async () => 
    {
        if (!lockedWord) return;
        
        setLoading(true);
        setResult(null);

        const normalized = lockedWord.toLowerCase().trim();

        const weatherWords = 
        {
            "yesterday": "yesterday",
            "last month": "lastMonth",
            "this week": "thisWeek"
            //"100 hours ago": "100hoursago"
        };

        const weatherMode = weatherWords[normalized];

        if (weatherMode) 
        {
            try 
            {
                const weatherData = await FetchRainfall(weatherMode);
                setResult(weatherData);
            } 
            catch (err) 
            {
                setResult({ type: "error", message: "Could not get rainfall" });
            }
            setLoading(false);
            return;
        }

        try 
        {
            const output = await GenerateImage(lockedWord);
            setResult(output);
        } 
        catch (err) 
        {
            setResult({ type: "error", message: "Image generation failed" });
        }
        setLoading(false);
    };
    return (
        <button className="generate-btn" disabled={!lockedWord} onClick={handleClick}>
        SHOW
        </button>
    );
}
