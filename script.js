const sites = [
  {name: "Neal.fun", description: "You stumble upon a playful corner of the web filled with weird experiments.", url: "https://neal.fun"},
  
  {name: "Pointer Pointer", description: "A strange website that always points at your cursor. Eerie, yet fascinating.", url: "https://pointerpointer.com"},
  {name: "Radio Garden", description: "Spin the globe and listen to live radio from any country in the world.", url: "https://radio.garden"},
  
  {name: "Window Swap", description: "Peer through windows from around the world, and step into someone else’s view for a moment.", url: "https://window-swap.com"},
  {name: "Pointer Pointer", description: "Everywhere your cursor goes, a stranger points back. Weird, but oddly comforting.", url: "https://pointerpointer.com"},
 
 
  {name: "Zoom Quilt", description: "Dive into an endless zooming artwork that feels infinite and alive.", url: "http://zoomquilt.org"},
  
  {name: "Hacker Typer", description: "Type like a movie hacker and pretend the world is your command line.", url: "https://hackertyper.net"},
  {name: "A Soft Murmur", description: "Blend calming ambient sounds into a perfect atmosphere for daydreaming or focus.", url: "https://asoftmurmur.com"},
  {name: "Little Alchemy 2", description: "Combine elements in a magical way and watch the universe unfold in your browser.", url: "https://littlealchemy2.com"},
  {name: "Pixel Thoughts", description: "60 seconds to clear your mind. A tiny meditation hidden on the web.", url: "http://www.pixelthoughts.co"},
 
  {name: "Falling Falling", description: "Lose yourself in an endless cascade of color and sound, hypnotic and strange.", url: "http://www.fallingfalling.com"},
  {name: "Patatap", description: "Press keys and create music and animation. Your fingertips are the conductor.", url: "https://www.patatap.com"},
  
  {name: "Every Noise at Once", description: "All the music genres you’ve never heard collide into a colorful, chaotic soundscape.", url: "http://everynoise.com/engenremap.html"},
  
  {name: "RetroGames", description: "A digital attic of old pixels and high scores.", url: "https://www.retrogames.cz/index.php"},
 
  
  
  {name: "Bored Button", description: "Press and be whisked away to random entertainments when you have nothing to do.", url: "https://www.boredbutton.com"},
  
 
  {name: "The Wiki Game", description: "Race through Wikipedia pages and feel the thrill of obscure knowledge.", url: "https://www.thewikigame.com"},
  {name: "MapCrunch", description: "Teleport to random corners of the globe via Google Street View. Wander without moving.", url: "https://www.mapcrunch.com"},
  
 
  

];


const exploreBtn = document.getElementById("exploreBtn");
const card = document.getElementById("card");
const showHistoryBtn = document.getElementById("showHistoryBtn");
const historyContainer = document.getElementById("history");

// Save visited sites
function saveToHistory(siteName, siteURL) {
  let history = JSON.parse(localStorage.getItem("webHistory")) || [];
  history.unshift({ name: siteName, url: siteURL, visitedAt: new Date().toISOString() }); // newest first
  localStorage.setItem("webHistory", JSON.stringify(history));
}

// Show history
function showHistory() {
  let history = JSON.parse(localStorage.getItem("webHistory")) || [];
  historyContainer.innerHTML = "";
  history.forEach(item => {
    const entry = document.createElement("div");
    entry.innerHTML = `<a href="${item.url}" target="_blank">${item.name}</a> — <span class="timestamp">${new Date(item.visitedAt).toLocaleString()}</span>`;
    historyContainer.appendChild(entry);
  });
}

// Toggle history panel
showHistoryBtn.addEventListener("click", () => {
  historyContainer.style.display = historyContainer.style.display === "block" ? "none" : "block";
  if(historyContainer.style.display === "block") showHistory();
});

// Explore button
exploreBtn.addEventListener("click", () => {
  card.classList.add("fade-out");
  setTimeout(() => {
    const randomSite = sites[Math.floor(Math.random() * sites.length)];
    saveToHistory(randomSite.name, randomSite.url);
    card.innerHTML = `
      <p class="description">${randomSite.description}</p>
      <a href="${randomSite.url}" target="_blank">
        <button>Visit ${randomSite.name}</button>
      </a>
      <br><br>
      <button id="nextBtn">Next Discovery</button>
    `;
    card.classList.remove("fade-out");

    document.getElementById("nextBtn").addEventListener("click", () => {
      exploreBtn.click();
    });
  }, 300);
});
