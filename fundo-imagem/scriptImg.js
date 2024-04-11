const topDiv = document.getElementById("top");
const middleDiv = document.getElementById("middle");
const bottomDiv = document.getElementById("bottom");

const topImg = document.getElementById("topImg");
const middleImg = document.getElementById("middleImg");
const bottomImg = document.getElementById("bottomImg");

const colorThief = new ColorThief();


if (topImg.complete) {
    topDiv.setAttribute("style", `background: rgb(${colorThief.getColor(topImg)})`);
  } else {
    topImg.addEventListener('load', function() {
      topDiv.setAttribute("style", `background: rgb(${colorThief.getColor(topImg)})`);
    });
}
if (middleImg.complete) {
    middleDiv.setAttribute("style", `background: rgb(${colorThief.getColor(middleImg)})`);
  } else {
    middleImg.addEventListener('load', function() {
      middleDiv.setAttribute("style", `background: rgb(${colorThief.getColor(middleImg)})`);
    });
}
if (bottomImg.complete) {
    bottomDiv.setAttribute("style", `background: rgb(${colorThief.getColor(bottomImg)})`);
  } else {
    bottomImg.addEventListener('load', function() {
      bottomDiv.setAttribute("style", `background: rgb(${colorThief.getColor(bottomImg)})`);
    });
}
