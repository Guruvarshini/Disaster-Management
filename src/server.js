const express=require("express");
require('dotenv').config();
const cors=require("cors");
const bodyParser=require("body-parser");
const {OpenAI}=require("openai");

const app=express();
app.use(bodyParser.json());
app.use(cors());
const openai=new OpenAI({
    apiKey:process.env.CHATBOT_KEY,
});
app.post("/chat",async(req,res)=>{
    const {prompt}=req.body;
    const completion = await openai.completions.create({
        model: "text-davinci-003",
        prompt: prompt,
        max_tokens: 2048,
      });
    res.send(completion.choices[0].text);
});

const port=5555;
app.listen(port,()=>{
    console.log('Server is listening on port ${port}');
});