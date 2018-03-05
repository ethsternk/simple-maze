// map array

const map = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "W   W     W     W W W",
    "W W W WWW WWWWW W W W",
    "W W W   W     W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW W W",
    "W W   W   W W     W W",
    "W WWWWW W W W WWW W F",
    "S     W W W W W W WWW",
    "WWWWW W W W W W W W W",
    "W     W W W   W W W W",
    "W WWWWWWW WWWWW W W W",
    "W       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW"
];

// make a new map with nested arrays

const mapArray = [];

for (let i = 0; i < map.length; i++) {
    mapArray.push([]);
    mapArray[i].push(...map[i].split(""));
}

// declare some variables for later

let topPos = 360;
let leftPos = 0;
const dude = document.getElementById("dude");
let currentRow = 9;
let currentPos = 0;

// function that adds the maze sections to HTML

function createDiv(type) {
    const newDiv = document.createElement("div");
    newDiv.className = type;
    document.getElementById("container").appendChild(newDiv);
}

// create maze in HTML

for (let i = 0; i < mapArray.length; i++) {
    for (let y = 0; y < mapArray[i].length; y++) {
        if (mapArray[i][y] === "W") {
            createDiv("cell wall");
        }
        if (mapArray[i][y] === " " || mapArray[i][y] === "S") {
            createDiv("cell floor");
        }
        if (mapArray[i][y] === "F") {
            createDiv("cell finish");
        }
    }
}

// key handler

document.addEventListener("keydown", event => {
    const key = event.key;

    // move right
    if (key === "ArrowRight" && mapArray[currentRow][currentPos + 1] === " ") {
        leftPos += 40;
        dude.style.left = leftPos + "px";
        mapArray[currentRow][currentPos + 1] = "S";
        mapArray[currentRow][currentPos] = " ";
        currentPos++;
    }

    // move up
    if (key === "ArrowUp" && mapArray[currentRow - 1][currentPos] === " ") {
        topPos -= 40;
        dude.style.top = topPos + "px";
        mapArray[currentRow - 1][currentPos] = "S";
        mapArray[currentRow][currentPos] = " ";
        currentRow--
    }

    // move left
    if (key === "ArrowLeft" && mapArray[currentRow][currentPos - 1] === " ") {
        leftPos -= 40;
        dude.style.left = leftPos + "px";
        mapArray[currentRow][currentPos - 1] = "S";
        mapArray[currentRow][currentPos] = " ";
        currentPos--;
    }

    // move right
    if (key === "ArrowDown" && mapArray[currentRow + 1][currentPos] === " ") {
        topPos += 40;
        dude.style.top = topPos + "px";
        mapArray[currentRow + 1][currentPos] = "S";
        mapArray[currentRow][currentPos] = " ";
        currentRow++
    }

    // win and reset
    if (key === "ArrowRight" && mapArray[currentRow][currentPos + 1] === "F") {
        leftPos += 40;
        dude.style.left = leftPos + "px";
        setTimeout(function(){
            alert("You did it! Congratulations!");
            mapArray[currentRow][currentPos] = " ";
            currentRow = 9;
            currentPos = 0;
            topPos = 360;
            leftPos = 0;
            dude.style.left = leftPos + "px";
            dude.style.top = topPos + "px";
            mapArray[9][0] = "S";
        }, 10);
    }
});