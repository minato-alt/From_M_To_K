/* ======================================================
   MEMORY:// FOR YOU
   typewriter.js

   Controls:
   - Envelope opening
   - Letter reveal
   - Typewriter animation
====================================================== */

(function () {

    /* ==================================================
       ELEMENTS
    ================================================== */

    const envelope = document.querySelector(".envelope");
    const letterPaper = document.querySelector(".letter-paper");
    const letterText = document.querySelector("#letterText");

    /* ==================================================
       LETTER CONTENT
    ================================================== */

    const letter =
`Hey,

I don't really know where to start.

I know things got messy, and I know words were said from both sides that hurt.

But there are things I want you to know.

I don't want this to be just another apology message that disappears after a few days.

I wanted to create something that shows that I remember.

The small things.
The random things.
The things you probably don't even realize I noticed.

Your favourite foods.
Your weird little habits.
Your dreams.
Your opinions about movies.
The tiny stories you told me.

All of those things became memories for me.

I know healing takes time, and I don't expect everything to suddenly become normal.

I just wanted to remind you that you matter.

And that I am genuinely sorry for the things I said.

Thank you for being someone whose little details became important enough for me to remember.`;

    /* ==================================================
       TYPEWRITER SETTINGS
    ================================================== */

    const speed = 35;
    let index = 0;
    let typingStarted = false;

    /* ==================================================
       TYPE FUNCTION
    ================================================== */

    function typeWriter() {

        if (index < letter.length) {

            letterText.textContent += letter.charAt(index);
            index++;

            setTimeout(typeWriter, speed);

        }

    }

    /* ==================================================
       OPEN LETTER
    ================================================== */

    function openLetter() {

        if (!envelope || !letterPaper) return;

        envelope.classList.add("open");

        setTimeout(() => {

            letterPaper.style.display = "block";

            if (!typingStarted) {
                typingStarted = true;
                typeWriter();
            }

        }, 900);

    }

    /* ==================================================
       CLICK EVENT
    ================================================== */

    if (envelope) {
        envelope.addEventListener("click", openLetter, { once: true });
    }

})();