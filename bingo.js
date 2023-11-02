var card_titles = [
    "2FA Talk: A reminder of the importance of Two-Factor Authentication in keeping GitHub accounts secure.",
    "Patagonia Vest Sighting: Because tech conferences are a prime opportunity to showcase your fashion-forward Patagonia vest.",
    "Dr. Who Quotes: Casual references to classic Dr. Who episodes from the 1970s, sparking the nostalgia of fellow fans.",
    "Scaling Success Stories: When large enterprises share their experiences of scaling their development efforts using GitHub.",
    "Workflow Woes: When someone shares a challenging experience in setting up complex workflows with GitHub Actions.",
    "Open Source Anecdote: When a speaker shares a personal story about how an open source project dramatically improved their life or workflow.",
    "Live Coding Courage: Hats off to the brave soul who live codes during a keynote, tempting the demo gods.",
    "DevEx, Not Just UX: A pointed reminder that user experience doesn't stop at the end-user; developers are users too.",
    "DevEx Delight: When a new feature is announced solely to make a developer's life easier, and you can almost hear the collective sigh of relief.",
    "Community Contributions: The shout-out to devs whose pull requests are the unsung heroes of the codebase.",
    "Legacy Code Lament: Ah, the moment we pay homage to the code that runs everything but nobody wants to touch.",
    "Rate-Limit Riff: A lighthearted joke about hitting API rate limits, and how that's 'the real speed of code.'",
    "Dogfooding Mention: Yes, we use our own products, and yes, it's as tasty as it sounds.",
    "Imposter Syndrome Talk: Because we all need a reminder that even the best among us have self-doubt.",
    "Open Source Mention: Ah, the two words that make our collaborative hearts beat faster.",
    "GitHub Enterprise Spotlight: When GHE steals the show, reminding us that enterprise isn't just a Star Trek ship.",
    "Sustainability Mention: Because who doesn't want to code for a better world?",
    "Another Automation Point: If you automated taking a drink every time this word is mentioned, you'd be well-hydrated.",
    "Reducing Context Switching: When the dream of doing one thing at a time is presented as revolutionary.",
    "LLM Talk: When we dive deep and get close to the metal, but most of us are just trying to keep up.",
    "Custom Trained Model Mention: Because off-the-shelf AI is so last season; custom is the new black.",
    "GHAS Shoutout: When security gets its glam moment, courtesy of GitHub Advanced Security.",
    "CI/CD Mention: Because if you're not continuously integrating, are you even developing?",
    "Passwordless Talk: Where we dream of a world where 'Forgot Password?' is a thing of the past.",
    "Cybersecurity Mention:  Not always front and center at tech talks, but a true hero!",
    "Windows Laptop on Stage: WSL or native? Either way, it's a shout out to the other half of the dev world.",
    "Mac Laptop on Stage: Because nothing says 'I'm a developer' like the glow of that Apple logo.",
    "Enterprise Announcement: Buckle up, everyone; this is where the rubber meets the enterprise-grade road!",
    "Someone Says 'Paradigm Shift': Shift your bingo squares in response.",
    "Multi-Cloud Strategy Talk: For those who refuse to put all their eggs in one basket—or cloud, as it were.",
    "Feel-Good Moment: That one time we all remember we're human.",
    "Git Pun / Joke: We commit to making you groan.",
    "It's Not a Bug, It's a Feature: The unofficial motto of software development.",
    "Saying Developers More Than 1x: Steve Ballmer's spirit lives on.",
    "Cheesy Joke from a Keynote Speaker: Mandatory humor? Check.",
    "Merge Conflict Joke: It's all fun and games until someone has to manually resolve conflicts.",
    "Darkmode Debate: The eternal struggle of light vs. dark. Choose your allegiance.",
    "Dependabot Diva: When Dependabot updates show up during a live demo, and the speaker treats it like a VIP appearance.",
    "Pull Request Prayers: When a speaker submits a pull request live and openly prays for no merge conflicts.",
    "GitHub Pages Puzzles: When the speaker tries to show off their GitHub Pages website live, only to find it's still building.",
    "Bow Tie in the Wild: When you spot a conference-goer rocking a bow tie, proving that tech and style can go hand in hand.",
    "Accessibility Advocacy: Everyone deserves to have the opportunity to create, innovate, and collaborate while contributing to our digital future!",
    "Stars Program Shoutout: When someone specifically mentions the GitHub Stars Program, reminding everyone there's an elite squad among us.",
    "Octocat Cheers: MONA, the mascot who unites us all.",
    "Human Element: When a speaker takes a moment to focus on the real human experiences that are behind and impacted by our technical work.",
    "Unintended Tab Sharing: That moment of panic when the speaker realizes they've been sharing their entire screen, revealing tabs like 'How to give a great presentation.",
    "Heartwarming Highlights: Moments that remind us why we do what we do.",
    "Live-Coding Loop: The thrill when a speaker courageously starts live-coding, and the suspense that hangs until it successfully runs.",
    "Accessibility for All mention: You'll hear this one a lot as it's near to our hearts.",
    "#GitHubUniverse Mention: Are we also using this to subtly mention our hashtag? Yes, yes we are.",
    "Cybersecurity Spotlight: The often hidden hero keeping things safe and secure. ",
    "Edge Computing Excitement: As we inch closer to the edge, it's not just our devices that are getting smarter.",
    "DevEx Metrics Mention: The moment we switch from discussing code to discussing how we quantify its quality and user satisfaction.",
    "Stars' Community Impact: A segment or slide highlighting the tangible community impact made by GitHub Stars.",
    "Microservices Muse: When the conversation turns to breaking monoliths into microservices, and how GitHub helps manage that complexity.",
    "Tribute to Maintainers: A heartfelt thank-you to all those who keep the wheels of open-source turning.",
    "No-Code Nod: Acknowledging the role of no-code platforms and how they interact with GitHub.",
    "Docs Done Right: When documentation is hailed not as a chore, but as another form of community engagement and contribution.",
    "Embracing Async: The moment a speaker makes you question why you're still married to real-time meetings.",
    "Mentorship Moment: When the conversation pivots to the importance of mentoring the next generation of developers, keeping the community's future bright.",
    "API Awe: When a new API is introduced and you can almost hear the gears turning in developers' minds.",
    "Future-Proofing: Discussion around making your codebase resilient to upcoming tech evolutions.",
    "Open Source Governance Gab: When the conversation turns to how we make sure open source stays open.",
    "GitHub Copilot Salute: Acknowledging our AI pair programmer and its latest improvements.",
    "Retrospective Reflections: That part where we look back to move forward better.",
    "Test-Driven Development Tribute: A salute to the methodology that has us writing tests before code.",
    "MLOps Mention: A nod to the ever-growing intersection of machine learning and operations.",
    "Localization & Globalization: When we're reminded that code speaks multiple languages, just like its developers.",
    "Tech Stack Teasers: When we get a sneak peek into the fascinating technology stacks of industry giants.",
    "Human Element: Touching stories about how technology has made a meaningful impact on individual lives or communities.",
    "DevOps Transformation: Where the buzzword suddenly makes sense in a real-world scenario, and we're all better for it.",
    "Work-Life Balance Wisdom: Sage advice about maintaining boundaries in the age of 24/7 connectivity.",
    "Service Mesh Mention: For those bridging the gap between microservices, it's not just a buzzword.",
    "Issue-Driven Talk: When the focus of a conversation shifts to issue tracking, and we're reminded it's not just about coding but also about managing.",
    "Markdown Maven: Any mention or focus on Markdown that reminds us it's the duct tape holding the dev world together.",
    "Localhost Lore: When a talk dives into the mysticism of running things locally, making every developer feel like a wizard in training.",
    "GitHub Universe Newbie: When someone admits it's their first GitHub Universe, and we all remember our first time.",
    "Git Blame Game: When the talk references the git blame command, and everyone chuckles nervously, wondering what secrets could be unearthed in their codebase.",
    "License to Thrill: Any talk that dives into the complex but essential world of software licenses, reminding us that law and code are not mutually exclusive.",
    "Code Scanning Celebrated: A shoutout to GitHub's code scanning feature, making security an integral part of the development process."
];

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

var card_titles_shuffled = null;

// Retrieve shuffled cards from LocalStorage
var card_titles_shuffled_json = localStorage.getItem('card_titles_shuffled');
if(card_titles_shuffled_json) {
    card_titles_shuffled = JSON.parse(card_titles_shuffled_json);
} else {
    // Shuffle the 'card_titles' array and store it in 'card_titles_shuffled'
    card_titles_shuffled = shuffle(card_titles);
    // Store the shuffled cards in LocalStorage
    localStorage.setItem('card_titles_shuffled', JSON.stringify(card_titles_shuffled));
}

// Initialize and fetch elements from DOM
var el_playcard = document.getElementById('playCard');

// Create the rows and columns for the Bingo card
for (var row = 0; row < 5; row++) {
    var el_row = el_playcard.insertRow(-1);
    for (var col = 0; col < 5; col++) {
        var el_cell = el_row.insertCell(0);
        // set the el_cell id to the row and column
        el_cell.id = `cell-${row}-${col}`;
        if (row === 2 && col === 2) {
            el_cell.innerHTML = '<span class="freeWrap">Free<br/><br/><br/><br/><br/>Space</span>';
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


// Retrieve which cards are "marked" from LocalStorage
var marked_cells_json = localStorage.getItem('marked_cells');
if (marked_cells_json) {
    marked_cells = JSON.parse(marked_cells_json)
    marked_cells.forEach(function (cell) {
        var el_cell = document.getElementById(cell);
        el_cell.classList.add('marked');
    });
}

// Function to store which cards are "marked" in LocalStorage
function store_marked_cells() {
    var marked_cells = document.querySelectorAll('.marked');
    var marked_cells_array = [];
    marked_cells.forEach(function (cell) {
        marked_cells_array.push(cell.id);
    });
    localStorage.setItem('marked_cells', JSON.stringify(marked_cells_array));
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
    // Store marked cells in LocalStorage
    store_marked_cells();
    // check for Bingo win condition
    if (is_bingo()) {
        document.querySelectorAll('td').forEach(e => e.classList.add('rotate-out'));
        bingo_sound.play();
        // Clear local storage so they don't play the same game again
        localStorage.clear();
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

// clear localStorage when newBingoCard clicked
document.getElementById('newBingoCard').addEventListener('click', function () {
    // Clear the LocalStorage and reload the page
    localStorage.clear();
    location.reload();
});
