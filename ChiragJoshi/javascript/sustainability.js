
let btntotop = document.querySelector("#btntotop");

btntotop.addEventListener("click", function () {
    window.scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth"
    });
});
