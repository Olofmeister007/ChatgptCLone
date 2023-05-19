const express = require("express");
const app = express();
// const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require('cors')

dotenv.config();

app.use(cors());

// const { Configuration, OpenAIApi } = require("openai");



// const configuration = new Configuration({
//     organization: "org-AgT8nU3P0u4TJ8gs3LKMPpwI",
//     apiKey: process.env.OPENAI_API_KEY,
// });
// const openai = new OpenAIApi(configuration);

const Api = "sk-I";

app.post("/completion", async (req, res) => {
  const options = {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${Api}`,
      "Content-Type": "application/json",
      
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{role: "user", content:req.body.message}],
      max_tokens: 100,
    })
  }
  try{
      const response = await fetch("https://api.openai.com/v1/chat/completions",options);
      const data = await response.json();
      res.send(data);
  }
  catch(err){
    console.log(err);
  }
})
// app.post("/flexText", async(req, res) => {

//   try{
//     const response = await openai.createCompletion({
//       "model": "gpt-3.5-turbo",
//       "messages": [{"role": "user", "content": "Hello!"}]
//     });

//     return res.status(200).json({
//       message: "Working"
//     })
//   }
//   catch(err){

//   }
// });




// mongoose
//   .connect(process.env.MONGO_URL)
//   .then(() => console.log("DB Connection Successfull!"))
//   .catch((err) => {
//     console.log(err);
//   });





app.use(express.json());


app.listen(5001, () => {
  console.log("Backend server is running!");
});