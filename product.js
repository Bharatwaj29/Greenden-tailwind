var product = document.getElementById("product")
var search = document.getElementById("search")
var productlist = product.querySelectorAll("div")

search.addEventListener("keyup", function () {
    var entered = event.target.value.toUpperCase()
    for (count = 0; count < productlist.length; count = count + 1) {
        var name = productlist[count].querySelector("h1").textContent
        if (name.toUpperCase().indexOf(entered) < 0) {
            productlist[count].style.display = "none"
        }
        else {
            productlist[count].style.display = "block"
        }
    }
})



var side = document.getElementById("sidenav")
var menu = document.getElementById("menu")
var close = document.getElementById("close")

menu.addEventListener("click", function () {
    side.style.right = 0
})

close.addEventListener("click", function () {
    side.style.right = "-50%"
})