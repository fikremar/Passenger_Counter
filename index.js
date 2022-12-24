let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
var count =0;
let increments = document.getElementById("counter");
//console.log(increment)
function increment(){
    count +=1;
    increments.innerText = count;
    console.log(count)
}
function save(){
    // console.log(count);
    let countStr = count + " -";
    saveEl.innerText += countStr;
    
}
function clear(){
    count = 0;
}