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
    `Hey again, my cupcake 🧁,

    I guess third time's the charm.

    I don't really know where to start.

    I know things got messy, and I know words were said from both sides that hurt.

    But there are some things I want you to know.

    I don't want this to be just another apology message that disappears after a few days.

    I wanted to make something that reminds you of how much you matter to me.

    Not because of one big reason,
    but because of a thousand little ones.

    The small things.
    The random things.
    The things you probably don't even realize I noticed.

    Your favourite foods.
    Your little habits.
    Your dreams.
    Your opinions about movies.
    The stories you told me.

    Somehow, all of those little things became memories for me.

    I really, really miss you.
    I miss being with you.
    These past few days have been harder than I'd like to admit.

    Your goals are adorable, just like you are, and I'd be grateful if you let me be a small part of your journey.

    I know healing takes time, and I don't expect everything to suddenly become normal.

    I just want you to know that I am genuinely sorry for the things I said.

    Thank you for being someone whose little details became important enough for me to remember.

    I hope that, one day, we can look back at this as just another difficult chapter that we made it through together.

    P.S. I know an apology can't fix everything, and neither can this.
    But I hope, little by little, things find their way back to us, and maybe one day we're even closer than we used to be.`;

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