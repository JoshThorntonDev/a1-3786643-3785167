//Code adapted from Week 5 Practical Activity 1 'repository.js'


const POSTS_KEY = "posts";

function initPosts() {
  if (localStorage.getItem(POSTS_KEY) !== null) return;

  //Create empty Posts object if it doesn't already exist
  setPosts({});
}

function getPosts() {
  //Retrieve all Posts from LocalStorage
  return JSON.parse(localStorage.getItem(POSTS_KEY));
}

function setPosts(posts) {
  //Set all Posts to localStorage
  localStorage.setItem(POSTS_KEY, JSON.stringify(posts));
}

function insertPost(post) {
  //Retrieve Posts, add new Posts to the list, and call setPosts

  if (post.content !== "") {
    let currentDate = new Date();

    post.date = currentDate.toDateString()
    post.time = currentDate.getHours() + ":" + currentDate.getMinutes();
    const posts = getPosts();

    posts[getNewID()] = post;

    setPosts(posts);
  }
}



function getNewID() {
  return crypto.randomUUID();
}

export { initPosts, getPosts, insertPost};
