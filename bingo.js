strings = [
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
]
// Main JavaScript code wrapped inside the HTML file

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

// Shuffle the 'strings' array and store it in 'shuffled_strings'
var shuffled_strings = shuffle(strings);

// Initialize and fetch elements from DOM
var el_playcard = document.getElementById('playCard');

// Loop through to create the rows and columns for the Bingo card
for (var row = 0; row < 5; row++) {
var el_row = el_playcard.insertRow(-1);

for (var col = 0; col < 5; col++) {
var el_cell = el_row.insertCell(0);

if (row === 2 && col === 2) {
    el_cell.innerHTML = 'Free<br /><br /><br /><br />Space';
    el_cell.classList.add('marked', 'marked-free');
} else {
    const text = shuffled_strings.pop();
    const [prefix, postfix] = text.split(": ");

    // Style the text before and after the colon
    el_cell.innerHTML = `<span style='font-weight:bold; color:white;'>${prefix || ""}</span>` +
        (postfix ? `: <span style='color:#4ac26b;'>${postfix}</span>` : "");

    el_cell.addEventListener('click', mark_cell, false);
}
}
}

var bingo_counter = 0;
var marked_sound = new Audio('static/sounds/pop.mp3');
var bingo_sound = new Audio('static/sounds/win.mp3');

marked_sound.load();
bingo_sound.load();

// Initialize counters for rows, columns, and diagonals for Bingo checks
var row_count = [0, 0, 1, 0, 0];
var col_count = [0, 0, 1, 0, 0];
var diag_count = [1, 1];

// Function to mark or unmark a cell and check for Bingo win conditions
function mark_cell(event) {
var cell = event.srcElement;
var rowIndex = cell.parentElement.rowIndex;
var colIndex = cell.cellIndex;

// If cell is already marked, unmark it and decrement counters
if (cell.classList.contains('marked')) {
cell.classList.remove('marked');
row_count[rowIndex]--;
col_count[colIndex]--;
if (rowIndex === colIndex) diag_count[0]--;
if (rowIndex + colIndex === 4) diag_count[1]--;
return;
}

// Else mark the cell and update counters
cell.classList.add('marked');
row_count[rowIndex]++;
col_count[colIndex]++;
if (rowIndex === colIndex) diag_count[0]++;
if (rowIndex + colIndex === 4) diag_count[1]++;

// Check for Bingo win conditions
if (row_count.includes(5) || col_count.includes(5) || diag_count.includes(5)) {
document.querySelectorAll('td').forEach(e => e.classList.add('rotate-out'));
bingo_sound.play();
// Reveal the 'Play Again' button after animation ends
setTimeout(() => {
    var play_again = document.getElementById('bingo');
    play_again.classList.add('bounce-in');
    play_again.style.display = 'block';
}, 400);
} else {
// Play the sound for marking a cell
marked_sound.play();
}
}

// Attach click event to cells
document.querySelectorAll('#playCard td').forEach(cell => {
cell.addEventListener('click', mark_cell);
});