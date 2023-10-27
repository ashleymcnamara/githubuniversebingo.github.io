var card_titles = [
    "2FA Talk: A reminder of the importance of Two-Factor Authentication in keeping GitHub accounts secure.",
    "Patagonia Vest Sighting: Because tech conferences are a prime opportunity to showcase your fashion-forward Patagonia vest.",
    "Dr. Who Quotes: Casual references to classic Dr. Who episodes from the 1970s, sparking the nostalgia of fellow fans.",
    "Size 10 Font Slide: When a presenter uses an impossibly small font on a PowerPoint slide, forcing everyone to squint and lean in.",
    "Wi-Fi Woes: When the dreaded announcement comes that the conference Wi-Fi has gone down, and panic ensues.",
    "Scaling Success Stories: When large enterprises share their experiences of scaling their development efforts using GitHub.",
    "Workflow Woes: When someone shares a challenging experience in setting up complex workflows with GitHub Actions.",
    "AI in Cybersecurity: When AI's role in enhancing security protocols gets its 15 seconds of fame.",
    "AI Ethics Emphasis: A welcomed detour into the ethical considerations of AI implementation.",
    "Open Source Anecdote: When a speaker shares a personal story about how an open source project dramatically improved their life or workflow.",
    "The Buzzword Drop: When the speaker manages to squeeze in 'digital transformation,' 'innovation,' and 'synergy' in the same sentence",
    "Unplanned Technical Glitch: When the slides freeze or the mic cuts out, and the speaker has to ad-lib.",
    "Live Coding Courage: Hats off to the brave soul who live codes during a keynote, tempting the demo gods.",
    "Keynote Time Overrun: When the speaker says, 'I know I'm over time, but just one more thing...'",
    "DevEx, Not Just UX: A pointed reminder that user experience doesn't stop at the end-user; developers are users too.",
    "DevEx Delight: When a new feature is announced solely to make a developer's life easier, and you can almost hear the collective sigh of relief.",
    "Version Control Venting: 'Git blame? More like Git 'Who Wrote This?'",
    "Community Contributions: The shout-out to devs whose pull requests are the unsung heroes of the codebase.",
    "Legacy Code Lament: Ah, the moment we pay homage to the code that runs everything but nobody wants to touch.",
    "Rate-Limit Riff: A lighthearted joke about hitting API rate limits, and how that's 'the real speed of code.'",
    "Dogfooding Mention: Yes, we use our own products, and yes, it's as tasty as it sounds.",
    "Imposter Syndrome Talk: Because we all need a reminder that even the best among us have self-doubt.",
    "Open Source Mention: Ah, the two words that make our collaborative hearts beat faster.",
    "GitHub Enterprise Spotlight: When GHE steals the show, reminding us that enterprise isn't just a Star Trek ship.",
    "Sustainability Mention: Because who doesn't want to code for a better world, even if we're still figuring out how?",
    "Another Automation Point: If you automated taking a drink every time this word is mentioned, you'd be well-hydrated.",
    "Reducing Context Switching: When the dream of doing one thing at a time is presented as revolutionary.",
    "No Silos Mantra: 'We're all one team!' says the presenter, hoping it'll magically tear down organizational walls.",
    "GitHub Sponsors Plug: Where open source meets open wallets. Support your local dev today!",
    "Collaboration Buzz: Because nothing says 'teamwork' like overusing the word in a 30-minute talk.",
    "LLM Talk: When we dive deep and get close to the metal, but most of us are just trying to keep up.",
    "Custom Trained Model Mention: Because off-the-shelf AI is so last season; custom is the new black.",
    "GHAS Shoutout: When security gets its glam moment, courtesy of GitHub Advanced Security.",
    "CI/CD Mention: Because if you're not continuously integrating, are you even developing?",
    "Passwordless Talk: Where we dream of a world where 'Forgot Password?' is a thing of the past.",
    "CLI Spotlight: Because nothing says 'I'm hardcore' like a black terminal screen with green text.",
    "Cybersecurity Mention: Ah, the broccoli of tech talks. Good for you, but not always the star of the show.",
    "Windows Laptop on Stage: WSL or native? Either way, it's a shout out to the other half of the dev world.",
    "Mac Laptop on Stage: Because nothing says 'I'm a developer' like the glow of that Apple logo.",
    "On-Stage Awkward Handshake: Because nothing says 'we're in this together' like fumbling a simple greeting under the spotlight.",
    "Enterprise Announcement: Buckle up, everyone; this is where the rubber meets the enterprise-grade road!",
    "Superfluous Keynote Animation: For that moment when a simple slide transition just won't do, and the presenter opts for something more... extravagant.",
    "Mis-capitalization Faux Pas: Because it's GitHub, not Github; Copilot, not CoPilot; and DevEx, not Devex. Get it right, folks!",
    "AI Buzzword Bingo: 'Extensibility', 'Agents', 'Skills'... Does it make sense? Maybe. Does it sound impressive? Absolutely.",
    "Someone Says 'Paradigm Shift': Shift your bingo squares in response.",
    "Multi-Cloud Strategy Talk: For those who refuse to put all their eggs in one basket—or cloud, as it were.",
    "Feel-Good Moment: That one time we all remember we're human.",
    "Git Pun / Joke: We commit to making you groan.",
    "It's Not a Bug, It's a Feature: The unofficial motto of software development.",
    "Demo Latency: In which time slows down for everyone involved.",
    "Saying Developers More Than 1x: Steve Ballmer's spirit lives on.",
    "Demo Fail: Murphy's Law in action.",
    "'This is the Future of Code': Until next year's future, of course.",
    "Dad Joke from a Keynote Speaker: Mandatory humor? Check.",
    "Misuse of the Term AI: Because everything is AI now, didn't you know?",
    "Merge Conflict Joke: It's all fun and games until someone has to manually resolve conflicts.",
    "Darkmode Debate: The eternal struggle of light vs. dark. Choose your allegiance.",
    "Repository Roulette: When the speaker can't remember which branch they need and goes on a clicking spree through their GitHub repository.",
    "Gist Gaffes: When a speaker tries to paste a code snippet from a Gist but accidentally reveals their collection of recipes or meme GIFs.",
    "'It Worked on My Machine' Admission: When the presenter encounters an issue and blames the classic 'It worked on my machine' as the crowd chuckles.",
    "Dependabot Diva: When Dependabot updates show up during a live demo, and the speaker treats it like a VIP appearance.",
    "Markdown Madness: That moment when the presenter shares their life-changing README file, only to realize the Markdown formatting is off.",
    "Pull Request Prayers: When a speaker submits a pull request live and openly prays for no merge conflicts.",
    "GitHub Pages Puzzles: When the speaker tries to show off their GitHub Pages website live, only to find it's still building.",
    "The Awkward Dance: That moment when two presenters can't decide who should stand where, turning the stage into a dance floor for a few awkward seconds.",
    "Unintended Tab Sharing: That moment of panic when the speaker realizes they've been sharing their entire screen, revealing tabs like 'How to give a great presentation.'",
    "Bow Tie in the Wild: When you spot a conference-goer rocking a bow tie, proving that tech and style can go hand in hand.",
    "Accessibility Advocacy: The moment someone reminds us that the 'www' in web should stand for 'World Wide Welcome.'",
    "Stars Program Shoutout: When someone specifically mentions the GitHub Stars Program, reminding everyone there's an elite squad among us.",
    "Octocat Cheers: MONA, the mascot who unites us all.",
    "Heartwarming Highlights: Moments that remind us why we do what we do.",
    "Accessibility for All mention: You'll hear this one a lot as it's near to our hearts",
    "#GitHubUniverse Mention: Are we also using this to subtly mention our hashtag? Yes, yes we are",
    "Cybersecurity Spotlight: The kale of tech talks—important and fortified.",
    "DevEx Metrics Mention: The moment we switch from discussing code to discussing how we quantify its quality and user satisfaction.",
    "Stars' Community Impact: A segment or slide highlighting the tangible community impact made by GitHub Stars.",
    "Code Scanning Celebrated: A shoutout to GitHub's code scanning feature, making security an integral part of the development process."
];

//TESTING ONLY - append some text to each card title
card_titles = card_titles.map(title => title + ": Here is a subtitle example text so we can see how it looks");

// Function to shuffle an array
function shuffle(array) {
    var currentIndex = array.length;
    var temporaryValue;
    var randomIndex;

// Shuffle the array using a while loop
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

// Swap elements in the array
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

// Shuffle the 'card_titles' array and store it in 'card_titles_shuffled'
var card_titles_shuffled = shuffle(card_titles);

// Initialize and fetch elements from DOM
var el_playcard = document.getElementById('playCard');

// Create the rows and columns for the Bingo card
for (var row = 0; row < 5; row++) {
    var el_row = el_playcard.insertRow(-1);
    for (var col = 0; col < 5; col++) {
        var el_cell = el_row.insertCell(0);
        if (row === 2 && col === 2) {
            el_cell.innerHTML = '<span class="freeWrap"><span class="freeTop">Free</span><span class="freeBottom">Space</span></span>';
            el_cell.classList.add('marked', 'marked-free');
        } else {
            const text = card_titles_shuffled.pop();
            const [prefix, postfix] = text.split(": ");
            // Style the text before and after the colon
            el_cell.innerHTML = `<span class='card_prefix'>${prefix || ""}</span>` +
                (postfix ? `<span class='card_postfix'>${postfix}</span>` : "");
            el_cell.addEventListener('click', handle_cell_click, false);
        }
    }
}

var bingo_counter = 0;
var marked_sound = new Audio('static/sounds/pop.mp3');
var bingo_sound = new Audio('static/sounds/win.mp3');

marked_sound.load();
bingo_sound.load();

// check if Bingo win condition is met
function is_bingo() {
    var bingo = false;
    var marked_cells = document.querySelectorAll('.marked');
    var marked_rows = [];
    var marked_cols = [];
    var marked_diag1 = [];
    var marked_diag2 = [];
    // loop through all marked cells and store their row and column
    marked_cells.forEach(function (cell) {
        marked_rows.push(cell.parentElement.rowIndex);
        marked_cols.push(cell.cellIndex);
        // check if cell is in right diagonal
        if (cell.parentElement.rowIndex === cell.cellIndex) {
            marked_diag1.push(true);
        }
        // check if cell is in left diagonal
        if (cell.parentElement.rowIndex + cell.cellIndex === 4) {
            marked_diag2.push(true);
        }
    });
    // check if any row has 5 marked cells
    for (var i = 0; i < 5; i++) {
        if (marked_rows.filter(x => x === i).length === 5) {
            bingo = true;
        }
    }
    // check if any column has 5 marked cells
    for (var j = 0; j < 5; j++) {
        if (marked_cols.filter(x => x === j).length === 5) {
            bingo = true;
        }
    }
    // check if diagonal 1 has 5 marked cells
    if (marked_diag1.length === 5) {
        bingo = true;
    }
    // check if diagonal 2 has 5 marked cells
    if (marked_diag2.length === 5) {
        bingo = true;
    }
    return bingo;
}

// Handle click event on a cell
function handle_cell_click(event) {
    var cell = event.srcElement;
    //if the element is a span, get its parent
    if (cell.tagName === 'SPAN') {
        cell = cell.parentElement;
    }
    // Mark/unmark the cell, play marking sound
    cell.classList.toggle('marked');
    if (cell.classList.contains('marked')) {
        marked_sound.play();
    }
    // check for Bingo win condition
    if (is_bingo()) {
        document.querySelectorAll('td').forEach(e => e.classList.add('rotate-out'));
        bingo_sound.play();
        // Reveal the 'Play Again' button after animation ends
        setTimeout(() => {
            var play_again = document.getElementById('bingo');
            play_again.classList.add('bounce-in');
            play_again.style.display = 'block';
            //scroll to the top of the "bingo" block
            window.scrollTo({
                top: play_again.offsetTop,
                behavior: "smooth"
            });
        }, 400);
    }
}

// Attach click event to all except center cell
document.querySelectorAll('#playCard td').forEach(cell => {
    if (!cell.classList.contains('marked-free')) {
        cell.addEventListener('click', handle_cell_click);
    }
});