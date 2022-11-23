import style from "./index.scss";

import "./ClearButton";
import _ from "lodash";

import logo from '../assets/download.png'
import "../assets/fonts/RubikMicrobe-Regular.ttf"
// console.log("=====", style)

const btn1 = document.getElementById("button1")

const logos = document.getElementById("logo")

document.getElementById("button1").addEventListener("click", function () {
  const element = document.getElementById("header");
  element.innerHTML = "Hello World!";
  element.classList.add([style.header])
  const listItems = ["Apple", "Orange", "banana"];
  const ul = document.getElementById("shoppinglist");
  _.forEach(listItems, function (item) {
    const tempElement = document.createElement("li");
    tempElement.innerHTML = item;
    ul.appendChild(tempElement);
  });
});

logos.src= logo

btn1.classList.add(style.button)
//all the global styles reove from the style oobject
// btn1.classList.add(["button"])

