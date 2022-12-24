var count = 0;
let seveEl = document.getElementById("saveh");
let counts = document.getElementById("counting");

function increments(){ 
    count +=1;
    document.getElementById("counting").innerText = count;
    console.log(count);
            

}
function decrements(){
    count = count - 1;
    document.getElementById("counting").innerText = count;
}
function clearData(){
    //count = count-count;
    document.getElementById("counting").innerText = 0;
    console.log(count);
}
let c = 0;

function save(){
    let countstr = count + "   -,  ";
    document.getElementById("saveh").textContent += countstr;  
}