/*var name,index,last,sea;
name="hey he is good.But good is only a acting";
index=name.indexOf("good",18);
console.log(index);
last=name.lastIndexOf("good",15);
console.log(last);
sea=name.search("good");
console.log(sea);*/
var fruites,ext;
fruites="Apples, banana, kiwi";
/*ext=fruites.slice(8,14);
ext=fruites.slice(8);
ext=fruites.slice(-5,0);
console.log(ext);
*/
/*ext=fruites.substring(8,14);
console.log(ext);*/
/*ext=fruites.substr(2,4);
console.log(ext);*/
/*var name="     Hello                world              ";
var tr=name.trim();*/
var name="Hello World";
var sear,index;
sear=name.charCodeAt(4);
console.log(sear);
console.log(name[0])
var arr,i,text="";
arr=name.split("");
for(i=0;i<(arr.length);++i)
{
text=text+arr[i]+'\n';

}
console.log(text);


