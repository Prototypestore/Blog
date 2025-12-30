const params = new URLSearchParams(window.location.search);
const postId = params.get("id");

const postTitle = document.getElementById("post-title");
const postImage = document.getElementById("post-image");
const postContent = document.getElementById("post-content");

fetch("blog.json")
  .then(res => res.json())
  .then(posts => {
    const post = posts.find(p => p.id == postId);
    if (!post) {
      postTitle.textContent = "Post not found";
      return;
    }

    postTitle.textContent = post.title;
    postImage.src = post.image;
    postImage.alt = post.title;

    post.content.forEach(paragraph => {
      const p = document.createElement("p");
      p.textContent = paragraph;
      postContent.appendChild(p);
    });
  });
