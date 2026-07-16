/* ======================================================
   MEMORY:// YOU MATTER

   archive.js

   Controls:
   - Memory rendering
   - Search
   - Category filtering
   - Hidden secret searches

====================================================== */


/* ==================================================
   ELEMENTS
================================================== */

const grid = document.querySelector(".you-matter-grid");

const searchInput = document.querySelector(".you-matter-search");

const categoryButtons =
    document.querySelectorAll(".category-btn");


/* ==================================================
   DATA
================================================== */

const allMemories =
    (typeof memories !== "undefined")
        ? memories
        : [];

const data =
    allMemories.filter(memory =>
        memory.archive === true &&
        !memory.secret
    );


let activeCategory = "All";

let activeQuery = "";


/* ==================================================
   CREATE MEMORY CARD
================================================== */

function createMemoryCard(memory, index) {

    return `

    <div class="you-matter-card-item">

        <div class="entry-id">

            #${String(index + 1).padStart(3, "0")}
            · ${memory.category}

        </div>

        <h3>

            ${memory.icon || "💗"}

            ${memory.title}

        </h3>

        <p>

            ${memory.text}

        </p>

    </div>

    `;

}


/* ==================================================
   CREATE SECRET CARD
================================================== */

function createSecretCard(memory){

    return `

    <div class="you-matter-card-item secret-memory">

        <div class="entry-id">

            ✨ Hidden Memory

        </div>

        <h3>

            ${memory.icon}

            ${memory.title}

        </h3>

        <h4>

            ${memory.subtitle || ""}

        </h4>

        <p>

            ${memory.text}

        </p>

    </div>

    `;

}


/* ==================================================
   RENDER GRID
================================================== */

function renderGrid() {

    if (!grid) return;

    const query =
        activeQuery
        .trim()
        .toLowerCase();



/* ===============================================
   SECRET SEARCH
=============================================== */

    if(query !== ""){

        const secretMemory = allMemories.find(memory=>{

            if(!memory.secret) return false;


            const secretTags = [
                ...(memory.tags || []),
                memory.title || "",
                memory.subtitle || ""
            ]
            .map(item =>
                item.toLowerCase().trim()
            );


            return secretTags.some(tag => 
                tag === query
            );


        });


        if(secretMemory){

            grid.innerHTML =
                createSecretCard(secretMemory);

            return;

        }

    }

    /* ===============================================
       NORMAL SEARCH
    =============================================== */

    let results = data.filter(memory => {

        const matchesCategory =
            activeCategory === "All" ||
            memory.category === activeCategory;

        const searchable = `

            ${memory.title || ""}
            ${memory.subtitle || ""}
            ${memory.category || ""}
            ${memory.text || ""}
            ${(memory.tags || []).join(" ")}

        `.toLowerCase();

        const matchesSearch =
            query === "" ||
            searchable.includes(query);

        return matchesCategory && matchesSearch;

    });



    if(results.length === 0){

        grid.innerHTML = `

        <div class="you-matter-card-item">

            <h3>

                No memory found

            </h3>

            <p>

                I don't remember everything.

                But I tried my best to remember you.

            </p>

        </div>

        `;

        return;

    }



    grid.innerHTML = results
        .map((memory,index)=>

            createMemoryCard(memory,index)

        )
        .join("");

}


/* ==================================================
   SEARCH
================================================== */

if(searchInput){

    searchInput.addEventListener(
        "input",
        (event)=>{

            activeQuery =
                event.target.value;

            renderGrid();

        }
    );

}


/* ==================================================
   CATEGORY FILTER
================================================== */

categoryButtons.forEach(button=>{

    button.addEventListener(
        "click",
        ()=>{

            categoryButtons.forEach(btn=>

                btn.classList.remove("active")

            );

            button.classList.add("active");

            activeCategory =
                button.dataset.category;

            renderGrid();

        }
    );

});


/* ==================================================
   INITIAL LOAD
================================================== */

renderGrid();