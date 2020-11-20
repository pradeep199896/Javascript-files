var arr=["carrom","Chess","tabletenis","busines","tv"];
var tex="";
arr.forEach(myfunc);
function myfunc(index)
{
tex=tex+index+"\n"
}
console.log(tex);
var num=[5,4,18,8,2,15,32];
var nnum=num.map(myfunci);
function myfunci(values,index,array)
{
return values*2
}
console.log(nnum);
var gret=num.filter(myfu);
function myfu(value,index,array)
{
    return value>10
}
console.log(gret);
var add=num.reduce(mye);
var tot=0;
function mye(tot,value,index)
{
tot=tot+value;
return tot;
}
console.log(add);
var ev=num.every(eve);
function eve(value,index)
{
    return value>1;
}
console.log(ev);
var so=num.some(sow);
function sow(value,index)
{
    return value>10
}
console.log(so);
var fin=num.find(findo);
function findo(value,index)
{
    return value>7;
}
console.log(fin);
var findinde=num.findIndex(fins);
function fins(value,index)
{
    return value>7;
}
console.log(findinde);