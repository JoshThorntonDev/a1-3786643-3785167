//Code adapted from Week 5 Practical Activity 1 'repository.js'

// this file includes functions that read and write to posts in storage

import { assignPostToUser, getUser } from "./Repository";

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
    post.postId = id; // also store id inside post so we can safely store them in arrays without losing their id
    posts[id] = post;

    setPosts(posts);
    assignPostToUser(currentUser, id);
  }
}

function updatePost(post) {
  //Retrieve Posts, update a post , and call setPosts

  if (post.content !== "") {
    let currentDate = new Date();

    post.date = currentDate.toLocaleString().split(",")[0]; // 0 makes it only the date
    post.time = currentDate.toLocaleString().split(",")[1]; // 1 makes it only the time
    const posts = getPosts();

    posts[post.postId] = post;

    setPosts(posts);
  }
}

function getPost(id) {
  //return a single post
  const posts = getPosts();

  return posts[id];
}

function deletePost(id) {
  // doesnt actually delete the post, just changes the content and poster to [deleted]

  const posts = getPosts();

  posts[id].content = "[deleted]";
  posts[id].userId = "[deleted]";
  posts[id].image = "[deleted]";
  setPosts(posts);
}

function getAllPostsByUser(userid) {
  // returns all posts made by userid, except ones that have been marked as deleted
  var postids = getUser(userid).posts;
  var posts = [];

  postids.forEach((i) => {
    var post = getPost(i);
    if (post.userId !== "[deleted]") {
      // when a post is deleted, the user's account still keeps the id stored in case its needed, (eg for reporting)
      // so we check if the post has been "deleted" before sending it back
      posts.push(post);
    }
  });

  return posts;
}

function getNewID() {
  return crypto.randomUUID();
}

export {
  initPosts,
  getPosts,
  insertPost,
  deletePost,
  updatePost,
  getPost,
  getAllPostsByUser,
};
