export async function GenerateImage(word) 
{
    const response = await fetch("https://rainfall-words-server-production.up.railway.app/generate-image", 
    {
        method: "POST",
        headers: 
        {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ word })
    });
    const data = await response.json();
    return data;
}
