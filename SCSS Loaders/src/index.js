import style from "./index.scss";

import "./ClearButton";
import _ from "lodash";



console.log("=====", style)

const btn1 = document.getElementById("button1")


document.getElementById("button1").addEventListener("click", function () {
  const element = document.getElementById("header");
  element.innerHTML = "Hello World!";

  const listItems = ["Apple", "Orange", "banana"];
  const ul = document.getElementById("shoppinglist");
  _.forEach(listItems, function (item) {
    const tempElement = document.createElement("li");
    tempElement.innerHTML = item;
    ul.appendChild(tempElement);
  });
});

btn1.classList.add(style.button)
//all the global styles reove from the style oobject
// btn1.classList.add(["button"])

