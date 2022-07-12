var x = document.getElementById("firstnum").value

function increment() {
     x++
    return document.getElementById('firstnum').value=x
}
function decrement(){
    if(x>0){
    x--
    return document.getElementById("firstnum").value = x
}
    x=0
}

var y = document.getElementById("secondnum").value
function increment1(){
    y++
    return document.getElementById('secondnum').value=y
}
function decrement1(){
    if(y>0){
    y--
    return document.getElementById("secondnum").value = y
}
    y=0
}

var z = document.getElementById("thirdnum").value
function increment2(){
    z++
    return document.getElementById('thirdnum').value=z
}
function decrement2(){
    if(z>0){
    z--
    return document.getElementById("thirdnum").value = z
}
    z=0
}
var sum = document.getElementById("total").innerText
$(document).ready(function(){
    $("#buttonsfirst, #buttonssecond, #buttonsthird").click(function(){
    var quantity = document.getElementById("firstnum").value
    var price = document.getElementById("priceone").innerText
    var quantite = document.getElementById("secondnum").value
    var prix = document.getElementById("pricetwo").innerText
    var quantitee = document.getElementById("thirdnum").value
    var somme = document.getElementById("pricethree").innerText
    sum = (Number(price)*Number(quantity))+(Number(prix)*Number(quantite))+(Number(somme)*Number(quantitee))
    return document.getElementById("total").innerText=sum+""
})
})
function favourite(x) {
    if(document.getElementById(x).style.color = "white"){
    return document.getElementById(x).style.color = "red"
    }
    return document.getElementById(x).style.color = "white"
}