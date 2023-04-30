// Pause the video when the window is scrolled
window.onscroll = function () {
    var myVideo = document.getElementById("myVideo");
    myVideo.pause();
}

// Play the video when the window is focused
window.onfocus = function () {
    var myVideo = document.getElementById("myVideo");
    myVideo.play();
    // myVideo.muted = false; 
}
// Unmute the video sound...  
function toggleMute() {
    var myVideo = document.getElementById("myVideo");
    var unmuteBtn = document.querySelector(".unmute-btn");
    if (myVideo.muted) {
        myVideo.muted = false;
        unmuteBtn.innerHTML = "Mute";
    } else {
        myVideo.muted = true;
        unmuteBtn.innerHTML = "Unmute";
    }
}


document.getElementById("searchButton").addEventListener("click", search);


async function search() {
    const searchQuery = document.getElementById("searchInput").value;
    const url = `https://gogoanime-api.herokuapp.com/search/${searchQuery}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        const searchResults = document.getElementById("searchResults");

        // Clear previous search results
        searchResults.innerHTML = "";

        // Display search results
        data.forEach((anime) => {
            const animeDiv = document.createElement("div");
            const animeTitle = document.createElement("h2");
            const animeImage = document.createElement("img");
            const animeDescription = document.createElement("p");

            animeTitle.textContent = anime.title;
            animeImage.src = anime.image;
            animeDescription.textContent = anime.synopsis;

            animeDiv.appendChild(animeTitle);
            animeDiv.appendChild(animeImage);
            animeDiv.appendChild(animeDescription);
            searchResults.appendChild(animeDiv);
        });
    } catch (error) {
        console.error(error);
    }
}




