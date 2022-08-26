//Code adapted from Week 5 Practical Activity 1 'repository.js'

import { assignPostToUser } from "./Repository";

const POSTS_KEY = "posts";
const CLIENT_ID = "a04a026525fb2e4";
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
  uploadImage(post)

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

  const posts = getPosts();

  posts[id].content = "[deleted]";
  posts[id].userId = "[deleted]";
  setPosts(posts);
}

function uploadImage(post) {
  var headers = new Headers();
  headers.append("Authorization", "Client-ID " + CLIENT_ID );

  var formdata = new FormData();
  formdata.append("image", post.image);

  console.log(post.image)
  var requestOptions = {
    method: "POST",
    headers: headers,
    body: formdata,
    redirect: "follow",
  };

  fetch("https://api.imgur.com/3/upload", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
}

function getNewID() {
  return crypto.randomUUID();
}

export { initPosts, getPosts, insertPost, deletePost };
// image uploading code adapted from https://apidocs.imgur.com/
