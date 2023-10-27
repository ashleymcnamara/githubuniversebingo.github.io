var card_titles = [
    "Certification Talk",
    "Custom Model Talk",
    "LLM Deep Dive",
    "Human-Centric DevEx",
    "Collaboration Symphony",
    "GitHub Sponsors Mention",
    "Breaking Silos",
    "Happy Devs & Code",
    "Automation Talk",
    "Code for Tomorrow Mention",
    "AI Paradox",
    "Enterprise or Starship?",
    "Open Source Mention",
    "Accessibility for All",
    "Dogfooding Talk",
    "Monorepo Mention",
    "Rapid Q&A",
    "Pop Culture Reference",
    "No-Code / Low Code Talk",
    "Mediation Time",
    "More Coffee Mention",
    "Microservices Magic",
    "Serverless Talk",
    "Legacy Code Wisdom",
    "Time Zones Unite",
    "DevEx Talk",
    "Security Talk",
    "Customization Galore",
    "Improv Opportunity",
    "Buzzword Poetry",
    "Open Source Stories",
    "GitHub Stars Mention",
    "AI Reality Check",
    "Ethical AI",
    "AI Bingo-ception",
    "AI Security Hero",
    "Code Scanning Cheers",
    "Slide Ballet",
    "Unified Laughter",
    "MONA SIGHTING",
    "Font Size Test",
    "Dr. Who Wisdom",
    "Bow Tie Sighting",
    "GitHub Down Irony",
    "COMDEX Veteran",
    "Wi-Fi Meditation",
    "'90s Hacker Cosplay",
    "Slides vs Reality",
    "PowerPoint Palate",
    "Demo Crash Applause",
    "Forced Applause",
    "Polite Applause",
    "No Dance Moves",
    "Hug or Fist Bump?",
    "Awkward High-Five",
    "Late Hubber",
    "Vibram Sighting",
    "Patagonia Vest",
    "Sticker Laptop",
    "Lone Suit",
    "Acronym Overload",
    "Transition Chaos",
    "Nostalgic Tangent",
    "Captioning Lag",
    "User Comment Drama",
    "Tab Share Peek",
    "Awkward Dance",
    "Action Overload",
    "Pages Puzzle",
    "PR Prayers",
    "Markdown Spotlight",
    "Dependabot Diva",
    "It Worked On My Machine",
    "Gist Showcase",
    "Repo Revelations",
    "Community Bonds",
    "Scanning Success",
    "Issues Insight",
    "CLI Mastery"
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
            el_cell.innerHTML = 'Free<br /><br /><br /><br />Space';
            el_cell.classList.add('marked', 'marked-free');
        } else {
            const text = card_titles_shuffled.pop();
            const [prefix, postfix] = text.split(": ");
            // Style the text before and after the colon
            el_cell.innerHTML = `<span style='font-weight:bold; color:white;'>${prefix || ""}</span>` +
                (postfix ? `: <span style='color:#4ac26b;'>${postfix}</span>` : "");
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