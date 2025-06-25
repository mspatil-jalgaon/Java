// Get ?post=1 from URL
const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get('post');

if (postId) {
  fetch(`posts/post${postId}.md`)
    .then(response => {
      if (!response.ok) throw new Error("Post not found");
      return response.text();
    })
    .then(markdown => {
      document.getElementById('post-content').innerHTML = marked.parse(markdown);
    })
    .catch(err => {
      document.getElementById('post-content').innerHTML = `<p>Post not found.</p>`;
    });
} else {
  document.getElementById('post-content').innerHTML = `<p>No post specified.</p>`;
}
