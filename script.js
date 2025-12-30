fetch('blog.json')
    .then(res => res.json())
    .then(posts => {
        const container = document.getElementById('blog-container');
        posts.forEach(post => {
            const article = document.createElement('article');
            article.className = "blog-card";
            article.innerHTML = `
                <img src="${post.image}" alt="${post.title}">
                <div class="blog-card-content">
                    <h2>${post.title}</h2>
                    <p>${post.description}</p>
                    <button onclick="window.location.href='post.html?id=${post.id}'">Read more</button>
                </div>
            `;
            container.appendChild(article);
        });
    })
    .catch(err => console.error("Error loading posts:", err));
