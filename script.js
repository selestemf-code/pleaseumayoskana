/* =========================================
   MEMORY CORE
   MAIN JAVASCRIPT
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================
       ELEMENTS
    ===================================== */

    const lockScreen =
        document.getElementById("lockScreen");

    const story =
        document.getElementById("story");

    const answerInput =
        document.getElementById("answerInput");

    const unlockButton =
        document.getElementById("unlockButton");

    const wrongAnswer =
        document.getElementById("wrongAnswer");

    const sceneContainer =
        document.getElementById("sceneContainer");

    const nextButton =
        document.getElementById("nextButton");

    const backButton =
        document.getElementById("backButton");

    const sceneCounter =
        document.getElementById("sceneCounter");

    const mainMusic =
        document.getElementById("mainMusic");

    const musicButton =
        document.getElementById("musicButton");


    /* =====================================
       SETTINGS
    ===================================== */

    const CORRECT_ANSWER = "september";

    const NORMAL_VOLUME = 0.70;

    const VIDEO_VOLUME = 0.18;

    mainMusic.volume = NORMAL_VOLUME;


    /* =====================================
       FRIENDS
    ===================================== */

    const friends = [

        {
            name: "Yuanne",
            role: "anne anne",
            message:
                "Yuanne, almost five years of friendship is something I'll always be grateful for. We've known so much about each other, from the random little things to the moments that actually mattered, and somehow we've made it through every version of ourselves along the way. I hope future you gets the life you've always wanted, achieves every dream you're working toward, and finds people who will always appreciate and support you. I hope you're happy, wherever life takes you. And when you look back at these years someday, I hope you remember how much fun, laughter, and memories we made together."
        },

        {
            name: "Shane",
            role: "pigsasa",
            message:
                "Shane, after almost five years of friendship, it's crazy to think how much we've already been through together. We've seen each other change, grow, laugh, struggle, and become the people we are now. I hope that wherever life takes you, you get everything you've ever wished for and more. I hope you meet good people, achieve your dreams, and find a life that makes you genuinely happy. No matter how much things change in the future, I hope you'll always look back at these years and remember how much we've shared. I'm really grateful that I got to grow up and make all these memories with you."
        },

        {
            name: "Kim Audrey",
            role: "aud-aud",
            message:
                "Kim Audrey, almost five years of knowing you means we've already witnessed so many versions of each other. We've shared so many stories, jokes, random moments, and memories that I know we will always carry with us. I hope future you gets everything you deserve, the dreams you've been working for, the happiness you hope to find, and people who will always be there for you. I hope life treats you kindly and gives you so many reasons to be proud of yourself. Wherever we all end up someday, I hope you'll look back at our friendship and know that these years were truly something worth remembering"
        },

        {
            name: "Yhi Shin",
            role: "shinundot",
            message:
                "Hai future meh, alam muba na the strange thing about memories is that we rarely recognize an important moment while we're living it. Yes I. We think we're just taking pictures, finishing another project, laughing at another stupid joke, or getting through another school day. Oo nga e : ( Then suddenly, years pass, and those ordinary moments become the exact things we wish we could experience one more time. Whatever happens after this chapter, I hope you never forget that this version of us existed. We were younger, figuring things out, making mistakes, laughing too loudly, and creating memories without even trying. Sana ma crushback na."
        },

        {
            name: "Adrian",
            role: "ad-ad",
            message:
	"Adrian, every group somehow needs someone who can turn an ordinary moment into something funny, and somehow, you became part of that energy. Years from now, we might forget what assignment we were working on or why we were stressed that particular day, but there's a good chance we'll still remember the laughter. Maybe that's what makes these memories valuable. They don't need to be extraordinary. Sometimes, all it takes is the right people being together at the right time. This archive keeps one of those versions of us alive."
        },

        {
            name: "Elijah",
            role: "jah-jah",
            message:
                "Elijah, someday, these school days will probably feel like a distant memory. We might all have different paths, different priorities, and different things going on by then. But I hope you still remember the random laughs, music, games, and all the little moments that made this chapter fun. Whatever happens next, keep doing what you love, keep making people laugh, and don't forget to enjoy the journey. Future you has a lot more memories waiting to be made."
        },

        {
            name: "Renzo",
            role: "zo-zo",
            message:
                "Renzo, there are so many random moments from this chapter that we'll probably remember for a long time, the jokes, pictures, conversations, and all the little things that happened along the way. Some of them might seem ordinary now, but someday, those could be the memories we end up missing the most. Wherever life takes you after this, I hope you look back at these days and remember how fun it was being part of this group."
        },

        {
            name: "Jairus",
            role: "poujai",
            message:
                "Jairus, this chapter probably had more chaos than any of us planned for. There were projects, deadlines, games, random conversations, jokes, and probably moments where everyone was just trying to survive the day. But somehow, all of that became part of what made the experience memorable. Years from now, the details may become blurry, but I hope the feeling remains, the feeling of having people around who made difficult days easier and boring days more fun. This is one small record of that time, before it becomes something we can only remember."
        },

        {
            name: "Jerald",
            role: "bunicakes",
            message:
                "Jerald, life has a way of moving people forward whether we're ready or not. One day, everyone is sitting in the same place, sharing the same routines, and then suddenly everyone has different plans, different schedules, and different places to be. That's probably the hardest part about growing up. But before everything changes, there was this chapter. There was this group. There were these moments. And no matter how far everyone goes, nothing can change the fact that we were once here together, living through this exact version of our lives."
        },

        {
            name: "Hadrian Luther",
            role: "hadhad",
            message:
                "Luther, years from now, I hope you're still the same person who knows how to make people laugh and enjoy even the simplest moments. A lot of things might change after this chapter, but I hope you never lose that side of you. I hope future you is surrounded by good people, doing things that make you happy, and making even more memories worth looking back on. Whatever life brings, keep being you and don't forget the person you were here."
        },

        {
            name: "Jesfer",
            role: "donny",
            message:
                "Jesfer, someday, someone might ask what made this chapter special, and maybe we won't know exactly how to explain it. It wasn't one huge event. It was everything combined, the jokes, the random moments, the shared experiences, the stupid things that somehow became funny, and simply having people around. Those little things are difficult to describe to someone who wasn't there. Maybe that's okay. Some memories only make sense to the people who lived them. This one belongs to us."
        },

        {
            name: "John Paul",
            role: "pul-pol",
            message:
                "John Paul,  I hope that the future you gets to achieve the dreams you're working for now and finds someone who is truly meant for you. I hope life brings you good opportunities, good people, and plenty of reasons to be happy. Whatever path you take after this chapter, I hope you become someone your younger self would be proud of. Keep going and enjoy every step along the way."
        },

        {
            name: "Kurlby",
            role: "coach",
            message:
                "Kurlby, I hope future you is still the same person who can make everyone laugh and turn random moments into good memories. I hope you achieve the things you're working for, meet people who bring out the best in you, and find plenty of reasons to enjoy life. Whatever happens after this chapter, don't lose the fun and carefree side of you that made these days memorable."
        },

        {
            name: "Ivan Kareem",
            role: "ebak adan",
            message:
                "Ivan Kareem, if you're reading this years from now, then somehow this little piece of the past managed to survive. Maybe everyone is already living completely different lives. Maybe the group chat is quiet, the schedules don't match anymore, and everyone has grown into someone we couldn't have imagined back then. But before all of that happened, there was this. There was a time when we were all together, learning, laughing, struggling, and making memories without realizing their value. I hope future you looks back at this and smiles."
        }

    ];


    /* =====================================
       SCENES
    ===================================== */

    const scenes = [

        /* =================================
           CHAPTER 01
        ================================= */

        {
            type: "chapter",
            title: "CHAPTER 01",
            text: "Before the memories became memories."
        },

        {
            type: "images",
            chapter: "CHAPTER 01",
            title: "The Beginning",
            images: [
                "scene-01-01.jpe",
                "scene-01-02.jpe",
                "scene-01-03.jpe",
                "scene-01-04.jpe"
            ]
        },

        {
            type: "text",
            chapter: "CHAPTER 01",
            title: "September 2025",
            text:
                "It started with projects. Deadlines. Requirements. Random conversations that slowly became something more familiar."
        },

        {
            type: "images",
            chapter: "CHAPTER 01",
            title: "Before We Knew",
            images: [
                "scene-03-01.jpe",
                "scene-03-02.jpe",
                "scene-03-03.jpe",
                "scene-03-04.jpe"
            ]
        },


        /* =================================
           CHAPTER 02
        ================================= */

        {
            type: "chapter",
            title: "CHAPTER 02",
            text: "Somewhere along the way, school became more than school."
        },

        {
            type: "video",
            chapter: "CHAPTER 02",
            title: "Moments",
            video: "scene-04.mp4"
        },

        {
            type: "images",
            chapter: "CHAPTER 02",
            title: "Snapshots",
            images: [
                "scene-05-01.jpe",
                "scene-05-02.jpe",
                "scene-05-03.jpe",
                "scene-05-04.jpe"
            ]
        },

        {
            type: "video",
            chapter: "CHAPTER 02",
            title: "Another Day",
            video: "scene-06.mp4"
        },

        {
            type: "images",
            chapter: "CHAPTER 02",
            title: "The Days We Had",
            images: [
                "scene-07-01.jpe",
                "scene-07-02.jpe",
                "scene-07-03.jpe",
                "scene-07-04.jpe"
            ]
        },


        /* =================================
           CHAPTER 03
        ================================= */

        {
            type: "chapter",
            title: "CHAPTER 03",
            text: "Not everything was planned."
        },

        {
            type: "video",
            chapter: "CHAPTER 03",
            title: "Unplanned",
            video: "scene-08.mp4"
        },

        {
            type: "images",
            chapter: "CHAPTER 03",
            title: "In Between",
            images: [
                "scene-09-01.jpe",
                "scene-09-02.jpe",
                "scene-09-03.jpe",
                "scene-09-04.jpe"
            ]
        },

        {
            type: "text",
            chapter: "CHAPTER 03",
            title: "The Ordinary",
            text:
                "There were days that felt completely normal. We didn't know it yet that we would eventually miss them."
        },

        {
            type: "video",
            chapter: "CHAPTER 03",
            title: "Remember This",
            video: "scene-11.mp4"
        },

        {
            type: "images",
            chapter: "CHAPTER 03",
            title: "Still Here",
            images: [
                "scene-12-01.jpe",
                "scene-12-02.jpe",
                "scene-12-03.jpe",
                "scene-12-04.jpe"
            ]
        },


        /* =================================
           CHAPTER 04
        ================================= */

        {
            type: "chapter",
            title: "CHAPTER 04",
            text: "The archive continues."
        },

        {
            type: "images",
            chapter: "CHAPTER 04",
            title: "More Than We Expected",
            images: [
                "scene-13-01.jpe",
                "scene-13-02.jpe",
                "scene-13-03.jpe",
                "scene-13-04.jpe",
                "scene-13-05.jpe"
            ]
        },

        {
            type: "video",
            chapter: "CHAPTER 04",
            title: "Motion",
            video: "scene-14.mp4"
        },

        {
            type: "images",
            chapter: "CHAPTER 04",
            title: "Another Memory",
            images: [
                "scene-15-01.jpe",
                "scene-15-02.jpe",
                "scene-15-03.jpe",
                "scene-15-04.jpe"
            ]
        },

        {
            type: "images",
            chapter: "CHAPTER 04",
            title: "All Together",
            images: [
                "scene-16-01.jpe",
                "scene-16-02.jpe",
                "scene-16-03.jpe",
                "scene-16-04.jpe",
                "scene-16-05.jpe"
            ]
        },


        /* =================================
           CHAPTER 05
        ================================= */

        {
            type: "chapter",
            title: "CHAPTER 05",
            text: "Eventually, the ordinary days became memories."
        },

        {
            type: "video",
            chapter: "CHAPTER 05",
            title: "One More",
            video: "scene-17.mp4"
        },

        {
            type: "images",
            chapter: "CHAPTER 05",
            title: "Pieces",
            images: [
                "scene-18-01.jpe",
                "scene-18-02.jpe",
                "scene-18-03.jpe",
                "scene-18-04.jpe"
            ]
        },

        {
            type: "images",
            chapter: "CHAPTER 05",
            title: "The Archive",
            images: [
                "scene-19-01.jpe",
                "scene-19-02.jpe",
                "scene-19-03.jpe",
                "scene-19-04.jpe",
                "scene-19-05.jpe"
            ]
        },


        /* =================================
           CHAPTER 06
        ================================= */

        {
            type: "chapter",
            title: "CHAPTER 06",
            text: "And suddenly, time was moving faster."
        },

        {
            type: "video",
            chapter: "CHAPTER 06",
            title: "Keep This",
            video: "scene-20.mp4"
        },

        {
            type: "images",
            chapter: "CHAPTER 06",
            title: "Almost There",
            images: [
                "scene-21-01.jpe",
                "scene-21-02.jpe",
                "scene-21-03.jpe",
                "scene-21-04.jpe"
            ]
        },

        {
            type: "images",
            chapter: "CHAPTER 06",
            title: "The Last Pieces",
            images: [
                "scene-22-01.jpe",
                "scene-22-02.jpe",
                "scene-22-03.jpe"
            ]
        },

        {
            type: "images",
            chapter: "CHAPTER 06",
            title: "Still Us",
            images: [
                "scene-23-01.jpe",
                "scene-23-02.jpe",
                "scene-23-03.jpe"
            ]
        },

        {
            type: "text",
            chapter: "CHAPTER 06",
            title: "The End Was Getting Closer",
            text:
                "We didn't know exactly when the chapter would end. We only knew that it eventually would."
        },

        {
            type: "images",
            chapter: "CHAPTER 06",
            title: "One Last Look",
            images: [
                "scene-25-01.jpe",
                "scene-25-02.jpe",
                "scene-25-03.jpe"
            ]
        },


        /* =================================
           CHAPTER 07
        ================================= */

        {
            type: "chapter",
            title: "CHAPTER 07",
            text:
                "Before the archive closes, there are people worth remembering."
        },


        /* FRIENDS */

        ...friends.map(function (friend, index) {

            return {
                type: "friend",
                number: index + 1,
                name: friend.name,
                role: friend.role,
                message: friend.message
            };

        }),


        /* =================================
           FINAL
        ================================= */

        {
            type: "text",
            chapter: "FINAL",
            title: "And then...",
            text:
                "The school days ended. The deadlines stopped. The routine changed."
        },

        {
            type: "text",
            chapter: "FINAL",
            title: "It Started With Projects.",
            text:
                "But somewhere between the requirements, the laughter, the chaos, and the ordinary days, something worth keeping was created."
        },

        {
            type: "text",
            chapter: "MEMORY CORE",
            title: "The Archive",
            text:
                "Maybe years from now, everything will look different. Maybe everyone will be somewhere else. But this version of us happened once."
        },

        {
            type: "text",
            chapter: "THE END",
            title: "Dear, Future You",
            text:
                "If you are reading this in the future, remember that we were here."
        }

    ];


    /* =====================================
       STATE
    ===================================== */

    let currentScene = 0;

    let musicPlaying = false;


    /* =====================================
       TOTAL SCENES
    ===================================== */

    const totalScenes = scenes.length;


    /* =====================================
       UPDATE COUNTER
    ===================================== */

    function updateCounter() {

        const number =
            String(currentScene + 1).padStart(2, "0");

        const total =
            String(totalScenes).padStart(2, "0");

        sceneCounter.textContent =
            number + " / " + total;
    }


    /* =====================================
       RENDER SCENE
    ===================================== */

    function renderScene() {

        const scene = scenes[currentScene];

        sceneContainer.innerHTML = "";

        const sceneElement =
            document.createElement("div");

        sceneElement.className = "scene";


        /* ================================
           TEXT
        ================================= */

        if (scene.type === "text") {

            sceneElement.innerHTML = `

                <p class="chapter-label">
                    ${scene.chapter}
                </p>

                <h2 class="scene-title">
                    ${scene.title}
                </h2>

                <p class="scene-text">
                    ${scene.text}
                </p>

            `;

        }


        /* ================================
           CHAPTER
        ================================= */

        else if (scene.type === "chapter") {

            sceneElement.innerHTML = `

                <p class="chapter-label">
                    ${scene.title}
                </p>

                <h2 class="scene-title">
                    MEMORY CORE
                </h2>

                <p class="scene-text">
                    ${scene.text}
                </p>

            `;

        }


        /* ================================
           IMAGES
        ================================= */

        else if (scene.type === "images") {

            const grid =
                document.createElement("div");

            grid.className =
                "image-grid";

            if (scene.images.length === 3) {
                grid.classList.add("three");
            }

            if (scene.images.length === 5) {
                grid.classList.add("five");
            }

            scene.images.forEach(function (imageName) {

                const img =
                    document.createElement("img");

                img.src =
                    "./assets/images/scenes/" +
                    imageName;

                img.alt = "Memory";

                img.loading = "eager";

                grid.appendChild(img);

            });

            sceneElement.appendChild(grid);

        }


        /* ================================
           VIDEO
        ================================= */

        else if (scene.type === "video") {

            const label =
                document.createElement("p");

            label.className =
                "chapter-label";

            label.textContent =
                scene.chapter;

            sceneElement.appendChild(label);


            const title =
                document.createElement("h2");

            title.className =
                "scene-title";

            title.textContent =
                scene.title;

            sceneElement.appendChild(title);


            const video =
                document.createElement("video");

            video.className =
                "scene-video";

            video.src =
                "./assets/videos/scenes/" +
                scene.video;

            video.controls = true;

            video.playsInline = true;

            video.preload = "metadata";

            video.addEventListener(
                "play",
                function () {

                    mainMusic.volume =
                        VIDEO_VOLUME;

                }
            );

            video.addEventListener(
                "pause",
                function () {

                    mainMusic.volume =
                        NORMAL_VOLUME;

                }
            );

            video.addEventListener(
                "ended",
                function () {

                    mainMusic.volume =
                        NORMAL_VOLUME;

                }
            );

            sceneElement.appendChild(video);

        }


        /* ================================
           FRIEND
        ================================= */

        else if (scene.type === "friend") {

            sceneElement.innerHTML = `

                <div class="friend-card">

                    <p class="friend-number">
                        ARCHIVE ENTRY ${String(scene.number).padStart(2, "0")}
                    </p>

                    <h2 class="friend-name">
                        ${scene.name}
                    </h2>

                    <p class="friend-role">
                        ${scene.role}
                    </p>

                    <p class="friend-message">
                        ${scene.message}
                    </p>

                </div>

            `;

        }


        sceneContainer.appendChild(sceneElement);

        updateCounter();

        updateNavigation();

    }


    /* =====================================
       NAVIGATION
    ===================================== */

    function updateNavigation() {

        backButton.disabled =
            currentScene === 0;

        nextButton.disabled =
            currentScene === totalScenes - 1;

    }


    function nextScene() {

        if (
            currentScene <
            totalScenes - 1
        ) {

            currentScene++;

            renderScene();

        }

    }


    function previousScene() {

        if (currentScene > 0) {

            currentScene--;

            renderScene();

        }

    }


    /* =====================================
       UNLOCK
    ===================================== */

    function unlockMemoryCore() {

        const answer =
            answerInput.value
                .trim()
                .toLowerCase();


        if (answer === CORRECT_ANSWER) {

            wrongAnswer.textContent = "";

            lockScreen.classList.remove("active");

            lockScreen.classList.add("hidden");

            story.classList.remove("hidden");


            /* Start music */

            mainMusic.volume =
                NORMAL_VOLUME;

            const musicPromise =
                mainMusic.play();


            if (
                musicPromise !== undefined
            ) {

                musicPromise
                    .then(function () {

                        musicPlaying = true;

                        musicButton.textContent =
                            "♫";

                    })
                    .catch(function () {

                        musicPlaying = false;

                        musicButton.textContent =
                            "♫";

                    });

            }


            currentScene = 0;

            renderScene();

        }


        else {

            wrongAnswer.textContent =
                "ACCESS DENIED. Try again.";

            answerInput.classList.add(
                "shake"
            );

            setTimeout(function () {

                answerInput.classList.remove(
                    "shake"
                );

            }, 400);

        }

    }


    /* =====================================
       MUSIC BUTTON
    ===================================== */

    function toggleMusic() {

        if (musicPlaying) {

            mainMusic.pause();

            musicPlaying = false;

            musicButton.textContent =
                "♫";

        }

        else {

            mainMusic.volume =
                NORMAL_VOLUME;

            const promise =
                mainMusic.play();


            if (
                promise !== undefined
            ) {

                promise
                    .then(function () {

                        musicPlaying = true;

                    })
                    .catch(function () {

                        musicPlaying = false;

                    });

            }

        }

    }


    /* =====================================
       EVENT LISTENERS
    ===================================== */

    unlockButton.addEventListener(
        "click",
        unlockMemoryCore
    );


    answerInput.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Enter") {

                unlockMemoryCore();

            }

        }
    );


    nextButton.addEventListener(
        "click",
        nextScene
    );


    backButton.addEventListener(
        "click",
        previousScene
    );


    musicButton.addEventListener(
        "click",
        toggleMusic
    );


    document.addEventListener(
        "keydown",
        function (event) {

            if (
                story.classList.contains("hidden")
            ) {
                return;
            }


            if (event.key === "ArrowRight") {

                nextScene();

            }


            if (event.key === "ArrowLeft") {

                previousScene();

            }

        }
    );


    /* =====================================
       INITIALIZE
    ===================================== */

    updateCounter();

    console.log(
        "MEMORY CORE loaded successfully."
    );

    console.log(
        "Total scenes:",
        totalScenes
    );

});