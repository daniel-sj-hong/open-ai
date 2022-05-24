// import 'dotenv/config';
import { useState, useEffect } from "react";
// const key = process.env.REACT_APP_API_KEY;
const { Configuration, OpenAIApi } = require("openai");

function App() {

  const [data, setData] = useState('')
  // console.log('key: ', key);

  useEffect(() => {
    const configuration = new Configuration({
      apiKey: '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',
    });
    const openai = new OpenAIApi(configuration);

    openai.createCompletion("text-ada-001", {
      prompt: "The following is a conversation with an AI assistant. The assistant is helpful, creative, clever, and very friendly.\n\nHuman: Hello, who are you?\nAI: I am an AI created by OpenAI. How can I help you today?\nHuman: ",
      temperature: 0.9,
      max_tokens: 150,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0.6,
      stop: [" Human:", " AI:"],
    })
    .then(res => {
      console.log('res: ', res);
      setData(res.data);
    })
  }, [])

  if (data === '') {
    return (
      <div>
        <p>hello</p>
      </div>
    );
  } else {
    return (
      <div>
        <p>{data.choices[0].text}</p>
      </div>
    )

  }
}

export default App;
