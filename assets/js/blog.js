document.addEventListener("DOMContentLoaded", function () {
  const blogPosts = JSON.parse(localStorage.getItem("posts")) || [];
  const blogPostsContainer = document.getElementById("blogPosts");

  blogPosts.forEach((post) => {
    const postElement = document.createElement("div");
    postElement.className = "blog-post";
    postElement.innerHTML = `<h2>${post.title}</h2><p>${post.content}</p><small>Posted by: ${post.username}</small>`;
    blogPostsContainer.appendChild(postElement);
  });
});