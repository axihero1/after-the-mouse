let box = document.querySelector(".box")
let body = document.querySelector("body")

//after the mouse *****************
// window.addEventListener("mousemove", function (e) {
//         console.log(e.screenY, e.screenX);
//         console.log(e.screenX, e.screenY);
//         box.style.top = `${e.screenY - 120}px`
//         box.style.left = `${e.screenX - 20}px`
// })


//screen to where it is pressed ****************:
window.addEventListener("click", function (e) {
    let box = document.querySelector(".box")
    console.log(e.screenY, e.screenX);
    console.log(e.screenX, e.screenY);
    box.style.top = `${e.screenY - 120}px`
    box.style.left = `${e.screenX - 20}px`
})
