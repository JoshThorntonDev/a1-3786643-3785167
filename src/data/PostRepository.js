//Code adapted from Week 5 Practical Activity 1 'repository.js'

import { assignPostToUser } from "./Repository";

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

function insertPost(post, currentUser) {
  //Retrieve Posts, add new Posts to the list, and call setPosts

  if (post.content !== "") {
    let currentDate = new Date();

    post.date = currentDate.toLocaleString().split(",")[0]; // 0 makes it only the date
    post.time = currentDate.toLocaleString().split(",")[1]; // 1 makes it only the time
    const posts = getPosts();

    var id = getNewID();
    posts[id] = post;

    setPosts(posts);
    assignPostToUser(currentUser, id);
  }
}

function deletePost(id) {
  // doesnt actually delete the post, just changes the content and poster to [deleted]
  console.log("deleting post");
  const posts = getPosts();
  posts[id].content = "[deleted]";
  posts[id].userId = "[deleted]";
  setPosts(posts);
}

function getNewID() {
  return crypto.randomUUID();
}

export { initPosts, getPosts, insertPost, deletePost };
