const input1 = document.getElementById("input1")
const input2 = document.getElementById("input2")
const alert = document.getElementById("alert")
const amount =document.getElementById("amount")
const total = document.getElementById("total")

function grid1(){
    
    if(input2.value == "0"){
        input2.style.border = "1px solid red"
        alert.innerHTML =" Can't be zero"
    }
    let person =input1.value /input2.value
    let yuzde5 = person * 0.05
    amount.innerHTML = yuzde5.toFixed(2)
    total.innerHTML = (person+yuzde5).toFixed(2)
}
function grid2(){
    
    if(input2.value == "0"){
        input2.style.border = "1px solid red"
        alert.innerHTML =" Can't be zero"
    }
    let person =input1.value /input2.value
    let yuzde10 = person * 0.1
    amount.innerHTML = yuzde10.toFixed(2)
    total.innerHTML = (person+yuzde10).toFixed(2)
}
function grid3(){
    
    if(input2.value == "0"){
        input2.style.border = "1px solid red"
        alert.innerHTML =" Can't be zero"
    }
    let person =input1.value /input2.value
    let yuzde15 = person * 0.15
    amount.innerHTML = yuzde15.toFixed(2)
    total.innerHTML = (person+yuzde15).toFixed(2)
}
function grid4(){
    
    if(input2.value == "0"){
        input2.style.border = "1px solid red"
        alert.innerHTML =" Can't be zero"
    }
    let person =input1.value /input2.value
    let yuzde25 = person * 0.25
    amount.innerHTML = yuzde25.toFixed(2)
    total.innerHTML = (person+yuzde25).toFixed(2)
}
function grid5(){
    
    if(input2.value == "0"){
        input2.style.border = "1px solid red"
        alert.innerHTML =" Can't be zero"
    }
    let person =input1.value /input2.value
    let yuzde50 = person * 0.5
    amount.innerHTML = yuzde50.toFixed(2)
    total.innerHTML = (person+yuzde50).toFixed(2)
}

function reset(){
    input1.value = "0"
    input2.value = "0"
    amount.innerHTML = "0.00"
    total.innerHTML = "0.00"
}