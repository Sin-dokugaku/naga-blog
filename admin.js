function checkPassword() {
    const input = document.getElementById("adminPassword").value;
    const correctPassword = "Sinn8753"; // ← 好きなパスワードに変更可
  
    if (input === correctPassword) {
      document.getElementById("realForm").style.display = "block";
      document.getElementById("adminPassword").style.display = "none";
      event.target.style.display = "none";
      document.querySelector("h2").innerText = "ログイン成功：新しい記事を書く";
    } else {
      alert("パスワードが違います。");
    }
  }
  
  // 投稿処理（index.htmlのscript.jsと同様）
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
    articles.unshift(article);
    localStorage.setItem("blogArticles", JSON.stringify(articles));
  
    document.getElementById("titleInput").value = "";
    document.getElementById("bodyInput").value = "";
  
    alert("記事を保存しました！");
  }
  
