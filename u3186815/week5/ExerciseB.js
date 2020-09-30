var testgrid = 3;
var testtime = 7;
testgrid = window.prompt("Grid Value")
var message = "Time to boil the kettle";

var sunrise = 6;
var sunset = 18;
var gridPower = testgrid;
var currentTime = testtime;
while (currentTime >sunrise && currentTime < sunset){
    if(gridPower<0){
        document.write(message)
        break;
    }
    currentTime++;
    gridPower--;
    document.write(currentTime + " "+ gridPower +"<br/>");
}