var props=function(name,model,range,speed)
{
    this.name=name;
    this.model=model;
    this.range=range;
    this.speed=speed;
}
var obj=new props("pradeep","456SA",456,78945);
console.log(typeof props)
/*console.log(obj);

props.prototype.language="Hindi";
console.log(obj.language);*/
//prototype property add up properties and methods to object.
props.prototype.name1=function(){
    return this.name+" "+ this.model;
}
console.log(obj.name1())