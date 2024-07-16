const apiKey = process.env.NEWS_API_KEY;
const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

async function fetchNews() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    // TODO: Add a function call to display the news
    displayNews(data.articles);
  } catch (error) {
    console.error("There was an error!", error);
  }
}

function displayNews(articles) {
  const newsDiv = document.querySelector("#news");
  for (const article of articles) {
    console.log(article);
    const articleDiv = document.createElement("a");
    articleDiv.style.display = "block";
    articleDiv.href = article.url;
    articleDiv.classList.add("card");
    articleDiv.style.width = "18rem";
    articleDiv.style.padding = "10px";
    articleDiv.style.textDecoration = "none";
    const articleBody = document.createElement("div");
    const articleImg = document.createElement("img");
    articleImg.classList.add("card-img-top");
    articleImg.src = article.urlToImage;
    articleBody.classList.add("card-body");
    articleDiv.appendChild(articleBody);
    articleBody.appendChild(articleImg);
    //create and append a headline to the articleDiv

    const title = document.createElement("h5");
    title.textContent = article.title;
    title.classList.add("card-title");
    articleDiv.appendChild(title);

    // TODO: Use document.createElement and appendChild to create and append more elements

    newsDiv.appendChild(articleDiv);
  }
}
fetchNews();
