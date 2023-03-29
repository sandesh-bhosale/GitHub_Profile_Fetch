function getUserData() {
    var username = document.getElementById("username").value;
    var url = "https://api.github.com/users/" + username;
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        document.getElementById("avatar").src = data.avatar_url;
        document.getElementById("name").innerText = data.name;
        document.getElementById("bio").innerText = data.bio;
        document.getElementById("followers").innerText = data.followers;
        document.getElementById("following").innerText = data.following;
        document.getElementById("public-repos").innerText = data.public_repos;
        document.querySelector(".profile").style.display = "block";
      })
      .catch(error => alert("Error: " + error.message));
  }
  