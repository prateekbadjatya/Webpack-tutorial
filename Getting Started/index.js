import './index.css'
import _ from 'lodash';
document.getElementById("button1").addEventListener("click", function () {
    const element = document.getElementById("header");
    element.innerHTML = 'Hello World!'
   
    const listItems = ["Apple", "Orange", "banana"]
    const ul = document.getElementById("shoppinglist")
       _.forEach(listItems, function (item) {
       const tempElement = document.createElement("li")
       tempElement.innerHTML = item
       ul.appendChild(tempElement)
       });
})
