const { GoogleGenAI } = require("@google/genai");
const fs = require("fs");

// Create a new instance of the GoogleGenAI class
const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
});

const base64ImageFile = fs.readFileSync("/path/to/image.jpg", {
  encoding: "base64",
});

async function generateCaption(base64ImageFile) {

  const contents = [
    {
      inlineData: {
        mimeType: "image/jpeg",
        data: base64ImageFile,
      },
    },
    { text: "Caption this image." },
  ];

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: contents,
  });

  console.log(response.text);

}

generateCaption(base64ImageFile);

