const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

input.addEventListener("input", () => {
    const value = document.querySelector("#font-size-control").value
    text.style.fontSize = value + 'px';
});