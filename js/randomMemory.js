/* ======================================================
   MEMORY:// ARCHIVE
   randomMemory.js

   Controls:
   - Random memory discovery
====================================================== */

const randomButton = document.getElementById("randomMemory");
const randomOutput = document.getElementById("randomResult");

function showRandomMemory() {
    const availableMemories = memories.filter(m => m.archive === true);
    if (availableMemories.length === 0) return;

    const randomIndex = Math.floor(Math.random() * availableMemories.length);
    const memory = availableMemories[randomIndex];

    randomOutput.innerHTML = `
    <div class="random-memory-card">
        <span>✨ A little memory surfaced...</span>
        <h2>${memory.icon} ${memory.title}</h2>
        <p>${memory.text}</p>
        <small>Category: ${memory.category}</small>
    </div>
    `;
}

if (randomButton) {
    randomButton.addEventListener("click", showRandomMemory);
}