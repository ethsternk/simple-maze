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

const mapArray = [];

for (let i = 0; i < map.length; i++) {
    mapArray.push([]);
    mapArray[i].push(...map[i].split(""));
}

let topPos = 360;
let leftPos = 0;
const dude = document.getElementById("dude");
let currentRow = 9;
let currentPos = 0;

function createDiv(type) {
    const newDiv = document.createElement("div");
    newDiv.className = "cell " + type;
    document.getElementById("container").appendChild(newDiv);
}

for (let i = 0; i < mapArray.length; i++) {
    for (let y = 0; y < mapArray[i].length; y++) {
        if (mapArray[i][y] === "W") {
            createDiv("wall");
        }
        if (mapArray[i][y] === " " || mapArray[i][y] === "S") {
            createDiv("floor");
        }
        if (mapArray[i][y] === "F") {
            createDiv("finish");
        }
    }
}

document.addEventListener("keydown", event => {
    const key = event.key;

    if (key === "ArrowRight" && mapArray[currentRow][currentPos + 1] === " ") {
        leftPos += 40;
        dude.style.left = leftPos + "px";
        mapArray[currentRow][currentPos + 1] = "S";
        mapArray[currentRow][currentPos] = " ";
        currentPos++;
    }
    if (key === "ArrowUp" && mapArray[currentRow - 1][currentPos] === " ") {
        topPos -= 40;
        dude.style.top = topPos + "px";
        mapArray[currentRow - 1][currentPos] = "S";
        mapArray[currentRow][currentPos] = " ";
        currentRow--
    }
    if (key === "ArrowLeft" && mapArray[currentRow][currentPos - 1] === " ") {
        leftPos -= 40;
        dude.style.left = leftPos + "px";
        mapArray[currentRow][currentPos - 1] = "S";
        mapArray[currentRow][currentPos] = " ";
        currentPos--;
    }
    if (key === "ArrowDown" && mapArray[currentRow + 1][currentPos] === " ") {
        topPos += 40;
        dude.style.top = topPos + "px";
        mapArray[currentRow + 1][currentPos] = "S";
        mapArray[currentRow][currentPos] = " ";
        currentRow++
    }
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