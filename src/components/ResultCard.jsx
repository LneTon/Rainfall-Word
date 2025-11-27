export default function ResultCard({ result }) 
{
    if (!result) return null;

    if (result.type === "weather") 
    {
        return (
        <div className="result-card">
        <h3>Rainfall Data</h3>
        <p><strong>Total rainfall:</strong> {result.value ?? "0"} mm</p>
        <p><strong>Days included:</strong> {result.days}</p>
        <p><strong>Location:</strong> {result.location.lat}, {result.location.lon}</p>
        </div>
        );
    }
    if (result.type === "image") 
    {
        return (
        <div className="result-card">
        <img src={result.url} alt="Generated" />
        </div>
        );
    }
    if (result.type === "error") 
    {
        return (
        <div className="result-card">
        <h3>Error</h3>
        <p>{result.message}</p>
        </div>
        );
    }
    return null;
}
