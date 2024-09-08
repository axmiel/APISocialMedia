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
const timelinePublishButton = document.getElementById('tl-publish-button');
const userContainerPublishButton = document.getElementById('user-publish-button');
const timelineInnerPostsContainer = document.querySelector('.tl-inner-posts-container');
const userProfilePosts = document.querySelector('.user-posts');

timelinePublishButton.addEventListener('click', function() {
    //create timeline elements
    const userInput = document.getElementById('tl-post-input');
    const timelinePostContentContainer = document.createElement('div');
    const timelinePostUserPicture = document.createElement('img');
    const timelinePostContainer = document.createElement('div');
    const timelineUserDetails = document.createElement('div');
    const userName = document.createElement('p');
    const userTag = document.createElement('p');
    const postContent = document.createElement('p');
    const subPostItems = document.createElement('div');
    const editBtn = document.createElement('button');
    const deleteBtn = document.createElement('button');
    const postDate = document.createElement('p');
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
    postContent.classList.add('post-content');
    subPostItems.classList.add('sub-post-container');
    editBtn.classList.add('edit-btn');
    deleteBtn.classList.add('delete-btn');
    postDate.classList.add('post-date');
    userPostContainer.classList.add('user-post-container');

    //add text content to elements
    userName.textContent = myname;
    userTag.textContent = '@' + mytag;
    postContent.textContent = userInput.value;
    editBtn.textContent = 'Edit';
    deleteBtn.textContent = 'Delete';
    postDate.textContent = currentDate;

    //combine user details
    timelineUserDetails.append(userName, userTag);

    //combine sub-post items
    subPostItems.append(editBtn, deleteBtn, postDate);
    
    //add user details, post content and sub-post items into one container
    timelinePostContainer.append(timelineUserDetails, postContent, subPostItems);

    //construct timeline post content container
    timelinePostContentContainer.append(timelinePostUserPicture);
    timelinePostContentContainer.append(timelinePostContainer);
    
    //add the post content container to timeline
    timelineInnerPostsContainer.prepend(timelinePostContentContainer);

    //construct a trimmed down copy for the user profile card
    userPostContainer.append(postContent);
    userPostContainer.append(subPostItems);

    //add user post to user profile card
    userProfilePosts.prepend(userPostContainer);

    userInput.value = '';
});

userContainerPublishButton.addEventListener('click', function() {
    //create timeline elements
    const userInput = document.getElementById('user-post-input');
    const timelinePostContentContainer = document.createElement('div');
    const timelinePostUserPicture = document.createElement('img');
    const timelinePostContainer = document.createElement('div');
    const timelineUserDetails = document.createElement('div');
    const userName = document.createElement('p');
    const userTag = document.createElement('p');
    const postContent = document.createElement('p');
    const subPostItems = document.createElement('div');
    const editBtn = document.createElement('button');
    const deleteBtn = document.createElement('button');
    const postDate = document.createElement('p');
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
    postContent.classList.add('post-content');
    subPostItems.classList.add('sub-post-container');
    editBtn.classList.add('edit-btn');
    deleteBtn.classList.add('delete-btn');
    postDate.classList.add('post-date');
    userPostContainer.classList.add('user-post-container');

    //add text content to elements
    userName.textContent = myname;
    userTag.textContent = '@' + mytag;
    postContent.textContent = userInput.value;
    editBtn.textContent = 'Edit';
    deleteBtn.textContent = 'Delete';
    postDate.textContent = currentDate;

    //combine user details
    timelineUserDetails.append(userName, userTag);

    //combine sub-post items
    subPostItems.append(editBtn, deleteBtn, postDate);
    
    //add user details, post content and sub-post items into one container
    timelinePostContainer.append(timelineUserDetails, postContent, subPostItems);

    //construct timeline post content container
    timelinePostContentContainer.append(timelinePostUserPicture);
    timelinePostContentContainer.append(timelinePostContainer);
    
    //add the post content container to timeline
    timelineInnerPostsContainer.prepend(timelinePostContentContainer);

    //construct a trimmed down copy for the user profile card
    userPostContainer.append(postContent);
    userPostContainer.append(subPostItems);

    //add user post to user profile card
    userProfilePosts.prepend(userPostContainer);

    userInput.value = '';
});