The output of the code will 0.
<br>
This is happening because when we call this line ```const[increment,log] =createIncrement();``` all the lines of code in the function ```createIncrement()``` gets executed.
<br>
So, when we run ```increment();``` the value of count is getting updated but the updated value is not getting reflected on the ```message``` variable.
<br>
So when we call the ```log();``` function it shows us the original value of ```message``` variable.
<br>
But if the variable ```message``` was to get initialised inside the ```log();``` function the output would be 3
