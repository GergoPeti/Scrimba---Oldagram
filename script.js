'use strict';

const postEl = document.querySelector('.post');

const posts = [
  {
    name: 'Vincent van Gogh',
    username: 'vincey1853',
    location: 'Zundert, Netherlands',
    avatar: 'images/avatar-vangogh.jpg',
    post: 'images/post-vangogh.jpg',
    comment: 'just took a few mushrooms lol',
    likes: 21,
  },
  {
    name: 'Gustave Courbet',
    username: 'gus1819',
    location: 'Ornans, France',
    avatar: 'images/avatar-courbet.jpg',
    post: 'images/post-courbet.jpg',
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: 'Joseph Ducreux',
    username: 'jd1735',
    location: 'Paris, France',
    avatar: 'images/avatar-ducreux.jpg',
    post: 'images/post-ducreux.jpg',
    comment:
      'gm friends! which coin are YOU stacking up today?? post below and WAGMI!',
    likes: 152,
  },
];

let insertPosts = '';

posts.forEach(curEl => {
  insertPosts += `<div class="posted-by">
  <img
    class="avatar-img"
    src="${curEl.avatar}"
    alt="Avator of the user, who posted"
  />
  <div class="posted-by_text">
    <p class="name">${curEl.name}</p>
    <p class="user-location">${curEl.location}</p>
  </div>
</div>
<div class="post-img_container">
  <img
    class="post-img"
    src="${curEl.post}"
    alt="Post image"
  />
</div>
<div class="icons-container">
  <img src="images/icon-heart.png" alt="Action icon" class="icon like-icon" />
  <img
    src="images/icon-comment.png"
    alt="Action icon"
    class="icon"
  />
  <img src="images/icon-dm.png" alt="Action icon" class="icon" />
</div>
<p class="like-number"><span class="like">${curEl.likes}</span> likes</p>
<p class="comment-section">
  <span class="username">${curEl.username} </span
  ><span class="comment">${curEl.comment}</span>
</p>
<div class="separator"></div>`;
});

postEl.innerHTML = insertPosts;

// Variable declaration after rendering the HTML, so we have all the elements that we need

const postImg = document.querySelectorAll('.post-img');
const likeIconEl = document.querySelectorAll('.like-icon');

const likeEl = document.querySelectorAll('.like');

const handleLikeClick = function (index) {
  posts[index].likes++;
  likeEl[index].textContent = posts[index].likes;
};

postImg.forEach((curPost, index) => {
  curPost.addEventListener('dblclick', function () {
    handleLikeClick(index);
  });
});

likeIconEl.forEach((curLike, index) => {
  curLike.addEventListener('dblclick', function () {
    handleLikeClick(index);
  });
});
