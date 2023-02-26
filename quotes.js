const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');
const circleBtn = document.querySelector('.circleBtn');

let l = 0;

async function getQuotes() {  
  const quotes = 'quotes.json';
  const res = await fetch(quotes);
  const data = await res.json();
  quoteText.textContent = `" ${data[l].text} "`;
  quoteAuthor.textContent = data[l].author;
}
getQuotes();

circleBtn.addEventListener('click', () => {
  l > 3 ? l = 0 : l++;
  console.log(l);
  getQuotes();
})
