// netlify/functions/get-gemini-key.js
export const handler = async () => {
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ key: process.env.GEMINI_API_KEY }),
  };
};