document.addEventListener('DOMContentLoaded', function () {

  const userLogin = 'jgluciano';
  const endpoint = `https://api.github.com/users/${userLogin}`;

  const nameElement = document.querySelector('#name');
  const loginElement = document.querySelector('#login')
  const avatarElement = document.querySelector('#avatar')
  const followersElement = document.querySelector('#followers')
  const followingElement = document.querySelector('#following')
  const reposElement = document.querySelector('#repos')
  const urlElement = document.getElementById('url')
  
  fetch(endpoint)
    .then(function (resposta) {
      return resposta.json();
    })
    .then(function (json) {
      nameElement.innerText  = json.name;
      loginElement.innerText  = json.login;
      avatarElement.src = json.avatar_url;
      followersElement.innerText  = json.followers;
      followingElement.innerText  = json.following;
      reposElement.innerText  = json.public_repos;
      urlElement.href = json.html_url;
    })

});