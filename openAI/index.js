import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openAI = new OpenAIApi(configuration);

const dallE = async (req, res) => {
  const { prompt } = req.body;
  const { IMAGE_SIZE: imageSize, NUMBER_OF_IMAGES: numberOfImages } =
    process.env;
  try {
    const response = await openAI.createImage({
      prompt,
      n: parseInt(numberOfImages, 10),
      size: imageSize,
    });

    const imageUrl = response.data.data[0].url;

    res.status(200).json({ success: true, data: imageUrl });
  } catch (error) {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
    } else {
      console.log(error.message);
    }

    res.status(400).json({
      success: false,
      error: 'The image could not be generated',
    });
  }
};

const chatGPT = (req, res) => {
  const { prompt } = req.body;
  const completion = openAI.createChatCompletion({
    model: 'gpt-3.5-turbo',
    message: [{ role: 'user', content: 'Hi' }],
  });
  console.log('😎 Sylitas | completion : ', completion);
};

export { dallE, chatGPT };
