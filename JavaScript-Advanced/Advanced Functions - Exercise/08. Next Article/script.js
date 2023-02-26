function getArticleGenerator(articles) {
  const content = document.getElementById("content");

  return function showNextArticle() {
    if (articles.length > 0) {
      const currentElement = document.createElement("article");
      currentElement.textContent = articles.shift();
      content.appendChild(currentElement);
    }
  };
}
