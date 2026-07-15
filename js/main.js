/* ======================================================
   MEMORY:// FOR YOU
   main.js

   Controls:
   - Navigation
   - Page switching
   - Opening animation
====================================================== */

(function () {

    /* ==================================================
       ELEMENTS
    ================================================== */

    const pages = document.querySelectorAll(".page");
    const navButtons = document.querySelectorAll(".nav-btn");
    const beginButton = document.getElementById("beginButton");
    const openYouMatterButton = document.getElementById("openYouMatter");

    /* ==================================================
       PAGE SWITCHING
    ================================================== */

    function openPage(pageName) {

        const target = document.getElementById(pageName);

        if (!target) return;

        pages.forEach(page => page.classList.remove("active-page"));
        target.classList.add("active-page");

        navButtons.forEach(button => {
            button.classList.toggle(
                "active",
                button.dataset.page === pageName
            );
        });

        window.scrollTo({ top: 0, behavior: "instant" });
    }

    /* ==================================================
       NAVIGATION BUTTONS
    ================================================== */

    navButtons.forEach(button => {
        button.addEventListener("click", () => {
            openPage(button.dataset.page);
        });
    });

    /* ==================================================
       OPEN MEMORY BOX (home -> memories)
    ================================================== */

    if (beginButton) {

        beginButton.addEventListener("click", () => {

            const hero = document.querySelector(".hero");

            document.body.classList.add("opening");
            hero.classList.add("opening");

            setTimeout(() => {

                openPage("memories");

                document.body.classList.remove("opening");
                hero.classList.remove("opening");

            }, 1200);

        });

    }

    /* ==================================================
       OPEN YOU MATTER PAGE
    ================================================== */

    if (openYouMatterButton) {

        openYouMatterButton.addEventListener("click", () => {
            openPage("youmatter");
        });

    }

    /* Expose for other modules (audio.js listens on first interaction) */
    window.openPage = openPage;

})();