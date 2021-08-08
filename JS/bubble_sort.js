function Bubble()
{
    c_delay=0;

    for(var i=0;i<array__size-1;i++)
    {
        for(var j=0;j<array__size-i-1;j++)
        {
            div_update(divs[j],div_sizes[j],"yellow");//Color update

            if(div_sizes[j]>div_sizes[j+1])
            {
                div_update(divs[j],div_sizes[j], "#D83A56");//Color update
                div_update(divs[j+1],div_sizes[j+1], "#D83A56");//Color update

                var temp=div_sizes[j];
                div_sizes[j]=div_sizes[j+1];
                div_sizes[j+1]=temp;

                div_update(divs[j],div_sizes[j], "#D83A56");//Height update
                div_update(divs[j+1],div_sizes[j+1], "#D83A56");//Height update
            }
            div_update(divs[j],div_sizes[j], "blue");//Color updat
        }
        div_update(divs[j],div_sizes[j], "#66DE93");//Color update
    }
    div_update(divs[0],div_sizes[0], "#66DE93");//Color update

    enable_buttons();
}
