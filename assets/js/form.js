document.addEventListener("DOMContentLoaded", function() {
    const blogForm = document.getElementById("blog-form");
    if (!blogForm) {
        console.log("Form not found");
        return;
    }

    blogForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission
	
	 // Get form input values
        const username = document.getElementById("username").value.trim();
        const title = document.getElementById("title").value.trim();
        const content = document.getElementById("content").value.trim();
	
	 // Check form input values
        if (!username || !title || !content) {
            alert("Invalid Data! Please fill all fields");
            return;
        }

        const post = { username, title, content }; // Create a blog post object from the form input values
        const posts = JSON.parse(localStorage.getItem("posts")) || []; // Check if localStorage already has posts data
        posts.push(post);  // Add the new post to the posts array
        localStorage.setItem("posts", JSON.stringify(posts));  // Store the updated posts array in localStorage

        window.location.href = "blog.html"; // Redirect to the blog page
    });
});