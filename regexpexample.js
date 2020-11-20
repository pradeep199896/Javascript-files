function myfunc(str){
var comp="aeiou";
var i;
if(str.lenghth<2)
{
    console.log("Please increse the string length");
}
else{
    for(i=0;i<5;i++)
    {
        if(str[str.lenghth-1]==comp[i] && str[0]==comp[i])
        {
            return true; 
     }
     else{
         return false;
        }
    }
    }
    }
    console.log(myfunc("a"));
    var name="pradeep";
    arr=name.split("")
    arr.reverse()
    try{
        throw "expection";
        console.log(arr.join("")); 
    }
    catch(err){
        console.log(name);
  
    }

    
