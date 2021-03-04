let input = document.createElement('input');
let submit = document.querySelector('.submit');
input.type = "text";
input.className = "css"; // set the CSS class
console.log("gtgerdg")
submit.onclick = function () {
    console.log("rer");
    document.querySelector('form').appendChild(input);
}

