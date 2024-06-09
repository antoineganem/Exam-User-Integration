const { GoogleGenerativeAI } = require("@google/generative-ai");
require('dotenv').config();

async function getResponseChatGemini(req,res){

    
    const formattedPrompt = `You are an virtual asistant in nutrition.You can answer any related 
    question to nutrition. The answer format should not pass 700 characters as this 
    will be save in a database. Feel free to answer without hesitation as a nutritionist expert 
    will only used it as an idea.${prompt}`
    const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

    try {
        const result = await model.generateContent(formattedPrompt);
        const response = await result.response;
        const text = response.text();
        return res.json({response: text});

    } catch(error) {
        console.log(error);
    }
}

module.exports = {getResponseChatGemini};