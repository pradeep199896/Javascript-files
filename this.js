/*var obj={
    name:"Pradeep",
    color:"black",
    height:180,
    weight:90,
    combi:function(){
        return this.name+this.color
    }
};
console.log(obj.combi());
var obj2={
    name:"sushma",
    color:"white",
    height:150,
    weight:70,
    combi:function(){
        return this;
    }
};

console.log(obj2.combi());
"use strict"
function myfunc()
{
    return this;
}
console.log(myfunc());
"use strict"
console.log(typeof this);
"use strict"
var x=this;
console.log(x);*/
/*"use strict"
function myfunc()
{
    return this;
}
console.log(typeof(myfunc()));
console.log(typeof(this));*/
function vowelsandconstants(s){
    var sep=s.toLowerCase().split("");
    let i;
    var constants=[];
    for(i=0;i<sep.length;++i)
    {
        var vow="aeiou";
        if(vow.includes(sep[i]))
        {
            console.log(sep[i])
        }
        else{
            constants+=sep[i]+'\n'
        }
        
        }
        console.log(constants);
    }
vowelsandconstants("Javascript loops")
