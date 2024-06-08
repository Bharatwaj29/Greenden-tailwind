var side=document.getElementById("sidenav")
var menu=document.getElementById("menu")
var close=document.getElementById("close")

menu.addEventListener("click",function(){
    side.style.right=0
})

close.addEventListener("click",function(){
    side.style.right="-50%"
})