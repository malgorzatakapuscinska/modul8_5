/**
 * 
 */

var a,
	h,
	triangleArea;

var a = prompt('Podaj wysokość trójkąta w cm');
var h = prompt('Podaj długość podstawy trójkata w cm ');

triangleArea = (a * h)/2;

document.getElementById("triangleArea").innerHTML = "Pole trójkata o wymiarah " + "h = " + h + " cm " + "oraz a = " + a + " cm " + "wynosi: " + triangleArea + " cm.";

console.log(triangleArea);