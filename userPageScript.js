var imgElement = document.querySelector('#user-profile-wrapper img');
var titleElement = document.querySelector('#user-profile-wrapper h2');

var paramsFromURL = new URLSearchParams(location.search);
var userName = paramsFromURL.get('name');
var userPic = paramsFromURL.get('pic');

imgElement.src = userPic;
imgElement.alt = 'Profile picture of ' + userName;
titleElement.innerHTML= userName;