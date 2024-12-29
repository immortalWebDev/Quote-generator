const quoteText = document.getElementById("quoteText");
let quotes = [];
async function fetchQuotes() {
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
    // console.log("Quotes loaded:", quotes);
  } catch (error) {
    quoteText.textContent = "Error loading quotes.";

    console.error("Failed to fetch quotes data:", error);
  }
}

//Display random one
function generateQuote() {
  if (quotes.length === 0) {
    console.log("Loading quotes...");
    quoteText.textContent = "Fetching fresh quote...";
    return;
  }
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteText.textContent = quotes[randomIndex].text || "No quote found";

  const quote = quotes[randomIndex];
  document.getElementById("quoteText").textContent = `"${quote.text}"`;
  document.getElementById("authorText").textContent = `- ${quote.author}`;
}

// Fetch the quotes once the page is loaded
window.addEventListener("load", async () => {
  await fetchQuotes();
});
