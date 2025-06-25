const container = document.getElementById('blog-container');

blogPosts.forEach(post => {
  fetch(post.file)
    .then(response => response.text())
    .then(data => {
      const card = document.createElement('div');
      card.className = 'col-md-4';
      card.innerHTML = `
        <div class="card h-100">
          <div class="card-body">
            <h5 class="card-title">${post.title}</h5>
            <p class="card-text"><small class="text-muted">${post.date} · ${post.category}</small></p>
            <div class="card-text mb-2" style="max-height: 100px; overflow: hidden;">
              ${marked.parse(data.substring(0, 300))}...
            </div>
            <a href="${post.file}" class="btn btn-outline-primary btn-sm" target="_blank">Read Full</a>
          </div>
        </div>
      `;
      container.appendChild(card);
    });
});
