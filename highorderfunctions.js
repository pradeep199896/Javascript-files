/*function sendMessage(start,end,change)
{
   for(let i=start;i<=end;++i)
   {
       change(i)
   }

}
var ar=[]
function check(k)
{
 
    k%2==0?ar.push(k):null
    console.log(k)
}
sendMessage(20,36,check)
console.log(ar)
*/
/*function jack(name,clas)
{
  console.log(name)
  clas(name)
}
jack("pradeep",(sur)=>{console.log("my name is "+sur)})
*/
function check(num)
{
    return mul=>{
        return num*mul
    }
}
let find=check(5)
console.log(find(3))