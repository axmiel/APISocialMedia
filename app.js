/*TWITTER CLONE USING FETCH API*/

//get API URLs
const postsURL = 'https://669f9859b132e2c136fe7345.mockapi.io/api/posts';
const usersURL = 'https://669f9859b132e2c136fe7345.mockapi.io/api/users';

//get & set user data using localStorage (temp)
const myname = localStorage.getItem('myName') ?? window.prompt('Enter your username');
localStorage.setItem('myName', myname);
const mytag = localStorage.getItem('mytag') ?? window.prompt('Enter your tag');
localStorage.setItem('mytag', mytag);
const mypfp = localStorage.getItem('mypfp') ?? window.prompt('Add a profile picture (from url)');
localStorage.setItem('mypfp', mypfp);
const myID = localStorage.getItem('myID') ?? Math.ceil((Math.random() * 100));
localStorage.setItem('myID', myID);
const created = localStorage.getItem('created') ?? new Date().toISOString();
localStorage.setItem('created', created);

//get existing elements
const timelinePublishButton = document.getElementById("tl-publish-button");
const userContainerPublishButton = document.getElementById("user-publish-button");
const timelineContainer = document.getElementsByClassName('timeline-container');

timelinePublishButton.addEventListener('click', function() {
    //create timeline elements
    const userInput = document.getElementById('tl-post-input');
    const timelinePostContentContainer = document.createElement('div');
    const timelinePostUserPicture = document.createElement('img');
    const timelinePostContainer = document.createElement('div');
    const timelineUserDetails = document.createElement('div');
    const timelineUserTag = document.createElement('p');
    const timelineUserName = document.createElement('p');
    const timelinePostContent = document.createElement('p');
    const subPostItems = document.createElement('div');
    const editBtn = document.createElement('button');
    const deleteBtn = document.createElement('button');
    const postDate = document.createElement('p');
    const currentDate = new Date().toLocaleString();

    //create user card elements
    const userPostContainer = document.createElement('div');
    const userPostContent = document.createElement('p');

    //get and validate user input
    if (userInput.value.trim() === '') {
        alert("Please enter some text.");
        userInput.value = '';
        return false;
    }

    //add classes and attributes to created elements
    timelinePostContentContainer = classList('tl-new-post-container');
    timelinePostUserPicture.setAttribute('img', mypfp);
});

userContainerPublishButton.addEventListener('click', function() {
    //create timeline elements
    const userInput = document.getElementById('user-post-input');
    const timelinePostContentContainer = document.createElement('div');
    const timelinePostUserPicture = document.createElement('img');
    const timelinePostContainer = document.createElement('div');
    const timelineUserDetails = document.createElement('div');
    const timelineUserTag = document.createElement('p');
    const timelineUserName = document.createElement('p');
    const timelinePostContent = document.createElement('p');
    const subPostItems = document.createElement('div');
    const editBtn = document.createElement('button');
    const deleteBtn = document.createElement('button');
    const postDate = document.createElement('p');
    const currentDate = new Date().toLocaleString();

    //create user card elements
    const userPostContainer = document.createElement('div');
    const userPostContent = document.createElement('p');

    //get and validate user input
    if (userInput.value.trim() === '') {
        alert("Please enter some text.");
        userInput.value = '';
        return false;
    }
})