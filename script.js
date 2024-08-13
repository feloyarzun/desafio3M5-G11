async function getPosts() {
  try {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();
    const postDataDiv = document.getElementById('post-data');
    
    const ul = document.createElement('ul');
    
    posts.forEach(post => {
      const li = document.createElement('li');
      const title = document.createElement('strong');
      title.textContent = post.title;
      const content = document.createElement('p');
      content.textContent = post.body;

      li.appendChild(title);
      li.appendChild(content);
      ul.appendChild(li);
    });

    postDataDiv.innerHTML = '';
    postDataDiv.appendChild(ul);

  } catch (error) {
    postDataDiv.innerHTML = `Ocurrio un error: ${error.message}</p>`;
  }
}