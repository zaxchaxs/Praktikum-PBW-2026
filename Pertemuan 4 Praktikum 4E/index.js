const title = document.getElementById("title");

const myBtn = document.getElementById("btn");
myBtn.addEventListener("click", function () {
    title.textContent = "Title updated"
})

title.addEventListener("mouseenter", function () {
    title.classList.add("bg-blue")
})