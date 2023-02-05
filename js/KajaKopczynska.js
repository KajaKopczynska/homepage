let button = document.querySelector(".js-button");
let normalFunny = document.querySelector(".js-normalFunny");
let image = document.querySelector(".js-image");
let themeName = document.querySelector(".js-themeName");



button.addEventListener("click", () => {
    normalFunny.classList.toggle("funny");


if (normalFunny.classList.contains("funny")) {
    image.classList.add("js-imageFunny");
    themeName.innerText = "bardziej";
}
else {
    image.classList.remove("js-imageFunny");
    themeName.innerText = "mniej";
}
});




  