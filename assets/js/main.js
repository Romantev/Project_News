const apiKey = "60d4e59472554c998b4735798aedb225";
const output = document.querySelector(".output");
let html = "";

//! Function for Search
document.querySelector(".search").addEventListener("click", () => {
  const inputText = document.querySelector("#input-text").value;
  const inputTime = document.querySelector("#input-time").value;
  const inputSort = document.querySelector("#sort").value;
  const inputLanguage = document.querySelector("#language").value;
  const actualTime = new Date().toISOString();
  output.innerHTML = "";

  fetch(
    `https://newsapi.org/v2/everything?q=${inputText}&from=${inputTime}&to=${actualTime}&language=${inputLanguage}&sortBy=${inputSort}&pageSize=20&apiKey=${apiKey}`
  ).then((res) => {
    res
      .json()
      .then((data) => {
        //! Data
        data.articles.forEach((article) => {
          const source = article.source.name;
          const author = article.author;
          const title = article.title;
          const description = article.description;
          const url = article.url;
          const publishedAt = article.publishedAt;
          const content = article.content;
          const image = article.urlToImage != null ? article.urlToImage : "";

          //! Import to HTML
          if (image == "") {
            html = `<article>
                      <div class="title">
                      <h2>${title}</h2>
                      <h3>"${source}"</h3>
                      <div class="description">
                      </div>
                      <p class="content">${content}</p>
                      <div class="source">
                      </div>
                      <h3 class="author">${author}</h3>
                      <h4>${publishedAt}</h4>
                      <a href="${url}">Quelle</a>
                      </div>
                      </article>`;
          } else {
            html = `<article>
                        <div class="title">
                        <h2>${title}</h2>
                        <h3>"${source}"</h3>
                        <img src="${image}" alt="${title}">
                        <div class="description">
                        </div>
                        <p class="content">${content}</p>
                        <div class="source">
                        </div>
                        <h3 class="author">${author}</h3>
                        <h4>${publishedAt}</h4>
                        <a href="${url}">Quelle</a>
                        </div>
                        </article>`;
          }

          output.innerHTML += html;
        });
      })
      .catch((error) => console.log("Fehler: " + error));
  });
});

//! Function for Top Headlines
document.querySelector(".top-headlines").addEventListener("click", () => {
  const inputCountry = document.querySelector("#country").value;
  const inputCategory = document.querySelector("#category").value;
  output.innerHTML = "";

  fetch(
    `https://newsapi.org/v2/top-headlines?country=${inputCountry}&category=${inputCategory}&apiKey=${apiKey}`
  ).then((res) => {
    res
      .json()
      .then((data) => {
        console.log(data);

        //! Data
        data.articles.forEach((article) => {
          const source = article.source.name;
          const author = article.author;
          const title = article.title;
          const description = article.description;
          const url = article.url;
          const publishedAt = article.publishedAt;
          const content = article.content != null ? article.content : "";
          const image = article.urlToImage != null ? article.urlToImage : "";

          //! Import to HTML
          if (image == "") {
            html = `<article>
                              <div class="title">
                              <h2>${title}</h2>
                              <h3>"${source}"</h3>
                              <div class="description">
                              </div>
                              <p class="content">${content}</p>
                              <div class="source">
                              </div>
                              <h3 class="author">${author}</h3>
                              <h4>${publishedAt}</h4>
                              <a href="${url}">Quelle</a>
                              </div>
                              </article>`;
          } else {
            html = `<article>
                                <div class="title">
                                <h2>${title}</h2>
                                <h3>"${source}"</h3>
                                <img src="${image}" alt="${title}">
                                <div class="description">
                                </div>
                                <p class="content">${content}</p>
                                <div class="source">
                                </div>
                                <h3 class="author">${author}</h3>
                                <h4>${publishedAt}</h4>
                                <a href="${url}">Quelle</a>
                                </div>
                                </article>`;
          }

          output.innerHTML += html;
        });
      })
      .catch((error) => console.log("Fehler: " + error));
  });
});
