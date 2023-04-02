// Main Variables
let theInput = document.querySelector(".get-repos input");
let getButton = document.querySelector(".get-button");
let reposData = document.querySelector(".show-data");

getButton.onclick = function () {
    getRepos();
}

// Get Repos Function
function getRepos() {
    // If The text Is Empty
    if(theInput.value == "") {
        reposData.innerHTML = "<span>Please Write Github Username .</span>"
    } else {
        fetch(`https://api.github.com/users/${theInput.value}/repos`).then((response) => response.json())
        .then((repositries) => {
            // Empty The Container 
            reposData.innerHTML = '';

            // Loop On REPOSITRIES
            repositries.forEach(repo => {
                
                // Create Main Div
                let mainDiv = document.createElement("div");
                
                // Text Node
                let repoName = document.createTextNode(repo.name);

                // Append 
                mainDiv.appendChild(repoName);

                // Create Repo Url Ancor Tag
                let theUrl = document.createElement('a');

                // Create Repo Url Text 
                let theUrlText = document.createTextNode("visit");

                // Apend text
                theUrl.appendChild(theUrlText);

                // Add The Href
                theUrl.href = `https://github.com/${theInput.value}/${repo.name}`;

                // Set atribute blank
                theUrl.setAttribute('target', '_blank');

                // Append Url Anchor To Main Div
                mainDiv.appendChild(theUrl);

                // Create Stars
                let StarSpan = document.createElement("span");

                // Create Star Count
                let starText = document.createTextNode(`star ${repo.stargazers_count}`);

                // Add Star Text To Span
                StarSpan.appendChild(starText);

                // Append Main To star Span
                mainDiv.appendChild(StarSpan);

                // Add Clas For Main Div
                mainDiv.className = 'repo-box';

                // Append Main Container
                reposData.appendChild(mainDiv);
            })
        });
    }
}

