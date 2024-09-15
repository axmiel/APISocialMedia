/*TWITTER CLONE USING FETCH API - TBC*/
//localStorage.clear();
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

const apiPostData = fetchAPIData(postsURL);
const apiUserData = fetchAPIData(usersURL);

async function fetchAPIData(apiURL) {
    try {
        const response = await fetch(apiURL);
        if (!response.ok) {
            throw new Error(`HTTP error, returned status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetch data: ', error)
    }
}
console.log(apiPostData);
console.log(apiUserData);

//create user profile in user card
window.addEventListener('DOMContentLoaded', () => {
    const userProfileDetails = document.querySelector('.user-profile-details');
    const userProfilePicture = document.createElement('img');
    const userProfileName = document.createElement('p');
    const userProfileTag = document.createElement('p');

    userProfileName.classList.add('user-name');
    userProfileTag.classList.add('user-tag');
    
    userProfilePicture.setAttribute('src', mypfp);
    userProfileName.textContent = myname;
    userProfileTag.textContent = '@' + mytag;

    userProfileDetails.append(userProfilePicture, userProfileName, userProfileTag);
});


//get existing elements
const timelinePublishButton = document.getElementById('tl-publish-button');
const userContainerPublishButton = document.getElementById('user-publish-button');
const timelineInnerPostsContainer = document.querySelector('.tl-inner-posts-container');
const userProfilePosts = document.querySelector('.user-posts');

timelinePublishButton.addEventListener('click', () => {
    //create timeline elements
    const userInput = document.getElementById('tl-post-input');
    const timelinePostContentContainer = document.createElement('div');
    const timelinePostUserPicture = document.createElement('img');
    const timelinePostContainer = document.createElement('div');
    const timelineUserDetails = document.createElement('div');
    const userName = document.createElement('p');
    const userTag = document.createElement('p');
    const timelinePostContent = document.createElement('p');
    const userCardPostContent = document.createElement('p');
    const timelineSubPostItems = document.createElement('div');
    const userCardSubPostItems = document.createElement('div');
    const timelineEditBtn = document.createElement('button');
    const userCardEditBtn = document.createElement('button');
    const timelineDeleteBtn = document.createElement('button');
    const userCardDeleteBtn = document.createElement('button');
    const timelinePostDate = document.createElement('p');
    const userCardPostDate = document.createElement('p');
    const currentDate = new Date().toLocaleString();
    const userPostContainer = document.createElement('div');

    //get and validate user input
    if (userInput.value.trim() === '') {
        alert("Please enter some text.");
        userInput.value = '';
        return false;
    }

    //add classes and attributes to created elements
    timelinePostContentContainer.classList.add('tl-post-content-container');
    timelinePostUserPicture.setAttribute('src', mypfp);
    timelinePostContainer.classList.add('post-container');
    timelineUserDetails.classList.add('tl-user-details');
    userName.classList.add('user-name');
    userTag.classList.add('user-tag');
    timelinePostContent.classList.add('post-content');
    userCardPostContent.classList.add('post-content');
    timelineSubPostItems.classList.add('sub-post-container');
    userCardSubPostItems.classList.add('sub-post-container');
    timelineEditBtn.classList.add('edit-btn');
    userCardEditBtn.classList.add('edit-btn');
    timelineDeleteBtn.classList.add('delete-btn');
    userCardDeleteBtn.classList.add('delete-btn');
    timelinePostDate.classList.add('post-date');
    userCardPostDate.classList.add('post-date');
    userPostContainer.classList.add('user-post-container');

    //add text content to elements
    userName.textContent = myname;
    userTag.textContent = '@' + mytag;
    timelinePostContent.textContent = userInput.value;
    userCardPostContent.textContent = userInput.value;
    timelineEditBtn.textContent = 'Edit';
    userCardEditBtn.textContent = 'Edit';
    timelineDeleteBtn.textContent = 'Delete';
    userCardDeleteBtn.textContent = 'Delete';
    timelinePostDate.textContent = currentDate;
    userCardPostDate.textContent = currentDate;

    //combine user details
    timelineUserDetails.append(userName, userTag);

    //combine sub-post items
    timelineSubPostItems.append(timelineEditBtn, timelineDeleteBtn, timelinePostDate);
    userCardSubPostItems.append(userCardEditBtn, userCardDeleteBtn, userCardPostDate);
    
    //add user details, post content and sub-post items into one container
    timelinePostContainer.append(timelineUserDetails, timelinePostContent, timelineSubPostItems);

    //construct timeline post content container
    timelinePostContentContainer.append(timelinePostUserPicture, timelinePostContainer);
    
    //add the post content container to timeline
    timelineInnerPostsContainer.prepend(timelinePostContentContainer);

    //construct a trimmed down copy for the user profile card
    userPostContainer.append(userCardPostContent, userCardSubPostItems);

    //add user post to user profile card
    userProfilePosts.prepend(userPostContainer);

    userInput.value = '';
});

userContainerPublishButton.addEventListener('click', () => {
    //create timeline elements
    const userInput = document.getElementById('user-post-input');
    const timelinePostContentContainer = document.createElement('div');
    const timelinePostUserPicture = document.createElement('img');
    const timelinePostContainer = document.createElement('div');
    const timelineUserDetails = document.createElement('div');
    const userName = document.createElement('p');
    const userTag = document.createElement('p');
    const timelinePostContent = document.createElement('p');
    const userCardPostContent = document.createElement('p');
    const timelineSubPostItems = document.createElement('div');
    const userCardSubPostItems = document.createElement('div');
    const timelineEditBtn = document.createElement('button');
    const userCardEditBtn = document.createElement('button');
    const timelineDeleteBtn = document.createElement('button');
    const userCardDeleteBtn = document.createElement('button');
    const timelinePostDate = document.createElement('p');
    const userCardPostDate = document.createElement('p');
    const currentDate = new Date().toLocaleString();
    const userPostContainer = document.createElement('div');

    //get and validate user input
    if (userInput.value.trim() === '') {
        alert("Please enter some text.");
        userInput.value = '';
        return false;
    }

    //add classes and attributes to created elements
    timelinePostContentContainer.classList.add('tl-post-content-container');
    timelinePostUserPicture.setAttribute('src', mypfp);
    timelinePostContainer.classList.add('post-container');
    timelineUserDetails.classList.add('tl-user-details');
    userName.classList.add('user-name');
    userTag.classList.add('user-tag');
    timelinePostContent.classList.add('post-content');
    userCardPostContent.classList.add('post-content');
    timelineSubPostItems.classList.add('sub-post-container');
    userCardSubPostItems.classList.add('sub-post-container');
    timelineEditBtn.classList.add('edit-btn');
    userCardEditBtn.classList.add('edit-btn');
    timelineDeleteBtn.classList.add('delete-btn');
    userCardDeleteBtn.classList.add('delete-btn');
    timelinePostDate.classList.add('post-date');
    userCardPostDate.classList.add('post-date');
    userPostContainer.classList.add('user-post-container');

    //add text content to elements
    userName.textContent = myname;
    userTag.textContent = '@' + mytag;
    timelinePostContent.textContent = userInput.value;
    userCardPostContent.textContent = userInput.value;
    timelineEditBtn.textContent = 'Edit';
    userCardEditBtn.textContent = 'Edit';
    timelineDeleteBtn.textContent = 'Delete';
    userCardDeleteBtn.textContent = 'Delete';
    timelinePostDate.textContent = currentDate;
    userCardPostDate.textContent = currentDate;

    //combine user details
    timelineUserDetails.append(userName, userTag);

    //combine sub-post items
    timelineSubPostItems.append(timelineEditBtn, timelineDeleteBtn, timelinePostDate);
    userCardSubPostItems.append(userCardEditBtn, userCardDeleteBtn, userCardPostDate);
    
    //add user details, post content and sub-post items into one container
    timelinePostContainer.append(timelineUserDetails, timelinePostContent, timelineSubPostItems);

    //construct timeline post content container
    timelinePostContentContainer.append(timelinePostUserPicture, timelinePostContainer);
    
    //add the post content container to timeline
    timelineInnerPostsContainer.prepend(timelinePostContentContainer);

    //construct a trimmed down copy for the user card
    userPostContainer.append(userCardPostContent, userCardSubPostItems);

    //add user post to user profile card
    userProfilePosts.prepend(userPostContainer);

    userInput.value = '';
});