const display = document.getElementById('display')
function show(x){
    display.value += x
}
function calc(){
    display.value = eval(display.value)
}
function sil(){
    display.value =''
}
function minusplus(){
    display.value = display.value > 0 ? `- ${display.value}` : Math.abs(display.value)
}