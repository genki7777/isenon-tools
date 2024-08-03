import { Island, islands, TRADE_GOOD_NAMES } from "./islandsInfo.js";

function makeHeadline() {
    const div = document.createElement("div");
    div.setAttribute("class", "container");
    const span1 = document.createElement("span");
    span1.innerHTML = "エリア名".padEnd(9, "　");
    const span2 = document.createElement("span");
    span2.innerHTML = "特産品".padEnd(12, "　");
    const span3 = document.createElement("span");
    span3.innerHTML = "　品薄"
    div.appendChild(span1);
    div.appendChild(span2);
    div.appendChild(span3);
    return div;
}

/**
 * 
 * @param {Island} island 
 * @returns 
 */

function makeContainer(island) {
    const div = document.createElement("div");
    div.setAttribute("class", "container");
    const span1 = document.createElement("span");
    span1.innerHTML = island.name.padEnd(9, "　");
    const span2 = document.createElement("span");
    span2.innerHTML = island.speciality.padEnd(12, "　");
    const select = document.createElement("select");
    const keys = Object.keys(TRADE_GOOD_NAMES);
    select.appendChild(makeOption(-1, "-"));
    keys.forEach((key, i) => {
        select.appendChild(makeOption(i, TRADE_GOOD_NAMES[key]));
    })
    select.addEventListener("change", () => {
        island.shortage = TRADE_GOOD_NAMES[keys[select.value]];
    })
    div.appendChild(span1);
    div.appendChild(span2);
    div.appendChild(select);
    return div;
}

function makeOption(value, text) {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = text;
    return option;
}

const verticalContainer = document.getElementById("vertical-container");
verticalContainer.appendChild(makeHeadline());
islands.forEach((island) => {
    verticalContainer.appendChild(makeContainer(island));
})