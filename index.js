import express from 'express';
import path from 'path';
import { chatGPT, dallE } from './openAI';

const port = process.env.PORT;

const app = express();

// Enable body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

app.post(
  '/dallE',
  // dallE
  (req, res) =>
    res
      .status(200)
      .json({ message: "This feature is pay per use and I'm poor so ..." })
);

app.post(
  '/chatGPT',
  // chatGPT
  (req, res) =>
    res
      .status(200)
      .json({ message: "This feature is pay per use and I'm poor so ..." })
);

app.listen(parseInt(port, 10), () =>
  console.log(`Server started on port ${port}`)
);
