const list = document.getElementsByClassName("table table-hover")[0].querySelector("tbody");

const addBtn = document.getElementById("styled-button");
const clearBtn = document.getElementById("clear-button");

const nameBox = document.getElementById("name");
const priceBox = document.getElementById("price");
const rowBox = document.getElementById("row");
const placeBox = document.getElementById("place");

const searchBox = document.getElementById("search");

let removed = [];

function tableSearch() {
    var phrase = document.getElementById('search');
    var table = document.getElementById('info-table');
    var regPhrase = new RegExp(phrase.value, 'i');
    var flag = false;
    for (var i = 1; i < table.rows.length; i++) {
        flag = false;
        for (var j = table.rows[i].cells.length - 1; j >= 0; j--) {
            flag = regPhrase.test(table.rows[i].cells[j].innerHTML);
            if (flag) break;
        }
        if (flag) {
            table.rows[i].style.display = "";
        } else {
            table.rows[i].style.display = "none";
        }

    }
}
function addItem(text, type, toLast, innrhtml = "") {
    let item = document.createElement(type);
    item.innerText = text;
    if (innrhtml != "")
    {
        item.innerHTML = innrhtml;
        item.firstChild.addEventListener('click', function handleClick(event) {
            removed.splice(removed.indexOf(item.parentElement));
            list.removeChild(item.parentElement);
          });
        item.firstChild.value = "X";
    }
    if (toLast) {
        list.lastChild.appendChild(item);
    } else {
        list.appendChild(item);
    }
}
addBtn.onclick = () => {
    if (nameBox.value != "" &&
        priceBox.value != "" &&
        rowBox.value != "" &&
        placeBox.value != "") {
        addItem("", "tr", false);
        addItem(nameBox.value, "td", true);
        addItem(priceBox.value, "td", true);
        addItem(rowBox.value, "td", true);
        addItem(placeBox.value, "td", true);
        addItem("", "td", true, "<input type=\"button\" class=\"btn btn-danger\"></input>");

        buffer = list;
        onin();
    }
}

clearBtn.onclick = () => {
    list.innerHTML = "";
}