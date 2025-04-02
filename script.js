// Array of quotes
const quotes = [
    {
      quote: "The only limit to our realization of tomorrow is our doubts of today.",
      author: "Franklin D. Roosevelt"
    },
    {
      quote: "Do what you can, with what you have, where you are.",
      author: "Theodore Roosevelt"
    },
    {
      quote: "The best way to predict the future is to invent it.",
      author: "Alan Kay"
    },
    {
      quote: "Life is 10% what happens to us and 90% how we react to it.",
      author: "Charles R. Swindoll"
    },
    {
      quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      author: "Winston Churchill"
    },
    {
        quote:"To live is the rarest thing in the world. Most people exist, that is all.",
        author:"Oscar Wilde"
    },
    {
        quote:"It is never too late to be what you might have been.",
        author:"George Eliot",
    },
]
  // DOM Elements
const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");
const generateBtn = document.getElementById("generate-btn");

// Function to generate a random quote
function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  quoteElement.textContent = randomQuote.quote;
  authorElement.textContent = `- ${randomQuote.author}`;
}

// Event Listener for the button
generateBtn.addEventListener("click", generateQuote);

// Generate a quote on page load
generateQuote();

  async function fetchQuote() {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    quoteElement.textContent = data.content;
    authorElement.textContent = `- ${data.author}`;
  }