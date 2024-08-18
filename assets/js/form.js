document
  .getElementById("blogForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;
    const messageDiv = document.getElementById("message").value;

    if (!username || !title || !content) {
      messageDiv.textContent = "Please complete the form.";
      return;
    }

    const blogPost = {
      username,
      title,
      content,
    };

    let posts = JSON.parse(localStorage.getItem("posts")) || [];
    posts.push(blogPost);
    localStorage.setItem("posts", JSON.stringify(posts));

    window.location.href = "blog.html";
  });