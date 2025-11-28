import FormData from "form-data";

const form = new FormData();
form.append("text", prompt);

const response = await fetch("https://api.deepai.org/api/text2img", 
{
    method: "POST",
    headers: 
    {
        "api-key": process.env.DEEPAI_KEY
    },
    body: form
    
});
