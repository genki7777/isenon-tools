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

function setNextIslands() {
    islands.forEach(sIsland => {
        sIsland.nextIslands = [];
        islands.forEach(eIsland => {
            if (sIsland.speciality === eIsland.shortage) {
                sIsland.nextIslands.push(eIsland);
            }
        })
    })
}

function samePath(path1, path2) {
    return new Set(path1).size === new Set(path2).size &&
        [...new Set(path1)].every(item => new Set(path2).has(item));
}

function getPaths() {
    const allPath = [];
    const res = [];
    islands.forEach((island) => {
        island.nextIslands.forEach((next) => {
            const path = [];
            path.push(island);
            path.push(next);
            allPath.push(path);
        })
    })
    while (allPath.length > 0) {
        const path = allPath.shift();
        const now = path[path.length - 1];
        now.nextIslands.forEach((next) => {
            let flag1 = false;
            for (let i = 0; i < path.length; i++) {
                if (path[i] === next) {
                    const resPath = path.slice(i);
                    resPath.push(next);
                    let flag2 = false;
                    res.forEach((r) => {
                        if (samePath(r, resPath)) {
                            flag2 = true;
                        }
                    })
                    if (!flag2) {
                        res.push(resPath);
                    }
                    flag1 = true;
                    break;
                }
            }
            if (!flag1) {
                const copy = [...path];
                copy.push(next);
                allPath.push(copy);
            }
        })
    }
    return res;
}

const verticalContainer = document.getElementById("vertical-container");
verticalContainer.appendChild(makeHeadline());
islands.forEach((island) => {
    verticalContainer.appendChild(makeContainer(island));
})

const getPathsButton = document.createElement("button");
getPathsButton.textContent = "周回ルート検索";
getPathsButton.onclick = () => {
    resDiv.innerHTML = "";
    setNextIslands();
    const res = getPaths();
    if (res.length === 0) {
        const span = document.createElement("span");
        span.innerHTML = "経路が見つかりませんでした";
        resDiv.appendChild(span);
    } else {
        res.forEach((r) => {
            const span = document.createElement("span");
            span.innerHTML = r.map(island => island.name).join(" -> ");
            resDiv.appendChild(span);
        })
    }
}
verticalContainer.appendChild(getPathsButton);
const resDiv = document.createElement("div");
resDiv.id = "resDiv";
verticalContainer.appendChild(resDiv);