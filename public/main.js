async function fetchNews() {
  const url = `https://newsapi.org/v2/everything?q=apple&from=2021-04-30&to=2021-04-30&page=1&pageSize=20&sortBy=popularity&apikey=${yourAPIkey}`;
  const res = await fetch(url);
  const data = await res.json();
  [...document.getElementsByClassName("news")].forEach((post, i) => {
    post.innerHTML = ` 
      <h2>${data.articles[i].title}</h2>
      <p>${data.articles[i].description}</p>
      <span>This is "news" according to Social Media.</span>
    `;
  });
}

fetchNews();
