const express = require('express');
const cors = require('cors');
const {openai} = require('openai');
const app = express();

app.use(cors());
app.use(express.json());

// Define your OpenAI API key and model ID
const OPENAI_API_KEY = 'YOUR_API_KEY';
const MODEL_ID = 'YOUR_MODEL_ID';

// Define your API endpoint
app.post('/chat', async (req, res) => {
  const {message} = req.body;

  // Send message to OpenAI API
  const response = await openai.completions.create({
    engine: 'davinci',
    prompt: message,
    max_tokens: 50,
    n: 1,
    stop: '\n',
    temperature: 0.5,
    model: MODEL_ID,
    api_key: OPENAI_API_KEY,
  });

  res.send(response.choices[0].text.trim());
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
