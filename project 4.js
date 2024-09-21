var image=document.querySelector(".f")
var counter = 13;
setInterval(function () {
    counter++;
    if (counter == 15) {
        counter = 13;
    }
    image.src = "./p4." + counter + ".png";
}, 5000);
console.log("hi")
// [7]