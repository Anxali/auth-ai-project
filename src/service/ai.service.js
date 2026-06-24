const { GoogleGenAI } = require("@google/genai");

// Create a new instance of the GoogleGenAI class
const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
});

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-3.5-flash",
    contents: "Explain how AI works in a few words",
  });
  console.log(response.text);
}

const base64ImageFile = fs.readFileSync("path/to/small-sample.jpg", {
  encoding: "base64",
});

function generateContent(base64ImageFile) {

const interaction = await apiKey.interactions.create({
    model: "gemini-3.5-flash",
    input: [
        {type: "text", text: "Caption this image."},
        {
            type: "image",
            data: base64ImageFile,
            mime_type: "image/jpeg"
        }
    ]
});



console.log(interaction.output_text);

}

main();