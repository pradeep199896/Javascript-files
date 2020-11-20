var x="";
try{
if(x>20) throw "large num";
if(x=="") throw "no numbre";
}
catch(err){
    console.log(err);
}
var x;
try{
    x=y/"apple";
}
catch(err)
{
    console.log(" Find error:",err.name);
}
num=1;
try{
    console.log(num.toUpperCase());
}
catch(err){
console.log("TYPE OF ERROR:",err.name);
}
try{
    "alert('Hello)"; 
}
catch(err){
    console.log("ERROR IS:",err.name);

}
/*num2=50;
add=myfunc(5,6)
console.log(num2);
var num2;
console.log(add);
function myfunc(x,y){
    return x+y
}*/
"use strict";
o="pradeep";
console.log(o)