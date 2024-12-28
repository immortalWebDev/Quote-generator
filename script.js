async function fetchQuotes() {
  try {
    const response = await fetch(
      "https://cdn.jsdelivr.net/gh/immortalWebDev/my-cdn@29b104eaa7e29a665a1b5924ff43a8bc7a6f9259/quotes-generator/quotes.json"
    );

    const data = await response.json(); 

    if (!response.ok) {
      throw Error("Failed to fetch!");
    }

    //Works like state
    quotes = data;
  } catch (error) {
    console.error("Failed to fetch quotes data:", error);
  }
}

//Display random one
function generateQuote() {
  if (quotes.length === 0) {
    console.error("Quotes are not loaded yet.");
    return;
  }
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];
  document.getElementById("quoteText").textContent = `"${quote.text}"`;
  document.getElementById("authorText").textContent = `- ${quote.author}`;
}

// Fetch the quotes once the page is loaded
window.addEventListener("load", async () => {
  await fetchQuotes();
});
