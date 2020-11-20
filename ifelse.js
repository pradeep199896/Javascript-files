//syntax for if statement
if(false)
{
    console.log("I am in if block");
}
else if(false)
{
    console.log("I am in if else block");
}
else{
    console.log("I am in else block");
}
//Let understand with examplle

let whoishere="pradeep"; //similar to "var" i.e "let"
if(whoishere=="user")
{
    console.log("welocme back user");
    console.log("Allow acess to my courses");

}
else if(whoishere=="Teacher")
{
    console.log("welocme back user");
    console.log("Allow acess to my courses");
}
else{
    console.log("unauthorized access");
    console.log("if student register as user and if teacher register as Teacher");
}

//Grade problem
var actualmarks=8;
if(actualmarks==10)
{
    console.log("Excellent");
}
else if(actualmarks>5 && actualmarks<10)
{
    console.log("GOOD");
}
else if(actualmarks>=3 && actualmarks<=5)
{
    console.log("Work hard");
}
else{
    console.log("Fail exam");
}