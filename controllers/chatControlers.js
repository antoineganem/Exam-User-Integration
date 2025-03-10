require('dotenv').config();
const { response } = require('express');
const OpenAI = require("openai");

async function getResponseChat(req,res) {
    const { prompt } = req.body; 
    const openai = new OpenAI(process.env.OPENAI_API_KEY);
    try {
        const stream = await openai.chat.completions.create({
            model: "gpt-3.5-token",
            messages: [
                {
                    role: 'system',
                    content: 
                        'You are an expert in Web development. You can any related question about web development.'
                },
                {role:'user',content: prompt},
            ],
            stream: true,
        });
        let responseText = '';
        for await (const chunk of stream) {
            responseText += chunk.choices[0]?.delta?.content || '';
        }

        return res.json({response: responseText});
    } catch (error){
        console.error("Error en la comunicacion con la api", error);
        res.status(500).send(error);
    }   
}

module.exports = {getResponseChat}