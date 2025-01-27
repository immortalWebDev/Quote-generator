const quoteText = document.querySelector("#quoteText");
const generateButton = document.querySelector(".generate-button");

let quotes = [];

document.addEventListener("click", generateQuote);

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
  generateButton.textContent = "Get another";
}

async function fetchQuotes() {
  placeholderShow();

  const cached = localStorage.getItem("quotesFromRender");
  // console.log(cached)
  if (cached) {
    quotes = JSON.parse(cached);
    // console.log("used cached");
    generateQuote();
  } else {
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
      // console.log("fetched new and set LS");
      localStorage.setItem("quotesFromRender", JSON.stringify(data));
      generateQuote();
    } catch (error) {
      quoteText.textContent = "Error loading quotes.";

      console.error("Failed to fetch quotes data:", error);
    }
  }
}

// Fetch the quotes first
fetchQuotes();
