// 保存処理
function saveArticle() {
    const title = document.getElementById("titleInput").value.trim();
    const body = document.getElementById("bodyInput").value.trim();
  
    if (!title || !body) {
      alert("タイトルと本文を入力してください。");
      return;
    }
  
    const article = {
      title,
      body,
      date: new Date().toLocaleString()
    };
  
    let articles = JSON.parse(localStorage.getItem("blogArticles")) || [];
    articles.unshift(article); // 新しい記事を先頭に
    localStorage.setItem("blogArticles", JSON.stringify(articles));
  
    document.getElementById("titleInput").value = "";
    document.getElementById("bodyInput").value = "";
  
    displayArticles();
  }
  
  // 表示処理
  function displayArticles() {
    const articleList = document.getElementById("articleList");
    articleList.innerHTML = "";
  
    const articles = JSON.parse(localStorage.getItem("blogArticles")) || [];
  
    articles.forEach(article => {
      const card = document.createElement("div");
      card.className = "article-card";
      card.innerHTML = `
        <h2>${article.title}</h2>
        <p>${article.body}</p>
        <small>${article.date}</small>
      `;
      articleList.appendChild(card);
    });
  }
  
  // 初回読み込み時に表示
  window.onload = displayArticles;
  
