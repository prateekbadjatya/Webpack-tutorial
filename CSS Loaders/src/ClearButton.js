import style from  './clearButton.css'

const element = document.createElement('button')

element.innerHTML = "Clear"

element.onclick = function() {
    alert("Clear Clicked")
}

element.classList.add(style.button)
 document.body.appendChild(element)


