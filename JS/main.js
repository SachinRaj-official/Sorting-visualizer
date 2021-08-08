var inputArraySize= document.getElementById('array__size'),array__size=inputArraySize.nodeValue;
var inputGenerate= document.getElementById('array_generate');
var inputSpeed= document.getElementById('array__speed');


var button__Algorithm = document.querySelectorAll("algorithmNames button");

var div_sizes=[];
var divs=[];
var margin_size;
var cont= document.getElementById("array__Container");
cont.style="flex-direction:row";

inputGenerate.addEventListener("click",generate__Array);
inputArraySize.addEventListener("input",updated__Array);

function generate__Array(){
    cont.innerHTML="";
    for(var i=0;i<array__size;i++)
    {
        div_sizes[i]=Math.floor(Math.random()*0.5*(inputArraySize.max - inputArraySize.min))+10;
        divs[i]=document.createElement("div");
        cont.appendChild(divs[i]);
        margin_size=0.1;
        divs[i].style=" margin:0% " + margin_size + "%; background-color:blue; width:" + (100/array_size-(2*margin_size)) + "%; height:" + (div_sizes[i]) + "%;";
    }

}
function updated__Array(){
    array__size=inputArraySize.Value;
    generate__Array();
}
window.onload=updated__Array();



//Ruuning the Correct Algorithm
for(var i=0;i<button__Algorithm.length;i++)
{
    button__Algorithm[i].addEventListener("click",run__Algo);
}

function disable__Button()
{
    for(var i=0;i<button__Algorithm.length;i++)
    {
        button__Algorithm[i].classList=[];
        button__Algorithm[i].classList.add("butt_locked");
        button__Algorithm[i].disabled=true;
        inputArraySize.disabled=true;
        inputGenerate.disabled=true;
        inputSpeed.disabled=true;
    }
}

function run__Algo() {
    disable__Button();
    this.classList.add("butt_selected");
    switch(this.innerHTML)
    {
        case "Bubble":Bubble();
                        break;
        case "Selection":Selection_sort();
                        break;
        case "Insertion":Insertion();
                        break;
        case "Merge":Merge();
                        break;
        case "Quick":Quick();
                        break;
        case "Heap":Heap();
                        break;
    }
    
}

