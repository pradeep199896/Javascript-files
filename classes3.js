class Car{
    constructor(name,year)
    {
        this.name=name;
        this.year=year;
    }
    getyear()
    {
        var dat=new Date();
        return dat.getFullYear()-this.year;
    }
}
var det=new Car("chintu",2011)
console.log("My car that is",det.name,"is about",det.getyear(),"years old");