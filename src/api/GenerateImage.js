export async function GenerateImage(word) 
{
    const response = await fetch("http://localhost:5001/generate-image", 
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
