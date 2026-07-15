/* ======================================================
   MEMORY:// ARCHIVE
   memories.js  (formerly scrapbook.js)

   Controls:
   - Favorite cards
   - Story cards
   - Dream cards
   - Timeline generation
====================================================== */

const favoriteGrid = document.querySelector(".favorite-grid");
const storiesGrid = document.querySelector(".stories-grid");
const dreamGrid = document.querySelector(".dream-grid");
const timeline = document.getElementById("timeline");

/* ======================================================
   CREATE MEMORY CARD
====================================================== */

function createCard(memory) {
    return `
    <article class="memory-card">
        <div class="memory-icon">${memory.icon}</div>
        <h3>${memory.title}</h3>
        <p>${memory.text}</p>
    </article>
    `;
}

/* ======================================================
   LOAD FAVORITES / STORIES / DREAMS
====================================================== */

function loadFavorites() {
    if (!favoriteGrid) return;
    const favorites = memories.filter(m => m.type === "favorite" && m.scrapbook);
    favorites.forEach(memory => { favoriteGrid.innerHTML += createCard(memory); });
}

function loadStories() {
    if (!storiesGrid) return;
    const stories = memories.filter(m => m.type === "story" && m.scrapbook);
    stories.forEach(memory => { storiesGrid.innerHTML += createCard(memory); });
}

function loadDreams() {
    if (!dreamGrid) return;
    const dreams = memories.filter(m => m.type === "dream" && m.scrapbook);
    dreams.forEach(memory => { dreamGrid.innerHTML += createCard(memory); });
}

/* ======================================================
   LOAD TIMELINE
====================================================== */

function loadTimeline() {
    if (!timeline) return;
    const moments = memories.filter(m => m.timeline === true);

    moments.forEach(memory => {
        timeline.innerHTML += `
        <div class="timeline-item">
            <div class="timeline-date">${memory.date || "Memory"}</div>
            <h3>${memory.title}</h3>
            <p>${memory.text}</p>
        </div>
        `;
    });
}

/* ======================================================
   INITIALIZE
====================================================== */

function initializeScrapbook(){


    loadFavorites();


    loadStories();


    loadDreams();


    loadTimeline();


}



initializeScrapbook();