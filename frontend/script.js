const quoteText = document.querySelector("#quoteText");
const generateButton = document.querySelector(".generate-button");

let quotes = [];

// Array of placeholder messages
const placeholders = [
  "Loading some inspiration...",
  "Fetching pearls of wisdom...",
  "Hang tight, a great quote is coming!",
  "Searching for a gem of a quote...",
  "Patience is the key to greatness. Wait a moment!",
];

function placeholderShow() {
  if (quotes.length === 0) {
    const randomIndex = Math.floor(Math.random() * placeholders.length);
    quoteText.textContent = placeholders[randomIndex];
    generateButton.style.display = "none";
  }
}

//Display random one
function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];
  quoteText.textContent = `"${quote.text}"`;
  document.getElementById("authorText").textContent = `- ${quote.author}`;
  generateButton.style.display = "inline-block";
}

async function fetchQuotes() {
  placeholderShow();
  try {
    // const response = await fetch("http://localhost:3000/api/quotes");
    const response = await fetch(
      "https://quote-generator-backend-hrnf.onrender.com/api/quotes"
    );

    const data = await response.json();

    if (!response.ok) {
      throw Error("Failed to fetch!");
    }

    //Works like state
    quotes = data;
    generateQuote();
  } catch (error) {
    quoteText.textContent = "Error loading quotes.";

    console.error("Failed to fetch quotes data:", error);
  }
}

// Fetch the quotes once the page is loaded
window.addEventListener("load", fetchQuotes);
