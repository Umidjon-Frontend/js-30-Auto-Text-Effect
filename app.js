const displayText = document.querySelector(".text span");
const input = document.querySelector("input");


const arrText = [
    "Frontend Developer",
    "Backend Developer",
    "FullStack Developer",
];

let idx = 1;
let count = 0;
let speed = 300 / input.value;

typeText();
function typeText() {
    displayText.innerHTML = arrText[count].slice(0, idx);

    idx++;

    if (idx > arrText[count].length) {
        idx = 1;
        count++;
        if (count > arrText.length - 1) {
            count = 0;
        }
    }

    setTimeout(typeText, speed);
}

input.addEventListener("input", (e) => (speed = 300 / e.target.value));
