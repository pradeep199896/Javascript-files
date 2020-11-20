/*class Car{
    constructor(name,color,year)
    {
        this.name=name;
        this.color=color;
        this.year=year
    }
    any(){
        return `My car name is ${this.name} and color is ${this.color}.`
}
age(){
    var date=new Date()
    return date.getFullYear()-this.year;
}
}
var akite=new Car("BMW","RED",2016);
console.log(akite);
console.log(akite.any());
console.log(akite.age());*/
//Keeping arguments in class method
class Car
{
    constructor(name,color,year)
    {
        this.name=name;
        this.color=color;
        this.year=year;
    }
    any(){
        return `My car name is ${this.name} and color is ${this.color}.`
}
age(x){
    return x-this.year
}
}
var obj2=new Car("parddep","pink",2016);
var date1=new Date();

console.log(obj2.age(date1.getFullYear()));
var name="Pradeep Kumar"
var s=name.split(" ");
console.log(s);