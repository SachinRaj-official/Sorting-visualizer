

var speed=1000;
inputSpeed.addEventListener("input",visual_speed);

function visual_speed(){
    var array_speed=inputSpeed.value;
    switch(parseInt(array_speed))
    {
        case 1: speed=1;
                break;
        case 2: speed=10;
                break;
        case 3: speed=100;
                break;
        case 4: speed=500;
                break;
        case 5: speed=1000;
                break;
    }
    //Decrease numerator to increase speed.
    delay_time=10000/(Math.floor(array__size/10)*speed);
}

//Decrease numerator to increase speed.
var delay_time=10000/(Math.floor(array__size/10)*speed); 
var c_delay=0;//This is updated ov every div change so that visualization is visible.

function div_update(cont,height,color)
{
    window.setTimeout(function(){
        cont.style=" margin:0% " + margin_size + "%; width:" + (100/array_size-(2*margin_size)) + "%; height:" + height + "%; background-color:" + color + ";";
    },c_delay+=delay_time);
}


function enable_buttons()
{
    window.setTimeout(function(){
        for(var i=0;i<button__Algorithm.length;i++)
        {
            button__Algorithm[i].classList=[];
            button__Algorithm[i].classList.add("butt_unselected");
            button__Algorithm[i].disabled=false;

            inputArraySize.disabled=false;
            inputGenerate.disabled=false;
            inputSpeed.disabled=false;
        }
    },c_delay+=delay_time);
}
